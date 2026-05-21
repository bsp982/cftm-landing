# CFTM — Landing Page

Site de apresentação do **Circuito Futevôlei Triângulo Mineiro (CFTM)**. Projeto em Angular com build estático, pensado para deploy na [Vercel](https://vercel.com).

[![Instagram](https://img.shields.io/badge/Instagram-@cftm.oficial-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/cftm.oficial/)

## Sobre o projeto

O CFTM é um circuito regional com mais de 14 edições no Triângulo Mineiro. Esta landing page centraliza a presença digital do evento e atende dois públicos principais:

- **Investidores e marcas** — visão do alcance do circuito e contato para patrocínio via WhatsApp
- **Atletas** — ranking individual por categoria, histórico de temporadas e inscrição

## Funcionalidades

| Seção | Descrição |
|-------|-----------|
| **Hero** | Apresentação do circuito, CTAs (inscrição, ranking, patrocínio) e números da temporada |
| **O Circuito** | História e diferenciais do campeonato |
| **Patrocínio** | Benefícios para marcas e contato com a organização |
| **Ranking** | Classificação **individual** por atleta, com abas Masculino/Feminino e categorias |
| **Edições** | Temporadas por ano (2024, 2025, 2026) com etapas, ranking final e patrocinadores |
| **Footer** | Logo, Instagram e e-mail de contato |

### Categorias do ranking

**Masculino:** Principiante · Iniciante · Série C · Série B · Série A  

**Feminino:** Iniciante B · Iniciante A · Série C (Intermediária) · Série B (Avançada)

## Tecnologias

- [Angular 19](https://angular.dev/) (standalone components)
- TypeScript
- SCSS
- Build estático (`ng build`) compatível com Vercel

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado 20+)
- npm

## Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/bsp982/cftm-landing.git
cd cftm-landing

# Instale as dependências
npm install

# Servidor de desenvolvimento
npm start
```

Acesse [http://localhost:4200](http://localhost:4200).

## Scripts disponíveis

| Comando | Ação |
|---------|------|
| `npm start` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção em `dist/cftm-landing/browser` |
| `npm test` | Testes unitários (Karma) |

## Estrutura do projeto

```
src/app/
├── components/          # Header, Hero, About, Investors, Ranking, Editions…
├── data/
│   ├── site.data.ts   # Textos gerais, WhatsApp, destaques de patrocínio
│   ├── rankings.data.ts   # Ranking individual da temporada atual
│   └── seasons.data.ts    # Etapas, patrocinadores e ranking final por ano
└── models/            # Tipos (ranking, temporada)
public/
└── assets/            # Logo e imagens estáticas
```

## Como atualizar o conteúdo

Todo o conteúdo é **estático** (sem backend por enquanto). Edite os arquivos em `src/app/data/`:

| Arquivo | O que alterar |
|---------|----------------|
| `site.data.ts` | Nome, tagline, WhatsApp (inscrição e patrocínio), estatísticas do hero |
| `rankings.data.ts` | Atletas, cidades e pontos do ranking em tempo real (`name`, `city`, `points`) |
| `seasons.data.ts` | Etapas por ano, patrocinadores e rankings finais de cada temporada |

Exemplo de atleta no ranking:

```typescript
{ position: 1, name: 'Joaquim', city: 'Uberlândia', points: 280 }
```

Depois de alterar, rode `npm start` para conferir localmente.

## Deploy na Vercel

1. Faça push deste repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o projeto **bsp982/cftm-landing**.
3. A Vercel detecta Angular automaticamente; o `vercel.json` na raiz já define:
   - comando de build: `npm run build`
   - pasta de saída: `dist/cftm-landing/browser`
   - rewrite para SPA (rotas no cliente)

**Root Directory:** deixe em branco (o repositório já é a raiz do app).

Deploy via CLI:

```bash
npx vercel
```

## Próximos passos (ideias)

- [ ] Integrar ranking com API ou planilha para atualização automática
- [ ] Domínio personalizado (ex.: `cftm.com.br`)
- [ ] Logos dos patrocinadores em vez de lista só com nomes
- [ ] Galeria de fotos por etapa

## Contato

- Instagram: [@cftm.oficial](https://www.instagram.com/cftm.oficial/)
- WhatsApp da organização: configurado em `site.data.ts`

---

Desenvolvido para o **CFTM — Circuito Futevôlei Triângulo Mineiro**.
