# To Do

A file for ideas and features to be added

------

## On React

- **PRIORITY:** You need to find a way to set all `reducers` state slices back to default on user logoff.

##### Why?

Currently, when a user logs off with his `noteEditor` opened, the next user who logs in gets the previous user's `noteEditor` data.

For now your solution to this problem was setting `displayEditor` to false on logoff.

### On `login.component.jsx`

Add features: 

- Login with email and password.

### On  sidebar's folder

- Create a folder called **handlers**, in there you will place the handlers to each button in `sidebar.component.jsx`.

------

## On SCSS

- Create variables for font-size, transition speed and others if need be.
- Accelerate transition speed for mobile.
- Upgrade the mixing `flex-center-aligned` so it receives both `align-items` and `justify-content`.
- Review `special-button-styles` mixing.

