# Guia de Instalação - Animais Incríveis no Servidor Ubuntu

Este guia fornece instruções passo a passo para instalar e configurar o site Animais Incríveis em um servidor Ubuntu.

---

## Pré-requisitos

Antes de começar, certifique-se de que seu servidor Ubuntu possui:

- **Ubuntu 20.04 LTS ou superior**
- **Acesso root ou sudo**
- **Conexão com a internet**
- **Domínio configurado** (opcional, mas recomendado)

---

## Passo 1: Atualizar o Sistema

Primeiro, atualize os pacotes do sistema:

```bash
sudo apt update
sudo apt upgrade -y
```

---

## Passo 2: Instalar Node.js e npm

O projeto requer Node.js versão 18 ou superior. Instale usando o NodeSource:

```bash
# Adicionar repositório NodeSource para Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Instalar Node.js e npm
sudo apt install -y nodejs

# Verificar instalação
node --version  # Deve mostrar v20.x.x
npm --version   # Deve mostrar 10.x.x
```

---

## Passo 3: Instalar pnpm

O projeto usa pnpm como gerenciador de pacotes:

```bash
# Instalar pnpm globalmente
sudo npm install -g pnpm

# Verificar instalação
pnpm --version  # Deve mostrar 9.x.x ou superior
```

---

## Passo 4: Fazer Upload dos Arquivos do Projeto

Você pode fazer upload dos arquivos do projeto de várias formas:

### Opção A: Usando SCP (do seu computador local)

```bash
# No seu computador local, execute:
scp -r animais-incriveis.zip usuario@seu-servidor-ip:/home/usuario/
```

### Opção B: Usando Git (se tiver repositório)

```bash
cd /var/www
sudo git clone https://seu-repositorio.git animais-incriveis
```

### Opção C: Upload manual via FTP/SFTP

Use um cliente FTP como FileZilla para fazer upload da pasta do projeto.

---

## Passo 5: Extrair e Configurar o Projeto

```bash
# Navegar para o diretório home
cd ~

# Se enviou arquivo zip, extrair
unzip animais-incriveis.zip

# Mover para /var/www (local recomendado para aplicações web)
sudo mkdir -p /var/www
sudo mv animais-incriveis /var/www/
cd /var/www/animais-incriveis

# Dar permissões corretas
sudo chown -R $USER:$USER /var/www/animais-incriveis
```

---

## Passo 6: Instalar Dependências

```bash
cd /var/www/animais-incriveis

# Instalar todas as dependências do projeto
pnpm install
```

---

## Passo 7: Construir o Projeto para Produção

```bash
# Gerar build otimizado para produção
pnpm run build
```

Isso criará uma pasta `client/dist` com os arquivos estáticos otimizados.

---

## Passo 8: Instalar e Configurar Nginx

Nginx será usado como servidor web para servir os arquivos estáticos:

```bash
# Instalar Nginx
sudo apt install -y nginx

# Verificar se está rodando
sudo systemctl status nginx
```

---

## Passo 9: Configurar Nginx para o Site

Crie um arquivo de configuração para o site:

```bash
sudo nano /etc/nginx/sites-available/animais-incriveis
```

Cole a seguinte configuração:

```nginx
server {
    listen 80;
    listen [::]:80;
    
    # Substitua pelo seu domínio ou IP do servidor
    server_name seu-dominio.com www.seu-dominio.com;
    
    root /var/www/animais-incriveis/client/dist;
    index index.html;
    
    # Logs
    access_log /var/log/nginx/animais-incriveis-access.log;
    error_log /var/log/nginx/animais-incriveis-error.log;
    
    # Compressão Gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json image/svg+xml;
    
    # Cache para assets estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Roteamento para SPA (Single Page Application)
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Segurança
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Importante:** Substitua `seu-dominio.com` pelo seu domínio real ou pelo IP do servidor.

Salve o arquivo (Ctrl+O, Enter, Ctrl+X).

---

## Passo 10: Ativar o Site no Nginx

```bash
# Criar link simbólico para ativar o site
sudo ln -s /etc/nginx/sites-available/animais-incriveis /etc/nginx/sites-enabled/

# Remover configuração padrão (opcional)
sudo rm /etc/nginx/sites-enabled/default

