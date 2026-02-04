# Struttura CSS del Progetto NewsWave

## 📁 Struttura delle Cartelle

```
src/
├── styles/
│   ├── global.css          # Stili globali e reset CSS
│   └── variables.css       # Variabili CSS (colori, spacing, ecc.)
├── component/
│   ├── NavBar.tsx
│   ├── NavBar.module.css
│   ├── NewsCard.tsx
│   └── NewsCard.module.css
└── pages/
    ├── HomePage.tsx
    ├── HomePage.module.css
    ├── DetailPage.tsx
    ├── DetailPage.module.css
    ├── LoginPage.tsx
    ├── LoginPage.module.css
    ├── NotFoundPage.tsx
    └── NotFoundPage.module.css
```

## 🎨 CSS Modules

### Vantaggi
- **Scoping locale**: Gli stili sono isolati per ogni componente
- **Nessun conflitto**: I nomi delle classi sono unici
- **Manutenibilità**: Facile trovare e modificare gli stili
- **Type-safe**: TypeScript supporta l'autocompletamento

### Come Usare

```typescript
// 1. Importa il file CSS Module
import styles from './Componente.module.css';

// 2. Usa le classi come proprietà dell'oggetto styles
<div className={styles.container}>
    <h1 className={styles.title}>Titolo</h1>
</div>
```

### Combinare Classi

```typescript
// Combinare classe globale e CSS Module
<div className={`container ${styles.customClass}`}>

// Combinare più classi CSS Module
<div className={`${styles.card} ${styles.active}`}>
```

## 🎯 Variabili CSS Personalizzate

Le variabili CSS sono definite in `src/styles/variables.css`:

```css
/* Colori */
--color-primary: #007bff;
--color-secondary: #6c757d;
--color-dark: #1a1a1a;

/* Spacing */
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 4rem;

/* Border Radius */
--border-radius: 8px;
--border-radius-sm: 4px;
--border-radius-lg: 12px;
```

### Usare le Variabili nei CSS Module

```css
.button {
    background-color: var(--color-primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-sm);
}
```

## 🌐 Stili Globali

Gli stili globali sono in `src/styles/global.css`:

- Reset CSS base
- Stili per il tag `<body>`
- Container principale (`.container`)
- Utility classes (`.text-center`, `.error-message`, ecc.)

## 📱 Responsive Design

Ogni CSS Module include media queries per dispositivi mobili:

```css
@media (max-width: 768px) {
    .newsGrid {
        grid-template-columns: 1fr;
    }
}
```

## 🔧 Best Practices

1. **Un file CSS Module per componente**: Mantieni gli stili organizzati
2. **Usa variabili CSS**: Per consistenza e facile manutenzione
3. **Nomi delle classi semantici**: `.submitButton` invece di `.btn-blue`
4. **Mobile-first**: Pensa prima al mobile, poi desktop
5. **Riutilizza classi globali**: Usa `.container` per il layout principale

## 🚀 Modificare gli Stili

### Per cambiare i colori del tema:
Modifica `src/styles/variables.css`

### Per aggiungere nuovi componenti:
1. Crea `NuovoComponente.tsx`
2. Crea `NuovoComponente.module.css` nella stessa cartella
3. Importa e usa: `import styles from './NuovoComponente.module.css'`

### Per modificare stili globali:
Modifica `src/styles/global.css`
