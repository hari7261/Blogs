import React from 'react'
import '../pages/home';
import Heal_blog_one from '../components/heal_blog_one';
import Heal_blog_two from '../components/heal_blog_two';
import Heal_blog_three from '../components/heal_blog_three';

function Health() {
  return (
    <div className='h-[auto]'>
      <div className="tech_con h-[240px] w-[1185px] ml-[-15px] mt-[-10px] flex flex-col rounded-xl absolute">
        <h1 className="para mt-[-170px] ml-[-1010px] absolute">
          Health
        </h1>
        <div class="line-effect h-[35px] w-[4px] mt-[-170px] ml-[-1135px] absolute"></div>
        <div class="line-effect h-[4px] w-[50px] mt-[-208px] ml-[-1089px] absolute"></div>
        <div class="line-effect h-[33px] w-[4px] mt-[-165px] ml-[-885px] absolute"></div>
        <div class="line-effect h-[4px] w-[50px] mt-[-128px] ml-[-930px] absolute"></div>        
        <p className="tech-word text-base text-white mt-[25px] ml-[80px]">
          Discover the latest trends in healthcare that inspire and improve our lives. From <span className="gradient-text-two">medical innovations</span> to <span className="gradient-text-two">advanced healthcare technologies</span>, healthcare is transforming how we prevent and treat illnesses. Embrace the rise of <span className="gradient-text-two">telemedicine</span> and <span className="gradient-text-two">personalized medicine</span> as we enter a new era of wellness. 
          With the emergence of <span className="gradient-text-two">health monitoring</span> and the rise of <span className="gradient-text-two">integrative health practices</span>, the world of healthcare is becoming more dynamic and accessible than ever.
        </p>
      </div>
      <div className='tech-holder h-[1150px] w-[1000px] rounded-xl'>
        <Heal_blog_one />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Heal_blog_two />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Heal_blog_three />
      </div>

    </div>
  );
}

export default Health;
