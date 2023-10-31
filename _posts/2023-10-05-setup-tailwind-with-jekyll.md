---
layout: post
title: Setup Tailwind CSS in Jekyll site
categories: jekyll, tailwind
permalink: use-tailwind-css-with-jekyll
---

Tailwind CSS is a popular CSS framework that allows you to build custom designs without writing any CSS. It provides a set of utility classes that you can combine to create any look you want. Jekyll is a static site generator that makes it easy to create and maintain websites.

To set up Tailwind CSS in Jekyll, you will need to install PostCSS, a CSS preprocessor that is required to use Tailwind. You will also need to install the Jekyll PostCSS plugin, which integrates PostCSS into the Jekyll build process.

Once you have installed all of the necessary dependencies, you can create a Tailwind configuration file and import the Tailwind stylesheets into your CSS file.

## Step 1: Install PostCSS and Tailwind
To install PostCSS and Tailwind, run the following command in your terminal:

npm install tailwindcss @tailwindcss/typography cssnano postcss postcss-import autoprefixer `--save-dev`

This will install Tailwind CSS and its peer dependencies, as well as the PostCSS plugins that are required to use Tailwind.

## Step 2: Set Up PostCSS and Gemfile
If you are using a Gemfile, add the following gem to it:
```yml
gem 'jekyll-postcss'
```
This will install the Jekyll PostCSS plugin.

Run the following command to install the gem:
```powershell
bundle install
```

## Step 3: Set Up Tailwind CSS Config File
Create a new file called `tailwind.config.js` in the root directory of your Jekyll site. This file will contain your Tailwind configuration settings.

Here is an example of a basic Tailwind CSS config file:
```js
module.exports = {
  purge: ['./index.html', './_includes/**/*.html', './_layouts/**/*.html'],
  theme: {},
  variants: {},
  plugins: [],
};
```
The `purge` option tells Tailwind which files to scan for CSS classes. This is important because Tailwind will remove unused CSS classes from your production build, which can improve the performance of your site.

## Step 4: Import Tailwind Stylesheets to Your CSS File
Open your main CSS file `(usually assets/css/main.css)` and import the Tailwind stylesheets:
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```
This will import all of the Tailwind CSS classes into your CSS file.

## Step 5: Make Live Reloading of CSS Work
If you are using a Jekyll development server, you can enable live reloading of CSS by adding the following line to your `_config.yml` file:
```yml
livereload: css
```
This will cause the Jekyll server to automatically refresh your browser whenever you make a change to your CSS file.

## Step 6: Deployment
When building your Jekyll site for production, be sure to set the `JEKYLL_ENV` and `NODE_ENV` environment variables to production. This will tell Tailwind to purge unused CSS classes and optimize your CSS output.

To do this, run the following command in your terminal:
```powershell
JEKYLL_ENV=production NODE_ENV=production jekyll build
```
This will build your Jekyll site for production and create a _site directory containing your production-ready files.

You have now successfully set up Tailwind CSS in Jekyll. You can now start using Tailwind to build custom designs for your Jekyll site without writing any CSS.