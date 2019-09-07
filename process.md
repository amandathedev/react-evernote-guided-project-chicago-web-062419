Already set up:

- Rails routes
- Controller methods
- Models with ActiveRecord associations
- Seeds
- Schema
- Components with boilerplate

1. npm install & bundle install from frontend & backend folders
2. rails db:create db:migrate db:seed
3. Run frontend & backend server from respective folders: npm start & rails s
4. Check routes with rails routes in the terminal and/or Postman
5. Determine React component tree (see jpeg)
6. Determine where state lives
7. Imports and exports
8. Add constructor and super, set initial state (any class component with a form and any parent of two siblings that need to interact) --> Empty arrays based on schema table names
9. Fetch from the API in componentDidMount, create const variables of the API URL(s),
10. Add the fetched data to the empty aray with setState (note: if you console.log and still see an empty array, it's because it's asynchronous. console.log in the render instead)
11. Pass the array as a prop to child components

_Questions_

- Do I have to do two fetches (one from each URL)? Yes
