# 📘 Tutorial de Deploy na Vercel - Calculadora JR TELECOM

Este tutorial vai te guiar passo a passo para fazer o deploy da aplicação na Vercel.

## 🎯 Pré-requisitos

Antes de começar, você precisa ter:
- Uma conta no GitHub (gratuita)
- Uma conta na Vercel (gratuita)
- O código da aplicação baixado no seu computador

## 📝 Passo 1: Criar uma Conta no GitHub

1. Acesse [github.com](https://github.com)
2. Clique em **"Sign up"** (Cadastrar-se)
3. Preencha seus dados:
   - Email
   - Senha
   - Nome de usuário
4. Confirme seu email
5. Pronto! Sua conta está criada

## 📤 Passo 2: Subir o Código para o GitHub

### Opção A: Usando a Interface do GitHub (Mais Fácil)

1. Faça login no GitHub
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"** (Novo repositório)
4. Preencha:
   - **Repository name**: `jr-telecom-calculator` (ou outro nome de sua preferência)
   - **Description**: "Calculadora Financeira JR TELECOM"
   - Deixe como **Public** (Público)
   - Marque **"Add a README file"**
5. Clique em **"Create repository"**
6. Na página do repositório, clique em **"Add file"** → **"Upload files"**
7. Arraste todos os arquivos da aplicação para a área de upload
8. Clique em **"Commit changes"**

### Opção B: Usando Git (Para Usuários Avançados)

\`\`\`bash
# 1. Inicialize o repositório Git na pasta do projeto
cd caminho/para/jr-telecom-calculator
git init

# 2. Adicione todos os arquivos
git add .

# 3. Faça o primeiro commit
git commit -m "Initial commit - Calculadora JR TELECOM"

# 4. Conecte ao repositório remoto do GitHub
git remote add origin https://github.com/SEU-USUARIO/jr-telecom-calculator.git

# 5. Envie o código
git branch -M main
git push -u origin main
\`\`\`

## 🚀 Passo 3: Criar uma Conta na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** (Cadastrar-se)
3. Escolha **"Continue with GitHub"** (Continuar com GitHub)
4. Autorize a Vercel a acessar sua conta do GitHub
5. Pronto! Sua conta está conectada

## 🎨 Passo 4: Fazer o Deploy

1. No painel da Vercel, clique em **"Add New..."** → **"Project"**
2. Você verá uma lista dos seus repositórios do GitHub
3. Encontre o repositório `jr-telecom-calculator`
4. Clique em **"Import"** (Importar)
5. Configure o projeto:
   - **Project Name**: `jr-telecom-calculator` (ou deixe o padrão)
   - **Framework Preset**: Next.js (deve ser detectado automaticamente)
   - **Root Directory**: `./` (deixe como está)
   - **Build Command**: `npm run build` (deixe como está)
   - **Output Directory**: `.next` (deixe como está)
6. Clique em **"Deploy"**
7. Aguarde alguns minutos enquanto a Vercel faz o build e deploy
8. 🎉 Pronto! Sua aplicação está no ar!

## 🌐 Passo 5: Acessar sua Aplicação

Após o deploy ser concluído:

1. A Vercel mostrará uma tela de sucesso com confetes 🎊
2. Você verá a URL da sua aplicação, algo como:
   \`\`\`
   https://jr-telecom-calculator.vercel.app
   \`\`\`
3. Clique na URL ou no botão **"Visit"** para abrir sua aplicação
4. Compartilhe essa URL com sua equipe!

## 🔄 Passo 6: Atualizações Futuras

Sempre que você quiser atualizar a aplicação:

### Usando a Interface do GitHub:

1. Acesse seu repositório no GitHub
2. Navegue até o arquivo que deseja editar
3. Clique no ícone de lápis (✏️) para editar
4. Faça suas alterações
5. Clique em **"Commit changes"**
6. A Vercel detectará automaticamente e fará o deploy da nova versão!

### Usando Git:

\`\`\`bash
# 1. Faça suas alterações nos arquivos
# 2. Adicione as mudanças
git add .

# 3. Faça o commit
git commit -m "Descrição das mudanças"

# 4. Envie para o GitHub
git push

# A Vercel fará o deploy automaticamente!
\`\`\`

## ⚙️ Configurações Adicionais (Opcional)

### Domínio Personalizado

1. No painel da Vercel, acesse seu projeto
2. Vá em **"Settings"** → **"Domains"**
3. Clique em **"Add"**
4. Digite seu domínio personalizado (ex: `calculadora.jrtelecom.com.br`)
5. Siga as instruções para configurar o DNS

### Variáveis de Ambiente

Se no futuro você precisar adicionar variáveis de ambiente:

1. No painel da Vercel, acesse seu projeto
2. Vá em **"Settings"** → **"Environment Variables"**
3. Adicione suas variáveis
4. Clique em **"Save"**
5. Faça um novo deploy para aplicar as mudanças

## 🆘 Problemas Comuns

### Erro de Build

Se o deploy falhar:
1. Verifique os logs de erro na Vercel
2. Certifique-se de que todos os arquivos foram enviados corretamente
3. Verifique se o `package.json` está presente

### Página em Branco

Se a página carregar em branco:
1. Abra o Console do navegador (F12)
2. Verifique se há erros de JavaScript
3. Certifique-se de que os arquivos CSS foram carregados

### Cálculos Não Funcionam

Se os cálculos não estiverem funcionando:
1. Verifique se as API routes estão acessíveis
2. Abra o Network tab no Console (F12)
3. Veja se as requisições para `/api/calculate-limpeza` e `/api/calculate-multa` estão retornando 200

## 📞 Suporte

Se você encontrar problemas:
- Consulte a [documentação da Vercel](https://vercel.com/docs)
- Consulte a [documentação do Next.js](https://nextjs.org/docs)
- Entre em contato com o desenvolvedor: Vinícius B.

## ✅ Checklist Final

Antes de considerar o deploy completo, verifique:

- [ ] A aplicação está acessível pela URL da Vercel
- [ ] A Calculadora de Limpeza funciona corretamente
- [ ] A Calculadora de Multa funciona corretamente
- [ ] Os botões de copiar texto funcionam
- [ ] O design está idêntico ao original
- [ ] As tooltips aparecem ao passar o mouse
- [ ] As abas alternam corretamente
- [ ] Os cálculos estão precisos

---

**Parabéns! 🎉** Sua aplicação está no ar e protegida, com toda a lógica de cálculo rodando no servidor!
