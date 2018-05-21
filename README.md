# filesize.macro

[![Build Status](https://travis-ci.org/stereobooster/filesize.macro.svg?branch=master)](https://travis-ci.org/stereobooster/filesize.macro) [![Babel Macro](https://img.shields.io/badge/babel--macro-%F0%9F%8E%A3-f5da55.svg?style=flat-square)](https://github.com/kentcdodds/babel-plugin-macros)

> Webpack [`filesize-loader`](https://github.com/zouhir/filesize-loader) implemented as [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros)

## Usage

Similar to nodejs `require` call:

```js
import filesize from "filesize.macro";

const size = filesize("./image.jpg");
```

### Example of usage in create-react-app

```js
import coverImage from "./cover-image.jpg";
import filesize from "filesize.macro";
const coverSize = filesize("./cover-image.jpg");

const SomeComponent = () => (
  <div>
    <a href={coverImage}>{`Image size ${coverSize} in bytes`}</a>
  </div>
);
```

## Credits

Based on [pveyes/raw.macro](https://github.com/pveyes/raw.macro).

## License

MIT
