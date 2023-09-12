import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//导入bootstrao框架

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // 你的Home组件的导入路径
import ChatRoom from './components/ChatRoom';
import FriendList from './components/FriendList';
import Profile from './components/Profile';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav navbar-brand">
                  <li className="nav-item ">
                      <Link to="/chat" className="nav-link btn btn-outline-success">Chat now</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/login" className="nav-link btn btn-outline-success ">Login</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/register" className="nav-link btn btn-outline-success ">Register</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/profile" className="nav-link btn btn-outline-success ">Profile</Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/friends" className="nav-link btn btn-outline-success ">Friend List</Link>
                  </li>
              </ul>
          </nav>
        <Routes>
          {/*<Route path="/" exact component={Home} />*/}
          <Route path="/" element={<Home />} />
          {/* '/chat/*'  匹配路径下的所有子路径 */}
          <Route path="/chat/*" element={<ChatRoom />}  />
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />}  />
          {/*这里是其他的路径*/}
          <Route path="/friends" element={<FriendList />}  />
          <Route path="/Profile" element={<Profile />}  />
        </Routes>
      </Router>
  );
}

export default App;
