# javascript starter pack for creating libraries

## Why another starter

For any new appliation it is really easy to start with create-react-app. Unfortunately it doesn't support creating libraries. There are some strongly oppinionated starters, but there aren'a any generic ones with small footprint.


## Libraries used

All used libraries are devDependencies to make the development easier, but they don't affect footprint of your component.

* webpack dev server for playground
* babel for building
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

* yarn lint     # eslint with --fix
* yarn test     # run jest
* yarn start    # run playgrond
* yarn build    # transpile src to lib and copy flow src
* yarn flow     # run flow

## Structure

* `./src` - empty library folder with example file
* `./example` - playground for testing
* `./lib` - output folder for `build`
