import React, { useContext } from 'react';
import { userContext } from './context';

export default function Content2() {
    let [user, setUser] = React.useContext(userContext); // Correct way to use context in a functional component

    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: 5
    };

    const onClickSignin = (event) => {
        event.preventDefault();
        setUser('Lion king'); 
    };

    return (
        <div style={contentStyle}>
            {
                user
                ? <span> Hello {user}</span>
                : <span>Please <a href="#" onClick={onClickSignin}>Signin</a></span>
            }
            
        </div>
        
    );
}
