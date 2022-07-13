import Navbar from './Components/Navbar';
import  Offcanvas from './Components/Offcanvas';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Landing from './Pages/Landing';
import AddNotes from './Pages/AddNotes';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App(){
    return(
        <Router>
            
            <Routes>
                <Route  path="/" element={<Landing />} />
                {/* <div> */}
                {/* <Offcanvas /> */}
                <Route path="/Home" element={<Home />} />
                <Route path="/Addnotes" element={<AddNotes />} />
                <Route path="/Starred" element={<Starred />} />
            </Routes>
        </Router>
    )
}

export default App;