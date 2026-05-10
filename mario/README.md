# 🌌 Super Mario Galaxy - Landing Page Profissional

Um site moderno e profissional para divulgar **Super Mario Galaxy**, utilizando todas as imagens e vídeos de forma coesa e estratégica.

## 🎯 Objetivo

Criar uma experiência visual épica que ressalte a história, os personagens e o universo cósmico de Mario Galaxy, com cada seção integrando imagens e vídeos de forma profissional e temática.

## 📁 Estrutura do Projeto

```
mario/
├── index.html                    # Landing page principal
├── DESIGN.md                     # Especificações do design system
├── README.md                     # Este arquivo
├── css/
│   ├── design-system.css         # Tokens: cores, tipografia, motion
│   └── styles.css                # Layout e componentes profissionais
├── js/
│   ├── scroll-animations.js      # Parallax e scroll reveals
│   ├── starfield.js              # Background com estrelas animadas
│   └── interactions.js           # Scroll reveals e lazy loading
└── assets/
    ├── images/                   # 8 imagens estrategicamente colocadas
    │   ├── mario-original.webp      → Hero + Galeria
    │   ├── luigi.webp               → Seção Heróis + Galeria
    │   ├── peach.webp               → Storytelling + Heróis + Galeria
    │   ├── rosalina.webp            → Aliados + Galeria
    │   ├── yoshi-perso.webp         → Aliados + Galeria
    │   ├── bowser-jr.webp           → Seção Vilão + Galeria
    │   ├── estrela-min.webp         → Hero, Power Stars + Galeria
    │   └── nebulosa-quad.webp       → Storytelling + Galeria
    └── videos/                   # 6 vídeos integrados
        ├── mario-clip-min.mp4
        ├── mario-clip-alpha.webm
        ├── planet-3d-min.mp4
        ├── planet-3d-alpha.webm
        ├── yoshi-video-min.mp4
        └── yoshi-video-alpha.webm
```

## 🎨 Seções do Site

### 1. **Header & Navegação** (Sticky)
- Brand com logo em destaque
- Menu navegável: História → Heróis → Aliados → Galeria → Jogar
- Backdrop blur effect
- Efeito de hover suave nos links

### 2. **Hero Section**
- **Imagens**: Mario original (lado direito) + Estrela de Poder com animação orbital
- **Conteúdo**: Título com gradiente, descrição épica e duplo CTA
- **Animação**: Float animation no Mario, spin animation na estrela
- **Design**: Layout 2 colunas responsivo, glow effect em background

### 3. **Storytelling Section** (NOVA)
- **Esquerda**: Imagem da Peach + Narrativa
- **Direita**: Imagem da Nebulosa + Descrição do universo
- **Cards interativos**: Hover effect com zoom e mudança de border
- **Objetivo**: Contextualizar a jornada épica

### 4. **Heróis Section** (Trio Principal)
- **Layout**: 3 cards grandes com badges destacadas
- **Imagens**: Mario, Luigi, Peach (one-by-one com hover zoom)
- **Características**:
  - Badge em destaque (Protagonista/Irmão/Princesa)
  - Descrição biográfica
  - Animação de elevação no hover
  - Shadow glow cósmico

### 5. **Aliados Section** (Companheiros)
- **Layout**: 2 cards lado a lado (Rosalina + Yoshi)
- **Imagens**: Detalhes específicos de cada personagem
- **Extras**: 
  - Skills/habilidades em pills
  - Hover effect com transformação
  - Background gradiente temático

### 6. **Vilão Section** (Destaque Antagonista)
- **Layout**: 2 colunas (Imagem do Bowser Jr. + Descrição)
- **Características**:
  - Stats bar animados (Ameaça, Inteligência, Poder)
  - Background com rosa cósmico
  - Typography dramática
  - Shadow efeito especial

### 7. **Power Stars Section**
- **Destaque**: Imagem grande da estrela com animação pulse
- **Conteúdo**: Lista de 5 pontos sobre coleta de estrelas
- **Design**: Background com toque dourado (accent-star)

### 8. **Galeria Section** (Showcase Completo)
- **Grid Responsivo**: 8+ items com mix de imagens e vídeos
- **Imagens**: Todos os personagens + nebulosa + estrela
- **Vídeos**: Mario, Planeta 3D, Yoshi (2 colunas em desktop)
- **Captions**: Fichas descritivas no hover
- **Performance**: Lazy loading em imagens e vídeos

### 9. **CTA Final**
- **Texto**: Motivação para jogar
- **Botões**: Primário (Jogar) + Ghost (Conhecer Heróis)
- **Background**: Radial gradient com accent-star

### 10. **Footer**
- 4 seções de links: Sobre, Comunidade, Suporte, Legal
- Copyright e créditos
- Border top com cor cósmica

---

