import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const getFriends = () => {
        const token = localStorage.getItem('token')
        axios.get('http://localhost:9000/api/friends', {headers: {authorization: token}})
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getFriends()
    }, [])
    return (
        <div>
            <ul>
                {friends.map((friend, idx) => {
                    return(<li key={idx}>{friend.name}  {friend.age}  {friend.email}</li>)
                })}
            </ul>
        </div>
    )
}

export default Friends