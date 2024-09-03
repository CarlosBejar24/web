# Express EJS

This exercise will ilustrate how do we use EJS to create dynamic content using Express.

---

### Initial config

- Create an express server, listening port 3000
- Configure the server so it can:

  - Deal with static content
  - Deal with EJS templates
  - Handle input/output JSON
  - Handle forms

- Let the root path return the _index.html_ file
  - Make sure that when it is displayed it is showing properly the logo and the style of the sheet

---

### Basic interaction

- Configure the form so it allows to submit the name of the user to the server via the **/login** endpoint.
  - Try it with an unsecured and secured version (GET/POST)
- The server should return with a simple message greeting the user by name and the security level in which the message arrived.

---

### Templates

- Create a partial that will represent the **header** of all the files of our app, and a partial that will represent the **footer** section of the same files.
  - Use the _index.html_ file as a base of the L&F
- By creating the _test.ejs_ template, now allow the system to greet the user with a more sophisticated message via an html page

**Important**: Make sure you will not loose the name of the user logged in.

---

### Blog posts

- Create a new template called _home.ejs_. You can take what you currently have in _test.ejs_ as a baseline.
- This template should:
  - Greet the logged user. If the name has been lost, it has to return to the _index.html_ file to allow the user to log back in.
  - List all the available posts in the system.
  - Have a form so the user can submit a new post. Each post should have at least Title and content.
- Every listed entry of the blog should be limited to 100 characters of summary, the first 100. If the entry is longer, elipsis should be used to signal that there is more to the entry.
- Every listed entry should have a _Read More_ link that should direct the flow to the _post.ejs_ template.
- This template (_post.ejs_) should allow us to edit the content of our entry or delete the whole thing.
