## title
MySimpleShop

## motivation
I built this project to prove i am able to make simple shop using Reactjs and show my skills.

## framework and libraries
This Reactjs application was built with following libraries:
React 17.0.2, axios, bootstrap, classnames, formik, redux, redux-thunk, react-redux, react-router, react-router-dom, react-bootstrap, node-sass, cra-sass.

## features
    The application follows the REST API principle. It means is connected with the backend using REST API.
    At the top of the page is located a navigation bar with four links to choose from: Home, About, Shop, Login, and Register. On the right side of the page after mentioned links, you can find search input and a cart icon showing the number of products set in the cart. If you type product name in search input, it shows all descriptions and of all images belonging to the particular item.
    The home page was built using the bootstrap example template, all features (e.g carousel, grid) were created using a react-bootstrap library with bootstrap 5 capabilities.

    About Page contains the description of the page.
    The shop page contains a shop with a jumbotron at the top of the site and products displayed below the jumbotron. All items are organized using custom pagination with 12 items on one page.
    Every product has an image with a price visible on it and hidden on hover also a title on the right side of the image and below it, a short description, when the description is too long content is fitted using a custom scroll.
    Below these elements "Add To Cart" button and "In Stock" value is found.
    The button enables adding products to the cart, the value shows the number of available products.
    When "Add To Cart" is clicked "In Stock" variable is decreased until reaches 0, thus no longer products can be added to the cart.
    The cart is saved in local storage and is restored after refresh.

    The cart can also be preserved in the backend when a user is logged.
    After logout and logging in again, the cart is retrieved from the backend.
    Storing data in the backend (in my example Laravel app) is done by clicking the "CHECKOUT" button.
    Clicking "Add To Cart" changes the "In Stock" value that shows the number of available products and is decreased to reach 0 when no more products can be added.

    At the same time, the total quantity shown on the cart icon is updated accordingly.
    Hover over the cart icon to display a small window containing a table with the total number of selected products, product name, price of a single product, and the total number of all items in the basket, also total price and total quantity are placed below the table.
    When the user is not login, the button displays a prompt to sign in, and the next button allows to clear the cart stored in local storage.
    To clear the cart in local storage and on the backend user should click the buttons "CLEAR CART" and next "CHECKOUT".
    Login and Register pages are only visible when the user is not login.
    Both pages were built with the Formik library and have the following features: when the user name is too short, the password is too short, email is in not allowed format (not an email), two password fields on the registration form are not equal then prompts in red are shown with correct messages to help user pass login or register part of the app. When logging in, registering or logout failed at the backend general message is shown.

    The logout link is visible only when the user is logged in.
    Clicking it also causes logout not only in the front but also at the backend part of the app.
    The whole visual part of the app was built thanks to the Bootstrap 5 library according to Responsive Web Design rules.

    