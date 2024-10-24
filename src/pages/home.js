import React from 'react';
import './style.css';
import Blog from '../components/blog_one';
import Blog_two from '../components/blog_two';
import Blog_three from '../components/blog_three';
import Blog_four from '../components/blog_four';
import Blog_five from '../components/blog_five';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <div className='main flex h-[7410px] w-[1210px] m-[8px] rounded-lg'>
        <div className='parara h-[50px] w-[185px] mt-[35px] ml-[85px] absolute'>
        <h1 className='para flexh-[30px] w-[170px] p-[5px] mt-[0px] ml-[10px] font-bold absolute'>Top Searches</h1>
        </div>
        <div class="line-effect h-[55px] w-[4px] mt-[29px] ml-[75px] absolute"></div>
        <div class="line-effect h-[4px] w-[100px] mt-[25px] ml-[75px] absolute"></div>
        <div class="line-effect h-[55px] w-[4px] mt-[35px] ml-[275px] absolute"></div>
        <div class="line-effect h-[4px] w-[100px] mt-[90px] ml-[179px] absolute"></div>
        {/* old-navbar */}
        <div className='con h-[245px] w-[1120px] mt-[110px] ml-[45px] relative'>
          <div className='con_one h-[200px] w-[180px] rounded-xl'>
          <a href="#Article1">
          <img className='h-[195px] w-[170px] cursor-pointer rounded-2xl'src={require('../images/Screenshot 2024-10-23 185439.png')} alt='Article_one'/>
          </a>
          </div>
          <div className='con_two h-[200px] w-[180px] rounded-xl'>
          <a href="#Article2">
          <img className='h-[195px] w-[170px] cursor-pointer rounded-2xl' src={require('../images/Screenshot 2024-10-23 185514.png')} alt='Article_Two'/>
          </a>
          </div>
          <div className='con_three h-[200px] w-[180px] rounded-xl'>
          <a href="#Article3">
          <img className='h-[195px] w-[170px] cursor-pointer rounded-2xl' src={require('../images/Screenshot 2024-10-23 185531.png')} alt='Article_Three'/>
          </a>
          </div>
          <div className='con_four h-[200px] w-[180px] rounded-xl'>
          <a href="#Article4">
          <img className='h-[195px] w-[170px] cursor-pointer rounded-2xl' src={require('../images/Screenshot 2024-10-23 185544.png')} alt='Article_Four'/>
          </a>
          </div>
          <div className='con_five h-[200px] w-[180px] rounded-xl'>
          <a href="#Article5">
          <img className='h-[195px] w-[170px] cursor-pointer rounded-2xl' src={require('../images/Screenshot 2024-10-23 185555.png')} alt='Article_Five'/>
          </a>
          </div>
        </div>
         <div id="Article1" className='holder h-[1350px] w-[930px] mt-[370px] ml-[-1025px] rounded-xl'>
         <Blog />
         </div>
         <div id="Article2" className='holder h-[1350px] w-[930px] mt-[1740px] ml-[-930px] rounded-xl'>
         <Blog_two />
         </div>
         <div id="Article3" className='holder h-[1350px] w-[930px] mt-[3110px] ml-[-930px] rounded-xl'>
         <Blog_three />
         </div>
         <div id="Article4" className='holder h-[1350px] w-[930px] mt-[4480px] ml-[-930px] rounded-xl'>
         <Blog_four />
         </div>
         <div id="Article5" className='holder h-[1350px] w-[930px] mt-[5850px] ml-[-930px] rounded-xl'>
         <Blog_five />
         </div>
         <div className='footer h-[185px] w-[1205px] mt-[7220px]  rounded-xl absolute'>
          <Footer />
         </div>
      </div>
    </div>
  )
}

export default Home;