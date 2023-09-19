import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import Main from './Components/Main/Main';
import Navbars from './Components/Navbars/Navbars';
// import Home from './Components/Home/Home';
// import Search from './Components/Searsh/Search';
// import Navigate from './Components/Navigate/Navigate';
// import Reels from './Components/Reels/Reels';
// import Message from './Components/Message/Message';
// import Notification from './Components/Notification/Notification';
// import Create from './Components/Create/Create';
// import User from './Components/User/User';
// import More from './Components/Navbars/Burgers/More';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <div className="sidebar">
        <Navbars/>
      </div>
      
    </BrowserRouter>
    </>
  );
}

export default App;
