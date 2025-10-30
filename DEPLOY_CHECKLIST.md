# Checklist de Deploy - Calculadora JR TELECOM

Use este checklist para garantir que tudo está pronto para o deploy.

## Antes do Deploy

### Código
- [ ] Todos os arquivos estão commitados no Git
- [ ] Não há erros de TypeScript (`npm run build` funciona)
- [ ] Não há erros de lint (`npm run lint` funciona)
- [ ] Todas as dependências estão no package.json
- [ ] O .gitignore está configurado corretamente

### Funcionalidades
- [ ] Calculadora de Limpeza funciona localmente
- [ ] Calculadora de Multa funciona localmente
- [ ] API routes respondem corretamente
- [ ] Botões de copiar texto funcionam
- [ ] Tooltips aparecem corretamente
- [ ] Animações estão suaves
- [ ] Layout responsivo funciona

### Arquivos Necessários
- [ ] package.json existe e está correto
- [ ] next.config.mjs existe
- [ ] vercel.json existe (opcional, mas recomendado)
- [ ] README.md existe com instruções
- [ ] .gitignore existe
- [ ] Favicon está na pasta public/

## Durante o Deploy

### GitHub
- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub (`git push`)
- [ ] Repositório está público ou acessível pela Vercel

### Vercel
- [ ] Conta Vercel criada e conectada ao GitHub
- [ ] Projeto importado na Vercel
- [ ] Framework detectado como Next.js
- [ ] Build iniciado sem erros
- [ ] Deploy concluído com sucesso

## Após o Deploy

### Testes de Produção
- [ ] URL da aplicação está acessível
- [ ] Página inicial carrega corretamente
- [ ] Calculadora de Limpeza funciona
  - [ ] Seleção de plano funciona
  - [ ] Campos de data funcionam
  - [ ] Cálculo retorna resultado correto
  - [ ] Botão copiar funciona
- [ ] Calculadora de Multa funciona
  - [ ] Seleção de plano funciona
  - [ ] Campo de meses funciona
  - [ ] Seleção de equipamentos funciona
  - [ ] Cálculo retorna resultado correto
  - [ ] Botão copiar funciona
- [ ] Troca de abas funciona
- [ ] Animações estão funcionando
- [ ] Favicon aparece na aba do navegador
- [ ] Design está idêntico ao esperado

### Performance
- [ ] Página carrega em menos de 3 segundos
- [ ] Não há erros no console do navegador
- [ ] API routes respondem rapidamente
- [ ] Animações não causam lag

### SEO e Metadados
- [ ] Título da página está correto
- [ ] Descrição está presente
- [ ] Favicon está funcionando
- [ ] Open Graph tags (opcional)

## Testes em Diferentes Dispositivos

### Desktop
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (se disponível)
- [ ] Edge

### Mobile
- [ ] Chrome Mobile
- [ ] Safari Mobile (iOS)
- [ ] Navegador padrão Android

### Resoluções
- [ ] 1920x1080 (Full HD)
- [ ] 1366x768 (Laptop comum)
- [ ] 1357x849 (Resolução customizada)
- [ ] 768x1024 (Tablet)
- [ ] 375x667 (Mobile)

## Configurações Opcionais

### Domínio Personalizado
- [ ] Domínio adquirido
- [ ] DNS configurado
- [ ] Domínio adicionado na Vercel
- [ ] SSL/HTTPS funcionando

### Analytics
- [ ] Vercel Analytics habilitado (opcional)
- [ ] Google Analytics configurado (opcional)

### Monitoramento
- [ ] Alertas de erro configurados (opcional)
- [ ] Logs sendo monitorados (opcional)

## Documentação

- [ ] README.md atualizado
- [ ] TUTORIAL_DEPLOY.md revisado
- [ ] Comentários no código estão claros
- [ ] API routes documentadas

## Backup e Segurança

- [ ] Código está no GitHub (backup automático)
- [ ] Não há credenciais expostas no código
- [ ] Não há dados sensíveis commitados
- [ ] .env está no .gitignore

## Comunicação

- [ ] URL compartilhada com a equipe
- [ ] Documentação enviada aos usuários
- [ ] Suporte preparado para dúvidas

---

## Problemas Comuns e Soluções

### Build Falha
**Problema**: O build na Vercel falha
**Solução**: 
1. Verifique os logs de erro
2. Execute `npm run build` localmente
3. Corrija erros de TypeScript
4. Commit e push novamente

### Página em Branco
**Problema**: A página carrega mas está em branco
**Solução**:
1. Abra o console do navegador (F12)
2. Verifique erros de JavaScript
3. Verifique se os arquivos CSS carregaram
4. Verifique se há erros de hidratação

### API Não Funciona
**Problema**: Cálculos não retornam resultado
**Solução**:
1. Abra Network tab no console (F12)
2. Verifique se as requisições retornam 200
3. Verifique o payload enviado
4. Verifique os logs na Vercel

### Animações Lentas
**Problema**: Animações causam lag
**Solução**:
1. Reduza o número de partículas
2. Simplifique as animações CSS
3. Use will-change com cuidado
4. Teste em diferentes dispositivos

---

**Data do Deploy**: ___/___/______

**URL de Produção**: _________________________________

**Responsável**: _________________________________

**Status**: [ ] Aprovado [ ] Pendente [ ] Com Problemas
