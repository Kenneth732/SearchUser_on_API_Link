# BlackCoder@CodeWise.com
<!-- https://github.com/Kenneth732?tab=repositories -->
> script.js file
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

# _________________________________________________________________________________
> App.js file
# OR the other way round working with js 

-1. `let userList = [];`: This line initializes an empty array called `userList` to store the search results.

-2. `document.querySelector('#form').addEventListener('submit', (e) => {...});`: This attaches an event listener to the form with the id `form`. It listens for the form submission event.

-3. `(e) => {...}`: This is an arrow function that serves as the event handler for the form submission event.

-4. `e.preventDefault();`: This prevents the default form submission behavior, which would cause the page to refresh.

-5. `let searchTerm = document.getElementById('search').value;`: This retrieves the value entered in the input field with the id `search` and stores it in the variable `searchTerm`.

-6. `fetch(`https://api.github.com/search/users?q=${searchTerm}`, {...})`: This initiates a fetch request to the GitHub API's User Search Endpoint, using the `searchTerm` as the query parameter.

-7. `headers: {...}`: This specifies the headers for the request. In this case, it includes the Accept header to request the response in the v3 version of the GitHub API.

-8. `.then(response => response.json())`: This chain of `.then()` functions processes the response from the API call and converts it to JSON format.

-9. `.then(data => {...})`: This receives the parsed JSON data from the previous step and assigns the `data.items` (an array of users) to the `userList` variable.

-10. `displayUsers(userList);`: This calls the `displayUsers` function and passes the `userList` as an argument to render the user list on the page.

-11. `.catch(error => {...})`: This handles any errors that occur during the fetch request and logs the error to the console.

-12. `document.getElementById('search').value = '';`: This clears the input field by setting its value to an empty string.

-13. `function displayUsers(users) {...}`: This is the definition of the `displayUsers` function, which takes an array of users as an argument.

-14. `let userContainer = document.querySelector('#user-list');`: This selects the element with the id `user-list` and assigns it to the `userContainer` variable.

-15. `userContainer.innerHTML = '';`: This clears the content of the `userContainer` by setting its `innerHTML` to an empty string.

-16. `users.forEach(user => {...})`: This iterates over each user in the `users` array.

-17. `let userElement = document.createElement('li');`: This creates a new `li` element to represent a user.

-18. `let userLink = document.createElement('a');`: This creates a new `a` element to hold the link to the user's profile.

-19. `userLink.href = user.html_url;`: This sets the `href` attribute of the `userLink` to the user's GitHub profile URL.

-20. `userLink.target = '_blank';`: This sets the `target` attribute of the `userLink` to `_blank`, which opens the link in a new tab.

-21. `userLink.textContent = user.login;`: This sets the text content of the `userLink` to the user's login (username).

-22. `userElement.appendChild(userLink);`: This appends the `userLink` as a child to the `userElement`.

-23. `userContainer.appendChild(userElement);`: This appends the `userElement` as a child to the `userContainer`, which is the user list on the page.

-24. `userElement.addEventListener('click', () => {...})`:

 This attaches an event listener to each `userElement` that listens for a click event.

-25. `fetch(`https://api.github.com/users/${user.login}/repos`, {...})`: This fetches the repositories of the clicked user by making a request to the GitHub API's User Repositories Endpoint.

-26. `headers: {...}`: This specifies the headers for the request, including the Accept header for the v3 version of the GitHub API.

-27. `.then(response => response.json())`: This processes the response from the API call and converts it to JSON format.

-28. `.then(data => {...})`: This receives the parsed JSON data from the previous step and assigns it to the `repos` variable.

-29. `displayRepos(repos);`: This calls the `displayRepos` function and passes the `repos` array as an argument to render the repositories on the page.

-30. `.catch(error => {...})`: This handles any errors that occur during the fetch request and logs the error to the console.

-31. `function displayRepos(repos) {...}`: This is the definition of the `displayRepos` function, which takes an array of repositories as an argument.

-32. `let reposContainer = document.querySelector('#repos-list');`: This selects the element with the id `repos-list` and assigns it to the `reposContainer` variable.

-33. `reposContainer.innerHTML = '';`: This clears the content of the `reposContainer` by setting its `innerHTML` to an empty string.

-34. `repos.forEach(repo => {...})`: This iterates over each repository in the `repos` array.

-35. `let repoElement = document.createElement('li');`: This creates a new `li` element to represent a repository.

-36. `let repoLink = document.createElement('a');`: This creates a new `a` element to hold the link to the repository.

-37. `repoLink.href = repo.html_url;`: This sets the `href` attribute of the `repoLink` to the repository's GitHub URL.

-38. `repoLink.target = '_blank';`: This sets the `target` attribute of the `repoLink` to `_blank`, which opens the link in a new tab.

-39. `repoLink.textContent = repo.name;`: This sets the text content of the `repoLink` to the name of the repository.

-40. `repoElement.appendChild(repoLink);`: This appends the `repoLink` as a child to the `repoElement`.

-41. `reposContainer.appendChild(repoElement);`: This appends the `repoElement` as a child to the `reposContainer`, which is the repository list on the page.
