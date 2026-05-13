# Laís Buck — Mentoria Individual de Carreira

> Site de apresentação da mentoria individual de carreira da Laís Buck, voltado para universitárias no último ano que querem se preparar para entrevistas de estágio e dar o próximo passo com mais confiança.

🌐 **[Acesse o site](https://buckgustavo.github.io/Lais_Buck_/)**

---

## 🛠 Tecnologias

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) — animações
- CSS Modules — estilização componentizada
- GitHub Actions — deploy automático
- GitHub Pages — hospedagem

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx         # Navegação e toggle de tema
│   ├── Hero.jsx           # Seção principal com headline e CTA
│   ├── About.jsx          # Sobre a Laís Buck
│   ├── ForWhom.jsx        # Para quem é a mentoria
│   ├── Pillars.jsx        # Pilares da mentoria
│   ├── Results.jsx        # Resultados esperados
│   ├── Testimonials.jsx   # Depoimentos
│   ├── Process.jsx        # Como funciona
│   ├── CTAFinal.jsx       # Chamada para ação final
│   └── Footer.jsx         # Rodapé
├── hooks/
│   └── useTheme.js        # Hook de dark/light mode
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Rodando localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 🖼 Foto da Laís

Para exibir a foto no Hero, adicione o arquivo de imagem em:

```
public/lais-buck.jpg
```

Sem o arquivo, o site exibe um placeholder com as iniciais **LB** automaticamente.

---

## 🚢 Deploy

O deploy é feito automaticamente via **GitHub Actions** a cada push na branch `main`.

O workflow está em `.github/workflows/deploy.yml` e realiza:
1. Build do projeto com Vite
2. Upload do artefato para o GitHub Pages
3. Deploy na URL pública

> **Importante:** Nas configurações do repositório, vá em **Settings → Pages** e selecione a source como **GitHub Actions**.

---

## 📞 Contato

Para iniciar a mentoria:
📱 [WhatsApp](https://wa.me/5516992424117)
