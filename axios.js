// run all this in function of index.html file for axios

//  status code 200 means request is successful
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                    1.GET =

axios
  .get("https://jsonplaceholder.typicode.com/todos/", { params: { id: 10 } }) // here we have given id in params
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// or

axios
  .get("https://jsonplaceholder.typicode.com/todos/10") // here we have given id in the url itself
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                    2.POST =

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "ab",
    body: "h d",
  })
  .then((response) => {
    // Update the content of the data container with the API response
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = JSON.stringify(response.data, null, 2);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// example 1 of post =

// Make a request for a user with a given ID

const axios = require("axios");

axios
  .get("/user?ID=12345")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

// example 2 of post =

// Make a request for a user with a given ID

const axios = require("axios");

axios
  .get("/user?ID=12345")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

// example 3

//  above request could also be done as shown with optional parameter params

axios
  .get("https://jsonplaceholder.typicode.com/posts", { params: { ID: 12345 } })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

// example 4 =

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                    3. PUT = it is used to update data and if not found it will create new data
//                                                             ( it will update all data )

const axios = require("axios");

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    userId: 1,
    id: 1,
    title: "New Title",
    body: "New Body Text",
  })
  .then((response) => {
    console.log(
      response.data
    ); /*   {userId: 1, id: 1, title: 'New Title', body: 'New Body Text'}
                                          here only data which we have write will only come */
    // or
    /* console.log(response)              output = {data: {…}, status: 200, statusText: '', headers: i, config: {…}, …}
               ""                           all thing will come in output . */
  })
  .catch((error) => {
    console.error(error);
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                    4. PATCH = it will update ONLY specified data

const axios = require("axios");

axios
  .patch("https://jsonplaceholder.typicode.com/users/1", {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//                                                        5. DELETE = this method is used to request the removal of a resource from the server.

const postIdToDelete = 1;
axios
  .delete(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`)
  .then((response) => {
    console.log(`Deleted post with ID ${postIdToDelete}`);
  })
  .catch((error) => {
    console.error(error);
  });

// -----------------------------------------------------------------------------------------------------------------

//                                        Axios Instance =

//                   -> We can create a new instance of axios with a custom config.

axios.create([config]);

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
