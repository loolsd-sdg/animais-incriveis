#!/bin/bash

# Script de Deploy Automatizado - Animais Incríveis
# Este script facilita a atualização rápida do site no servidor

set -e  # Parar em caso de erro

echo "========================================="
echo "  Deploy Automático - Animais Incríveis"
echo "========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Diretório do projeto (ajuste se necessário)
PROJECT_DIR="/var/www/animais-incriveis"

# Verificar se está no diretório correto
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}Erro: Diretório $PROJECT_DIR não encontrado!${NC}"
    echo "Por favor, ajuste a variável PROJECT_DIR no script."
    exit 1
fi

cd "$PROJECT_DIR"

echo -e "${YELLOW}[1/6] Atualizando código do GitHub...${NC}"
git pull origin main || git pull origin master

echo ""
echo -e "${YELLOW}[2/6] Verificando dependências...${NC}"
pnpm install

echo ""
echo -e "${YELLOW}[3/6] Construindo versão de produção...${NC}"
pnpm run build

echo ""
echo -e "${YELLOW}[4/6] Verificando permissões...${NC}"
sudo chmod -R 755 "$PROJECT_DIR/client/dist"

echo ""
echo -e "${YELLOW}[5/6] Testando configuração do Nginx...${NC}"
sudo nginx -t

echo ""
echo -e "${YELLOW}[6/6] Recarregando Nginx...${NC}"
sudo systemctl reload nginx

echo ""
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  ✓ Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo "O site foi atualizado e está no ar!"
echo ""
