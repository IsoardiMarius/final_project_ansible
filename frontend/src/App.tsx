import React from "react";
import axios from "axios";

interface IUser {
    username: string;
    email: string;
    password: string;
}

function App() {

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        axios.get('https://localhost:4000/api')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="App">
            <h1>Create User</h1>
            <button onClick={(e) => handleSubmit(e)} >Submit</button>
        </div>
    );
}

export default App;
