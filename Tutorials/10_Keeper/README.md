# Keeper App

## Leg 1

1. Create a new React app
2. Create the _App.jsx_ component
3. Create a _Header.jsx_ component that renders a **header** element
4. Create a _Footer.jsx_ that renders a **footer** element
5. Create a _Note.jsx_ component to show a **div** element with a **h1** for a title and a **p** for content
6. Make sure that the final website is styled like the example.
   - Be careful and thoroughful on how to implement the styles

---

## Leg 2

In this next part, we will use the content of the _notes.js_ file to render all those notes into our front end.

1. Modify the _Note_ component, so that via **props** it receives now the title and the content.
2. Using the **map** function, get the content from the _notes.js_ file and create all the notes that should be displayed in the interface. Don't forget the key element to avoid the warning on the console.

---

## Leg 3

1. Implement the add note functionality.
2. Implement the delete note functionality.

## In this third leg, we will not use the _notes.js_ file, we will rather start with an empty screen.

### Add note

1. Create a constant that keeps track of the title and content.

- Using the provided _CreateArea_ component, create state variables that keep track of both title and content. This could be done with independent variables or a complex state.
- Convert the _CreateArea_ component to a controlled component by linking the value of the variable to the field itself.
- Make sure that you are updating values when **onChange** event is triggered and you are updating the state accordingly.

2. Pass the new note back to the App.

- Create a method that triggers the submit event. (Make sure that it is not idly refreshing the screen)
- On the _App_ component, create a function that updates a notes array by adding a new element that is received as parameter.

3. Add new note to an array.

- Pass the previously created method via the **props** to the _Note_ component and trigger the method from the **onSubmit** method.
- Here, we must be aware that our notes array should be part of the **state** of the _App_ component. So, if you haven't done so, make sure that it is so.

4. Take array and render seperate Note components for each item.

- If you have reach this point, your notes should already be rendering accordingly; if there is an issue, make sure you review the **map** function we implemented in the last leg.

---

### Delete note

1. Callback from the Note component to trigger a delete function.

- On the _App_ component, create a function that will deal with the deletion.
- Share this function with the _Notes_ components via the **props**
- In the _Note_ component, add a listener to the **Delete** button and trigger the passed function.

2. Use the filter function to filter out the item that needs deletion.

- On the _App_ component delete function, use the **filter** method to remove the element that matches the passed parameter.

3. Pass a id over to the _Note_ component, pass it back to the App when deleting.

- Using the **key** value we got on the _Note_ component call the delete function of the _App_ component.
