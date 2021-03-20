import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react"
import { useState } from 'react'

const GdprModal = () => {

    const [gdprAccepted, setGdprAccepted] = useState(false);
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
        <div>
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

interface Props {
    localStorageGdpr: string
}

export default GdprModal
