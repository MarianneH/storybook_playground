# A Storybook documentation for Project 3

## getting started

- to integrate Storybook in your projects run `npx sb init` in the root folder of the project you want to use Storybook for
- run `npm install` if you received a project with Storybook already set up
- this will set you up with everything that's relevant you start your own Stories - example Stories included

## Terminoligy

- Stories: "A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support." - https://storybook.js.org/docs/react/get-started/whats-a-story

## How to use Storybook in your project

- each story comes with three files (two of them are already known to us from React)
  1. a .js/.jsx/.ts/.tsx-file holding our React component (e.g. Button.js)
  2. a .css/module.css-file that holds the styling of all our components (e.g. Button.module.css)
  3. a .stories.js file that holds all stories for a component (e.g. Button.stories.js) - this is where the magic happens. Here the component and .css are combined to create different stories (usecases) for our component

### 1. the component file

```js
import React from "react";
import "./Button.module.css";
import "../../App.css";
import * as PropTypes from "prop-types";

function Button(props) {
  const {
    variant = "primary",
    size = "medium_button",
    children,
    ...rest
  } = props;
  //destructure all props we need to specify our stories /
  //e.g. variant - to call a specific button color (this is a css class) or size (another css class)

  // we are using modules - so we have to adapt the way we intregrate css classes in our code.
  // -- for non-variable classes we use {styles.className}
  // -- for variable classes we use {styles[variableName]}

  // {children} will allow us to specify what is going on within the elements tags - this way we can change the button text later on
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small_button", "medium_button", "large_button"]),
};

export default Button;
```

## Videos and docs I followed

- Official Storybook documentation - https://storybook.js.org/docs/react/writing-stories/introduction
- How to connect props with Storybook controls - https://www.youtube.com/watch?v=vAh0KdRcXpI
- https://www.youtube.com/watch?v=FUKpWgRyPlU
