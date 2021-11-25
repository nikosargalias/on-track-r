# Nikos Argalias - Senior Front-end Engineer Code Challenge: MMT at the Movies!

## IMPORTANT - Movies API - Please Read

## I have ensured the following features have been added:

-   Page pagination persists throughout page reload, however page reload doesn't convolute history.
-   You can filter the books which are displayed via book title.
-   You can favorite books by clicking on the heart icon.
-   Favorited books persis through a redux store which is linked to local state.

Finally, I understand the project is a little messy, and there are plenty of improvements that can be made, but please consider the amounto f time I spent building this. I chose to opt for a slightly messier project with the ability to showcase more aspects of my skills (SCSS, React, Javascript, testing etc), rather than a cleaner more thought out project that doesnn't showcase as much! Please see below for some insight into each decision I made.

## Redux

I created a simple store with a reducer and actions to allow for favouriting books and storing them in local storage. Normally, I would not use redux for such a minor state management task, however I wanted to showcase my ability to setup a basic redux store and utilise it in the project.

## Jest - Unit Testing

I have implemented some tests which create basic snapshots of some components. In addition I implemented a test to verify the fetchBooks function returns the expected data from the API. Please note, due to the time crunch of this project, I didn't implement as many tests as would be necessary for a production application. In a real work environment I would spend the time to write tests for every possible scenario and/or pass it to the assurance engineer to produce more tests.

## create-react-app

Whereas in the past I have created my own configuration boilerplate for React applications, due to the time I had to spend on this project I decided to use Create-React-App which comes with a great starting point boilerplate.

## Accessibility

Some aria attributes have been added for improved accessibility. In addition, I ensure that when the Modal opens, the focus automatically goes to the close Modal button, and once the Modal closes, the button that initially opened the Modal is focused again - this is known as focus management and it's recommended for improving the keyboard experience. In addition to this, I have ensure all buttons are clickable with a keyboard. Finally, I have added alt attributes to the images.

## HTML & CSS/SCSS

In this project I utilised the BEM naming convention which stands for 'Block Element Modifier'. Using this methodology, blocks are top level abstractions (sections or components), with coupled child elements being named after their parent (block), followed by two underscores and the name of the child, for example:
Block: main-nav
Elements: main-navlist, main-navitem, main-nav\_\_link
Modifiers: main-navlist--blue used to manipulate the styles of blocks without global effect

## SCSS

I utilised SCSS because it adds many useful features that wouldn't be possible with vanilla CSS. For example, the use of mixins for media queries in combination with a map for the viewport breakpoints makes it easy to globally change the breakpoint values if ever required and make sure all your media queries use the same breakpoint values. The nesting structure perhaps makes it slightly nicer to read and understand what elements are block versus children versus modifiers.
Please Note - Due to the fact that I couldn't inspect exact pixel count in the Figma link that was provided, I eye balled the design. I also didn't make it my primary focus as I believe it was more important to see my ability with many different aspects of front end development. As a result, even though it may not be pixel perfect, please take into consideration that in a production environment, I would ensure that the design is pixel perfect with the prototype provided.

## Mobile Responsive Considerations

I have implemented some media queries to ensure it works on a mobile. While there are definitely more improvements that could be made, especially with the layout of the information and favourite button right above where the movie cards display, I wanted to do as much as possible within the time frame given. NOTE - Please do try changing it from mobile to desktop view to see what has been done!

## Git

I utilised git to track my progress, in addition I created some feature branches for certain milestones of the project.

## Extra Features

I spent a little time implementing a favourite movies feature whereby you can click on the heart icon to favourite books. This persists through page refresh via local storage and a redux store that was set up to hold the state. In addition, if you click on the button labelled 'Show Favourite books, you will immediately see all of the books which you have favourited.

## More considerations I could have taken

Another consideration I could have taken is to split up the file structure into Shared and Core components. For example, in the Shared components folder I could build no knowledge components such as Button, SearchInput etc. With the Core Components extending the Shared components when required. Once again, due to the swiftness and size of this project, I opted not to do this and stick with a single Components folder.

## p.s

I should have remembered that an object literal instantiates its property values before any value is accessed later on. I was simply thinking of method calls, whereas when you can them implicitely, (obj.method()), 'this' is bounded onto them (assuming they haven't been hard binded prior). It's a detail I certainly won't forget again! As for the other questions, I believe with a little revision, I should be adept at remembering the minute details of React, and I certainly admit that there is room for improvement on my part! If I did receive an offer, I would be very excited not only to share my knowledge, but to learn from yourself and your team, and keep improving my skills through personal development.

Kind regards,
Nikos
