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

    function displayUser(user){}
})