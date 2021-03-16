import axios from 'axios';
import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode";

const GetTodos = () => {
    const [todoData, setTodoData] = useState<Array<todoType>>([]);
    const [tokenDecoded, setTokenDecoded] = useState(Object);






// $( "#word" + lbl.eq(i).text().replace(/([ /])/g, '\\$1') ).hide();

/*         const getUserId = async() => {
            const localStorageToken = localStorage.getItem("token");
            if(localStorageToken == null) {
                return;
            } else {
                await setTokenDecoded(jwt_decode(localStorageToken));
            }
            const userId = tokenDecoded["user id"]
            return userId;
        } */

        console.log("token decoded user id:", tokenDecoded["user id"])
        console.log("token decoded:", tokenDecoded)
        const userId = tokenDecoded["user id"]


        // WORKS!!
        const getTodosTest = async()  => {
            //console.log("token decoded:", tokenDecoded["user id"])
            //console.log("token decoded:", tokenDecoded)
            let tokenUserID = "";
            let nUserID = 0;

            const localStorageToken = localStorage.getItem("token");
            if(localStorageToken == null) {
                return;
            } else {
                //setTokenDecoded(await jwt_decode(localStorageToken));
                const tokenValues: any = await jwt_decode(localStorageToken)
                const tokenUserID = await tokenValues["user id"]
                console.log("type of userId in function:", typeof(tokenUserID));
                nUserID = parseInt(tokenUserID)
                console.log("token decoded in function nUserID:", typeof(nUserID))
                console.log("token values:", tokenValues)
            }
            const userId = await tokenDecoded["user id"]
            console.log("type of userId:", typeof(userId));
            let axiosUser = parseInt(tokenUserID);
            console.log("userID axios number:", axiosUser);

            const result = await axios(
                `http://localhost:8080/api/mytodos/${nUserID}`,
                {
                    headers: {
                    'Content-type': 'application/json;',
                    'Authorization': `Bearer ${localStorageToken}`
                  }
                }

              );
               console.log("Data from fetch: -------------------", result);
              console.log("Clicked -------------------");
              setTodoData(result.data);

        }
        useEffect(() => {
        getTodosTest();
      }, []);
      
    return (
        <div>
            <h1>Todos</h1>
            <a href="/">Back to home page</a>
            {todoData && 
                <ul>{todoData.map(todo => 
                        <p key={todo.id}>{todo.name}</p>
                        )
                    }
                </ul>
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
