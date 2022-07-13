import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {React , useState} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars} from "react-icons/fa";
import { AiFillHome,AiFillStar } from 'react-icons/ai';
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MLogo from '../assets/MLogo.jpeg'
import '../Offcanvas.css'

function OffcanvasSide() {
  console.log("offcanvas")
   let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="xxx">
      <Button className="mainss" onClick={handleShow}>
        <FaBars class="rounded-circle"/>
      </Button>
    
      
      <Offcanvas className="Offcan" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img alt="logo"
                 src={MLogo}
                 width="50"
                  height="40"/>
            
            NOTE THE NOTES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          
         <Button className="OcButton" onClick ={() => { navigate("/Home");  }}>HOME</Button>
          <Button className="OcButton" onClick ={() => { navigate("/AddNotes");  }}>ADD NOTES</Button>
          <Button className="OcButton" onClick ={() => { navigate("/Starred")}}>STARRED</Button>
        </Offcanvas.Body>
      </Offcanvas>
      
     <div className="iconss" onClick ={() => { navigate("/Home");  }}>
          <AiFillHome roundedcircle size={25} />
      </div>

      <div className="iconss" onClick ={() => { navigate("/AddNotes");  }}>
          <IoIosAddCircle roundedcircle size={25} />
      </div>

      <div className="iconss" onClick ={() => { navigate("/Starred");  }}>
          <AiFillStar roundedcircle size={25}/>
      </div>
        
    </div>
  );
}

// render(<Example />);
export default OffcanvasSide;