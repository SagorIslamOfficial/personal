import { type BlogPost } from '../../data/blog';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
    return (
        <div className="bg-[#23232b] border border-[#363641] rounded-md overflow-hidden transition-all duration-300 shadow hover:shadow-lg group flex flex-col h-full">
            {/* Blog Image */}
            <div className="relative w-full h-50 bg-black">
                <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 bg-[#292935]">
                {/* Inner contents */}
                <div className="flex flex-col flex-1 gap-4 p-6 group-hover:bg-[#363641] transition-colors duration-300">
                    {/* Date and Category */}
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 text-sm font-medium">
                            {post.date}
                        </span>
                        <span className="text-gray-400 text-sm">
                            /
                        </span>
                        <span className="text-yellow-400 text-sm font-medium">
                            {post.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg font-semibold leading-tight hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
                        {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                    </p>
                </div>

                {/* Read More Button */}
                <div className="p-6 pt-0">
                    <div className="text-center">
                        <button className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors duration-200 group/btn">
                            READ MORE
                            <i className="fa-solid fa-chevron-right text-xs transition-transform duration-200 group-hover/btn:translate-x-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
