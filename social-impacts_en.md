# Social impacts of digital technology

## Installation of a screen reader

NVDA is a widely used screen reader that allows blind and visually impaired people to dictate the screen while reading.
Download this reader and install it (remember to use your headset 😄)

## Simple exercise

The articles available on the [Developer Mozilla: Accessibility](https://developer.mozilla.org/fr/docs/Learn/Accessibility) are excellent to start with.

- Read this page to get more material for the rest of the exercise:
    * [HTML: a good foundation for accessibility](https://developer.mozilla.org/fr/docs/Learn/Accessibility/HTML)
    * [CSS and JavaScript accessibility best practices](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript)
- You can find a simple exercise at the following address: [accessibility in CSS and JavaScript
  ](https://developer.mozilla.org/fr/docs/Learn/Accessibility/CSS_and_JavaScript/Test_your_skills:_CSS_and_JavaScript_accessibility#accessibilit%C3%A9_en_css_-_exercice_1)

Apply these principles to the study project.

## In short
- Images must always have the `alt` attribute or be hidden when read by a screen reader with the `aria-hidden=true` attribute
- Contrast between background and text colour should always be sufficient.
- An outline is necessary for guided reading, it should not be hidden.
- Links should be understandable and noticeable. Consider adding a title attribute or labelling their usefulness with the `aria-labelledby` attribute
- It should be possible to navigate between the different fields of a form with information about the expected content and format.

# 🧑🏽💻 Study project

## Installation
### Working environment
Your prerequisites:
- IDE or code editor of your choice (vscode for example)
- Node (v8.2.0 or later)
- NPM (included in the nodejs installer) or Yarn

### Clone the project locally
Open your favorite bash.
bash
git clone https://github.com/avoidwebid/everydaycats-sustainable-eshop.git
```

### Install
Open your favorite bash.

```bash
npm install
cp .env.example .env
```

### Démarrage du projet

```bash
npm run dev
```
