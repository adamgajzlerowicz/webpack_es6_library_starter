This is a javascript library starter pack

## Why another starter

For any new appliation it is really easy to start with create-react-app. Unfortunately it doesn't support creating libraries. There are some strongly oppinionated starters, but there aren'a any generic ones with small footprint.


## Libs used

All of the libs are just devDependencies that are used to make the development easier.

    * webpack dev server for playground
    * bable for building
    * hot module replacement
    * eslint
    * flow
    * jest


## How to use it
```sh
git clone https://github.com/adamgajzlerowicz/webpack_es6_library_starter.git my-component
yarn
yarn start
```


### Available commands

    * yarn lint # eslint with --fix
    * yarn test # run jest
    * yarn start # run playgrond
    * yarn build # transpile src to lib and copy flow src
    * yarn flow # run flow

## Structure

    * ./src/index.js - empty library file
    * ./example - webpack-dev-server playground for testing
    * ./lib - output folder for `build`
