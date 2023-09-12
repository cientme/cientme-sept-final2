// import { Profile } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import PostDetails from './components/PostDetails/PostDetails';
import RightNav from './components/RightNav/RightNav';
import Story from './components/Story/Story';
// import logo from './components/images/cientme-logo2.jpeg'
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';




function App() {
  return ( 
    <>
    {/* < Nav logo={logo} /> */}
    < Nav />
    {/* < Story /> */}
    {/* < PostDetails /> */}
    {/* < RightNav /> */}
    <Routes>
      <Route path="/" Component={PostDetails} />
      <Route path="/Profile" Component={Profile} />
    </Routes>
    </>


  );
}

export default App;
