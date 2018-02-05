# bottender-rollbar

[![npm](https://img.shields.io/npm/v/bottender-rollbar.svg?style=flat-square)](https://www.npmjs.com/package/bottender-rollbar)
[![Build Status](https://travis-ci.org/bottenderjs/bottender-rollbar.svg?branch=master)](https://travis-ci.org/bottenderjs/bottender-rollbar)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Rollbar middleware for [Bottender](https://github.com/Yoctol/bottender).

## Installation

```sh
npm install bottender-rollbar
```

## Usage

```js
const { middleware } = require('bottender');
const rollbar = require('bottender-rollbar');

bot.onEvent(
  middleware([
    rollbar({
      accessToken: 'POST_SERVER_ITEM_ACCESS_TOKEN',
      environment: 'staging',
    }),
    async context => {
      throw new Error('Boom!!');
    },
  ])
);
```

## License

MIT © [Yoctol](https://github.com/bottenderjs/bottender-rollbar)
