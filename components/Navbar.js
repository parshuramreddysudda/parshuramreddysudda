import React from 'react'

export default function Navbar() {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", function () {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        const navigation = document.querySelector('nav');
        document.querySelector('.toggle').onclick = function () {
            this.classList.toggle('active');
            navigation.classList.toggle('active');
        }
    }

    return (
        <div>
            <header className="navbar shadow-md">
                <img src="gifs/BlogHeader_Motion.jpg" className="banner" alt="" />
                <a href="#" className="logo"> <h2>R a m</h2> </a>
                <div className="toggle"></div>
                <nav>
                    <ul>
                        <li><a href="">Home </a></li>
                        <li><a href="">About </a></li>
                        <li><a href="">Education</a></li>
                        <li><a href="">Services </a></li>
                        <li><a href="">Contact </a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}