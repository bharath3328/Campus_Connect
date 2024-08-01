import { Route, Routes, useLocation } from 'react-router-dom';
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
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BlogPage } from './pages/viewBLog';
import { JobsAndHackathons } from './pages/Jobs_hackathons';

function App() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === '/';
  const noHeaderFooterRoutes = ['/', '/login', '/signup'];
  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  return (
    <>
      <Provider store={store}>
        {!shouldHideHeaderFooter && <NavbarSimple />}
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/questions' element={<QNA />}></Route>
              <Route path='/postQn' element={<PostQuestion />}></Route>
              <Route path='/answer/:id' element={<Answer />}></Route>
              <Route path='/viewanswer/:id' element={<ViewAnswer />}></Route>
              <Route path='/uploadnotes' element={<UploadNotes />}></Route>
              <Route path='/viewnotes' element={<ViewNotes />}></Route>
              <Route path='/blogs' element={<Blogs />}></Route>
              <Route path='/uploadblogs' element={<UploadBlog />}></Route>
              <Route path='/viewsubjects' element={<ViewSubject />}></Route>
              <Route path='/viewblog/:id' element={<BlogPage />}></Route>
              <Route path='/jobs' element={<JobsAndHackathons />}></Route>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        {!shouldHideHeaderFooter && <Footer />}
      </Provider>  
    </>
  )
}

export default App
