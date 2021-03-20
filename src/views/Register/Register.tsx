import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    useToast
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../../components/navigation/NavigationBar';
import "./Register.css";

const Register = () => {

    const localStorageToken = localStorage.getItem("token");

    const history = useHistory();
    const toast = useToast()

    const [emailValue, setEmailValue] = React.useState("")
    const handleEmailChange = (event: { target: { value: string }; }) => setEmailValue(event.target.value)

    const [passwordValue, setPasswordValue] = React.useState<string>("")
    const handlePasswordChange = (event: { target: { value: string }; }) => setPasswordValue(event.target.value)

    const userId = Math.floor(10000000 + Math.random() * 90000000);


    const registerUser = async()  => {
        try {
            // check if userid excists
          const result = await axios.post(
            'http://localhost:8080/user/register', 
            {
                userid: userId,
                email: emailValue,
                password: passwordValue
            }, {
                headers: {
                'content-type': 'application/json',
              }
            }
          );
          // localStorage.setItem("token", result.data);
          history.push("/login");
          toast({
            title: `User signed up successfully.`,
            status: "success",
            isClosable: true,
          })
          //forceUpdate();
  
        } catch(error) {
          // setLoginFailed(true);
          toast({
            title: `Login failure.`,
            status: "error",
            isClosable: true,
          })
        }
  
  
          // Spinner here?
      }


    return (
        <div className="registerWrapper">
          <NavigationBar localStorageToken={localStorageToken}/>
          <div className="registerContainer">
            <FormControl id="email">
                <h2 className="title">Sign up!</h2>
                <FormLabel>Email address</FormLabel>
                <Input value={emailValue} onChange={handleEmailChange} type="email" />
                <FormLabel>Password</FormLabel>
                <Input value={passwordValue} onChange={handlePasswordChange} type="password" />
                <Button m="30px" p="25px" onClick={registerUser} colorScheme="blue">Register</Button>
            </FormControl>
        </div>
        <div>
          <a href="/">Home</a>
        </div>
      </div>
    )
}

export default Register
