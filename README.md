# **Judd Lasater - Portfolio**

A personal portfolio site built with Angular, showcasing my projects, skills, and background as a software developer.

🌐 [Live Site](https://www.JuddLasater.com)

---

## **Tech Stack**

### Frontend

Angular, TypeScript, SCSS

### Hosting

GitHub Pages

---

## **Features**

- Animated hero section with smooth scroll behavior
- Scrolling project marquee with interactive project board
- Dynamic background transitions tied to scroll position
- About section covering experience, skills, and background
- Contact section with hover-reveal interactions
- Fully responsive across desktop and mobile

---

## **Running Locally**

### Prerequisites

- Node.js (v18+)
- Angular CLI: `npm install -g @angular/cli`

### Setup

```bash
git clone https://github.com/juddl44/portfolio.git
cd portfolio
npm install
ng serve
```

Navigate to `http://localhost:4200` in your browser.

---

## **Project Structure**

```
src/
└── app/
    ├── components/
    │   └── navbar/
    ├── models/
    │   ├── card.ts
    │   └── link.ts
    ├── app.ts
    ├── app.html
    └── app.scss
public/
├── icons/
├── images/
└── splash/
```

---

## **Customization**

Most content is data-driven from the component, projects, links, and contact info can be updated in `app.ts` without touching the template.

---

## **Troubleshooting**

### Module errors

- Delete `.angular` and `node_modules`, then run `npm install`

### Port conflicts

- Default port is `4200` — change in `angular.json` if needed

---

## **License**

MIT License — see [LICENSE](./LICENSE) for details.

---

## **Contact**

- 📧 Email: [JuddLasater.dev@gmail.com](JuddLasater.dev@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/judd-lasater-54a29a38a/](www.linkedin.com/in/judd-lasater-54a29a38a/)
- 🐙 GitHub: [github.com/JuddL44](https://github.com/JuddL44)
