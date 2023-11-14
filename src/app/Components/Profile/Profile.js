"use client";
import React, {useEffect, useState} from 'react';
import styles from './profile.module.css';
import Image from 'next/image';
import profileBackground from '../../../../public/ImageSrc/kk.png';
import ProfilePicture from '../../../../public/ImageSrc/profilePicture.png';
import diamondIco from '../../../../public/ImageSrc/diamond.png';
import verifiedIco from '../../../../public/ImageSrc/verified.png';
import star from '../../../../public/ImageSrc/star.png';
import like from '../../../../public/ImageSrc/like.png';
import view from '../../../../public/ImageSrc/view.png';
import heart from '../../../../public/ImageSrc/heart.png';
import PostCard from '@/app/Components/Postcard/PostCard';
import userData from '../../SampleData/smapleUser.json';
import {motion} from "framer-motion";
import PageWrapper from "@/app/PageWrapper";
const Profile = () => {

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const images = {
        hidden: {
            opacity: 0,
            x: 30,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            },
        },
    };


    function removeMiddleSpaces(inputString) {
        return inputString.replace(/\s/g, '');
    }



    return (
        <PageWrapper>
            <main className="block lg:grid grid-cols-12 lg:px-20 lg:mt-5 gap-4 ">

                <motion.div className={`col-span-8 lg:border-2 pb-10 ${styles.mainProfile} lg:rounded-2xl`}
                            initial={{
                                y:-100,
                            }}
                            animate={{y:0,}}
                            transition={{duration:1}}
                >
                    <div className={`relative ${styles.backImg}`}>
                        <div className={`lg:overflow-hidden h-48 lg:h-32 shadow-md shadow-gray-400 ${styles.backImg} lg:rounded-t-2xl `}>
                            <Image src={profileBackground} alt={'Profile Background'} className="w-full h-48 lg:h-42 lg:-mt-[7%] lg:-mb-[3%] object-fill" priority />
                        </div>

                    </div>
                    <section className={`grid md:px-96 px-44 relative`}>
                        <div className={`mb-52 mt-3 lg:mb-0 ${styles.profileDetail}`}>

                            <Image src={ProfilePicture} alt={'Profile Picture'} className={`${styles.profilePic} absolute -top-7 left-[9%] lg:-top-10 lg:w-[20%] rounded-full border-4 lg:border-[5px] border-slate-500 border-opacity-50`}
                                   width={140}
                                   height={140}
                            />
                            <motion.div  className={`flex items-center absolute left-[45%] md:left-[35%] ${styles.profileMainDetails} `}
                                         initial={{
                                             x:100,
                                         }}
                                         animate={{x:0,}}
                                         transition={{duration:1}}>
                                <h2 className={` font-bold md:mr-5 text-slate-700 text-[130%] lg:text-[170%] ${styles.name}`}>{userData.name}</h2>
                                <Image src={diamondIco} alt={'Diamond Icon'} className="h-6 w-6" />
                                <Image src={verifiedIco} alt={'Verified Icon'} className="h-7 w-8" />
                            </motion.div >
                            <div className={`flex absolute left-[45%] md:left-[35%] top-10 mt-4 text-center lg:gap-4 gap-2 ${styles.follow} `}>
                                <div>
                                    <div className="border-2 px-3 w-24 rounded font-bold lg:text-xl text-slate-400 shadow-md shadow-gray-400">{userData.followers}</div>
                                    <div className="text-slate-400 text-sm mt-1">Followers</div>
                                </div>
                                <div>
                                    <div className="border-2 px-3 w-24 rounded font-bold lg:text-xl text-slate-400 shadow-md shadow-gray-400">{userData.following}</div>
                                    <div className="text-slate-400 text-sm mt-1">Following</div>
                                </div>
                            </div>
                            <div className={`absolute left-[10%] top-24 md:top-28 ${styles.profileSecondaryDetail}`}>
                                <motion.div className="mt-8 ml-2"
                                            initial={{
                                                x:-100,
                                            }}
                                            animate={{x:0,}}
                                            transition={{duration:1}}>
                                    <h2 className={`mb-2 ${styles.position} text-slate-500 lg:text-lg`}>Co-founder & CEO at Terribly Tiny Tales</h2>
                                    <a href={`https://www.instagram.com/anujgosalia`} target={"_blank"} className="text-sm font-semibold active:scale-75 duration-300 hover:cursor-pointer" style={{ color: '#22d3ee' }}>http://www.instagram.com/anujgosalia</a>
                                </motion.div>
                                <motion.div className="flex gap-4 mt-5"
                                            variants={variants}
                                            initial="hidden"
                                            animate="show">
                                    <motion.div className="flex items-center text-center text-slate-400 text-sm font-semibold" variants={images}><Image src={star} alt={'Diamond Icon'} className="h-8 w-8 active:scale-75 duration-300 hover:cursor-pointer" />125</motion.div>
                                    <motion.div className="flex items-center text-center text-slate-400 text-sm font-semibold" variants={images}><Image src={like} alt={'Verified Icon'} className="h-8 w-9 active:scale-75 duration-300 hover:cursor-pointer" />12</motion.div>
                                    <motion.div className="flex items-center text-center text-slate-400 text-sm font-semibold" variants={images}><Image src={view} alt={'Diamond Icon'} className="h-8 w-8 active:scale-75 duration-300 hover:cursor-pointer" />57.8k</motion.div>
                                    <motion.div className="flex items-center text-center text-slate-400 text-sm font-semibold" variants={images}><Image src={heart} alt={'Verified Icon'} className="h-8 w-9 active:scale-75 duration-300 hover:cursor-pointer" />26.0k</motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </motion.div>
                <div className={`col-span-4 mt-10 border-2 ${styles.mainPost} relative rounded-tr-2xl rounded-b-2xl `}>
                    <div className={`${styles.postHead} w-28  py-2 bg-white text-center absolute -top-10 -left-0 font-bold border-t-2 border-l-2 border-r-2 rounded-t-xl`} style={{ color: '#06b6d4' }}>{userData.posts.length} Posts</div>
                    <motion.div className="lg:overflow-y-auto overflow-x-hidden lg:max-h-[425px] mt-3"
                                initial={{
                                    y:-100,
                                }}
                                animate={{y:0,}}
                                transition={{duration:1}}>
                        {userData.posts.map(postData => (
                                <PostCard post={postData} key={postData.postID} author={removeMiddleSpaces(userData.name)} />
                        ))}
                    </motion.div>
                </div>


            </main>
        </PageWrapper>
    );
};

export default Profile;