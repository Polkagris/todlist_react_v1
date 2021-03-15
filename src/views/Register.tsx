import React from 'react'
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react"
  import { Button } from "@chakra-ui/react"

const Register = () => {
    return (
        <div>
            <FormControl id="email">
                <h2>Register</h2>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormLabel>Password</FormLabel>
                <Input type="password" />
                <Button colorScheme="blue">Login</Button>
            </FormControl>
                <div>
                    <a href="/login">Login</a>
                </div>
        </div>

    )
}

export default Register
