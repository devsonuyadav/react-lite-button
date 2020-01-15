# react-lite-button

> A simple and liteweight react button with linear gradient capabilities and with awesome loader

> This package uses [react-spinners](https://www.npmjs.com/package/react-spinners) in order to use loader functions

[![NPM](https://img.shields.io/npm/v/react-lite-button.svg)](https://www.npmjs.com/package/react-lite-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

![example](https://raw.githubusercontent.com/sky32752/react-lite-button/master/example.png)

Buttom Loader example
![example with Loader](/react-lite-button_loader.gif)

## Install

```bash
npm install --save react-lite-button
```

## Usage

```jsx
import React, { Component } from "react";

import MyComponent from "react-lite-button";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

To enable loader

```jsx
import React, { Component } from "react";

import MyComponent from "react-lite-button";

class Example extends Component {
  render() {
    return <MyComponent loading = {isLoading} {...other props are listed down} />;
  }
}
```

| Prop Name    | Type             | Default                                    | Description                                                 |
| ------------ | ---------------- | ------------------------------------------ | ----------------------------------------------------------- |
| title        | string           | nameless                                   | Title of the button                                         |
| onClick      | function         | null                                       | onClick function after the button in clicked                |
| colors       | array            | ["#fe6b8b" , "#ff8e53"]                    | require two colors inorder work show linear-gradient        |
| textColor    | string           | white                                      | color of the text appears inside the button                 |  |
| textSize     | number           | 17                                         | fontSize                                                    |
| width        | number or string | '100%'                                     | specify the width of the button within the string or number |
| borderRadius | number or string | 3                                          | borderRadius of the button                                  |
| height       | number or string | 48                                         | height of the button                                        |
| shadow       | string           | "0px 3px 5px 2px rgba(255, 105, 135, 0.3)" | button shadow color                                         |

|loading| boolean| false | whether the button is currently |
|loaderType | string | ClipLoader | loader type => "BarLoader" , "BounceLoader" etc checkout for more [More loaders @](https://www.davidhu.io/react-spinners/)|

|loaderSize | number or string | 30 | size of the loader|
|loaderColor | string | 'white' | color of the loader|

## License

MIT © [sky32752](https://github.com/sky32752)
