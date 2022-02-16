import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  // console.log(props.link);
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Navbar />
        <div className="app__wrapper__content">
          <Routes>
            <Route path='/dialogs' element={<Dialogs state={props.state.dialogPage}/>}/>
            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
