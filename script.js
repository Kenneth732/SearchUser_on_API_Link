document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const searchInput = document.querySelector('#search');
    const searchTerm = searchInput.value;
  
    // Clear previous search results
    document.querySelector('#user-list').innerHTML = '';
    document.querySelector('#repos-list').innerHTML = '';
  
    // Perform user search
    fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(response => response.json())
    .then(data => {
      const users = data.items;
      users.forEach(user => {
        displayUser(user);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    // Display user details
    function displayUser(user) {
      const userList = document.querySelector('#user-list');
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = user.html_url;
      link.target = '_blank';
      link.textContent = user.login;
      li.appendChild(link);
      userList.appendChild(li);
  
      // Add event listener to retrieve user repositories when clicked
      li.addEventListener('click', () => {
        fetch(`https://api.github.com/users/${user.login}/repos`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json'
          }
        })
        .then(response => response.json())
        .then(data => {
          const repos = data;
          displayRepos(repos);
        })
        .catch(error => {
          console.error('Error:', error);
        });
      });
    }
  
    // Display user repositories
    function displayRepos(repos) {
      const reposList = document.querySelector('#repos-list');
      reposList.innerHTML = '';
  
      repos.forEach(repo => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';
        link.textContent = repo.name;
        li.appendChild(link);
        reposList.appendChild(li);
      });
    }
  });
  