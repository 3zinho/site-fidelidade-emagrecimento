# FidelityPro - Site HTML/CSS/JavaScript

Este é um site completo de teste de fidelidade profissional, convertido de React/Next.js para HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Multilíngue**: Suporte para Português e Inglês
- **Carrinho de Compras**: Sistema completo de carrinho com modal
- **Animações Suaves**: Efeitos de fade-in e transições
- **Menu Mobile**: Navegação responsiva com menu hambúrguer
- **FAQ Interativo**: Seção de perguntas frequentes expansível
- **WhatsApp Integration**: Botão flutuante para contato direto

## 📁 Estrutura dos Arquivos

```
├── index.html      # Página principal
├── styles.css      # Estilos CSS
├── script.js       # JavaScript funcional
└── README.md       # Documentação
```

## 🎨 Design

- **Tema**: Escuro com acentos vermelhos
- **Tipografia**: Inter (Google Fonts)
- **Ícones**: Font Awesome 6
- **Layout**: Mobile-first, responsivo
- **Animações**: CSS transitions e JavaScript

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript ES6+**: Funcionalidades interativas
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 Funcionalidades JavaScript

### Navegação
- Scroll suave entre seções
- Menu mobile responsivo
- Troca de idioma dinâmica

### Carrinho
- Adicionar/remover produtos
- Cálculo automático de totais
- Modal responsivo
- Persistência durante a sessão

### Animações
- Intersection Observer para fade-in
- Transições suaves
- Hover effects

### Multilíngue
- Sistema completo PT/EN
- Troca dinâmica de conteúdo
- Preços em moedas locais

## 🚀 Como Usar

1. **Abrir o site**: Simplesmente abra o arquivo `index.html` em qualquer navegador moderno
2. **Hospedagem**: Faça upload dos arquivos para qualquer servidor web
3. **Personalização**: Edite os textos no arquivo `script.js` na seção `translations`

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no início do arquivo `styles.css`:
```css
:root {
    --primary-color: #dc2626;
    --secondary-color: #b91c1c;
    --background-color: #000000;
}
```

### Alterar Textos
Modifique o objeto `translations` no arquivo `script.js`:
```javascript
const translations = {
    pt: {
        hero: {
            title: "Seu Novo Título",
            subtitle: "Sua nova descrição"
        }
    }
}
```

### Alterar Preços
Edite os preços na função `addToCart()` no arquivo `script.js`:
```javascript
const plans = {
    basic: { price: currentLanguage === 'pt' ? 97 : 29 }
}
```

## 📞 Contato WhatsApp

Para alterar o número do WhatsApp, edite o link no arquivo `index.html`:
```html
<a href="https://wa.me/5511999999999" target="_blank">
```

## 🎯 SEO Ready

- Meta tags configuradas
- Estrutura HTML semântica
- URLs amigáveis para seções
- Performance otimizada

## 📊 Performance

- **CSS**: Minificado e otimizado
- **JavaScript**: Vanilla JS (sem frameworks)
- **Imagens**: Otimizadas via Font Awesome
- **Carregamento**: Rápido e eficiente

## 🔒 Segurança

- Links externos com `rel="noopener noreferrer"`
- Validação de entrada do usuário
- Código limpo e seguro

## 📈 Analytics

Para adicionar Google Analytics, insira o código antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deploy

### GitHub Pages
1. Faça upload dos arquivos para um repositório GitHub
2. Ative GitHub Pages nas configurações
3. Seu site estará disponível em `username.github.io/repository-name`

### Netlify
1. Arraste a pasta com os arquivos para netlify.com/drop
2. Seu site será publicado automaticamente

### Vercel
1. Conecte seu repositório GitHub ao Vercel
2. Deploy automático a cada commit

## 📝 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ usando HTML, CSS e JavaScript puro**