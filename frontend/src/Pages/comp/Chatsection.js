import React from 'react'
import { useHistory } from "react-router";
const Chatsection = () => {
    const checkpoint = JSON.parse(localStorage.getItem("userInfo"));
    const history = useHistory();
    return (
        <div>
            {/* {(checkpoint) ? history.push('/chats') : history.push('/login')} */}
            {history.push('/chats')}
        </div>
    )
}

export default Chatsection
