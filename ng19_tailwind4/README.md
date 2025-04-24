# Tailwindcss Setup in Angular

https://tailwindcss.com/docs/installation/framework-guides/angular


ng install command 
```
npm install tailwindcss @tailwindcss/postcss postcss --force
```

Configure PostCSS Plugins
Create a **.postcssrc.json** file in the root of your project and add the @tailwindcss/postcss plugin to your PostCSS configuration.
```
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

Import Tailwind CSS
Add an @import to ./src/styles.css that imports Tailwind CSS.
```
@import "tailwindcss";
```