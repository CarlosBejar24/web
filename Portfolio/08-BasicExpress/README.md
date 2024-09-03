# Basic Express

This exercise should show how we can serve multiple static pages and basic interaction via form parameters

---

- Create an express server, make sure it is listening the port 3000
- Make the root path to return the _index.html_ file
- Configure the form in the index to call the post method of our app and calculate the BMI of the user
  - Your BMI is (weight / (height)^2)\*10,000

**Remember**: To use the _body-parser_ library to get the values from the form.
