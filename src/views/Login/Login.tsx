import React, { useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react"
import "./Login.css";
import NavigationBar from '../../components/navigation/NavigationBar';


const Login = () => {

    const history = useHistory();
    const toast = useToast()

    const [emailValue, setEmailValue] = React.useState("")
    const handleEmailChange = (event: { target: { value: string }; }) => setEmailValue(event.target.value)

    const [passwordValue, setPasswordValue] = React.useState<string>("")
    const handlePasswordChange = (event: { target: { value: string }; }) => setPasswordValue(event.target.value)

    const [loginFailed, setLoginFailed] = React.useState(false)

    const localStorageToken = localStorage.getItem("token");

/*     // Force re-render so login becomes logout and vica versa
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []); */

// spinner og toast -> redirect til todos

    const loginUser = async()  => {
      try {
        const result = await axios.post(
          'http://localhost:8080/user/login', 
          {
              email: emailValue,
              password: passwordValue
          }, {
              headers: {
              'content-type': 'application/json',
            }
          }
        );
        localStorage.setItem("token", result.data);
        history.push("/todos");
        //forceUpdate();

      } catch(error) {
        setLoginFailed(true);
        toast({
          title: `Login failure.`,
          status: "error",
          isClosable: true,
        })
      }


        // Spinner here?
    }

    return (
        <div className="loginWrapper">
          <NavigationBar localStorageToken={localStorageToken}/>
          <div className="loginContainer">
            <FormControl id="email">
                <h2 className="title">Sign in</h2>
                <FormLabel>Email address</FormLabel>
                <Input value={emailValue} onChange={handleEmailChange} type="email" />
                <FormLabel>Password</FormLabel>
                <Input value={passwordValue} onChange={handlePasswordChange} type="password" />
                <Button m="30px" p="25px" onClick={loginUser} colorScheme="blue">Login</Button>
            </FormControl>
        </div>
        <div>
          <a href="/">Register</a>
        </div>
      </div>
    )
}

export default Login
