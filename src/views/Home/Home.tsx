import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/navigation/NavigationBar";
import "./Home.css";


const Home = () => {
    
    const localStorageToken = localStorage.getItem("token");

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
        </div>
    )
}

export default Home
