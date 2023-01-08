# 1. Impacts sociaux du numérique

## Installation d'une liseuse d'écran

NVDA est une liseuse d'écran très utilisée qui permet aux aveugles et déficients visuels de pouvoir dicter l'écran en cours de lecture.
Téléchargez cette liseuse et installez la (pensez à utiliser votre casque 😄 )
## Exercice simple

Les articles disponibles sur le site [Developer Mozilla : Accessibilité](https://developer.mozilla.org/fr/docs/Learn/Accessibility) sont excellents pour commencer.

- Lisez cette page permettant d'obtenir plus d'éléments pour la suite du TP :
    * [HTML : une bonne base pour l'accessibilité](https://developer.mozilla.org/fr/docs/Learn/Accessibility/HTML)
    * [Bonnes pratiques d'accessibilité CSS et JavaScript](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript)
- Vous trouverez un exercice simple à l'adresse suivantes : [l'accessibilité en CSS et JavaScript
  ](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility#accessibilit%C3%A9_en_css_-_exercice_1)

Mettez en application ces principes sur le projet d'étude.

## A retenir pour la suite du TP
- Les images doivent toujours avoir l'attribut `alt` ou être cachée lors d'une lecture par une liseuse d'écran avec l'attribut `aria-hidden=true`
- Les contrastes entre background et couleur de texte doivent toujours être suffisants.
- Un outline est nécessaire pour une lecture guidée, il ne faut pas le cacher.
- Les liens doivent être compréhensibles et perceptibles. Penser à ajouter un attribut `title` ou à labelliser leur utilité à l'aide de l'attribut `aria-labelledby`
- On doit pouvoir naviguer entre les différents champs d'un formulaire avec une information sur le contenu et le format attendu.

# 🧑🏽‍💻 Projet d'étude

## Installation
### Environnement de travail
Vos prérequis :
- IDE ou code editor de votre choix (vscode par exemple)
- Node (v8.2.0 ou plus récent)
- NPM (inclus dans l'installer nodejs) ou Yarn

### Clone du projet en local
Ouvrez votre bash préféré.
```bash
git clone https://github.com/avoidwebid/everydaycats-sustainable-eshop.git
```

### Installation
Ouvrez votre bash préféré.

```bash
npm install
cp .env.example .env
```

### Démarrage du projet

```bash
npm run dev
```

## Exercice

- Naviguez au clavier dans ce site de e-commerce et analysez les premiers problème de contenus et d'accessibilité.
- Utiliser lighthouse pour avoir de premières mesures.

### Gestion des images
- Ajouter des attributs `alt` aux images existantes ou bien `aria-hidden=true`
- Réduire la qualité des images grace au composant `Image` de nextjs

### Gestion des liens / bouttons
- Transformer les boutons actuellement à base de balises `<div>` en `button` avec une accessibilité convenable
- Modifier le bouton de panier pour d onner des informations sur la contenance (nombre d'articles).

### Gestion des dépendances

- analyser les différentes dépendances présentes dans la `package.json` du projet, les passer à bundle phobia : `leaflet` `react-leaflet`...
- Remplacer / supprimer la cartographie présente ne bas de la page d'accueil.

### Formulaire d'achat accessible

- Améliorer l'accessibilité du formulaire d'achat `AddressForm.js`