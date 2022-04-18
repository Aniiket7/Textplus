import { Route } from "react-router-dom";
import Chat from "./Pages/Chat";
import Home from './Pages/Home';
import Signup from './Pages/comp/Signup';
import Login from './Pages/comp/Login';
import Contact from './Pages/Contact';
import About from './Pages/About';
import PageNotFound from './Pages/comp/PageNotFound';
import Chatsection from './Pages/comp/Chatsection';
function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact />
      <Route path='/signup' component={Signup} exact />
      <Route path='/login' component={Login} exact />
      <Route path='/about' component={About} exact />
      <Route path='/chatsection' component={Chatsection} exact />
      <Route path='/chats' component={Chat} exact/>
      <Route path='/contact' component={Contact} exact/>
      {/* <Route path="" component={PageNotFound} /> */}
    </div>
  );
}

export default App;
