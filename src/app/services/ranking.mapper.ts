import { RankingApiResponse } from '../models/ranking-api.model';
import { AthleteRanking, CategoryRanking, RankingGender, RankingGroup } from '../models/ranking.model';

const GENDER_LABELS: Record<RankingGender, string> = {
  masculino: 'Masculino',
  feminino: 'Feminino',
  misto: 'Misto',
};

const GENDER_ORDER: RankingGender[] = ['masculino', 'feminino', 'misto'];

const GENDER_PREFIX: Record<RankingGender, RegExp> = {
  masculino: /^masculino\s+/i,
  feminino: /^feminino\s+/i,
  misto: /^misto\s+/i,
};

function resolveGender(categoryName: string): RankingGender {
  const name = categoryName.trim().toLowerCase();
  if (name.startsWith('feminino')) {
    return 'feminino';
  }
  if (name.startsWith('misto')) {
    return 'misto';
  }
  return 'masculino';
}

function categoryLabel(categoryName: string, gender: RankingGender): string {
  const withoutPrefix = categoryName.trim().replace(GENDER_PREFIX[gender], '');
  return withoutPrefix || categoryName.trim();
}

function formatLastUpdated(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function mapStandings(
  athletes: RankingApiResponse['categories'][number]['athletes']
): AthleteRanking[] {
  return athletes.map((athlete) => ({
    position: athlete.position,
    name: athlete.name.trim(),
    points: athlete.points,
  }));
}

export function mapRankingApiToGroups(
  response: RankingApiResponse,
  loadedAt = new Date()
): RankingGroup[] {
  const season = String(loadedAt.getFullYear());
  const lastUpdated = formatLastUpdated(loadedAt);
  const buckets = new Map<RankingGender, CategoryRanking[]>();

  for (const category of response.categories) {
    const gender = resolveGender(category.categoryName);
    const list = buckets.get(gender) ?? [];
    list.push({
      id: String(category.categoryId),
      label: categoryLabel(category.categoryName, gender),
      season,
      lastUpdated,
      standings: mapStandings(category.athletes),
    });
    buckets.set(gender, list);
  }

  return GENDER_ORDER.filter((gender) => buckets.has(gender)).map((gender) => ({
    gender,
    genderLabel: GENDER_LABELS[gender],
    categories: (buckets.get(gender) ?? []).sort((a, b) =>
      a.label.localeCompare(b.label, 'pt-BR')
    ),
  }));
}
