# lqip.macro

[![Build Status](https://travis-ci.org/stereobooster/lqip.macro.svg?branch=master)](https://travis-ci.org/stereobooster/lqip.macro) [![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros) [![Greenkeeper badge](https://badges.greenkeeper.io/stereobooster/lqip.macro.svg)](https://greenkeeper.io/)

> Webpack [`lqip-loader`](https://github.com/zouhir/lqip-loader) implemented as [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros)

## Usage

Similar to nodejs `require` call:

```js
import lqip from "lqip.macro";

const preview = lqip("./image.jpg");
```

## License

MIT
