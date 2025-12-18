# Guia de Atualização Rápida - Animais Incríveis

Este guia mostra como atualizar o site rapidamente no servidor após fazer alterações.

---

## 📝 Como Atualizar Preços

### Passo 1: Editar o Arquivo de Preços

Edite o arquivo `client/src/pages/Home.tsx` e localize as linhas:

```typescript
const adultPrice = 99.99;
const childPrice = 79.99;
const additionalPrice = 40.00;
```

Altere os valores conforme necessário e salve o arquivo.

### Passo 2: Fazer Commit e Push para o GitHub

```bash
cd /var/www/animais-incriveis

# Adicionar alterações
git add .

# Fazer commit com mensagem descritiva
git commit -m "Atualizar preços: adulto R$99,99 e infantil R$79,99"

# Enviar para o GitHub
git push origin main
```

**Nota:** Se o branch principal for `master` ao invés de `main`, use `git push origin master`.

---

## 🚀 Deploy Automatizado (Recomendado)

Depois de fazer push para o GitHub, use o script de deploy automatizado:

```bash
cd /var/www/animais-incriveis
./deploy.sh
```

Este script irá:
1. ✓ Baixar as últimas alterações do GitHub
2. ✓ Instalar dependências (se necessário)
3. ✓ Construir a versão de produção
4. ✓ Ajustar permissões
5. ✓ Testar configuração do Nginx
6. ✓ Recarregar o Nginx

**Pronto!** Seu site estará atualizado em segundos.

---

## 🔧 Deploy Manual (Alternativa)

Se preferir fazer manualmente, execute os comandos:

```bash
cd /var/www/animais-incriveis

# Baixar alterações do GitHub
git pull origin main

# Instalar dependências (se houver novas)
pnpm install

# Construir versão de produção
pnpm run build

# Recarregar Nginx
sudo systemctl reload nginx
```

---

## 📋 Checklist Rápido

Antes de fazer deploy, certifique-se de:

- [ ] Testar as alterações localmente com `pnpm run dev`
- [ ] Fazer commit das alterações
- [ ] Fazer push para o GitHub
- [ ] Executar o script de deploy no servidor
- [ ] Verificar o site no navegador

---

## 🆘 Solução de Problemas

### O deploy.sh não executa

```bash
# Tornar o script executável
chmod +x /var/www/animais-incriveis/deploy.sh
```

### Erro de permissão ao executar git pull

```bash
# Ajustar permissões do diretório
sudo chown -R $USER:$USER /var/www/animais-incriveis
```

### Build falha

```bash
# Limpar cache e reinstalar dependências
cd /var/www/animais-incriveis
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Site não atualiza após deploy

```bash
# Limpar cache do navegador ou testar em modo anônimo
# Verificar se o Nginx foi recarregado
sudo systemctl status nginx
sudo systemctl reload nginx
```

---

## 📂 Arquivos Importantes

- **Preços:** `client/src/pages/Home.tsx` (linhas 10-12)
- **Script de Deploy:** `deploy.sh`
- **Configuração Nginx:** `/etc/nginx/sites-available/animais-incriveis`
- **Build de Produção:** `client/dist/`

---

## 💡 Dicas

1. **Sempre faça backup** antes de alterações importantes
2. **Teste localmente** antes de fazer deploy
3. **Use mensagens de commit descritivas** para histórico claro
4. **Monitore os logs** se algo der errado: `sudo tail -f /var/log/nginx/animais-incriveis-error.log`

---

## 🎯 Resumo Ultra-Rápido

Para atualizar o site em 3 passos:

```bash
# 1. Edite os preços em client/src/pages/Home.tsx
# 2. Commit e push
git add . && git commit -m "Atualizar preços" && git push

# 3. Deploy no servidor
cd /var/www/animais-incriveis && ./deploy.sh
```

**Pronto!** 🎉

---

**Última atualização:** 18 de dezembro de 2025
