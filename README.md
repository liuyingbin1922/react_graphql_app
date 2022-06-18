# react_graphql_app

This is the react App using graphQl to show SpaceX data;

For the requirements:

1. typescript good component design
2. clear data and state management
3. UI design

To finish the reqiurements above, I use create-react-app to init the TS project. For the UI design, because I want to display on the PC , so I choose Ant design UI for the view.
AS for the state management, you know , useState in React can finish. I use this hook to change the status of LaunchPast or LaunchNext.

By the way, in my opinion, I divide the `LaunchPast` and  `LaunchNext` into two Views, maybe they can be made a connection, I mean , `past` and  `next` have the time order, so as for the UI design, we can show the connection, like using clickEvent from `past` to `next` with the same id;

Because the time is short, the project still has some places to develop. For example, we can generate more powerful graphQl function, then we can show more models. And we also make the UI beautiful!

As for the GraphQL, I use apollo to finish the GraphQL; It is convenient. :)

Here are the things about create-react-app below.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

