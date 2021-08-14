import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { AiOutlineMenu } from 'react-icons/ai';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import ScrollToTop from './ScrollToTop.js';
import District from './components/District.js';
import State from './components/State.js';
import Childs from './components/Childs.js';
import AddChild from './components/AddChild.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarGuest() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex items-center justify-between p-6 ">
        <div className="">
          <Link to="/">
            Logo
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} pt-1 px-5 lg:flex`}>
        <ul
          className="text-xl lg:bg-white lg:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/state">State</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/district">District</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-3 bg-themeOrange text-white lg:mx-6 lg:px-6 lg:rounded-full lg:hover:shadow-xl lg:cursor-pointer">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NavbarUser() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex items-center justify-between p-6 ">
        <div className="">
          <Link to="/">
           Logo
          </Link>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none lg:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AiOutlineMenu />
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} pt-1 px-5 lg:flex`}>
        <ul
          className="text-xl lg:bg-white lg:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <li className="p-2 lg:p-4 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/state">State</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/district">District</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/childs">Childs</Link>
          </li>
          <li className="p-2 lg:px-6 lg:mx-6 lg:hover:bg-gray-200 lg:rounded-lg lg:cursor-pointer">
            <Link to="/logout">Log out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const { isAuth } = useContext(AuthContext);

  const navbar = isAuth ? <NavbarUser /> : <NavbarGuest />;

  return (
    <Router>
      <div className="p-0 flex flex-col min-h-screen min-w-screen lg:max-w-screen-xl lg:mx-auto">
        <header className="">{navbar}</header>
        <main className="flex flex-col flex-grow">
          {/* <div className="bg-red-400 w-auto"> */}
          {/* Components */}
          <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/childs" exact component={Childs} />
            <ProtectedRoute path="/child/:id" component={Childs} />
            <Route path="/district" component={District} />
            <Route path="/state" component={State} />
            <ProtectedRoute path="/createChild" component={AddChild} />
            <Route component={NotFound} />
          </Switch>
          {/* </div> */}
        </main>
      </div>
    </Router>
  );
}
