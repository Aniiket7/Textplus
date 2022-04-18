import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
// import axios from 'axios'
// import { useEffect, useState } from 'react'
import { ChatContext, ChatState } from '../context/ChatProvider'
import { Box } from '@chakra-ui/layout'
import SideDrawer from './miscellaneous/SideDrawer'
import Chatbox from './miscellaneous/Chatbox'
import MyChats from './miscellaneous/MyChats'
import Nav from '../Pages/comp/Nav'
const user = JSON.parse(localStorage.getItem("userInfo"));
const Chat = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const history = useHistory();
  // const [chats, setChats] = useState([])

  // const fetchchat= async()=>{
  //     const {data} = await axios.get('/api/chat');
  //     setChats(data);
  // };


  // useEffect(() => {
  //     fetchchat();
  // }, [])
  // return (
  //     <div>
  //         {
  //             chats.map((c) => (<div key={c._id}> {c.chatName} </div>))
  //         }
  //         chatpage
  //     </div>
  // )

  const {user} = ChatState();
  // const user = JSON.parse(localStorage.getItem("userInfo"));

  // if (!user) history.push("/login");

  localStorage.setItem('pic', 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png');
  // const sideDrawer2 = sideDrawer();
  return (
    <>
      <Nav />
      <div style={{ width: "100%" }}>
        {/* <sideDrawer/> */}
        {user && <SideDrawer />}
        <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
          {/* {user && <MyChats />} */}
          {/* {user && <Chatbox />} */}
          {user && <MyChats fetchAgain={fetchAgain} />}
          {user && (<Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
        </Box>
      </div>
    </>
  )


};

export default Chat
