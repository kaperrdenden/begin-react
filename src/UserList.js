import React, { useContext, useEffect } from 'react';
import { UserDispatch } from './App';


function UserList() {

    const users = [
        {
            id:1,
            username: 'Dong',
            email: 'weather2sogood@gmail.com',
        },
        {
            id:2,
            username: 'hee',
            email: 'ssmail.com',
        },
        {
            id:3,
            username: 'kang',
            email: 'wdsa2ssssmail.com',
        }
    ]
    
    return(

        <>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </>
        
    )
}

export default UserList;