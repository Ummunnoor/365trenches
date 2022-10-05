const categories = [
    {
        id: 1,
        name: 'all'
    },
    {
        id: 2,
        name: 'technology'
    },
    {
        id: 3,
        name: 'sport'
    },
    {
        id: 4,
        name: 'entertainment'
    },
    {
        id: 5,
        name: 'Fashion'
    },
];

const getCategoryById = (id) => categories.find(c => c.id == id);


const getAllCategories = () => categories;