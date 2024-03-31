import React from 'react';
import { userContext } from './context';
import Button from 'react-bootstrap/Button';



export default class Header2 extends React.Component {
    static contextType = userContext;
    
    render() {
        let[user, setUser] = this.context; 

        const headerStyle = {
            backgroundColor: '#cee',
            textAlign: 'center',
            padding: 5
        };

        const onClickSignout = (event) => {
            event.preventDefault();
            setUser('');
        };

        const onClickSignin = (event) => {
            event.preventDefault();
            setUser('Lion king');
        };

        return (
            <div style={headerStyle}>
                
                <a href='#'>Home</a>&nbsp;-&nbsp;
                <a href='#'>Products</a>&nbsp;-&nbsp;
                <a href='#'>Contact Us</a>&nbsp;-&nbsp;&nbsp;
                {
                    user
                    ? <span> [{user}&nbsp;:&nbsp;<a href='#' onClick={onClickSignout}>Signout</a>]</span>
                    : <span>[<a href='#' onClick={onClickSignin}>Signin</a>]</span>
                }
            </div>
            
            
        );
    }
}
