import React from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/ImageSrc/ttt.svg"
const Navbar = () => {
    return (
            <nav className={`${styles.navBar} w-full h-20 flex justify-between items-center px-10 `}>
                <Link href={"/"} className={`${styles.logoMain} flex items-center md:scale-100 scale-90`}>
                    <Image src={Logo} alt={"Logo"} className={` pr-3 border-r-2 border-yellow-600 `} height={55}/>
                    <h2 className={`${styles.logoText} text-white pl-3 tracking-wider text-xl`}>STORIES</h2>
                </Link>
                <button className={`${styles.butCourses} p-3 rounded font-extrabold md:scale-100 scale-90`}>Courses</button>
            </nav>

    );
};

export default Navbar;