## 🎨 Design System Utilizado

**Cores (do DESIGN.md)**:
- `--bg-deep: #000000` - Fundo profundo
- `--bg-mid: #0a0a1a` - Intermediário
- `--bg-surface: #141340` - Superfícies
- `--text-primary: #f5f0e8` - Texto principal
- `--accent-star: #ffd23f` - Ouro Mario
- `--cosmic-cyan: #5ce0d8` - Cyan cósmico
- `--cosmic-purple: #6a3cbc` - Purple cósmico
- `--cosmic-rose: #c8508c` - Rose para vilão

**Tipografia**:
- Família: `Outfit` (400-900)
- Importada do Google Fonts
- Escalas fluidas com `clamp()`

**Motion**:
- `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)` - Bounce suave
- Durations: 150ms (fast), 250ms (base), 350ms (slow)
- Animações em `transform` e `opacity` apenas

---

## 📸 Uso de Imagens - Distribuição Estratégica

| Imagem | Localizações | Função |
|--------|-------------|--------|
| `mario-original.webp` | Hero (principal), Heróis (card), Galeria | Protagonista |
| `luigi.webp` | Heróis (card), Galeria | Companheiro |
| `peach.webp` | Storytelling (narrativa), Heróis (card), Galeria | Princesa/damsel |
| `rosalina.webp` | Aliados (card), Galeria | Guardiã cósmica |
| `yoshi-perso.webp` | Aliados (card), Galeria | Dinossauro aliado |
| `bowser-jr.webp` | Vilão (seção), Galeria | Antagonista |
| `estrela-min.webp` | Hero (orbita), Power Stars (showcase), Galeria | Poder e coleta |
| `nebulosa-quad.webp` | Storytelling (universo), Galeria | Atmosfera cósmica |

---

## 🚀 Como Rodar o Projeto

### Option 1: Live Server (VS Code)
```bash
1. Clique direito em index.html
2. Selecione "Open with Live Server"
3. Browser abre automaticamente em http://localhost:5500
```

### Option 2: Servidor Local (Python 3)
```bash
cd c:\Users\migue\Desktop\mario
python -m http.server 8000
# Acesse: http://localhost:8000
```

### Option 3: Servidor Local (Node.js)
```bash
cd c:\Users\migue\Desktop\mario
npx serve
# Acesse: http://localhost:3000
```

---

## ✨ Recursos Técnicos

### Performance
- ✅ Lazy loading de imagens e vídeos
- ✅ WebP + MP4/WebM (compatibilidade)
- ✅ Vídeos com autoplay muted (não interfere)
- ✅ CSS otimizado sem duplicações
- ✅ Animações apenas em transform/opacity

### Acessibilidade
- ✅ Semântica HTML5 (nav, main, section, footer)
- ✅ ARIA labels e roles
- ✅ Skip link funcional
- ✅ Contraste WCAG AA
- ✅ Alt text em todas as imagens
- ✅ Captions em vídeos (figcaption)

### Responsividade
- ✅ Mobile-first approach
- ✅ Breakpoints: 768px, 1024px
- ✅ Grid layouts adaptativos
- ✅ Tipografia fluida com `clamp()`
- ✅ Touch-friendly buttons

### Suporte a Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile (iOS Safari, Chrome Android)

---

## 🎯 Objetivos Alcançados

✅ **Todas as imagens utilizadas** de forma coesa e profissional  
✅ **Narrativa clara** sobre Mario Galaxy (Hero → Story → Characters → Allies → Villain → Galeria)  
✅ **Design coeso** usando tokens oficiais do DESIGN.md  
✅ **Performance otimizada** com lazy loading e formatos modernos  
✅ **Experiência imersiva** com animações e efeitos cósmicos  
✅ **Responsive** em todos os devices  
✅ **Acessível** seguindo padrões WCAG  
✅ **Profissional** para fins de divulgação e marketing  

---

## 📝 Notas Técnicas

- **Vídeos**: São reproduzidos inline com controles. Usar `<video controls>` em galeria
- **Imagens**: Usar `loading="lazy"` para melhor performance
- **Canvas**: Starfield em background fixo não interfere com scroll
- **Animações**: Respeita `prefers-reduced-motion` para acessibilidade
- **Grid**: Usa `auto-fit` e `minmax()` para responsividade automática

---

## 📄 Licença e Créditos

- **Jogo Original**: Nintendo © 2006 - Super Mario Galaxy
- **Fonte**: Outfit (Rasmus Andersson)
- **Desenvolvimento**: Landing Page Profissional 2026
- **Uso**: Educacional e Promocional

---

**Status**: ✅ **PRONTO PARA PRODUÇÃO**

Todas as seções estão implementadas, testadas e otimizadas para uma experiência profissional de divulgação de Mario Galaxy. 🚀🌌

