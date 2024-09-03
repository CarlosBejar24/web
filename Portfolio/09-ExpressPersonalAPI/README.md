# Express API

This project will help us to test the responses we can get out of our express server, including some error handling processes.

This project uses html templates to create responses

---

### Get

- Allow the root path to return the _index.html_ file provided.
- Configure the **form** at _index.html_ to connect to the GET method of the **/greet** endpoint and retrieve the value from the form and log the value to console.
- Modify _index.html_ to include a message under the form greeting the user that just introduced its name. (**Hint**: Use scripting tags in the html file)
- Modify your code so your app keeps receiving names and then greeting them back all together.
- For every person in the list, allow them to be a link over which if you click, the page will return _wazzup.html_ configured with its name.
- Add a link that will send you back to the index page.

---

### Post

- Add a list to _index.html_ with the title **TODO List**
- Add a form directed towards the **/task** endpoint via the POST method and retrieve the new task from the form, and add it to the list.
- Every entry of the list should have a link to delete the item and two arrow (up/down) to order the list as desired.
- Let the GET method of the **/task** endpoint return all the registered tasks in a JSON file. (Only accessible via Postman)

---

### Delete

- To every item in the task list add a delete button directed to the _delete_ action of the **/task** endpoint.
- Then redirect it to the same page.

---

### Redirect

- Make sure that the url on top never changes

---

### Put

- On the PUT method of the **/greet** endpoint, receive a name as a parameter in the url and add it to the list of names.
- Return the list of all names in a JSON response.

This route will only be accesible via Postman.

---

### ERROR handling

- In the **/greet** endpoint that receives the call for forwarding to _wazzup.html_ check on the index value to see if it is within range. If it is not, using the next parameter, create a new handler that outputs the error message in the index page.
