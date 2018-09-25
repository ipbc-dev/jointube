
Architecture de base pour un site statique réactif et internationalisé à l’aide de :
- Vuejs 2
- Vue-i18n + Vue-router pour l’internationnalisation des pages
- Import de jQuery, Bootstrap et ForkAwesome
- YAML pour les fichiers de langue (plus lisible qu’un JSON mais automatiquement converti)
- SASS pour l’habillage
- Webpack 4 pour automatiser la construction de l’ensemble

## En prod
Pour construire le site :

```
npm install
npm run prod
```

Les fichiers sont placés dans le dossier public.
Le site fonctionne uniquement à la racine du domaine.
Les pages sont prérendues **avec les traductions dans le code html**

## En développement
Pour voir le site en local

```
npm run dev
```

Les changements s’appliquent en temps réel et se voient sur http://localhost:8080/.

## En preview
On peut forcer la construction du site en local avec la commande :

```
npm run preview
```

Mais l’intérêt consiste surtout à voir le rendu sur les Gitlab Pages.
Les fichiers sont placés dans un sous-dossier du dossier public
correspondant au nom du dépôt.
Les pages sont prérendues **sans les traductions dans le code html** (la `fallbackLocale` est utilisée).
Celles-ci sont chargées dynamiquement (important à savoir lorsqu’il faut débugger un script).

```
├── app
│   ├── App.vue
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   ├── img
│   │   └── scss
│   │       └── main.scss           # le fichier compilé est minifié dans /public/style.css
│   ├── components
│   │   ├── pages                   # exemple de pages (juste le titre change)
│   │   │   ├── About.vue
│   │   │   ├── Home.vue
│   │   │   └── HowItWorks.vue
│   │   └── partials
│   │       ├── Header.vue          # en-tête et menu de navigation
│   │       ├── I18n.vue            # switch en/fr
│   │       └── i18n.js             # script de changement de langue
│   ├── index.js                    # gestion de l’i18n + routage des pages + import des assets
│   └── locales                     # traductions
│       ├── en.yml
│       └── fr.yml
├── index.html                      # le fichier est simplement copié dans /public
├── package.json                    # liste des dépendances + définition de commandes npm run dev|prod
├── package-lock.json
├── postcss.config.js               # juste pour préfixer les css avec -webkit, -moz, -ms
├── README.md
└── webpack.config.js               # config webpack pour la construction du site
```
