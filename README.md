# Calculadora Financeira JR TELECOM

Aplicação Next.js full-stack para cálculo de débitos e multas rescisórias da JR TELECOM.

## Funcionalidades

- **Calculadora de Limpeza**: Calcula débitos de faturas em atraso com juros e multas
- **Calculadora de Multa Rescisória**: Calcula multas por rescisão antecipada e débitos de equipamentos
- **API Serverless**: Toda lógica de cálculo protegida no servidor
- **Interface Moderna**: Design minimalista
- **Responsivo**: Otimizado para diferentes tamanhos de tela

## Tecnologias

- **Next.js 16**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS 4**: Estilização moderna
- **Radix UI**: Componentes acessíveis
- **API Routes**: Lógica serverless protegida

## Estrutura do Projeto

\`\`\`
jr-telecom-calculator/
├── app/
│   ├── api/
│   │   ├── calculate-limpeza/    # API para cálculo de limpeza
│   │   └── calculate-multa/       # API para cálculo de multa
│   ├── globals.css                # Estilos globais e tokens de design
│   ├── layout.tsx                 # Layout principal
│   └── page.tsx                   # Página principal
├── components/
│   ├── fiber-optic-background.tsx # Animação de fundo
│   └── ui/                        # Componentes UI (shadcn)
├── lib/
│   ├── data.ts                    # Dados de planos, multas e equipamentos
│   └── utils.ts                   # Funções utilitárias
├── public/                        # Arquivos estáticos
└── TUTORIAL_DEPLOY.md            # Tutorial completo de deploy
\`\`\`

## Instalação Local

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn ou pnpm

### Passos

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/jr-telecom-calculator.git
cd jr-telecom-calculator
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## Deploy na Vercel

### Método Rápido (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Selecione seu repositório
5. Clique em "Deploy"

A Vercel detectará automaticamente que é um projeto Next.js e configurará tudo.

### Deploy Manual

Consulte o arquivo [TUTORIAL_DEPLOY.md](./TUTORIAL_DEPLOY.md) para instruções detalhadas passo a passo.

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linter

## Configuração

### Variáveis de Ambiente

Este projeto não requer variáveis de ambiente para funcionar. Todas as configurações estão no código.

### Personalização

Para personalizar cores e estilos, edite:
- `app/globals.css` - Tokens de design e cores
- `lib/data.ts` - Dados de planos, multas e equipamentos

## API Routes

### POST /api/calculate-limpeza

Calcula débitos de limpeza com juros e multas.

**Body:**
\`\`\`json
{
  "plano": "string",
  "valorFatura": number,
  "dataVencimento": "YYYY-MM-DD",
  "dataCalculo": "YYYY-MM-DD"
}
\`\`\`

**Response:**
\`\`\`json
{
  "valorOriginal": number,
  "juros": number,
  "multa": number,
  "valorTotal": number,
  "diasAtraso": number,
  "textoResultado": "string"
}
\`\`\`

### POST /api/calculate-multa

Calcula multa rescisória e débitos de equipamentos.

**Body:**
\`\`\`json
{
  "plano": "string",
  "mesesRestantes": number,
  "equipamentos": string[]
}
\`\`\`

**Response:**
\`\`\`json
{
  "multaRescisoria": number,
  "valorEquipamentos": number,
  "valorTotal": number,
  "textoResultado": "string"
}
\`\`\`

## Suporte

Para dúvidas ou problemas:
- Consulte o [TUTORIAL_DEPLOY.md](./TUTORIAL_DEPLOY.md)
- Abra uma issue no GitHub
- Entre em contato com o desenvolvedor

## Licença

Propriedade de JR TELECOM. Todos os direitos reservados.

---

Desenvolvido com Next.js e Vercel. Criado por Vwnnicius
