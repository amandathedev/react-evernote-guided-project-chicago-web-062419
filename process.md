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
11. Pass the array as a prop to child components (NoteContainer -> Sidebar & Content)
12. Iterate through the notes array, pass the notes and IDs to child components (Sidebar -> NoteList)
13. Display the individual notes in the sidebar -> noteitem
14. Truncate note body with slice
15. Pass handleClick function from NoteContainer all the way down to NoteItem
16. Set displayContent as a state in NoteContainer, write a handleClick function to change the boolean
17. Add a selectedNote state to display the note that is clicked (use note.id)
18. Create, pass, and call a function to display the editForm on click. Use state to toggle
19. Pass selectedNote (now called 'note') from Content to NoteEditor
20. Display the content as input values in the edit form

_Questions_

- Do I have to do two fetches (one from each URL)? Yes

_Resources_
https://medium.com/better-programming/rendering-components-in-onclick-events-in-react-bc0d7b54e1cd
