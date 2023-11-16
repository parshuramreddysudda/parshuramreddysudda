import React from 'react';
import Loader from './../components/Loader'
import Hero from './Hero';
import Clones from '../components/Clones'
import Navbar from './../components/Navbar';
import TechStack from './../components/TechStack';

export default function index() {
  var calculateProgress = (params) => {
    if (typeof window !== "undefined") {
      var progressbar = document.getElementById('progressbar');
      var totalHeight = document.body.scrollHeight - window.innerHeight;
      window.onscroll = function () {
        var progress = (this.window.pageYOffset / totalHeight) * 100;
        progressbar.style.height = progress + "%";
      }
      // console.log(element)
    }
  }
  return (
    <>
      {/* <Loader/> */}
      {/* <Navbar/> */}
      <Hero />
      {/* <Clones/> */}
      {/* <TechStack /> */}

      <div id="progressbar"></div>
      <div id="scrollpath"></div>
      <div id="percent"></div>
      {calculateProgress()}
    </>
  );
}
