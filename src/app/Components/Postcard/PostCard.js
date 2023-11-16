import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import like from "../../../../public/ImageSrc/like.png";


const PostCard = ({post,author,index}) => {
    return (
        <motion.div className={`p-5 border-b-2`}

             initial={{
                 opacity: 0,
                 x: index % 2 === 0 ? 50 : -50
             }}
             whileInView={{
                 opacity: 1,
                 x: 0,
                 transition: {
                     duration: 1
                 }
             }}
             viewport={{  }}
        >
            <div className={`flex justify-between items-center`}>
                <h2 className={`font-extrabold text-slate-600 text-[18px] md:text-[16px]`}>{post.title}</h2>
                <Image src={like} alt={'Verified Icon'} className={`h-7 w-8 active:scale-75 duration-300 hover:cursor-pointer`} />
            </div>
            <p className={`mt-3 text-slate-500 md:text-[15px] whitespace-pre-line text-[16px] md:text-[14px]`}>{post.content}</p>
            <div className={`flex justify-between md:text-[12px]  font-semibold mt-6 text-[12px]`}>
                <div>
                    <span  style={{ color: '#22d3ee' }}>{post.type}</span> by {author.toLocaleLowerCase()}
                </div>
                <div className={`text-slate-400`}>
                    {post.time} • {post.readingRange} mins Read • {post.views} Views
                </div>
            </div>

        </motion.div>
    );
};

export default PostCard;
