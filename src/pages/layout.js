import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/footer'; 

const Layout = ({ children }) => {
  const location = useLocation(); // Get the current route
  const [position, setPosition] = useState({ top: 50, left: 600 }); // Initial position

  // Check if the current path is the WelcomePage
  const isWelcomePage = location.pathname === '/';

  return (
    <div className="layout-container">
      {/* Conditionally render the navbar only if it's not the WelcomePage */}
      {!isWelcomePage && (
        <div
          className="lol flex h-[35px] w-[540px] ml-[-30px] rounded-xl absolute"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
        >
          <nav className="navbar">
            <Link to="/home">
              <button className='but_one rounded-xl h-[30px] w-[65px] mt-[2px] mr-[5px]'>Home</button>
            </Link>
            <Link to="/tech">
              <button className='but_one rounded-xl h-[30px] w-[65px] mt-[2px] ml-[3px]'>Tech</button>
            </Link>
            <Link to="/sports">
              <button className='but_two rounded-xl h-[30px] w-[80px] mt-[2px] ml-[8px]'>Sports</button>
            </Link>
            <Link to="/cooking">
              <button className='but_three rounded-xl h-[30px] w-[95px] mt-[2px] ml-[8px]'>Cooking</button>
            </Link>
            <Link to="/health">
              <button className='but_four rounded-xl h-[30px] w-[125px] pt-[2px] mt-[2px] ml-[8px]'>Health Care</button>
            </Link>
            <Link to="/investments">
              <button className='but_five rounded-xl h-[30px] w-[135px] mt-[2px] ml-[10px]'>Investments</button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main content */}
      <div className="content-container">
        {children}
      </div>
    </div>
  );
};

export default Layout;
