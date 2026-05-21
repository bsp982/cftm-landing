const WHATSAPP_NUMBER = '5534984348404';
const WHATSAPP_SPONSOR_MESSAGE =
  'Olá! Tenho interesse em patrocinar o CFTM — Circuito Futevôlei Triângulo Mineiro. Gostaria de saber mais sobre as modalidades de parceria.';

const WHATSAPP_REGISTRATION_MESSAGE =
  'Olá! Gostaria de fazer minha inscrição no CFTM — Circuito Futevôlei Triângulo Mineiro.';

export const SITE = {
  name: 'CFTM',
  fullName: 'Circuito Futevôlei Triângulo Mineiro',
  tagline: 'O maior circuito de futevôlei do Triângulo Mineiro',
  instagram: 'https://www.instagram.com/cftm.oficial/',
  instagramHandle: '@cftm.oficial',
  contactEmail: 'contato@cftm.com.br',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_SPONSOR_MESSAGE)}`,
  whatsappInscricao: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_REGISTRATION_MESSAGE)}`,
  whatsappDisplay: '(34) 98434-8404',
};

export const HERO_STATS = [
  { value: '14+', label: 'Edições realizadas' },
  { value: '500+', label: 'Atletas no circuito' },
];

export const INVESTOR_HIGHLIGHTS = [
  {
    title: 'Alcance regional',
    description:
      'Presença em Uberlândia, Uberaba, Araguari e cidades do Triângulo — público engajado em esporte de praia e lifestyle.',
    icon: 'map',
  },
  {
    title: 'Conteúdo & mídia',
    description:
      'Cobertura em redes, transmissões de finais e material para ativação da marca em cada etapa do circuito.',
    icon: 'media',
  },
  {
    title: 'Público qualificado',
    description:
      'Atletas, torcedores e famílias em eventos ao ar livre — alto tempo de exposição da marca no espaço da arena.',
    icon: 'audience',
  },
  {
    title: 'Legado comprovado',
    description:
      'Mais de uma década de circuito contínuo: credibilidade para patrocínio master, etapas e ativações pontuais.',
    icon: 'trophy',
  },
];

export { RANKING_GROUPS } from './rankings.data';
