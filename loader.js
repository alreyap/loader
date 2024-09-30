document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const postsTable = document.getElementById('postsTable');
    const tbody = postsTable.querySelector('tbody');

    loader.style.display = 'block';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            loader.style.display = 'none';
            postsTable.style.display = 'table';

            posts.forEach(post => {
                const row = document.createElement('tr');
                const titleCell = document.createElement('td');
                const descriptionCell = document.createElement('td');

                titleCell.textContent = post.title;
                descriptionCell.textContent = post.body;

                row.appendChild(titleCell);
                row.appendChild(descriptionCell);
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            loader.textContent = 'Failed to load posts';
            console.error('Error fetching posts:', error);
        });
});