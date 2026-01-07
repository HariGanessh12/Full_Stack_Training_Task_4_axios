import React, { useEffect, useState } from 'react'
import axios from 'axios';

const API_URL='https://jsonplaceholder.typicode.com/comments';

function Comments() {
    const[comments, setComments] = useState([]);
    
    useEffect(() => {
        axios.get(API_URL)
        .then(res => {
            setComments(res.data)
        })}, [])

  return (
    <div>
        <h3>Comments List</h3>
        <table className='table table-bordered'>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </thead>
            <tbody>
                { comments.map(comments =>(
                <tr key={comments}>
                    <td>{comments.id}</td>
                    <td>{comments.name}</td>
                    <td>{comments.email}</td>
                    <td>{comments.body}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Comments