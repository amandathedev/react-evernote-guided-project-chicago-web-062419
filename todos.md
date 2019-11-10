_Viewing and Displaying Notes_

[X] Display all notes in the left sidebar.
[X] Displayed sidebar notes should show the title and a truncated body.
[X] When clicking a note from the sidebar, display its contents in the right panel.

_Editing Notes_

[X] When displaying a note in the right panel, show an Edit button.
[X] Clicking the Edit button will allow the user to edit the title and body in the right panel.
[X] When in edit mode, also show a Save button which saves the note via a PATCH request.
[X] When in edit mode, also show a Cancel button which discards any changes and reverts back to displaying the note.
[X] Clicking a different note while in edit mode should discard your changes and display the new note instead.

_Creating Notes_

[X] At the bottom of your left sidebar, show a New button. _Moved to top_
[X] Clicking New will create a new note via POST request with some default title and body.
[X] This new note should appear in the sidebar.

_Filtering Notes_

[X] Implement the filter to search through your notes list by title.

_Stretch Goals_
[X] Add the ability to delete a note
[X] Add the ability to filter by body, date created, date edited, etc.
[ ] Sorting by date created, date edited, alphabetical, etc.
[ ] Use react-router to create a multi-page app
[ ] User signup & login
[ ] Sharing notes with other users
[ ] Rich text formatting
[ ] Tagging
[ ] Emailing notes

_Filter by categories_
[X] Add category table to schema
[X] Add category to schema (db:drop, update migration files, db:migrate)
[X] Add categories to seeded data (db:seed)
[ ] Add category to edit form
[ ] Add/create via hashtags with auto-suggested categories: fetch the categories
[ ] Add category display to NoteViewer

_Tidy Up_
[X] Clicking a different note in the sidebar when one is already open should switch to the other note, not close the open one
[X] Sidebar scroll
[X] Change the seed data
[X] Downcase for filtering
[X] Can only switch between notes for seeded notes
[X] The submitted notes do not behave the same way as the seeded notes
