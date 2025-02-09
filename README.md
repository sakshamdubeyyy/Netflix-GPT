# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#   N e t f l i x - G P T 
 
 


# Netflix GPT 

- Create React App
- Configured Tailwing CSS
- Header
- Routing of app
- Login form 
- Sign up form 
- Form vaidation using regex
- useRef Hook
- Firebase setup
- Deployment
- Implemented sign up with firebase
- Implemented Sign in user API
- Created userStore with Redux Toolkit
- Created userSlice
- Update userSlice with user information upon login
- Implemented Sign out
- update profile in the redux store upon login 
- BugFix: upon sign in the, the displayName is now being updated and can be used in the header component
- UnfixedBug: Upon sign up, the user is not updated in the redux store, we are not able to use the displayName upon the first time the user signs up, though when he logs in the second time, displayName is working
- Unsubscribed to onAuthChange function
- Added hard coded values to constants file
- Registered for TMDB API - created a new app - got access token
- Got data from TMDB API in the browse page   
- Pushed Now Playing Movies list to the redux store
- Custom hook to get now playing movie 
- Updated store with now playing movie data
- Planning for main container and secondary container
- Getting random movie from mainContainer.js
- Custom hook to get movie trailer
- Implemented video background with video title
- Embeded the youtube video and added autoplay
- Built secondary container
- Fetched multiple movie lists from multiple custom hooks
- GPT search feature
- GPT Search page
- GPT search bar
- Added Multi-langual feature to GPT Search page
- Integrated Open AI API to search movies
- Fetching movie details from TMDB of the ones given by Open AI API
- dispatched movies to redux store to display on GPT Search result page
- Made movie info for different movie cards
- When clicked on a movie card, it dispatches an action to show movie details and dispatches the movie details as well