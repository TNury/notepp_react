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

- A `require` attribute on inputs.

### On  sidebar's folder

- Create a folder called **handlers**, in there you will place the handlers to each button in `sidebar.component.jsx`.

------

## On SCSS

- Find a way for the header to be the same in `home.componen.jsx` and `login.component.jsx`, you know what to do. 
- Change the `padding()` mixin so it can accept all padding values.

### On Header

- Add an hover animation on logo and background.