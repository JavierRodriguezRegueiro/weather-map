# :partly_sunny: Weather-Map :partly_sunny:

This project allows to look for any city and see some weather information as the same time that show as its location in a map

## Getting Started

### Installing

Starting development environment

```
Clone repository
cd weather-map
npm install
npm start
```
In any case, here it is a [live demo](https://w-map.netlify.com)
### Running the tests

To run unit tests
```
npm test
```

To run cypress tests
```
npm run cypress:open
```
In case anyone wants to create a new test, name it **foo.test.js** and it will be executed if you use **npm test**


### Deployment

```
npm run build
```
It will create a build directory with all the resources

## Built With

* [React](https://reactjs.org) - JS library to develop UI components
* [Redux](https://redux.js.org) - Package to have a global state container
* [React-Redux](https://react-redux.js.org) - JS library to connect React components with Redux
* [React-Modal](https://www.npmjs.com/package/react-modal) - Package to create Modals
* [Chart.js](https://www.chartjs.org) - Package to create different charts
* [Jest](https://jestjs.io) - JS framework to test components
* [Cypress](https://www.cypress.io) - End-to-end testing library
* [Moment](https://momentjs.com/) - Package to manage dates
* [Enzyme](https://airbnb.io/enzyme/) - JS utility to overcome some restrictions with Jest
* [Mapbox](https://www.mapbox.com) - API to allow to create a map component and locate particular places and cities
* [DarkSky](https://darksky.net/forecast/40.7127,-74.0059/us12/en) - API to get weather info

## Authors

* **Javier Rodríguez** - *Initial work* - [JavierRodriguezRegueiro](https://github.com/JavierRodriguezRegueiro)
