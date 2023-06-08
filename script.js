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
    }
})