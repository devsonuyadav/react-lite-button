# react-lite-button

> A simple and liteweight react button with linear gradient capabilities

[![NPM](https://img.shields.io/npm/v/react-lite-button.svg)](https://www.npmjs.com/package/react-lite-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example

![example](/example.png)

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

| Prop Name   | Type             | Default                 | Description                                                 |
| ----------- | ---------------- | ----------------------- | ----------------------------------------------------------- |
| title       | string           | nameless                | Title of the button                                         |
| ----------- | --------         | ----------              | ---------------------                                       |
| onClick     | function         | null                    | onClick function after the button in clicked                |
| --------    | ---------        | ------                  | ---------------------------------------------               |
| colors      | array            | ["#fe6b8b" , "#ff8e53"] | require two colors inorder work show linear-gradient        |
| --------    | ---------        | ------                  | ---------------------------------------------               |
| textColor   | string           | white                   | color of the text appears inside the button                 |
| --------    | ---------        | ------                  | ---------------------------------------------               |
| textSize    | number           | 17                      | fontSize                                                    |
| --------    | ---------        | ------                  | ---------------------------------------------               |
| width       | number or string | '100%'                  | specify the width of the button within the string or number |
| --------    | ---------        | ------                  | ---------------------------------------------               |

## License

MIT © [sky32752](https://github.com/sky32752)
