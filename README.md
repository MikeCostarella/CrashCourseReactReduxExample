# React/Redux Crash Course
* https://www.youtube.com/watch?v=93p3LxR9xfM

* Redux
  * A predictible state container for JavaScript apps.
  * https://redux.js.org/
  * Github: https://github.com/reduxjs/redux
  * Github Docs: https://github.com/reduxjs/redux/tree/master/docs

## Nuget Packages Suggested

* ES7 React/Redux/GraphQL/React-Native snippets
  * Snippets for creating React components
  * React Native support
  * PropTypes
  * GraphQL
  * 
## Why Redux?

* Manage the application state of an application with many components.

## Terminology

* Store
  * holds the whole state tree of your application.
  * the only to change the state inside it is to dispatch and action on it.
  * createStore(reducer, [preloadedState], [enhancer])
    * initially create store with a root reducer
* Reducer
* View
* Action Creator
* Reducer

# Sample Posting React App

## Components:

* Post Component
  * fetches a list of posts from JSONPlaceholder fake service
* PostForm Component
  * adds a post

## Installing Redux

* redux
  * independent state management library
  * can be used with a number of javascript development frameworks
* react-redux
  * library that binds reduct to react
* redux-thunk
  * middleware for redux
  * allows asynchronous calls from action creators

* npm i redux react-redux redux-thunk

* install a provider
  * a react component that is the glue for react and redux

# Redux DevTools

* Chrome redux extension
  * https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
  * need to setup app to interface with redux dev tools
  * add compose to store.js file

# React Generated Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
