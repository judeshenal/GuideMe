import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './ChatStyles.css';
import profile from './images/profile.png';
import { HiOutlineSearchCircle } from "react-icons/hi";
// import { BsFillSendFill } from "react-icons/bs";
import {db} from "./Firebase_Config"
import {addDoc , collection , serverTimestamp} from 'firebase/firestore'
import {
  query,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import larravel from "./apis/larravel";


export default function ChatPage()
{
  
  const [message , setMessage] = useState("welcome")
  const [Messages , setMessages] = useState([])
  const [user , setUser] = useState(1)
  const [chat , setChat] = useState({})
  const [chatting , setChatting] = useState(false)
  const [chatList, setChatList] = useState([])
  const [key , setKey] = useState("")

    const [filteredUser, setFilteredUser ]= useState([])

    const [userId, setUserId] = useState("");
    const [userImg, setUserImg] = useState();

    function handleEvent(chat)
    {
        setUserId(chat.userName);
        setUserImg(profile);
        setChat(chat)
        setChatting(true)
        setMessages([])
        getMessages(chat)
        console.log(chat)
        
    }

  function getUsers(){
    larravel.get('/user',{
    })
    .then((res) => { 
      console.log("result : ", res.data)
      const new_result = res.data.filter(object=>{
        return object.id!==user
      })
      console.log(new_result)
      setChatList(new_result)
  })
.catch((err) => { 
  alert(err)
})
  }

  function searchUser(){
    larravel.get('/search/'+key,{
    })
    .then((res) => { 
      console.log("result : ", res.data)
      const new_result = res.data.filter(object=>{
        return object.id!==user
      })
      console.log(new_result)
      setChatList(new_result)
  })
.catch((err) => { 
  alert(err)
})
  }

      useEffect(() => {
      getUsers()
      const q = query(
        collection(db, "messages"),
        orderBy("createdAt"),
        limit(50)
      );
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          if(doc.data().user===user){
            console.log(doc.data().user)
            messages.push({ ...doc.data(), id: doc.id ,key:0});
          }
          else{
            if(doc.data().to===user&&doc.data().user===chat){
              messages.push({ ...doc.data(), id: doc.id , key:1});
            }
          }
        });
        setMessages(messages);
        console.log(messages)
      });
      return () => unsubscribe;
    }, []);

    function getMessages(chat){
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
          );
          const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            console.log(chat.id)
            QuerySnapshot.forEach((doc) => {
              if(doc.data().user===user&&doc.data().to===chat.id){
                console.log(doc.data().user)
                messages.push({ ...doc.data(), id: doc.id ,key:0});
              }
              else{
                if(doc.data().to===user&&doc.data().user===chat.id){
                  messages.push({ ...doc.data(), id: doc.id , key:1});
                }
              }
            });
            setMessages(messages);
            console.log("chat : ",messages)
          });
          return () => unsubscribe;
    }
  
    const sendMessage = async () => {
        console.log(chat.id)
      if (message.trim() === "") {
        alert("Enter valid message");
        return;
      }
  
      await addDoc(collection(db, "messages"), {
        text: message,
        user:user,
        to:chat.id,
  
        createdAt: serverTimestamp(),
      });
      setMessage("");
    };

    function searchChat(){
      searchUser()
    }


    return(
        <>
        <div className="chat-full-screen">

            <div className="left-chat-list">
                <div className="left-chat-list-search-bar">
                    <input type="text" className="left-chat-list-search-bar-input" value={key} onChange={(e)=>setKey(e.target.value)}/>
                    <HiOutlineSearchCircle size={30} className="left-chat-list-search-bar-icon" onClick={searchChat}/>
                </div>
                    <div className="left-chat-list-content">
                    {chatList.length!==0?<div>
                      {chatList.map((data,id) => (
                    <div className="left-chat-list-card" key={data.id} onClick={(e)=>{handleEvent(data)}}>
                        <img className="left-chat-list-card-img" src={profile} />
                        <h6 className="left-chat-list-card-name-text" >{data.userName} </h6>
                        <p className="left-chat-list-card-time-text" >{data.timestamp}</p>
                    </div>))}
                    </div>:<div>
                      <h6>No Chats</h6>
                      </div>}
                </div>
            </div>

            <div className="right-single-chat">
               <div className="right-single-chat-header">
                    <img src={userImg} className="right-single-chat-header-img"/>
                    <h6  className="right-single-chat-header-text">{userId} </h6>
                </div>
             
                {chatting&&<div>
                  <div className="right-single-chat-content">
                    {Messages.map((chat, id)=>(
                        <>
                      { chat.key===0 && <div className="right-single-chat-content-card-user">
                            {chat.text}
                        </div>}
                      { chat.key===1 && 
                      <>
                      <div className="right-single-chat-content-card-me">
                            {chat.text} 
                        </div>
                        <div style={{height:'5rem'}}></div>
                        </>
                      }
                        </>
                    ))}
                    
                </div>
                <div className="right-single-chat-input-content">
                    <input type='text' className="right-single-chat-input-content-input" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
                </div>

                }
            </div>

        </div>
        
        </>
    );
}

