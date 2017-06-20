---
# testing
- dive deeper into mocha to get some experience with TDD
- to do so, write a commentbox and a commentList and wirte some

---
mocha and chai in relation
![placehold](http://i.imgur.com/1MimNoF.png)

lets take a deeper look at /testing/tests/test_helper.js

- TODO rewrite test_helper
--  1. set up testing env to run like a browser
--  2. build 'renderComponent' helper, that renders a react class
--  3. build helper for simulating events
--  4. set up chaiJquery

---
- @1)
  - bundle.js renders to browser, one needs to run bundle.js in terminal
  - jsdom is the tool -> CLI html faker
  - creates a fake html document and assign it to global
  - window keyword(global scope in browser) is --> global keyword in node env
  - https://www.npmjs.com/package/jsdom
  - wire jquery up, to give jquery acces to jsdom
---
- @2)
  - 'renderComponent' renders every react class
  - make use of react-test-util
  - https://facebook.github.io/react/docs/test-utils.html#renderintodocument
  - create componentInstance with test-utils
  - map this via react-dom to html
  - return this whole expression as jquery element on global.document
  - export it
  - fight errors and renderComponent as child Element of <Provider>
  -- wrap component into provider and pass provider to redux
  -- pass the reducers to createStore
  - implement props || state as args to renderComponent
---
- @3)
  - 'simulateEvent' helper
  - add function to $ named simulate, that every instance of $
   - reference https://facebook.github.io/react/docs/test-utils.html#simulate
