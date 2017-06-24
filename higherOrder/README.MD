## a contemplation on higher Order functions

![alt](http://i.imgur.com/tDYSlae.png)

- https://facebook.github.io/react/docs/higher-order-components.html
- higher order components are created by using redux connect
- connect() wraps child component of provider and allows communication between them
- provider broadcasts to all childs and updates state if an state change event occured
---
## component example flow
- user tries to visit protected route
- `-> is user logged in?`
- `-> Yes - allow access`
- `-> No - redirect back to home route`

- the composition of higherOrder component will be
- - ResourceListComponent + requireAUTH = compose component that will check status before rendering
- - https://facebook.github.io/react/docs/context.html //deprecated?
  - to make component listen to router level