# Testar configuração do Nginx
sudo nginx -t

# Se o teste passar, recarregar Nginx
sudo systemctl reload nginx
```

---

## Passo 11: Configurar Firewall (UFW)

```bash
# Permitir tráfego HTTP e HTTPS
sudo ufw allow 'Nginx Full'

# Se UFW não estiver ativo, ative:
sudo ufw enable

# Verificar status
sudo ufw status
```

---

## Passo 12: Configurar SSL/HTTPS com Let's Encrypt (Recomendado)

Para segurança, é altamente recomendado usar HTTPS:

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obter certificado SSL (substitua pelo seu email e domínio)
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com --email seu-email@exemplo.com --agree-tos --no-eff-email

# Testar renovação automática
sudo certbot renew --dry-run
```

O Certbot configurará automaticamente o Nginx para usar HTTPS e redirecionará HTTP para HTTPS.

---

## Passo 13: Verificar Instalação

Abra seu navegador e acesse:

- **HTTP:** `http://seu-dominio.com` ou `http://seu-ip-servidor`
- **HTTPS:** `https://seu-dominio.com` (se configurou SSL)

Você deverá ver o site Animais Incríveis funcionando perfeitamente!

---

## Passo 14: Configurar Renovação Automática de SSL

O Certbot já configura renovação automática, mas você pode verificar:

```bash
# Verificar timer de renovação
sudo systemctl status certbot.timer

# Testar renovação
sudo certbot renew --dry-run
```

---

## Comandos Úteis

### Reiniciar Nginx
```bash
sudo systemctl restart nginx
```

### Ver logs de erro do Nginx
```bash
sudo tail -f /var/log/nginx/animais-incriveis-error.log
```

### Ver logs de acesso do Nginx
```bash
sudo tail -f /var/log/nginx/animais-incriveis-access.log
```

### Atualizar o site após mudanças
```bash
cd /var/www/animais-incriveis
git pull  # Se usando Git
pnpm install  # Se houver novas dependências
pnpm run build  # Reconstruir
sudo systemctl reload nginx  # Recarregar Nginx
```

---

## Solução de Problemas

### Site não carrega
1. Verifique se o Nginx está rodando: `sudo systemctl status nginx`
2. Verifique logs de erro: `sudo tail -f /var/log/nginx/error.log`
3. Verifique permissões: `ls -la /var/www/animais-incriveis/client/dist`

### Erro 502 Bad Gateway
1. Verifique se o build foi criado: `ls /var/www/animais-incriveis/client/dist`
2. Reconstrua o projeto: `pnpm run build`

### Imagens não carregam
1. Verifique se as imagens estão em `/var/www/animais-incriveis/client/dist/images`
2. Verifique permissões: `sudo chmod -R 755 /var/www/animais-incriveis/client/dist`

### Domínio não resolve
1. Verifique configuração DNS do seu domínio
2. Aguarde propagação DNS (pode levar até 48h)
3. Use IP do servidor temporariamente

---

## Manutenção

### Backup Regular
```bash
# Criar backup
sudo tar -czf animais-incriveis-backup-$(date +%Y%m%d).tar.gz /var/www/animais-incriveis

# Mover para local seguro
sudo mv animais-incriveis-backup-*.tar.gz /home/usuario/backups/
```

### Monitoramento
```bash
# Instalar htop para monitorar recursos
sudo apt install -y htop

# Executar
htop
```

---

## Suporte

Se encontrar problemas durante a instalação:

1. Verifique os logs do Nginx
2. Verifique se todas as dependências foram instaladas
3. Certifique-se de que as portas 80 e 443 estão abertas no firewall
4. Verifique se o domínio está apontando para o IP correto do servidor

---

## Informações do Projeto

- **Nome:** Animais Incríveis - Campos do Jordão
- **Tecnologia:** React 19 + Vite + Tailwind CSS 4
- **Tipo:** Site estático (SPA - Single Page Application)
- **Gerenciador de Pacotes:** pnpm
- **Servidor Web:** Nginx

---

**Desenvolvido por:** Visite Campos  
**Copyright:** © 2025 Visite Campos  
**CNPJ:** 52.722.772/0001-30
