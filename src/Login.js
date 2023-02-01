import React, {useState} from "react"
import axios from "axios"

const Login = () => {
    const [val, setVal] = useState({
        username: '',
        password: '',
    })

    const change = (e) => {
        const {name, value} = e.target
        setVal({...val, [name]: value})
    }

    const submit = (e) => {
        e.preventDefault()
        const cred = {
            username: val.username,
            password: val.password
        }
        axios.post('http://localhost:9000/api/login', cred)
        .then(res => {
            console.log(res)
            const token = res.data.token
            localStorage.setItem("token", token)
        })
        .catch(err => console.log(err))
    }
    return(
        <form onSubmit={submit}>
            <h2>Login</h2>
            <label>username: <input type={'username'} name="username" value={val.username} onChange={change} /></label>
            <label>password: <input type={'password'} name="password" value={val.password} onChange={change} /></label>
            <input type={'submit'} value={'Submit'}/>
        </form>
    )
}

export default Login