# CFTM — Landing Page

Site de apresentação do **Circuito Futevôlei Triângulo Mineiro** (CFTM), em Angular com build estático para deploy na Vercel.

## Desenvolvimento

```bash
cd cftm-landing
npm install
npm start
```

Abra [http://localhost:4200](http://localhost:4200).

## Build de produção

```bash
npm run build
```

Saída em `dist/cftm-landing/browser`.

## Deploy na Vercel

1. Conecte o repositório na Vercel.
2. Defina o **Root Directory** como `cftm-landing` (se o monorepo estiver na raiz do repo).
3. O `vercel.json` já configura o output e o rewrite para SPA.

Ou via CLI, na pasta `cftm-landing`:

```bash
npx vercel
```

## Conteúdo estático

Edite `src/app/data/site.data.ts` para textos gerais. Ranking individual da temporada atual: `src/app/data/rankings.data.ts`. Temporadas (etapas, ranking final e patrocinadores por ano): `src/app/data/seasons.data.ts`. Quando houver API de ranking em tempo real, substitua o array `RANKING_GROUPS` por uma chamada HTTP no `RankingComponent`.

## Instagram oficial

[@cftm.oficial](https://www.instagram.com/cftm.oficial/)
