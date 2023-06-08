# BlackCoder@CodeWise.com


# > ```Search User On Git ```

> 1. The code starts by selecting the form element with the ID "form" and adding an event listener for the "submit" event. This event will be triggered when the form is submitted.
```javascript
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Code to execute when the form is submitted
});
```

> 2. Inside the event listener function, the `e.preventDefault()` statement is used to prevent the default form submission behavior, which would cause a page refresh.

> 3. The code then selects the input element with the ID "search" and retrieves the value entered by the user.
```javascript
const searchInput = document.querySelector('#search');
const searchTerm = searchInput.value;
```

> 4. Next, the previous search results are cleared by setting the `innerHTML` of the user list and repository list elements to an empty string.
```javascript
document.querySelector('#user-list').innerHTML = '';
document.querySelector('#repos-list').innerHTML = '';
```

> 5. The code performs a user search by making a fetch request to the GitHub API's user search endpoint, passing the search term as a query parameter.
```javascript
fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
    headers: {
        'Accept': 'application/vnd.github.v3+json'
    }
})
.then(response => response.json())
.then(data => {
    // Code to execute when the response is received
})
.catch(error => {
    console.error('Error:', error);
});
```

- The `data.items` is used because the response from the GitHub API's user search endpoint returns an object that contains an array of users in the `items` property. 

- When you make a fetch request and receive a response, you need to access the actual data contained within the response body. In this case, the response is converted to JSON using the `response.json()` method, which returns a promise that resolves to the parsed JSON data.

- The resolved JSON data represents the entire response body, including headers and other metadata. To access the specific array of users, which is contained in the `items` property of the JSON data, `data.items` is used.

- By assigning `data.items` to the `users` variable, you can then loop through each user in the array using `users.forEach(user => {...})` and pass each user to the `displayUser` function to display their details.

 Long Story short, `data.items` is used to access the array of users returned by the GitHub API's user search endpoint in the JSON response.


- 6. The response from the API is converted to JSON using the `response.json()` method. Then, the data is accessed and stored in the `users` variable.

 -. The code loops through each user in the `users` array and calls the `displayUser` function to display the user details.


> 6. The response from the API is converted to JSON using the `response.json()` method. Then, the data is accessed and stored in the `users` variable.

> 7. The code loops through each user in the `users` array and calls the `displayUser` function to display the user details.
```javascript
users.forEach(user => {
    displayUser(user);
});
```
- In the code snippet `fetch(`https://api.github.com/users/${user.login}/repos`, ...)` the `user.login` is used to construct the URL for fetching the repositories of a specific user.

- The `user` object represents an individual user obtained from the user search results. Each user object contains various properties, including `login`, which represents the username of the user.

- By appending `user.login` to the URL, it creates a dynamic URL that includes the username of the user for whom you want to fetch the repositories. For example, if the `login` property of the `user` object is `"octocat"`, the URL will be `https://api.github.com/users/octocat/repos`.

- This dynamic URL is used to fetch the repositories for the specific user. The GitHub API's user repositories endpoint requires the username to be specified in the URL to retrieve the repositories associated with that user.

> 8. The `displayUser` function is defined to create a list item element (`li`) and an anchor element (`a`) for each user. The user's GitHub profile link is set as the anchor's `href`, and their username is set as the anchor's text content. The list item is appended to the user list element (`#user-list`).
```javascript
function displayUser(user) {
    // Code to create and append the user element
}
```

> 9. An event listener is added to each user list item (`li`) to retrieve the user's repositories when it is clicked. The event listener makes a fetch request to the GitHub API's user repositories endpoint, passing the user's login (username) as a parameter.
```javascript
li.addEventListener('click', () => {
    // Code to retrieve and display user repositories
});
```

> 10. Inside the event listener, the response from the API is converted to JSON, and the data is accessed and stored in the `repos` variable.

> 11. The `displayRepos` function is defined to create a list item element (`li`) and an anchor element (`a`) for each repository. The repository's GitHub link is set as the anchor's `href`, and the repository name is set as the anchor's text content. The list item is appended to the repository list element (`#repos-list`).
```javascript
function displayRepos(repos) {
    // Code to create and append the repository elements
}
```

