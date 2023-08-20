const blogPosts = [
    {
        id: 1,
        imageUrl: 'AI.png',
        category: 'Artificial intelligence and Machine Learning',
        title: 'Introduction to AI&ML',
        date: '2023-07-26',
        description: 'Learn about the new technology AI and ML',
        
    },
    {
        id: 2,
        imageUrl: 'sports.png',
        category: 'Sports',
        title: 'Games and Sports',
        date: '2023-07-25',
        description: 'Discover the importance of sports and games.',
        },
    {
        id: 3,
        imageUrl: 'food.png',
        category: 'Food',
        title: 'Delicious Recipes for Food Lovers',
        date: '2023-07-24',
        description: 'Try out mouthwatering recipes that will satisfy your taste buds.',
       
    },
];

// Function to create individual blog post elements
function createBlogPostElement(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post-box');

    const imgElement = document.createElement('img');
    imgElement.src = post.imageUrl;
    imgElement.alt = post.title;
    imgElement.classList.add('post-img');

    const categoryElement = document.createElement('div');
    categoryElement.classList.add('category');
    categoryElement.textContent = post.category;

    const titleElement = document.createElement('h3');
    titleElement.classList.add('post-title');
    titleElement.textContent = post.title;

    const dateElement = document.createElement('div');
    dateElement.classList.add('post-date');
    dateElement.textContent = `Posted on ${post.date}`;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('post-description');
    descriptionElement.textContent = post.description;

    postElement.appendChild(imgElement);
    postElement.appendChild(categoryElement);
    postElement.appendChild(titleElement);
    postElement.appendChild(dateElement);
    postElement.appendChild(descriptionElement);

    return postElement;
}

// Function to display blog posts on the page
function displayBlogPosts(posts) {
    const postContainer = document.querySelector('#blog .post');
    postContainer.innerHTML = '';

    posts.forEach((post) => {
        const postElement = createBlogPostElement(post);
        postContainer.appendChild(postElement);
    });
}

// Filter blog posts by category
function filterBlogPosts(category) {
    if (category === 'all') {
        displayBlogPosts(blogPosts);
    } else {
        const filteredPosts = blogPosts.filter(
            (post) => post.category.toLowerCase() === category.toLowerCase()
        );
        displayBlogPosts(filteredPosts);
    }
}

// Event listeners for filtering blog posts
const filterItems = document.querySelectorAll('.filter-item');
filterItems.forEach((item) => {
    item.addEventListener('click', () => {
        const activeFilter = document.querySelector('.active-filter');
        activeFilter.classList.remove('active-filter');
        item.classList.add('active-filter');

        const selectedCategory = item.getAttribute('data-filter');
        filterBlogPosts(selectedCategory);
    });
});

// Initial display of all blog posts
displayBlogPosts(blogPosts);