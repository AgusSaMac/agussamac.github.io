![Ping coming soon page](images/Screenshot_ping_comin_soon_page_10_02_23.png)
# Frontend Mentor | Ping Coming soon page Solution by Agustin Sanchez
<p align="center">Solution URL: <a src="#">Github Repository</a></p>
<p align="center">Live Site URL: <a src="#">Live Site</a></p>

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

## My Process

### Built with

|![HTML5](images/html5.png)|![CSS3](images/css.png)|![JAVASCRIPT](images/javascript.png)|
|---|---|---|
|![NODE.JS](images/node.js.png)|![SASS](images/sass.png)|![GULP](images/gulp.png)|

When tackling the solution, I used a mobile first approach, for css I selected to use the module methodology. In this project I decided to play a bit with flexbox and grid, applying both to the same element but at diferent screen sizes


### What I learned

This challenge, was the first time I inserted html using javascript for a Frontend Mentor project, I had two rutes to go with it, one was applying text to an existing tag, while the other was creating the tag from the script and insert it into a div. I went for the second option as I felt that the solution worked better that way.

I also took the chance to apply the sweetalert library to give it a more interactive feel to it (*Hint: Introduce a correct email address*).

### Useful Resources

- [Email Regex](https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript) - I got the regular expression for email comparison from this stackoverflow answer.
- [SweetAlert2](https://sweetalert2.github.io/#handling-buttons) - Sweet Alert page.
- [Box shadow](https://www.cssmatic.com/box-shadow) - A page where you can configure the box shadow you want.
- [Option #1 fot the message creation](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) - An example of how the other way to insert text the body of the document, at an specific position.
- [Option #2 for the message creation](https://stackoverflow.com/questions/36556309/create-legend-in-javascript) - An example of how to create an html element from javascript, this is the route I used for this solution

### Author

- Website: - [agustinsanchez.dev](https://www.agustinsanchez.dev)
- Frontend Mentor - [@AgusSaMac](https://www.frontendmentor.io/profile/AgusSaMac)
- Twitter - [@agus490](https://www.twitter.com/agus490)
- GitHub - [AgusSaMac](https://github.com/AgusSaMac)