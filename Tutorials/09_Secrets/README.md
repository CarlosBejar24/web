# Authentication-Secrets

In this application we will implement a simple local and Google-based authentication process and we will save a secret in our DB. The provided code already has the EJS and a basic Server configured as the starting point.

The MongoDB model is also provided.

To complete this task you must:

1. Configure your application on Google console and get the client id

2. Configure passport to allow google authentication

- Remember to use create strategy
- Configure the serialize user method
- Configure the deserialize user
- Configure the google strategy
  - Remember to place the client and client secret in env variables

3. Implement the Google authentication endpoints:

- **/auth/google**
- **/auth/google/secrets**

4. Implement the **/login** endpoint

- For the **GET** method, render the _login_ component
- For the **POST** method, retrieve the information from the login form
- Search for it in the DB, if user/password match, Authenticate the user in the request header, and then send to **/secrets**, else send error and back to _home_

5. Implement the **/register** endpoint

- For the **GET** method, just render the _register_ component
- For the **POST** method, Get the information from the _register_ form
- Save the information to the DB.
- Once saved authenticate in session and send to **/secrets**,
- If there is an error on the register process, show error and allow the user to register again.

6. Complete the **/secrets** endpoint

- Check if the user is authenticated, if so, render the _secrets_ template, else redirect the user to the _login_ page

7. Complete the **/submit** endpoint

- For the **GET**, check if the user is authenticated; if so render the _submit_ component, else _login_
- For the **POST** method, check the authentication status, if it is correct, save the value provided in the form, else return to _login_

8. Implement the **/logout** endpoint
