import React from 'react';
import Image from "next/image";
import like from "../../../../public/ImageSrc/like.png";


const PostCard = ({post,author}) => {
    return (
        <div className={`p-5 border-b-2`}>
            <div className={`flex justify-between items-center`}>
                <h2 className={`font-extrabold text-slate-600 text-[16px]`}>{post.title}</h2>
                <Image src={like} alt={'Verified Icon'} className={`h-7 w-8 active:scale-75 duration-300 hover:cursor-pointer`} />
            </div>
            <p className={`mt-3 text-slate-500 md:text-[15px] whitespace-pre-line text-[14px]`}>{post.content}</p>
            <div className={`flex justify-between md:text-[12px]  font-semibold mt-6 text-[12px]`}>
                <div>
                    <span  style={{ color: '#22d3ee' }}>{post.type}</span> by {author.toLocaleLowerCase()}
                </div>
                <div className={`text-slate-400`}>
                    {post.time} • {post.readingRange} mins Read • {post.views} Views
                </div>
            </div>

        </div>
    );
};

export default PostCard;