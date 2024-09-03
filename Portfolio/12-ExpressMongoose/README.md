# Express MongoDB + Mongoose

Using the provided code, complete the following tasks

- Using the _index.html_ document provided as a base, transform this page into a EJS template based page.
- Improve the L&F of the page
- Using the data inside of **public/data/f1_2023.csv** file, create a system that can store that information into a DB.
- The final page should have the form provided in the source code and below it a list of all the elements in the DB.
- The _options_ in the **select** elements should not be hard coded as provided, they should rather come from the backend system.
  - You can not create other schemas than the ones provided.
- Every entry on the list should be editable.
  - One suggestion is that once you click on edit for the entry, its information is placed in the form so you can edit it and save it. Careful with duplication.
  - A better approach would be to now turn all the editable values to input fields on the spot. (This may be useful so you can later implement that with React)
- Add a toggle button that would show the list by drivers or by teams.
- Use a **middleware** method to deal with the loading of the data when landing on the root path.
