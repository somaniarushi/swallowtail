<h1>Welcome to Dark Mode 💫</h1>

An easy-to-use customizable dark mode react component.

<p> <a href="https://arushisomani.me/darkmode">Demo Page</a> </p>


## Install
```
npm i --save @asomani/darkmode
yarn add @asomani/darkmode
```

## Import
```
import DarkMode from '@asomani/darkmode'
```
## Use
Use it as a wrapper around everything you want to incorporate into low light mode (for most people, this would be the entire page –– and thus, the outermost component). An example:
```
ReactDOM.render(
  <DarkMode>
    <App />
  </DarkMode>, document.getElementById('root'));
```

## Basic Rules For Passing Arguments
- If you don't mention the prop (eg, if you pass in no value for background), the component will render into the [default palette that I've set up](palette.md). 
- If `""` is set as the value of the prop (eg, `<DarkMode background="" />`) then no color change shall take place for that passed in prop. 
- If a certain valid color is passed in as the value of the prop (ed, `<DarkMode background="black" /> `), then the HTML of that prop shall be rendered in that color.

## Passed-in Prop Options

#### `background`
Set the background of the entire page to the passed in color. If nothing is passed in, sets background color to `#121212`

#### `default`
Sets the default color of the text of the page, should it not be override by some more specific color. If nothing is passed in, sets text color to `#f0f0f0e5`

#### `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `code`
Sets the value for all specific text to passed in color. If nothing is passed in, sets text color to `#f0f0f0e5`

#### `a`
Sets the value for all links to passed in color. If nothing is passed in, sets text color to `#e454f7`

#### `ahover`
Sets the value for all links being hovered over to passed in color. If nothing is passed in, sets text color to `#7e0a8d`

#### `codebackground`
Sets the value for code line background color to passed in color. If nothing is passed in, sets background color to `#784e85b2`

## Example
```
import React from 'react'
import DarkMode from '@asomani/darkmode'

const App = () => (
  <div>
    <h1> This is h1 text. </h1>
    <h2> This is h2 text, </h2>
    This is text that will be overriden by the default parameter.
  </div>
);

ReactDOM.render(
  <DarkMode background="black" default="white" h1="orange" h2="green">
    <App />
  </DarkMode>, document.getElementById('root'));
```

## Contributing 🤝
If you're interested in helping out on this project, fork this repo. In the `darkmode` folder is the main component. It's pretty self-explanatory in that file, in my opinion. 

Currently, I'm working on:
- Adding some parameters to pass in
- Giving people the ability to pass in entire stylesheets
- Setting up an option to pass in a custom toggle
- Making toggle location more variable

_Made by ♥️ by asomani_
