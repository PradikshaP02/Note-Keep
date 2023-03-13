import {Navbar, Container, Nav} from 'react-bootstrap';
import MLogo from "../assets/MLogo.jpeg";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged} from "firebase/auth";
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { FaUserAlt} from "react-icons/fa";
import Button from 'react-bootstrap/Button';
const NavbarSide = () => {
    let navi = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    console.log("Navbar.js");
    const [user, setuser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser);
    });

    const signUp = () => {
            
            signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // The signed-in user info.
            
            console.log(auth.currentUser.email);

            }).catch((error) => {
           
            });
        
    }

    const logOut = () => {
        signOut(auth).then(() => {
            console.log('Sign-out successful');
            navi.push("/");
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className="header">
            <Navbar sticky="top">
                <Container>
                    <Navbar bg="light" variant="light" className='navBackground'>

                            <Navbar.Brand href="/">
                                <img
                                alt="logo"
                                src={MLogo}
                                width="50"
                                height="40"
                                className="d-inline-block align-top"
                                />
                            KEEP THE NOTES
                            </Navbar.Brand>
                            

                    </Navbar>

                    <Navbar.Toggle />
                    <Navbar className="me-auto-end">
                        <Navbar.Brand className='googleIcon' onClick= {signUp}>
                                <div className="icon"><FaUserAlt size={30}  alignmentBaseline='after-edge'/></div>
                                {user?.displayName}
                        </Navbar.Brand>
                        {user?
                        <Nav.Item>
                        <Button to="/" onClick = {logOut}>Sign-out</Button>
                        </Nav.Item>
                        :<></>}
                    </Navbar>
                </Container>
            </Navbar>
        </div>
        
     );
}
 
export default NavbarSide;
