# Express Authentication, Cookies & Session

- Using the provided code, crete an app with:
  - A simple registration form that asks the user for a username, email and password.
  - Using **passport-local-mongoose** save the information in our database and set the **session** information
    - Once the user is registered, he should be granted access to the secrets page
  - Crate a form that will allow the just registered user to access the page only with its user and password.
  - Implement a _logout_ method
  - Check that you can no access the page with the path directly in the browser, and that if you are trying to access without authorization, you are sent to either register or login.
- Setup your secret phrase using a _.env_ file
- Implement a **google oauth 2.0** strategy and make sure that your user is able to access our page when he is authorized and not when he has not been granted access.

---

### Using OAuth 2.0

- To configure our app:
  1. Get our key from the 3rd party provider, in dev console APP_ID/CLIENT_ID
  2. Redirect to authenticate to the provider login
  3. Log in the service provider
  4. User grants permissions
  5. Receive Authorization from 3rd party
  6. Exchange Authorzation code by an Access token
- To use google auth 2.0:
  - Register our app on google console
  - Create new project
  - Go to: APIs and Services > Credentials
    - Configure the OAuth consent screen
      1. Name
      2. Logo
      3. Dev & support email
      4. Configure scopes: email, profile, openid
    - Create credentials: OAuth
      - App type: web
      - Name
      - Authorized JS origins: localhost:3000
      - Authorized redirect URIs: localhost:3000/auth/google/secrets
    - Download JSON
- Add CLIENT_ID and CLIENT_SECRET to .env file

---

## Cookies

- Using **cookie-parser** add a cookie to our session
- Check in Chrome's dev tools the value of the cookie we set to validate that we are indeed adding or removing data.

---

## Extra

- Implement a new secret section where you can submit some information and it is safely stored in the db and retrieved again when you access the user.
