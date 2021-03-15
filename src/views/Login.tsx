import React, { useEffect } from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"
import axios from 'axios';

const Login = () => {


    const [emailValue, setEmailValue] = React.useState("")
    const handleEmailChange = (event: { target: { value: string }; }) => setEmailValue(event.target.value)

    const [passwordValue, setPasswordValue] = React.useState<string>("")
    const handlePasswordChange = (event: { target: { value: string }; }) => setPasswordValue(event.target.value)


    useEffect(() => {
        console.log("Type email -------------------", typeof({emailValue}.toString));
        console.log("Type email -------------------", typeof({emailValue}));
        console.log("Type email -------------------", emailValue);
    }, [])
/* 
        const postRequestPostsTest = async()  => {
            const result = await axios.post(
                'https://jsonplaceholder.typicode.com/posts', 
                {
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }, {
                    headers: {
                    'Content-type': 'application/json;',
                  }
                }

              );
               console.log("Data from fetch: -------------------", result);
              console.log("Clicked -------------------");
              // setTodoData(result.data);

        } */
        // WORKS!!
        const getTodosTest = async()  => {
            const result = await axios(
                'http://localhost:8080/api/todos',
                {
                    headers: {
                    'Content-type': 'application/json;',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6Imp0d0BmaW5hbGx5LmRvbmUiLCJ1c2VyIGlkIjoiNDgiLCJyb2wiOnt9LCJleHAiOjE2MTY2MTk4Mzl9.2cvxuDr3sJJ-nmXnDI7SK9KZw_YUM7y6uIqv2gBv_sY8UVpyZdCEibk1rBT96O66u7JArHZwiyAmPwvgT_KiaQ'
                  }
                }

              );
               console.log("Data from fetch: -------------------", result);
              console.log("Clicked -------------------");
              // setTodoData(result.data);

        }
        
        const loginUser = async()  => {
            const result = await axios.post(
                'http://localhost:8080/user/login', 
                {
                    // WORKS!!
                    /* email: "jtw@finally.done",
                    password: "qwerty" */

                    email: emailValue,
                    password: passwordValue
                }, {
                    headers: {
                    'content-type': 'application/json',
                  }
                }
              );
              localStorage.setItem("token", result.data);
               console.log("Data from fetch: -------------------", result);
              //console.log("Clicked -------------------");
              console.log("Type -------------------", typeof({emailValue}.toString));
              // setTodoData(result.data);
        }

        const testNewLogin = ()  => {
            const result =
            axios({
              method: 'post',
              url: 'http://localhost:8080/user/login',
              data: {
                email: {emailValue},
                password: {passwordValue}
              },
              headers: {
                'Content-type': 'application/json',
              }
            }).then(res => JSON.parse(res.data) )
            .catch(error => console.log(error))
               console.log("Data from fetch: -------------------", result);
               console.log("Clicked -------------------");
              // setTodoData(result.data);
        }

        

        

      
    return (
        <div>
            <FormControl id="email">
                <h2>Login</h2>
                <FormLabel>Email address</FormLabel>
                <Input value={emailValue} onChange={handleEmailChange} type="email" />
                <FormLabel>Password</FormLabel>
                <Input value={passwordValue} onChange={handlePasswordChange} type="password" />
                <Button onClick={loginUser} colorScheme="blue">Login</Button>
                <h3>Teszt</h3>
            </FormControl>
            <div>
                <a href="/">Register</a>
            </div>
        </div>
    )
}

export default Login
