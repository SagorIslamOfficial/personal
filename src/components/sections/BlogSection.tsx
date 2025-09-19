import { useState } from "react";
import BlogCard from "../shared/BlogCard";
import { blogPosts, featuredPosts } from "../../data/blog";
import { GiClick } from "react-icons/gi";

const SKELETON_COUNT = 6;

const BlogSkeletonCard = () => (
    <div className="h-full flex">
        <div className="bg-[#23232b] rounded-md w-full flex flex-col border border-gray-800 animate-pulse">
            {/* Image skeleton */}
            <div className="w-full h-45 bg-gray-800 rounded-t-md mb-6" />
            {/* Date/category bar skeleton */}
            <div className="h-6 w-2/3 bg-gray-700 rounded-lg mx-4" />
            {/* Title skeleton */}
            <div className="h-5 w-3/4 bg-gray-700 rounded-sm mx-4 my-5" />
            {/* Description skeleton */}
            <div className="mx-4 mb-4">
                <div className="h-4 w-full bg-gray-700 rounded mb-2" />
                <div className="h-4 w-5/6 bg-gray-700 rounded mb-2" />
            </div>
            {/* Read More button skeleton */}
            <div className="h-6 w-30 bg-yellow-400/30 rounded-sm flex justify-center items-center mx-auto my-2" />
        </div>
    </div>
);

const BlogSection = () => {
    const [showAllArticles, setShowAllArticles] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;
    const allPosts = blogPosts;
    const totalPages = showAllArticles
        ? Math.ceil(allPosts.length / postsPerPage)
        : 1;
    const paginatedPosts = showAllArticles
        ? allPosts.slice(
              (currentPage - 1) * postsPerPage,
              currentPage * postsPerPage,
          )
        : featuredPosts;

    const handlePageChange = (page: number) => {
        setLoading(true);
        setTimeout(() => {
            setCurrentPage(page);
            setLoading(false);
        }, 700); // Skeleton duration
    };

    const toggleShowAll = () => {
        setShowAllArticles(!showAllArticles);
        setCurrentPage(1);
    };

    // Grid logic: show skeletons if loading, else posts
    let gridPosts: React.ReactNode[] = [];
    if (loading) {
        gridPosts = Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
            <BlogSkeletonCard key={idx} />
        ));
    } else if (paginatedPosts.length > 0) {
        gridPosts = paginatedPosts.map((post) => (
            <div key={post.id} className="h-full flex">
                <BlogCard post={post} />
            </div>
        ));
    } else {
        gridPosts = [
            <div key="no-articles" className="col-span-full text-center py-16">
                <i className="fa-solid fa-newspaper text-6xl text-gray-600 mb-6"></i>
                <h3 className="text-2xl font-bold text-white mb-4">
                    No articles found
                </h3>
                <p className="text-gray-light">
                    No articles available at the moment.
                </p>
            </div>,
        ];
    }

    return (
        <section id="articles" className="py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center mb-8">
                    <h2 className="text-2xl md:text-xl tracking-[1.5px] font-bold text-white whitespace-nowrap">
                        {showAllArticles ? "All" : "Latest"}{" "}
                        <span className="text-yellow-400">Articles</span>
                    </h2>
                    <div className="flex-1 h-px bg-gray-400/30 ml-45" />
                    <button
                        onClick={toggleShowAll}
                        className="flex items-center border-[1px] border-yellow-400/50 hover:border-yellow-400 text-yellow-400 rounded-md px-4 py-[5px] font-semibold text-[13px] tracking-[1.5px] transition-colors duration-200 cursor-pointer focus:outline-none"
                    >
                        {showAllArticles ? "Featured Articles" : "All Articles"}
                        <GiClick className="ml-2 h-4.5 w-4.5 text-white/70 animate-pulse" />
                    </button>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridPosts}
                </div>
                {/* Pagination */}
                {showAllArticles && totalPages > 1 && (
                    <div className="flex justify-center mt-10 gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() =>
                                    !loading && handlePageChange(i + 1)
                                }
                                className={`px-4 py-1 rounded-sm cursor-pointer border border-yellow-600/20 text-white font-semibold text-sm transition-colors duration-200 ${currentPage === i + 1 ? "bg-yellow-400 !text-black" : "bg-transparent"}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogSection;
