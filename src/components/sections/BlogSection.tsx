import { useState } from 'react';
import BlogCard from '../shared/BlogCard';
import { blogPosts, featuredPosts } from '../../data/blog';

const BlogSection = () => {
    const [showAllArticles, setShowAllArticles] = useState(false);

    const toggleShowAll = () => {
        setShowAllArticles(!showAllArticles);
    };

    const displayPosts = showAllArticles ? blogPosts : featuredPosts;

    return (
        <section id="articles" className="py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-xl tracking-[1.5px] font-bold text-white whitespace-nowrap">
                        Latest{' '}
                        <span className="text-yellow-400">Articles</span>
                    </h2>
                    <div className="flex-1 h-px bg-gray-400/30 ml-18" />
                    <button
                        onClick={toggleShowAll}
                        className="border-[1px] border-yellow-400/50 hover:border-yellow-400 text-yellow-400 rounded-md px-4 py-[5px] font-semibold text-[13px] tracking-[1.5px] transition-colors duration-200 cursor-pointer focus:outline-none"
                    >
                        {showAllArticles ? 'Featured Articles' : 'All Articles'}
                    </button>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayPosts.length > 0 ? (
                        displayPosts.map((post) => (
                            <div key={post.id} className="h-full flex">
                                <BlogCard post={post} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <i className="fa-solid fa-newspaper text-6xl text-gray-600 mb-6"></i>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                No articles found
                            </h3>
                            <p className="text-gray-light">
                                No articles available at the moment.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
