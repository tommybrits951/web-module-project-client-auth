import React, {useState} from 'react'
import axios from "axios"

const FriendsAdd = () => {
    const [val, setVal] = useState({
        username: '',
        email: '',
        age: ''
    })
    
    const change = (e) => {
        const {name, value} = e.target
        setVal({...val, [name]: value})
    } 

    const submit = (e) => {
        e.preventDefault()
        const friend = {
            username: val.username,
            email: val.email,
            age: val.age
        }
        const token = localStorage.getItem('token')
        axios.post('http://localhost:9000/api/friends', friend, {headers: {
            authorization: token
        }})
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
        
    }



    return(
        <div>
            <h2>Add Friend</h2>
            <form onSubmit={submit}>
                <label>username: <input type={'username'} name="username" value={val.username} onChange={change} /> </label><br/>
                <label>email: <input type={'email'} name="email" value={val.email} onChange={change} /> </label><br />
                <label>age: <input type={'number'} name="age" value={val.age} onChange={change} /> </label><br/>
                <input type={'submit'} value="Submit"/>
            </form>
        </div>
    )
}


export default FriendsAdd