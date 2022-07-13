import { Container, Row, Col, Button,ToastContainer} from "react-bootstrap"
import Toast from 'react-bootstrap/Toast'
import { useState} from 'react';
import { getAuth, onAuthStateChanged} from "firebase/auth"
import {useNavigate} from "react-router-dom";
import Home from './Home';
import LandingPageImg from '../assets/LandingPageImg.jpeg';
import Image from 'react-bootstrap/Image';
import Navbar from '../Components/Navbar';

const Landing = () => {
    const [show, setShow] = useState(false);
    const auth = getAuth();
    const [user, setuser] = useState(null)

    onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser);
    });

    let navi = useNavigate();
    const SaveNotes = () => {
        if(user) {
            console.log("Clicked");
            navi("/Home");
            //<AddNotes />
        } else {
            setShow(!show);
        }
    }

    return(
        <div>
            <Navbar />
            <Container>
                <Row className ="Land-row">
                    <Col className = "Land-col">
                        <Button variant="outline-dark" onClick={SaveNotes}>SAVE YOUR NOTES  </Button>
                        {/* <ToastContainer className="p-3" position= "top-end">
                            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                                <Toast.Header>
                                    {/* <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                    /> }
                                    <strong>Warning!</strong>
                                    <small></small>
                                </Toast.Header>
                                <Toast.Body>Please signup</Toast.Body>
                            </Toast>
                        </ToastContainer> */}
                    </Col>
                    <Col className = "Land-col-nxt">
                        <div>
                            <Image src={LandingPageImg} width="600" height="600"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Landing;