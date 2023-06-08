document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    let searchInput = document.querySelector('#search');
    let searchTerm = searchInput.value;

    document.querySelector('#user-list').innerHTML = '';
    document.querySelector('#repos-list').innerHTML = '';

    fetch(`https://api.github.com/search/users?q=${searchTerm}`, {
        headers:{
            'Accept': 'application/vnd.github.v3+json'
        }
    }).then((res) => res.json())
    .then((data) => {
        const users = data.items;
        users.map(user => {
            displayUser(user);
        })
    }).catch(error => {
        console.log('Error:', error)
    });

    function displayUser(user){
        const userList = document.querySelector('#user-list');
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = user.html_url;
        link.target = '_blank';
        link.textContent = user.login;
        li.appendChild(link);
        userList.appendChild(li);

        li.addEventListener('click', () => {
            fetch(`https://api.github.com/search/users/${user.login/repos}`, {
                headers:{
                    'Accept': 'application/vnd.github.v3+json'
                }
            })
            .then((res) => res.json())
            .then((data) => {
                const repos = data;
                displayRepos(repos)
            }).catch(error => {
                console.log('Error', error)
            });
        });
    }

    // Display userrepositorys

    repos.forEach(repo => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';
        link.textContent = repo.name;
        li.appendChild(link);
        reposList.appendChild(li);
      });
})