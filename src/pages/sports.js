import React from 'react'
import '../pages/home';
import Spo_blog_one from '../components/spo_blog_one';
import Spo_blog_two from '../components/spo_blog_two';
import Spo_blog_three from '../components/spo_blog_three';

function Sports() {
  return (
    <div className='h-[auto]'>
      <div className="tech_con h-[240px] w-[1185px] ml-[-15px] mt-[-10px] flex flex-col rounded-xl absolute">
        <h1 className="para mt-[-170px] ml-[-1020px] absolute">
          Sports
        </h1>
        <div class="line-effect h-[35px] w-[4px] mt-[-170px] ml-[-1140px] absolute"></div>
        <div class="line-effect h-[4px] w-[45px] mt-[-208px] ml-[-1099px] absolute"></div>
        <div class="line-effect h-[33px] w-[4px] mt-[-165px] ml-[-900px] absolute"></div>
        <div class="line-effect h-[4px] w-[40px] mt-[-128px] ml-[-936px] absolute"></div> 
        <p className="tech-word text-base text-white mt-[25px] ml-[80px]">
          Discover the latest trends in sports that inspire and energize us. From <span className="gradient-text-two">athletic innovations</span> to <span className="gradient-text-two">cutting-edge gear</span>, sports are transforming how we compete and engage. Embrace the rise of <span className="gradient-text-two">data analytics</span> and <span className="gradient-text-two">wearable technology</span> as we enter a new era of athletic performance. 
          With the emergence of <span className="gradient-text-two">eSports</span> and the rise of <span className="gradient-text-two">smart training facilities</span>, the world of sports is becoming more dynamic and interconnected than ever.
        </p>

      </div>
      <div className='tech-holder h-[1150px] w-[1000px] rounded-xl'>
        <Spo_blog_one />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Spo_blog_two />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Spo_blog_three />
      </div>

    </div>
  );
}

export default Sports;
