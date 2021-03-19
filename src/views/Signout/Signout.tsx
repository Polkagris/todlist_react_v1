import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import NavigationBar from '../../components/navigation/NavigationBar'

const Signout = () => {
    const localStorageToken = localStorage.getItem("token");
    return (
        <div className="singoutWrapper">
            <NavigationBar localStorageToken={localStorageToken}/>
            <div className="signoutContainer">
            <h1 className="title">You signed out successfully.</h1>
            <p className="description">Hope to see you again!</p>
            <div className="buttonContainer">
                <Button p="30px" width="200px" bg="teal"><Link to="/login">Login</Link></Button>
            </div>
            </div>
        </div>
    )
}

export default Signout
