const container = document.querySelector('.container');

const generateGrid = (columns, posts) => {

    container.innerHTML = '';


    // Store all column arrays which contain the relevant posts
    let columnWrappers = {};

    // Create column item array and add this to columnwrapper object
    for (let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = [];
    }

    for (let i = 0; i < posts.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    for (let i = 0; i < columns; i++) {
        let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column')

        columnPosts.forEach(post => {
            let postsDiv = document.createElement('div');
            postsDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;
            let overlay = document.createElement('div');
            overlay.classList.add('overlay');
            let title = document.createElement('h3');
            title.innerText = post.title;

            overlay.appendChild(title);
            postsDiv.append(image, overlay);
            column.appendChild(postsDiv);

        });

        container.appendChild(column)
    }



}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;

    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        generateGrid(1, posts);
    } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
        generateGrid(2, posts);
    } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
        generateGrid(4, posts);
    }

    previousScreenSize = window.innerWidth

});

// Page Load

if (previousScreenSize < 600) {
    generateGrid(1, posts);
} else if (previousScreenSize >= 600 && window.innerWidth < 1000) {
    generateGrid(2, posts);
} else {
    generateGrid(4, posts);
}


generateGrid(4, posts)