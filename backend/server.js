const express = require("express");
const connectDB = require("./config/db");
const app = express()
const chats = require("./dummydata")
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const contactform = require('./controllers/ContactController');
const { Socket } = require("socket.io");




connectDB();

app.use(express.json()) //for accesing daat from frontend in json

app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)
app.use("/api/contactfeed", contactform)
app.use("/api/message", messageRoutes)

app.get('/', (req, res) => {
    res.send("home page")
})


// app.get('/api/chat' , (req,res)=>{
//     res.send(chats)
// })

// app.get('/api/chat/:id' , (req,res)=>{  // id will provided from url
//     // console.log(req.params.id);
//     const singlechat = chats.find(x=>x._id === req.params.id);
//     console.log(singlechat);
// })





const server = app.listen(5000, () => {
    console.log("server started on port no 5000")

})

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
        // credentials: true,
    },
});



io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
      socket.join(userData._id);
      console.log(userData._id)
      socket.emit("connected");
    });
  
    socket.on("join chat", (room) => {
      socket.join(room);
      console.log("User Joined Room: " + room);
    });
    socket.on("typing", (room) => socket.in(room).emit("typing"));
    socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
  
    socket.on("new message", (newMessageRecieved) => {
      var chat = newMessageRecieved.chat;
  
      if (!chat.users) return console.log("chat.users not defined");
  
      chat.users.forEach((user) => {
        if (user._id == newMessageRecieved.sender._id) return;
  
        socket.in(user._id).emit("message recieved", newMessageRecieved);
      });
    });
  
    socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
  });