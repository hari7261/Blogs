import React from 'react'
import '../pages/home';
import Invest_blog_one from '../components/invest_blog_one';
import Invest_blog_two from '../components/invest_blog_two';
import Invest_blog_three from '../components/invest_blog_three';

function Investments() {
  return (
    <div className='h-[auto]'>
      <div className="tech_con h-[240px] w-[1185px] ml-[-15px] mt-[-10px] flex flex-col rounded-xl absolute">
        <h1 className="para mt-[-170px] ml-[-950px] absolute">
          Investments
        </h1>
        <div class="line-effect h-[35px] w-[4px] mt-[-170px] ml-[-1155px] absolute"></div>
        <div class="line-effect h-[4px] w-[55px] mt-[-208px] ml-[-1104px] absolute"></div>
        <div class="line-effect h-[35px] w-[4px] mt-[-164px] ml-[-745px] absolute"></div>
        <div class="line-effect h-[4px] w-[57px] mt-[-125px] ml-[-798px] absolute"></div>        
        <p className="tech-word text-base text-white mt-[25px] ml-[80px]">
          Discover the latest trends in investments that inspire and drive financial growth. From <span className="gradient-text-two">impact investing</span> to <span className="gradient-text-two">cryptocurrency innovations</span>, the investment landscape is transforming how we allocate resources and achieve financial goals. Embrace the rise of <span className="gradient-text-two">sustainable investing</span> and <span className="gradient-text-two">robo-advisors</span> as we enter a new era of financial empowerment. 
          With the emergence of <span className="gradient-text-two">AI-driven analytics</span>, the world of investments is becoming more dynamic and accessible than ever.
        </p>


      </div>
      <div className='tech-holder h-[1150px] w-[1000px] rounded-xl'>
        <Invest_blog_one />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Invest_blog_two />
      </div>
      <div className='tech-holder-two h-[1150px] w-[1000px] rounded-xl'>
        <Invest_blog_three />
      </div>

    </div>
  );
}

export default Investments;
