![Alt text](../../images/Screenshot_news_homepage_main_29_03_2023.jpeg)

# Frontend Mentor - News homepage

<p align="center" >Solution URL: <a href="https://github.com/AgusSaMac/agussamac.github.io/tree/main/HMTL5%20CSS3%20JS/news-homepage-main">Github Repository</a></p>
<p align="center" >LIve Site URL: <a href="https://agussamac.github.io/HMTL5%20CSS3%20JS/news-homepage-main/index.html#">Github Pages</a></p>


# Table of contents
- [Frontend Mentor - News homepage](#frontend-mentor---news-homepage)
- [Table of contents](#table-of-contents)
  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [My process](#my-process)
    - [HTML](#html)
    - [CSS](#css)
    - [Mobile](#mobile)
    - [Menu container.](#menu-container)
    - [Navbar](#navbar)
    - [Desktop](#desktop)
  - [Javascript](#javascript)
  - [Useful Resources](#useful-resources)
    - [Author](#author)

## The challenge

Your challenge is to build out this news website homepage and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Built with

The technologies used for this challenge were:


|![HTML5](../../techLogos/html5.png)|![CSS3](../../techLogos/css.png)|![JavaScript](../../techLogos/javascript.png)|
|---|---|---|

This challenge was for working with the vanilla side of things, without workflows, preprocessors etc. Hence the use of only the basics.

## My process

The first thing was to decide which approach I should take first, mobile or desktop; Personally I find it easier to work with the mobile side first so that's what I took care of first.
### HTML
the next part was to start working with the html, the project was divided in four segments: 

- header: 
  - logo
  - menu
- feed section:
  - principal/hero image
  - main title / main article
  - abstract
  - Read more button
- lateral section:
  - h2 title
  - news cards
- under section:
  - second news cards
- footer
  - atrributions

Once this was done It was time to work with the CSS.

### CSS
### Mobile
At the beginning of the project I hid the menu so I could concentrate on the main distribution of the page, this was because the menu should appear due to an active state and that would be approached once the mobile layout and styling was finished.

The first step was to define all styles and colors inside root for future use, the use of a reset to have the correct styling of the border box within the html tag adn declaring the basics

```
html {
    box-sizing: border-box;
    font-size: 15px;
    font-family: var(--inter);
    margin: 0;
    padding: 0;
}
```

To ensure the box sizing was correctly applied I added:
```
*, *:before, *:after {
    box-sizing: inherit;
}
```

Taking advantage of the fact that most of the elements of html have a `display:block` by default, it was only a matter of working on the styling.

Next step came the menu.
this step was divided in two main parts the setting of the container and the work on the menu itself.

### Menu container.

For this part the the container was fixed to the screen having it take the space from top to bottom and from right up to 65% of its container(body).

Finally to give it the darkened effect, a box shadow was applied to its side with a black color and an opacity of 60%.

For the button to be on the correct position a display flex with a direction of column as applied.

```
.menu {
    background-color: white;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 1.25rem;
    z-index: 1;
    -webkit-box-shadow: -200px 0px 0px 200px rgba(0,0,0,0.6);
    -moz-box-shadow: -200px 0px 0px 200px rgba(0,0,0,0.6);
    box-shadow: -200px 0px 0px 200px rgba(0,0,0,0.6);
}
```

### Navbar

For the Navbar the first part was to have it be on a column so a flex with a column direction was needed. also the menu is inthe middle of the screen so we use a position absolute and set it to 20% from the top.

The padding on the links was set to 1.2rem to give the spacing needed.

At this point, the navbar was almost completed but it was slightly off the center, a -50% translate on the Y axis later and it looked better.

```
.menu__nav {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
}
```

Due to the fact that the menu is required to take the front of the application once it is active, I gave is a `z-index` of 1.

### Desktop

Now on to desktop, even if the challenge declares the desktop limit to be 1440px I decided to have the change threshold at 750px, which would be around a the screen size for a tablet. 

As with the mobile development the work was from top to bottom, so the first step was to get rid of the hamburger menu and all the styling for it.

To center the page the margin at top and bottom was left in 1rem while the left and right was set to auto. Now it was time to set up the layout for this the use of grid areas was perfect, and the declaration of the same was done in the main selector.

```
@media (min-width:750px) {
    body {
        margin: 1rem auto;
    }
    main {
        display: grid;
        grid-template-areas: 
        "head head"
        "main side"
        "under under"
        "footer footer"
        ;
        grid-template-columns: 66% 33%;
        gap: 1rem;
    }
}
```
As you can see the entire layour was divided in two columns and four rows, taking into consideration  the layout of the feed(main) and the lateral(side) elements the columns were devided in 66% and 33%.

To save some code lines the grid area for each element was declared within its original selector, it doesn't cause a problem with the mobile layout because the grid is only active in the destop setting.

## Javascript

Now that the layout was ready, it was necesary to have a trigger for the navbar once the buttons of opening and closing of the menu were clicked.

So it was needed to have the buttons and the navbar assigned to constant variables for javascript to interact with them once the event click was triggered.

in this oportunity the event triggered arrow functions that added or removed the `hidden` class on the entire navbar.

```
// Variables for mobile navigation bar
const navbar = document.querySelector(".menu");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("menu-close");

// arrow functions that control navbar
openMenu.addEventListener('click', () => {
    navbar.classList.remove("hidden");
});

closeMenu.addEventListener('click', () => {
    navbar.classList.add('hidden');
});
```

Finally it was necesary to hide the buttons in the desktop layout for this a resize. a function named: reportWindowSize was created.
```
// Function to detect window size.
function reportWindowSize() {
    let w = window.innerWidth;
    
    if (w > 750) {
        openMenu.classList.add('hidden');
        closeMenu.classList.add('hidden');
        navbar.classList.remove('hidden');
    } else {
        openMenu.classList.remove('hidden');
        closeMenu.classList.remove('hidden');
        navbar.classList.add('hidden');
    }
}
```
Finally the function was called in two separate ocasions.

On the loading of the document:
```
document.addEventListener('DOMContentLoaded', function() {
    reportWindowSize();
});
```
And the resizing of the window.
```
window.onresize = reportWindowSize;
```

## Useful Resources

- [Box Shadow](https://www.cssmatic.com/box-shadow) - page of css tools generators(gradient, border radius, noise texture and box shadow)
- [MDN web docs - grid template areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) a good site to go for references.

### Author

- Website: - [agustinsanchez.dev](https://www.agustinsanchez.dev)
- Frontend Mentor - [@AgusSaMac](https://www.frontendmentor.io/profile/AgusSaMac)
- Twitter - [@agus490](https://www.twitter.com/agus490)
- GitHub - [AgusSaMac](https://github.com/AgusSaMac)