// iot-monitoring-frontend/src/components/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div style={{position: 'absolute', top: '50%' , left : '45%'}}>
      <Link to="/monitor" style={{color:'white', backgroundColor: 'black' , padding : '10px' , textDecoration : 'none'}}>Monitor</Link>
      <Link to='/control' style={{color:'white', backgroundColor: 'black' , padding : '10px' , marginLeft : '10px' , textDecoration : 'none'}}>Control</Link>
    </div>
  );
};

export default MainPage;
