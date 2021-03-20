import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/navigation/NavigationBar";
import "./Home.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"
import { useState } from "react";


const Home = () => {
    
    const [gdprAccepted, setGdprAccepted] = useState(false);
    const localStorageToken = localStorage.getItem("token");
    const localStorageGdpr = localStorage.getItem("gdprAccepted");
    

    const handleAcceptGdpr = () => {
        setGdprAccepted(true);
        localStorage.setItem("gdprAccepted", "true");
    }

    const handleRejectGdpr = () => {
        localStorage.setItem("gdprAccepted", "false");
    }

    console.log("GDPR localStorageGdpr:", localStorageGdpr);


    

    return (
        <div className="homeWrapper">
            <NavigationBar localStorageToken={localStorageToken}/>
            <div className="homeContainer">
            <h1 className="title">Welcome to the TodoList Maker!</h1>
            <p className="description">Make use of this fantastic TodoList Maker to optimize your life and reach your goals in no time.
                TodoList Maker has proven to make it's client more productive.
            </p>
            <div className="buttonContainer">
                <Button p="30px" width="200px" colorScheme="green"><Link to={localStorageToken ? "/todos" : "/login"}>Get started</Link></Button>
                <Button p="30px" width="200px" bg="lightgray"><a target="_blank" href="https://github.com/Polkagris/todlist_react_v1">Github</a></Button>
            </div>
            </div>
            <Modal isOpen={localStorageGdpr === null || localStorageGdpr === "false"} onClose={handleAcceptGdpr}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Privacy policy agreement</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                <p>Our privacy policy can be found <a className="linkButton" href="/gdpr">here</a></p>
                </ModalBody>

                <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleAcceptGdpr}>
                    Agree and proceed
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </div>
    )
}

export default Home
