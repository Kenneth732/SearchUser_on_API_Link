let userList = [];

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the search term entered in the form input
  let searchTerm = document.getElementById('search').value;

  // Perform user search
  fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
    .then(response => response.json())
    .then(data => {
      userList = data.items;
      displayUsers(userList);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Clear the search input
  document.getElementById('search').value = '';
});

function displayUsers(users) {
  let userContainer = document.querySelector('#user-list');
  userContainer.innerHTML = '';

  users.forEach(user => {
    let userElement = document.createElement('li');
    let userLink = document.createElement('a');
    userLink.href = user.html_url;
    userLink.target = '_blank';
    userLink.textContent = user.login;
    userElement.appendChild(userLink);
    userContainer.appendChild(userElement);

    // Add event listener to retrieve user repositories when clicked
    userElement.addEventListener('click', () => {
      fetch(`https://api.github.com/users/${user.login}/repos`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
        .then(response => response.json())
        .then(data => {
          let repos = data;
          displayRepos(repos);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
}

function displayRepos(repos) {
  let reposContainer = document.querySelector('#repos-list');
  reposContainer.innerHTML = '';

  repos.forEach(repo => {
    let repoElement = document.createElement('li');
    let repoLink = document.createElement('a');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.textContent = repo.name;
    repoElement.appendChild(repoLink);
    reposContainer.appendChild(repoElement);
  });
}