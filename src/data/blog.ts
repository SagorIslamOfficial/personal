export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image: string;
    imageAlt: string;
    slug: string;
    readTime?: string;
    featured?: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Getting started with react-router',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et consectetur debitis possimus eum assumenda quas earum recusandae, impedit hic similique.',
        date: '06 April 2023',
        category: 'PHP',
        image: '@assets/images/1.jpg',
        imageAlt: 'React Router Tutorial',
        slug: 'getting-started-with-react-router',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: '2',
        title: 'Getting started with react-router',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et consectetur debitis possimus eum assumenda quas earum recusandae, impedit hic similique.',
        date: '06 April 2023',
        category: 'PHP',
        image: '@assets/images/2.jpg',
        imageAlt: 'React Router Tutorial',
        slug: 'getting-started-with-react-router-2',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: '3',
        title: 'Getting started with react-router',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus et consectetur debitis possimus eum assumenda quas earum recusandae, impedit hic similique.',
        date: '06 April 2023',
        category: 'PHP',
        image: '@assets/images/3.jpg',
        imageAlt: 'React Router Tutorial',
        slug: 'getting-started-with-react-router-3',
        readTime: '5 min read',
        featured: true,
    },
    {
        id: '4',
        title: 'Advanced Laravel Techniques',
        excerpt: 'Discover advanced Laravel techniques that will take your PHP development skills to the next level. Learn about Eloquent relationships, queues, and more.',
        date: '15 March 2023',
        category: 'Laravel',
        image: '@assets/images/4.jpg',
        imageAlt: 'Advanced Laravel Techniques',
        slug: 'advanced-laravel-techniques',
        readTime: '8 min read',
    },
    {
        id: '5',
        title: 'Vue.js Best Practices',
        excerpt: 'Learn the best practices for Vue.js development including component composition, state management, and performance optimization techniques.',
        date: '28 February 2023',
        category: 'Vue.js',
        image: '@assets/images/1.jpg',
        imageAlt: 'Vue.js Best Practices',
        slug: 'vuejs-best-practices',
        readTime: '6 min read',
    },
    {
        id: '6',
        title: 'Building RESTful APIs with PHP',
        excerpt: 'A comprehensive guide to building robust and scalable RESTful APIs using PHP. Cover authentication, validation, and proper HTTP methods.',
        date: '10 February 2023',
        category: 'PHP',
        image: '@assets/images/2.jpg',
        imageAlt: 'Building RESTful APIs with PHP',
        slug: 'building-restful-apis-with-php',
        readTime: '10 min read',
    },
];

export const featuredPosts = blogPosts.filter(post => post.featured);

export const getPostsByCategory = (category: string) => 
    blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());

export const getPostBySlug = (slug: string) => 
    blogPosts.find(post => post.slug === slug);

export default blogPosts;
