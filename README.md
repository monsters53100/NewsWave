# 🌊 NewsWave

Una Single Page Application moderna per consultare le ultime notizie mondiali in tempo reale.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

---

## 📋 Descrizione

**NewsWave** è una Single Page Application sviluppata in React e TypeScript che integra [NewsAPI.org](https://newsapi.org/) per fornire notizie aggiornate con un'interfaccia pulita e reattiva.

L'applicazione permette di:
- Visualizzare le ultime notizie in tempo reale
- Cercare notizie per parola chiave
- Leggere i dettagli di ogni articolo
- Simulazione di una Iscrizione ad una newsletter finta tramite l'API di JsonPlaceholder

---

## 🛠️ Tech Stack

| Tecnologia | Utilizzo |
|------------|----------|
| **React 18** | UI Components |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool |
| **React Router DOM** | Routing |
| **TanStack Query** | Data Fetching & Caching |
| **Axios** | HTTP Client |
| **CSS Modules** | Styling |

---

## 📂 Struttura del Progetto

```
src/
├── core/
│   └── models/           # Interfacce TypeScript (Article, Source, Api)
├── services/             # Logica API (newsService, authService)
├── component/            # Componenti riutilizzabili
│   ├── NavBar.tsx
│   ├── NavBar.module.css
│   ├── NewsCard.tsx
│   ├── NewsCard.module.css
│   └── PageNotFound.tsx
├── pages/                # Viste principali
│   ├── HomePage.tsx
│   ├── HomePage.module.css
│   ├── DetailPage.tsx
│   ├── DetailPage.module.css
│   ├── LoginPage.tsx
│   ├── LoginPage.module.css
│   ├── NotFoundPage.tsx
│   └── NotFoundPage.module.css
├── styles/               # CSS globali e variabili
│   ├── global.css
│   └── variables.css
├── App.tsx               # Routing principale
└── main.tsx              # Entry point
```

---

## 🚀 Funzionalità

### 🏠 Home Page
- Lista delle ultime notizie con fetching ottimizzato tramite React Query
- Griglia responsiva con card interattive
- Ricerca per parola chiave

### 📰 Dettaglio Articolo
- Routing dinamico tramite `/news/:title`
- Visualizzazione completa dell'articolo
- Link alla fonte originale

### ✉️ Newsletter
- Form di iscrizione con validazione
- Chiamata POST asincrona
- Feedback visivo per successo/errore

### ⚠️ Gestione Errori
- Pagina 404 personalizzata
- Feedback visivi per errori API
- Gestione stati di loading

---

## ⚡ Quick Start

### 1. Clona il repository

```bash
git clone https://github.com/tuo-username/newswave.git
cd newswave
```

### 2. Installa le dipendenze

```bash
npm install
```

### 3. Configura le variabili d'ambiente

Crea un file `.env` nella root del progetto:

```env
VITE_NEWS_API_KEY=tua_chiave_api_qui
```

> 💡 Ottieni la tua API key gratuita su [newsapi.org](https://newsapi.org/register) 

### 4. Avvia il server di sviluppo

```bash
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173`

---

## 📜 Script Disponibili

| Comando | Descrizione |
|---------|-------------|
| `npm run dev` | Avvia il server di sviluppo |
| `npm run build` | Crea la build di produzione |
| `npm run preview` | Anteprima della build di produzione |
| `npm run lint` | Esegue il linter ESLint |

---

## 🎨 Personalizzazione Stili

Gli stili sono gestiti tramite **CSS Modules** e **variabili CSS**.

Per modificare i colori del tema, edita `src/styles/variables.css`:

```css
:root {
    --color-primary: #007bff;
    --color-secondary: #6c757d;
    --color-dark: #1a1a1a;
    --color-text: #666;
    /* ... altri colori */
}
```

---

## 📝 Note Importanti

> ⚠️ **Piano gratuito NewsAPI**: Il contenuto degli articoli è troncato a 200 caratteri. L'app fornisce un link diretto alla fonte originale per la lettura completa.

> ⚠️ **Rischiesta POST finta**: L'iscrizione alla newsletter utilizza JsonPlaceholder, che non memorizza realmente i dati inviati, per poter visualizzare se la richiesta è andata a buon fine premere il tasto f12 e controllare nella sezione network se la richiesta ha avuto successo.

> 🌍 **Lingua delle notizie**: Per impostazione predefinita, le notizie sono in inglese. Puoi modificare il parametro `country` o `language` nel file `newsService.ts`.



---

## 🔗 Link Utili

- [NewsAPI Documentation](https://newsapi.org/docs)
- [JsonPlaceholder Documentation](https://jsonplaceholder.typicode.com/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)

---

## 👤 Autore

**Nicola** - Progetto sviluppato per UF07 - Programmazione Web

---

## 📄 Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.
