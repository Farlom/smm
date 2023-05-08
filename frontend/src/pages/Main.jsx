import React, {useEffect, useState} from 'react';
import axios from "axios";

const API_ENDPOINT = "http://127.0.0.1:8000/api/users"

const Main = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const registerUser = async () => {
        console.log("REG")
        try {
            const resp = await axios.post(API_ENDPOINT, {
                name,
                age
            })
            console.log(resp, " resp")
        } catch (er) {
            console.error(er)
        }
    }

    return (
        <div>
            <div>
                Привет это main page
            </div>
            <div>
                тут можно создать юзера
            </div>
            <div>
                <span>имя</span>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='имя' />
            </div>
            <div>
                <span>возраст</span>
                <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder='взраст' />
            </div>
            <button onClick={registerUser}>submit</button>


        </div>
    );
};

export default Main;
