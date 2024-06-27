import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { QNA } from './pages/QNA';
import { PostQuestion } from "./pages/postQuestion";
import { Answer } from './pages/Answer';
import { NavbarSimple } from "./components/navbar"
import { ViewAnswer } from './pages/ViewAnswer';
import { UploadNotes } from './pages/uploadNotes';
import { ViewNotes } from './pages/viewNotes';
import { Blogs } from './pages/Blogs';
import { UploadBlog } from './pages/UploadBlog';
import { Footer } from './components/footer';
import { ViewSubject } from './pages/viewSubjects';
function App() {
  return (
    <>
      <Provider store={store}>
        <NavbarSimple />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/questions' element={<QNA />}></Route>
          <Route path='/postQn' element={<PostQuestion />}></Route>
          <Route path='/answer' element={<Answer />}></Route>
          <Route path='/viewanswer' element={<ViewAnswer />}></Route>
          <Route path='/uploadnotes' element={<UploadNotes />}></Route>
          <Route path='/viewnotes' element={<ViewNotes />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/uploadblogs' element={<UploadBlog />}></Route>
          <Route path='/viewsubjects' element={<ViewSubject />}></Route>
        </Routes>
        <Footer />
      </Provider>
    </>
  )
}

export default App
