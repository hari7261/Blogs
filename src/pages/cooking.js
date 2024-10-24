import React from 'react'
import '../pages/home';
import Cook_blog_one from '../components/cook_blog_one';
import Cook_blog_two from '../components/cook_blog_two';
import Cook_blog_three from '../components/cook_blog_three';

function Cooking() {
  return (
    <div className='h-[auto]'>
      <div className="tech_con h-[240px] w-[1185px] ml-[-15px] mt-[-10px] flex flex-col rounded-xl absolute">
        <h1 className="para mt-[-170px] ml-[-1010px] absolute">
          Cooking
        </h1>
        <div class="line-effect h-[35px] w-[4px] mt-[-170px] ml-[-1155px] absolute"></div>
        <div class="line-effect h-[4px] w-[55px] mt-[-208px] ml-[-1104px] absolute"></div>
        <div class="line-effect h-[35px] w-[4px] mt-[-164px] ml-[-865px] absolute"></div>
        <div class="line-effect h-[4px] w-[57px] mt-[-125px] ml-[-918px] absolute"></div>        
        <p className="tech-word text-base text-white mt-[25px] ml-[80px]">
          Discover the latest trends in cooking that inspire and delight us. From <span className="gradient-text-two">culinary innovations</span> to <span className="gradient-text-two">cutting-edge kitchen gear</span>, cooking is transforming how we create and enjoy meals. Embrace the rise of <span className="gradient-text-two">smart cooking appliances</span> and <span className="gradient-text-two">sustainable ingredients</span> as we enter a new era of gastronomy. 
          With the emergence of <span className="gradient-text-two">online cooking classes</span> and the rise of <span className="gradient-text-two">food delivery apps</span>, the world of cooking is becoming more dynamic and accessible than ever.
        </p>


      </div>
      <div className='tech-holder h-[1150px] w-[1000px] rounded-xl'>
        <Cook_blog_one />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Cook_blog_two />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Cook_blog_three />
      </div>

    </div>
  );
}

export default Cooking;
