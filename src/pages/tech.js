import React from 'react'
import '../pages/home';
import Tech_blog_one from '../components/tech_blog_one';
import Tech_blog_two from '../components/tech_blog_two';
import Tech_blog_three from '../components/tech_blog_three';

function Tech() {
  return (
    <div className='h-[auto]'>
      <div className="tech_con h-[240px] w-[1185px] ml-[-15px] mt-[-10px] flex flex-col rounded-xl absolute">
        <h1 className="para mt-[-170px] ml-[-1050px] absolute">
          Tech
        </h1>
        <div class="line-effect h-[35px] w-[4px] mt-[-175px] ml-[-1135px] absolute"></div>
        <div class="line-effect h-[4px] w-[45px] mt-[-210px] ml-[-1094px] absolute"></div>
        <div class="line-effect h-[35px] w-[4px] mt-[-167px] ml-[-965px] absolute"></div>
        <div class="line-effect h-[4px] w-[40px] mt-[-128px] ml-[-1000px] absolute"></div>      
        <p className="tech-word text-base text-white mt-[35px] ml-[80px]">
          Explore the latest advancements in technology that shape our future. From <span className="gradient-text-two">AI innovations</span> to <span className="gradient-text-two">futuristic gadgets</span>, technology is revolutionizing our daily lives. Embrace the rise of <span className="gradient-text-two">machine learning</span> and <span className="gradient-text-two">virtual reality</span> as we venture to  new digital age. 
          The impact of technology is profound, affecting how we communicate, work, and interact. With the emergence of <span className="gradient-text-two">blockchain technology</span> and the rise of <span className="gradient-text-two">smart homes</span>, our environment is becoming more interconnected than ever.
        </p>
      </div>
      <div className='tech-holder h-[1150px] w-[1000px] rounded-xl'>
        <Tech_blog_one />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Tech_blog_two />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
      <Tech_blog_three />
      </div>

    </div>
  );
}

export default Tech;
