# 🍹 CarbonShaker : sustainable food checker

## Conception

>La conception est la clef de l'impact des services numériques.
>- 🎯 80% des économies d'énergies et de ressources ont lieu à cette étape
>- 🎯 L'accessibilité des services numériques doit être conçue à cette étape pour ne pas engendrer de surcoûts.

### Concevez le Carbon Shaker

**⏱ 1 heure**

**🤝 Par groupes de 2 ou 3**

👉 Imaginez que vous concevez un assistant personnel de bilan carbone alimentaire.
- Un outil permettant aux utilisateurs de faire le bilan de leurs repas.
- Cet outil pourra : 
  - Fournir un référentiel d'impact des produits alimentaires du quotidien.
  - Permettre de déclarer un repas qui ne serait pas dans notre référentiel.
  - Maintenir un historique des repas.
  - Présenter des articles pour conseiller nos utilisateurs.

#### Conception fonctionnelle
  - Posez des questions à votre client, (ré)interrogez le besoin.
  - Dessinez des écrans (fil de fer) et des parcours utilisateurs.


  - Accessibilité
    - Quel référentiel ?
    - Indiquez sur vos écrans les attendus en terme d'accessibilité

#### Conception technique
  - Quelle choix de support : application mobile, web, les deux ou autre ?
  - Quelles technologies ?
  - Quelle compatibilité avec les devices de nos utilisateurs ?


  - Quel hébergement ? 
    - Cloud ou pas ?
    - Quelle disponibilité ?
    - Comment / Où est stocké notre référentiel ?
    - Comment / Où sont stockées les données de nos utilisateurs ?

## Projet d'étude
👉 Téléchargez et installez `nodejs` en version `lts`

👉 Clonez le projet `carbonshaker` en local sur votre poste

`git clone https://github.com/digital4better/sustainable-it-workshop.git`

👉 Installez le projet d'étude à la racine du projet `sustainable-it-workshop/carbonshaker`

`npm install`

👉 Lancez le projet 

`nx serve carbon-shaker`

## Eco-conception

Le projet contient plusieurs problèmes d'éco-conception que nous allons résoudre ensemble.

### Inclusivité

**⏱ 30 minutes**

La détection est faite via l'utilisation de l'API `BarcodeDetector` disponible directement dans le navigateur.

👉 Testez l'outil sous Chromium, puis sous Firefox.

L'API n'est pas implémentée sous Firefox. 
Vous allez utilisez le `lazy-loading` combiné au `code-splitting` pour ne charger les librairies et composants supplémentaires qu'en cas de besoin.

👉 Ajoutez la librairie `react-zxing` permettant la lecture des codes-barres sur tous les navigateurs : [npm react-zxing](https://www.npmjs.com/package/react-zxing)

👉 Créez un nouveau composant `universal-shaker.tsx` (sous `/pages`) et utilisez les ressources suivantes pour le charger uniquement au besoin
- [React route-based code-splitting](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
- Paramétrez le router dans le fichier `App.tsx` pour y ajouter cette logique
- Astuce : le booléen `('BarcodeDetector' in window)` vous permet de savoir si l'API BarcodeDetector est disponible dans le navigateur.

### Stratégie data et réseau

**⏱ 30 minutes**

Vous allez utiliser l'API Open Food Facts permettant de récupérer les informations d'un produit.
Actuellement, cette API est appelée directement depuis le front.
Utiliser une API en backend pour effectuer ces appels a plusieurs avantages :
- On crée un cache de résultats de requêtes.
- On fait profiter tous nos utilisateurs de ce cache applicatif.
- On peut résister à une coupure du service Open Food Facts `#resiliency`.
- On ne retourne à l'utilisateur que les informations nécessaires.

👉 Implémentez cet appel depuis le back de l'application
- Ajouter la dépendance mvn du [wrapper Java Open Food Facts](https://github.com/openfoodfacts/openfoodfacts-java)
```
<dependencies>
    <dependency>
        <groupId>pl.coderion</groupId>
        <artifactId>openfoodfacts-java-wrapper</artifactId>
        <version>0.9.3</version>
    </dependency>
</dependencies>
```
- Ajoutez une nouvelle ressource dans la classe `ProductResources` permettant la récupération d'une produit à partir de son code.
- En sortie, cette ressource produira un objet de type `ProductBody`, créez la classe correspondante.
- Remplacez l'appel du front par un appel au back `http://localhost:8080/product/${barcode}` dans `food-api.ts`.


- ️Astuce : ne pas oublier d'ajouter l'annotation `@crossorigin` sur votre nouvelle ressource


- Utilisez les ressources suivantes :
  - [Spring PathVarial](https://www.baeldung.com/spring-requestparam-vs-pathvariable#query-parameter-vs-uri-path)
  - [Spring ResponseBody](https://www.baeldung.com/spring-request-response-body#requestbody)
  - [Spring CORS](https://www.baeldung.com/spring-cors#1-crossorigin-on-a-requestmapping-annotated-handler-method)

👉 Créez un cache mémoire sur ces appels
- Utilisez la ressource suivante : [baeldung : Spring Cache Tutorial](https://www.baeldung.com/spring-cache-tutorial#1-cacheable).
- Constatez qu'en cherchant un produit pour la seconde fois, la réponse est plus rapide.

### Accessibilité

Notre version du service contient de nombreux problèmes d'accessibilité.

👉 Détectez et corrigez les problèmes
- Utiliser les outils précédemment utilisés

### Grid Intensity Awareness

👉 Ajoutez une conscience écologique à votre application.

#### Am I grey or green ?

#### CO2.js

#### RTE Eco2mix Régional

## Inclusion et Accessibilité

Une interface simple : site de promotion des chats dans la musique.

### Amélioration de l'accessibilité

👉 

### Librairie de composants accessibles

👉 Ajoutez de Radix au projet et remplacement des composants existants

### Kubernetes
- Installer virtualbox
- Installer minikube avec le driver virtualbox
