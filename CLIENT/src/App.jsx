import { Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
import {Signup} from './pages/Signup';
import { QNA } from './pages/QNA';
import {PostQuestion} from "./pages/postQuestion";
import {Answer} from './pages/Answer';
import { NavbarSimple } from "./components/navbar"
import { ViewAnswer } from './pages/ViewAnswer';
function App() {
  return (
    <>
    <Provider store={store}>
      <NavbarSimple/>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/questions' element={<QNA/>}></Route>
      <Route path='/postQn' element={<PostQuestion/>}></Route>
      <Route path='/answer' element={<Answer/>}></Route>
      <Route path='/viewanswer' element={<ViewAnswer/>}></Route>
    </Routes>
    </Provider>
    </>
  )
}

export default App
