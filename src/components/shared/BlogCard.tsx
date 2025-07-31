import { type BlogPost } from '../../data/blog';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
                <div className="flex flex-col flex-1 gap-3 p-6 group-hover:bg-[#363641] transition-colors duration-300">
                    {/* Date and Category */}
                    <div className="flex items-center gap-2 bg-[#1e1e28] px-4 py-1.5 rounded-[10px] text-[12px] font-sm text-[#8c8c8e]">
                        <span>{post.date}</span>
                        <span>/</span>
                        <span>{post.category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-md font-medium leading-tight transition-colors duration-200">
                        {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#8c8c8e] text-sm leading-relaxed flex-1">
                        {post.excerpt}
                    </p>
                </div>

                {/* Read More Button */}
                <div className="py-2">
                    <div className="text-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm uppercase tracking-wider hover:text-white transition-colors duration-200 group/btn"
                        >
                            READ MORE
                            <MdKeyboardArrowRight className="text-2xl transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
