const categoryList = document.querySelector("#category-list");
const blogSectionsContainer = document.querySelector('#blog-sections-container');
const topPostContainer = document.querySelector('#toppost-container');
const otherPostsContainer = document.querySelector('#otherposts-container');


let activeCategory = 1;

const formImageURl = (categoryName) =>{

    return `https://source.unsplash.com/random/${Math.floor(Math.random() * 1000)}X${Math.floor(Math.random() * 1000)}?${categoryName}`

}


const renderCategories = () => {
    categoryList.innerHTML = "";
    getAllCategories().forEach(category => {
        var li = document.createElement('li');
        li.textContent = category.name;
        if (category.id == activeCategory) li.classList.add('active');
        li.dataset.itemId = category.id;
        categoryList.appendChild(li);
    }); 

    listenOnCategoryItems();
}

const listenOnCategoryItems = () => {
    const allCateryItems = document.querySelectorAll("#category-list li");

    allCateryItems.forEach(item => {
        item.addEventListener('click', e => {
            switchActiveCategory(e.target.dataset.itemId);
            renderTopPost();
            renderOtherPosts();
        })
    })
}

const switchActiveCategory = (id) => {
    activeCategory = id;

    let currentActive = document.querySelector('#category-list .active');
    currentActive?.classList.remove('active');

    let newActive = document.querySelector(`li[data-item-id="${activeCategory}"]`);
    newActive.classList.add('active')


}

const renderTopPost = () => {
    const filteredPosts = getPosts()
        .sort((a, b) => b.likes - a.likes)
        .filter(blog => activeCategory === 1 ? true : blog.categoryId == activeCategory);

    if (filteredPosts.length < 1) return;

    const topPost = filteredPosts[0];

    const postCategory = getCategoryById(topPost.categoryId);

    if (topPost.imageUrl == '') topPost.imageUrl = `https://source.unsplash.com/random/?${postCategory.name}`;

    let topPostSection = TOPPOSTTEMPLATE
        .replace('{{POST-TITLE}}', topPost.title)
        .replace('{{POST-CATEGORY}}', postCategory.name)
        .replace('{{POST-CONTENT}}', topPost.content)
        .replace('{{POST-DATE}}', topPost.date)
        .replace('{{POST-IMAGE}}', topPost.imageUrl);

    topPostContainer.innerHTML = topPostSection;
}

const renderOtherPosts = () => {

    const posts = activeCategory == 1 ? getPosts() : getPostsByCategoryId(activeCategory);

    otherPostsContainer.innerHTML = "";


    posts.forEach(post => {

        const postCategory = getCategoryById(post.categoryId);

        if (post.imageUrl == '') post.imageUrl = formImageURl(postCategory.name);

        let blogPost = BLOGTEMPLATE
            .replace('{{POST-TITLE}}', post.title)
            .replace('{{POST-CATEGORY}}', postCategory.name)
            .replace('{{POST-CONTENT}}', post.content)
            .replace('{{POST-DATE}}', post.date)
            .replace('{{POST-IMAGE}}', post.imageUrl);

        otherPostsContainer.innerHTML += blogPost;

    })


}





renderCategories();
renderTopPost();
renderOtherPosts();



