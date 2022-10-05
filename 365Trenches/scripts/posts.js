const blogPosts = [
    {
        id: 1,
        title: "Web3, Is it a thief?",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 2,
        likes: 0,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 2,
        title: "DRONES!!, Imposicant",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 2,
        likes: 30,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 3,
        title: "Neymar injured?",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 3,
        likes: 193,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 4,
        title: "Arsen Wenger to poach Lukaku, Kante from Chealsea this fall.",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 3,
        likes: 205,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 5,
        title: "BBN Diana has been evicted, ex-housmates invited for Biggie's Saturday Night Party",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 4,
        likes: 101090,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 6,
        title: "Mummy Wa and BeaU are supposedly back together after she acussed him of domestic violence",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 4,
        likes: 768,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 7,
        title: "Denola Grey to design Lady Gaga's wedding dress",
        date: '5/9/1989',
        imageUrl: "",
        categoryId: 5,
        likes: 20090,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },
    {
        id: 8,
        title: "The next fashion parade, is it gonna be another disaster?!",
        date: '5/9/2022',
        imageUrl: "",
        categoryId: 5,
        likes: 4639209,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae rerum praesentium quam recusandae soluta et sit totam, nulla officia accusamus placeat rem quod corrupti facilis explicabo alias magni id distinctio mollitia excepturi quaerat minus aut! Id, optio. Cum dolorem atque excepturi reprehenderit porro rem, illum architecto nihil numquam pariatur dolore quaerat sunt harum! Nobis facilis inventore voluptate quo nisi cupiditate modi numquam fugiat minus perspiciatis, libero sed est ea iste voluptatum veniam corrupti ipsam ut unde commodi, ullam recusandae necessitatibus labore. Error molestias exercitationem deserunt est quibusdam maiores, voluptas odit eos at ipsum, voluptatum incidunt in, dolorum fugit explicabo!"
    },

]

const getPosts = () => blogPosts;

const getPostsByCategoryId = (categoryId) => blogPosts.filter(b => b.categoryId == categoryId);

const getPostById = (id) => blogPosts.find(b => b.id == id); 