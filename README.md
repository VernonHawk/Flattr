# Flattr

A flat price estimation service.
You enter the parameters of a flat and we give you a fair price for it - use to sell a flat or check another flat's price.

## How

We use a ML model running on Amazon lambda to predict the price.
This service is deployed on static Amazon S3 hosting and sends requests to the lambda.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

First of all, you will need [Node.js](https://nodejs.org) of an LTS version, and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/), and [git](https://git-scm.com/downloads).

Check if everything is OK by running `node -v`, `npm -v` or `yarn -v`, and `git --version` in the CLI:

```bash
> node -v
v12.13.1
```

```bash
> npm -v
6.11.3
```

```bash
> yarn -v
1.19.2
```

```bash
> git --version
git version 2.24.0.windows.2
```

You will also need an .env file, containing environment variables. You may use .env.example as an example.

### Installing

After you have installed [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en/), open the CLI at the projects root directory. Then install the node modules via `npm i` or `yarn`.

### Development and build

After installing the packages, you should be able to run these commands via `npm run <cmd>` or `yarn <cmd>`:

- `build` to build the project;
- `start` after building the project to launch it;
- `start:dev` to start a development server;
- `test` to run tests;
- `lint` to check the project with a linter.

## Built With

- [TypeScript](https://www.typescriptlang.org/) - a typed superset of JavaScript that compiles to plain JavaScript;
- [React](https://reactjs.org/) - a useful declarative UI library with a vast ecosystem;
- [Redux](https://redux.js.org/) - a powerful state-management solution;
- [Material UI](https://material-ui.com/) - a clean UI library for React;
- [Google Maps API](https://developers.google.com/maps/documentation/javascript) - a popular maps solution;
- [Webpack](https://webpack.js.org/) - a great javaScript module bundler.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
