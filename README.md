# Angular, React, and React Native Training 

## Exercises
Please refer the [exercises document for exercises given during the training sessions](./exercises.md)

## Screenshots of whiteboard explanations
- [What happens when we start Angular app in development](./session-demos/07-angular/what-happens-when-we-start-angular-app-in-development.JPG)
- [Relation between modules and other building blocks of Angular](./session-demos/07-angular/relation-between-modules-and-other-building-blocks-of-angular.JPG)
- [Redux combineReducers working - Part 1](./session-demos/10-redux/redux-combine-reducers-1.JPG)
- [Redux combineReducers working - Part 2](./session-demos/10-redux/redux-combine-reducers-2.JPG)

## Video recordings
- [Jul 22 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-22-2019.mp4)
- [Jul 23 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-23-2019.mp4)
- [Jul 24 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-24-2019.mp4)
- [Jul 25 2019 Part 1](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-25-2019-part-1.mp4)
- [Jul 25 2019 Part 2](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-25-2019-part-2.mp4)
- [Jul 26 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-26-2019.mp4)
- [Jul 29 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-29-2019.mp4)
- [Jul 30 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-30-2019.mp4)
- [Jul 31 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/jul-31-2019.mp4)
- [Aug 1 2019](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/aug-1-2019.mp4)
- [Basics of pagination](https://corporate-trainings.s3.amazonaws.com/verizon/angular-react-native-jul-22-2019/pagination-example.mp4) - Only basic are covered. You need to write more logic to display page numbers according to current page - example, display page numbers 6 - 10 when on page 7 etc.

## Some reference videos on HTML, CSS, Bootstrap, JavaScript, Angular and React
https://www.one-tab.com/page/HRY3xSZRSsS5X5dSQIKtWg

## How to run the server for products (Ajax example)
### Online server
[Online server link](https://awesome-store-server.herokuapp.com/products)

### Offline server
You need to run the server placed within server-products/ folder for the examples on Ajax.

- To run the server first go inside the server-products/ folder
```
$ cd server
```

- Next install all required node modules (server's dependencies). The dependencies for Node projects are given in package.json.
```
$ npm install
```

- To run the server
```
$ npm run json:server
```

- The server starts on the following URL
```
$ http://localhost:4201/
```

- You can access the data via various endpoints. For example, to retrieve the reviews for the product with id = 1, we can hit the endpoint...
```
http://localhost:4201/products/1/reviews
```

## Further exploration (pre-requisites)
- JavaScript
    - [w3schools.com](https://www.w3schools.com/) - Good if you are a beginner
    - [Mozilla Developer Network - MDN](https://developer.mozilla.org/en-US/) - Good once you are comfortable with the basics
    - [Eloquent JavaScript, by Marijn Haverbeke (Book)](http://eloquentjavascript.net/) - An excellent free book on JavaScript. This book has exercises at the end of each chapter. Attempting these would definitely help in your journey to understand and apply JS effectively.
- ES2015
    - [Exploring ES6, by Dr. Axel Rauschmayer (Book)](http://exploringjs.com/es6/) - In-depth treatement of ES2015 features
    - [Luke Hoban's GitHub repo on ES6 features](https://github.com/lukehoban/es6features#readme) - a version can also be found in the [Babel.js site](https://babeljs.io/learn-es2015/#ecmascript-2015-features-modules)
- [TypeScript language site](https://www.typescriptlang.org/)
- [Bootstrap documentation](http://getbootstrap.com/) - For more information on using Bootstrap
- [Promises - good article explaining its workings](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)

## Further exploration (Angular)
- [Angular site](https://angular.io/) - Make sure to visit this for more information - do not use documentation for Angular JS v1 which is at angularjs.org
- [Sharing data between unrelated components via a service](https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/)
- [Angular Material](https://material.angular.io/)
- [Using Bootstrap in Angular](https://angular-ui.github.io/bootstrap/)

## Links to CDN files for React library and Babel
- https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js
- https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js
- https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js

## Further exploration (React)

### A learning roadmap
- [This is a very extensive roadmap for further exploration. Too vast, but comprehensive - can be quite intimidating](https://github.com/adam-golab/react-developer-roadmap)

### Courses on React
- [List of courses on React](https://reactjs.org/community/courses.html)

### Emmet
- [Emmet](https://docs.emmet.io/)

### Libraries
- [React](https://reactjs.org/)
- [React - Community resources and Support - includes references to tools](https://reactjs.org/community/support.html)
- [Create React app](https://facebook.github.io/create-react-app/)
- [React router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [React Redux](http://react-redux.js.org)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) 
- [Redux Saga Introduction](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Quick introduction to Mobx](https://mobx.js.org/getting-started.html)
- [Mobx](https://mobx.js.org/)
- [Redux vs Mobx](https://www.youtube.com/watch?v=76FRrbY18Bs)
- [Immutable JS](https://immutable-js.github.io/immutable-js/)
- [Webpack - Step-by-step guide](https://webpack.js.org/guides)
- [Resources on Webpack](https://github.com/webpack-contrib/awesome-webpack)
- [Jest](https://jestjs.io/en/)
- [Enzyme](https://airbnb.io/enzyme/)
- [List of CSS in JS libraries for React](https://github.com/FormidableLabs/radium/tree/905227c122b1775775cf8d82c508cce4179cff08/docs/comparison)

### React Router
- [A practical introduction](https://auth0.com/blog/react-router-4-practical-tutorial/)

### Redux
- [Dan Abramov's article on Presentational + Container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Dan Abramov's free course on Redux (on Egghead) - Part 1](https://egghead.io/courses/getting-started-with-redux)
- [Dan Abramov's free course on Redux (on Egghead) - Part 2](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)

### Some options for form validations in React
- [Article by Michael Ries](https://medium.com/code-monkey/client-side-form-validation-in-react-40e367de47ba)
- [react-form-validator-core](https://www.npmjs.com/package/react-form-validator-core) which is inspired by [formsy-react](https://www.npmjs.com/package/formsy-react)
- [Form validations for React-redux based projects](https://davidkpiano.github.io/react-redux-form/docs.html)
