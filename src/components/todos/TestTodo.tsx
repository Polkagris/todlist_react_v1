import axios from 'axios';
import { useEffect, useState } from 'react'

const GetTodos = () => {

    const [todoData, setTodoData] = useState<Array<todoType>>([]);

    useEffect(() => {
        const fetchTodos = async()  => {
            const result = await axios(
                'https://jsonplaceholder.typicode.com/todos',
              );
              console.log("Data from fetch: -------------------", result.data);
              setTodoData(result.data);
              console.log("THIS COMPO is USED woiooooooooooooooooor!");

        }
        fetchTodos();
      }, []);
      
    return (
        <div>
            {todoData && 
                <ul>{todoData.map(todo => 
                        <p>{todo.title}</p>
                        )
                    }
                </ul>
            }
        </div>
    )
}

interface todoType {
    id: String,
    title: String,
    completed: boolean,
    userId: String
}

export default GetTodos;
