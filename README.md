# Animais Incríveis - Campos do Jordão

Site institucional e de vendas de ingressos para o serpentário Animais Incríveis, localizado em Capivari - Campos do Jordão/SP.

---

## 📋 Sobre o Projeto

Página web moderna no estilo e-commerce desenvolvida para promover e vender ingressos do Animais Incríveis, um dos maiores serpentários do Brasil. O site oferece:

- **Sistema de ingressos diferenciados**: Adulto (R$ 99,99) e Criança (R$ 79,99)
- **Integração WhatsApp**: Compra direta pelo WhatsApp com mensagem automática
- **Google Ads tracking**: Rastreamento completo de conversões
- **Design responsivo**: Otimizado para desktop, tablet e mobile
- **Galeria de fotos**: Imagens reais dos animais do serpentário

---

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca JavaScript para interfaces
- **Vite**: Build tool moderna e rápida
- **Tailwind CSS 4**: Framework CSS utility-first
- **TypeScript**: Tipagem estática para JavaScript
- **shadcn/ui**: Componentes UI acessíveis e customizáveis
- **Wouter**: Roteamento leve para SPA
- **Lucide React**: Ícones modernos

---

## 📦 Estrutura do Projeto

```
animais-incriveis/
├── client/                 # Aplicação frontend
│   ├── public/            # Arquivos estáticos
│   │   └── images/        # Imagens do site
│   ├── src/
│   │   ├── components/    # Componentes React reutilizáveis
│   │   ├── pages/         # Páginas do site
│   │   ├── lib/           # Utilitários
│   │   ├── App.tsx        # Componente principal com rotas
│   │   ├── main.tsx       # Ponto de entrada
│   │   └── index.css      # Estilos globais
│   └── index.html         # HTML base
├── package.json           # Dependências do projeto
├── vite.config.ts         # Configuração do Vite
├── tailwind.config.ts     # Configuração do Tailwind
└── tsconfig.json          # Configuração do TypeScript
```

---

## 🚀 Instalação Local (Desenvolvimento)

### Pré-requisitos
- Node.js 18+ 
- pnpm (gerenciador de pacotes)

### Passos

1. **Extrair o projeto**
```bash
unzip animais-incriveis.zip
cd animais-incriveis
```

2. **Instalar dependências**
```bash
pnpm install
```

3. **Executar em modo desenvolvimento**
```bash
pnpm run dev
```

4. **Acessar no navegador**
```
http://localhost:3000
```

---

## 🌐 Deploy em Produção

Para instalar em um servidor Ubuntu, siga o guia completo em **INSTALACAO_UBUNTU.md**.

### Resumo rápido:

1. Instalar Node.js 20+ e pnpm
2. Fazer upload dos arquivos
3. Executar `pnpm install`
4. Executar `pnpm run build`
5. Configurar Nginx para servir `client/dist`
6. Configurar SSL com Let's Encrypt

---

## 📱 Funcionalidades

### Seções do Site

1. **Hero Section**: Banner principal com imagem de fundo e CTAs
2. **O Que é o Animais Incríveis?**: Apresentação com cards informativos
3. **Ingressos**: Sistema de seleção de quantidade com cálculo automático
4. **O Que Está Incluído**: Grid com todas as experiências inclusas
5. **Galeria de Fotos**: Fotos reais dos animais
6. **Por Que Escolher**: Benefícios e diferenciais
7. **Informações Importantes**: Localização e horário de funcionamento
8. **Rodapé**: Copyright, CNPJ e link para Política de Privacidade

### Recursos Técnicos

- ✅ Design responsivo (mobile-first)
- ✅ Validação de quantidade mínima de ingressos
- ✅ Cálculo automático de total
- ✅ Mensagem WhatsApp personalizada por pedido
- ✅ Google Ads conversion tracking
- ✅ Paleta de cores verde natureza + amarelo aventura
- ✅ Tipografia profissional (Poppins + Inter)
- ✅ Otimização de performance
- ✅ SEO-friendly
- ✅ Política de Privacidade (LGPD)

---

## 🎨 Identidade Visual

### Cores Principais
- **Verde Natureza**: `#2d5016` (primária)
- **Amarelo Aventura**: `#fbbf24` (secundária/destaque)
- **Fundo Claro**: `#faf8f3` (background)

### Tipografia
- **Títulos**: Poppins (600-800)
- **Corpo**: Inter (400-600)

---

## 📊 Rastreamento e Analytics

### Google Ads
- **ID de Conversão**: AW-17641891539
- **Rótulo**: xKP0CMPWxr0bENPNp9xB
- **Evento**: Dispara ao clicar em "Comprar pelo WhatsApp"

### Dados Rastreados
- Valor da transação (em BRL)
- Quantidade de adultos
- Quantidade de crianças
- Transaction ID único

---

## 📞 Informações de Contato

### Serpentário
- **Nome**: Animais Incríveis
- **Localização**: Avenida Emílio Ribas, 833 - Capivari, Campos do Jordão - SP
- **WhatsApp**: (12) 98861-0001
- **Horário**: Quarta a Segunda, 09:00 às 18:00
- **Fechado**: Terças-feiras

### Parceiro Oficial
- **Nome**: Visite Campos
- **CNPJ**: 52.722.772/0001-30
- **Copyright**: © 2025 Visite Campos

---

## 🔒 Política de Privacidade

O site inclui página completa de Política de Privacidade em conformidade com a LGPD (Lei Geral de Proteção de Dados), acessível via `/politica-de-privacidade`.

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
pnpm run dev          # Inicia servidor de desenvolvimento

# Produção
pnpm run build        # Cria build otimizado em client/dist
pnpm run preview      # Preview do build de produção

# Linting e Type Check
pnpm run lint         # Verifica código com ESLint
pnpm run type-check   # Verifica tipos TypeScript
```

---

## 🐛 Solução de Problemas

### Build falha
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### Imagens não aparecem
- Verifique se as imagens estão em `client/public/images/`
- Após build, devem estar em `client/dist/images/`

### WhatsApp não abre
- Verifique se o número está correto: 5512988610001
- Teste em dispositivo mobile

---

## 📄 Licença

Projeto desenvolvido exclusivamente para Visite Campos. Todos os direitos reservados.

---

## 🤝 Suporte

Para dúvidas sobre instalação ou configuração, consulte o arquivo **INSTALACAO_UBUNTU.md**.

---

**Última atualização**: 10 de novembro de 2025
