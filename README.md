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

  // we are using CSS modules - so we have to adapt the way we intregrate css classes in our code.
  // -- for non-variable classes we use {styles.className}
  // -- for variable classes we use {styles[variableName]}

  // {children} will allow us to specify what is going on within the elements tags - this way we can change the button text later on
  // {..rest} lets us use e.g. an onClick action specified where this component is implemented
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      {...rest}
    >
      {children}
    </button>
  );
}
//propTypes let's us create "knobs" in Storybook - this way we can easily change e.g. the size of the element using radio selectors within the Storybook UI
Button.propTypes = {
  size: PropTypes.oneOf(["small_button", "medium_button", "large_button"]),
};

export default Button;
```

### 2. the .module.css file

```css
/* up top we are specifying the general & shared style of all stories for this component */
.button {
  font-family: var(--base-font);
  border: 2px solid rgba(255, 255, 255, 0);
  color: white;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 20px;
  cursor: pointer;
}
/* here we start specifying the different directions a component can take, e.g. sizes & colors */
.medium_button {
  padding: 8px 24px;
  font-size: 14px;
}
.small_button {
  padding: 6px 20px;
  font-size: 12px;
}
.large_button {
  padding: 10px 26px;
}

.primary {
  background-color: var(--primary);
}
.primary:hover {
  background-color: white;
  border: 2px solid var(--primary);
  color: black;
}
.secondary {
  background-color: white;
  border: 2px solid var(--primary);
  color: black;
}
.secondary:hover {
  background-color: var(--primary);
  color: white;
}
.success {
  background-color: var(--success);
}
.success:hover {
  background-color: white;
  border: 2px solid var(--success);
  color: black;
}

.danger {
  background-color: var(--danger);
}
.danger:hover {
  background-color: white;
  border: 2px solid var(--danger);
  color: black;
}
```

### 3. the .story.js file

```js
import React from "react";
import Button from "./Button";
//component story format

export default {
  // the title has to be unique within the whole project
  // Elements/ is creating a folder in Storybook - this makes it easy to organize the stories you have build
  title: "Elements/Button",
  // this is the component we want to build stories for
  component: Button,
  // these args have two tasks:
  // 1. defines the default of the component
  ///// this can be changed on the component dierectly (see Primary - which is changing the children element)
  // 2. these will create interactable fields in Storybook (e.g. you can change the text on the button within the Storybook UI)
  args: {
    children: "button",
    size: "medium_button",
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//Template.bind({}) is a standard JavaScript technique for making a copy of a function. We copy the Template so each exported story can set its own properties on it.
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "primary button", //here we change the default value for the Primary button
};

//each story get an own copy and we assign different arguments to it
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
};
```

## Videos and docs I followed

- Official Storybook documentation - https://storybook.js.org/docs/react/writing-stories/introduction
- How to connect props with Storybook controls - https://www.youtube.com/watch?v=vAh0KdRcXpI
- https://www.youtube.com/watch?v=FUKpWgRyPlU
