# Website Portfolio

## Introduction

This is my website portfolio for my own personal projects to show to future employers or internships. Obviously any code from a project can simply be saved and seen over github, but the portfolio can serve as an additional piece to view some of the projects visually without having to run it with an IDE. The portfolio is only composed of two webpages. One is to display general information about myself and the other for displaying projects. The project page will be showing graphic designs, websites, and school projects. Although, I will keep updating the portfolio as I go while I am still a student. Any new update will be shown below under the **Updates** section without having to look into the commits here on github within this project. Regardless, the source code will still be uploaded to github for any new projects I add towards this portfolio.

To view my personal Web Portfolio online, visit: 
http://web-portfolio-lmr.herokuapp.com/

## Updates 

* This website portfolio was done back in 2017. Although, I updated my old portfolio to React in order to stay up to date with current web development practices. To take a look at my old portfolio, you can visit the source code *here*. You will notice that the react version looks much cleaner compared to the older version.

* The projects page was also updated by creating my own modal instead. Back when I didn't know much about JavaScript, I downloaded a website modal source code and added it to my portfolio instead. Now that I understand Javascript, I managed to create my own that works along with React.

* The projects page menu doesn't take you to a new url link unlike the previous version does. In my opnion, that seems unoptimal for a simple portfilio. Therefore, I added conditional statements to render a page based on handling states.

* While the portoflio can be considered a website itself, I will be adding seperate future websites under the projects website tab instead. In the meantime, the tab will show a message displaying *Page is currently under maintenance*. 

## Watch Content 

* The way the states where coded under the .jsx files need to be on the look out. For instance, Grid.jsx has a lot of code that could've been splitted into two between the normal view of graphics and its modal. The only reason why I didn't seperate the modal code to another .jsx file is because I was having difficulty updating the state from another .jsx file. Therefore, I piled up a lot of code within this file so I could have an easier time managing the states. As for switching between menu tabs, I passed down a function over props from FormContainer.jsx into Menu.jsx that retrieves the page id state that will be rendered between projects and websites tab. Indeed, the same method here could've been applied to create a seperate file that deals with the modal over the graphics tab. Nevertheless, I still have to learn Redux and should be able to come up with better code in handling the states that are being manipulated over this website portfolio. This will be added to the to-do list for future fixes.

* Added a server.js file to work along with Heroku deployment. If you ever use another platform to deploy (i.e. github), you might need to make some adjustments under this file and webpack.config.js.

* The CSS selectors to stay on the lookout can be found within the media queries already created. There's no need to add any new CSS features to the webpages at the moment other than dealing with making the website responsive with all types of devices.

## To-do & Fixes 

* Media queries need to still be added for portrait mode. Some devices work fine but other media queries need to be added.

* Apply redux in order to better control the states within react files.

* Add a programs tab to projects.html to display school programs that you think could be relevant to show.

* Organize your folders and files more neatly within your project. Instead of having everything mostly over the src folder, organize the content within other folders to make the source code look more organized. You might also want to organize the content within the public folder as well. Just be careful with the bundles.js for each html file. Make changes to the webpack file if any folder path changes.

* Upload the old web portfolio to github to show the improvements between the old and the new one. Include a link at the top under updates within the first bullet where it says 'here'.

* Redraw logo so it looks like an L and R







