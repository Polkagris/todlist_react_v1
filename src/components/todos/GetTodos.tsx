import axios from 'axios';
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";
import { Box, Button, Input, FormLabel } from "@chakra-ui/react";
import "./GetTodos.css";
import NavigationBar from '../navigation/NavigationBar';


const GetTodos = () => {

    const [todoData, setTodoData] = useState<Array<todoType>>([]);
    const [userIdFromToken, setUserIdFromToken] = useState(Number);
    const [newTodoName, setNewTodoName] = useState("");
    const localStorageToken: string | null = localStorage.getItem("token");

    const handleNewTodoNameChange = (event: { target: { value: string }; }) => setNewTodoName(event.target.value)


    const handleDeleteTodo = async(id: Number) => {
        const localStorageToken = localStorage.getItem("token");
        console.log("Todo id:", id);
        console.log("Todo id type:", typeof(id));

        const result = await axios.delete(
            `http://localhost:8080/api/todos/${id}`,
             {
                headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${localStorageToken}`
              }
            }
        );
          console.log("result status of delete:", result.status);
          // Fetch new list of todos with the newest addition
          fetchTodos()
    }

    
    const handleCreateTodo = async() => {
        const localStorageToken = localStorage.getItem("token");
        console.log("user id:", userIdFromToken);

            const result = await axios.post(
                'http://localhost:8080/api/todos', 
                {
                    userid: userIdFromToken,
                    name: newTodoName
                }, {
                    headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${localStorageToken}`
                  }
                }
              );
              // Fetch new list of todos with the newest addition
              fetchTodos()
    }


    const fetchTodos = async()  => {
        let nUserID = 0;
        const localStorageToken = localStorage.getItem("token");

        // NULL check
        if(localStorageToken == null) {
            return;
        } else {
            const tokenValues: any = await jwt_decode(localStorageToken)
            const tokenUserID = await tokenValues["user id"]
            nUserID = parseInt(tokenUserID)
        }

        // to be used in CRUD operations
        setUserIdFromToken(nUserID);

        const result = await axios(
            `http://localhost:8080/api/mytodos/${nUserID}`,
            {
                headers: {
                'Content-type': 'application/json;',
                'Authorization': `Bearer ${localStorageToken}`
                }
            });
            console.log("RESULT FROM FETCH TODOS:", result);
            setTodoData(result.data);
    }

    // Initialize todos
    useEffect(() => {
    fetchTodos();
    }, [setTodoData]);
      
    return (
        <div>
            <NavigationBar localStorageToken={localStorageToken}/>
            <h2 className="title">New todo</h2>
            <div className="createNewTodoWrapper">
                <div className="createNewTodoContainer">
                    <Input bg="white" value={newTodoName} onChange={handleNewTodoNameChange} type="text" />
                    <Button colorScheme="purple" onClick={handleCreateTodo}>Create</Button>
                </div>
            </div>
            {todoData && 
                <div className="todoListContainer">
                    {todoData.map(todo =>     
                        <Box m={1} bg="#e055d7" w="100%" p={2} color="white" className="singleTodo">
                            <p className="todoText" key={todo.id}>{todo.name}</p>
                            <Button onClick={() => handleDeleteTodo(parseInt(todo.id))} bg="tomato">Delete</Button>
                        </Box>
                        )
                    }
                </div>
            }
        </div>
    )
}

interface todoType {
    id: string,
    name: string,
    userId: string
    // add completed
}


export default GetTodos
