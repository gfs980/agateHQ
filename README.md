# Takes about 15 minutes to build something simple like this. Used MUI to implement UI quicker therefore it didnt take me long time to complete the task

### Questions:

#### How would you optimize the performance of the list rendering, in these 2 or 3 combined lists:
My code already includes some optimization techniques. I used React.memo to memoize the Country component, and I am filtering the list of countries based on the search query. Here are a few additional suggestions:
At this moment there is no need to do a pagination since there isnt much data. But once the data grows it would be better to split the list into paginated screens
Lazy loading helps to improve performace as reduce load time as it loads first components within the screen

Can you explain the difference between state and props in React, and how would you use them for the search?
Ive used props for Cuontry component to pass values of each continent as a list of countries as an object that contained capital city and spoken languages
in general props it is data that being passed to the component. overall there are 3 states 2 of them useStates and 1 is a useMemo. State is used to store data within the component.
Ive used useState to store input string from search input and then passed it to useMemo so it can filter the list of countries that were passed as props.

How does TypeScript enhance the development experience in a React application?
it makes development easier and quicker since you can see the errors while developing the code.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
