document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();

    let searchInput = document.querySelector('#search');
    let searchTerm = searchInput.value;

    document.querySelector('#user-list').innerHTML = '';
    document.querySelector('#repos-list').innerHTML = '';


})