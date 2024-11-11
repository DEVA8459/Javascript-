
In React, prop validation ensures that the components receive the correct type of props, improving the reliability and readability of your code. You can apply prop validation in React using **PropTypes**, which allows you to specify the types of props that a component should accept.

Here's a step-by-step guide on how to apply validation to props in React:

### 1. Install `prop-types`
To use prop validation, you first need to install the `prop-types` library if it's not already installed in your project:

```bash
npm install prop-types
```

### 2. Import `PropTypes` in your component
After installing, you need to import `PropTypes` at the top of your component file.

```js
import PropTypes from 'prop-types';
```

### 3. Define `propTypes` for your component
You can define the expected prop types by adding a `propTypes` property to your component.

Here’s an example of how you might do that:

```js
import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, age, isAdmin }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Admin Status: {isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

// Apply prop validation using PropTypes
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,  // Name must be a string and required
  age: PropTypes.number.isRequired,   // Age must be a number and required
  isAdmin: PropTypes.bool,            // isAdmin must be a boolean, but it's optional
};

// Default prop values (optional)
UserProfile.defaultProps = {
  isAdmin: false,  // Default value for isAdmin if not provided
};

export default UserProfile;
```

### Explanation:

- `name`: We are specifying that `name` should be a string and it is required (`isRequired`).
- `age`: Should be a number and is also required.
- `isAdmin`: Should be a boolean, but it’s optional, so we haven't used `isRequired`. Instead, we’ve set a default value using `defaultProps`.

### 4. PropTypes for common types

Here are some common types you can validate with PropTypes:
- `PropTypes.string` – for strings.
- `PropTypes.number` – for numbers.
- `PropTypes.bool` – for booleans.
- `PropTypes.array` – for arrays.
- `PropTypes.object` – for objects.
- `PropTypes.func` – for functions.
- `PropTypes.node` – anything that can be rendered (numbers, strings, elements, arrays).
- `PropTypes.element` – React elements.
- `PropTypes.oneOf(['val1', 'val2'])` – one of specific values.
- `PropTypes.arrayOf(PropTypes.number)` – an array of numbers.
- `PropTypes.shape({})` – an object with a specific shape.

### 5. Run-time warnings
When your component is passed invalid props (e.g., a string instead of a number for `age`), React will log warnings in the console during development. This doesn’t stop the app from running but helps catch bugs early.

### Example with `shape`
Here’s how you might validate an object’s shape:

```js
function UserProfile({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool
  }).isRequired
};

```

This will validate that `user` is an object with the specified fields, and that each field follows the given rules.

Would you like to see more complex examples, or apply this in your ONRES Hotel Management project?