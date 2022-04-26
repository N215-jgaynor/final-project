# Final Project

## Web 4 Link

https://in-info-web4.informatics.iupui.edu/~jgaynor/final-project/#

## Summary

This project is the accumulation of my skills learned throughout the N115 and N215 courses. These skills include but are not limited to: styling, responsiveness, the use of variables and mixins, loading everything dynamically into one page, jquery, and the mvc framework for building websites. Snippets of these skills can be found below.

## Responsiveness

Responsiveness was achieved on this website through the use of media queries. Media queries, like the example shown below, enabled me to change the styling of a page's content when the screen reaches a certain size. This allowed me to chang the content as needed to ensure everything fit on the page.

```css
@media screen and (max-width: 1280px) {
  .blog-five {
    max-width: 80%;
  }
}
```

## Mixins

Mixins proved to be very useful throughout this project. They helped optimize my code by taking snippets that were repeated on one or more pages and condensed it into one location while allowing me to change small details as necessary. The example below shows a mixin I used for creating buttons with the ability to customize the button size and spacing.

```css
@mixin siteButton($btnWidth: 122px, $btnHeight: 40px, $pMargin: 8px) {
  height: $btnHeight;
  width: $btnWidth;
  background-color: $site-red;
  font-family: $secondary-font;

  p {
    margin-top: $pMargin;
  }
}
```

## jQuery

This simplified version of JavaScript allowed me to set up my app.js and model.js files in a way that would allow the page to load dynamically. It also enables the site to be navigated via url.
