import React, { useState } from "react"
import MyModal from "../components/MyModal/MyModal";

import UserList from "../components/UserList";


const Users=() => {
  const [showFormUser, setShowFormUser]=useState(false);
  const [users, setUsers]=useState([
    {
      id:1,
      name:'John',
      phone:'7788'
    },
    {
      id:2,
      name:'Thanos',
      phone:'50%'
    },
    {
      id:3,
      name:'Borisn',
      phone:'284223'
    },
  ]);
  const [user, setUser]=useState(
    {
      name:'',
      phone:'',
    }
    );
  const onChange=(e)=>{
    if (e.target.id=="name"){
      setUser({...user, name: e.target.value});
    }else{
      setUser({...user, phone: e.target.value});
    }
  }

  const addUser=()=>{
    const id = Math.random()*1
    setUser({...user,id:id})
    setUsers([...users,user]);
  }

  const removeUser = (id) =>{
    const confirm = window.confirm("Реально удалить?")
    if (confirm) setUsers(users.filter((user)=>user.id !== id))
  };

  const clear = () =>{
    setUser({name:'',phone:''})

  }

console.log(user);
  return (
   <div className="App">

  
    <div className="container">
      <MyModal>HI</MyModal>
    <div className="row m-1">
      <div className="col s4">
        <a className="waves-effect waves-light btn"
        onClick={()=>setShowFormUser(!showFormUser)}
        >
          Add user
        </a>
      </div>
      <div className="col s8">
        {showFormUser &&
        <>
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="name" type="text" class="validate" value={user.name} placeholder="EnterName"
           onChange={onChange}/>
          <a id="Add" className="waves-effect waves-light btn m-1"
            onClick={()=>addUser()}
            >
            Add</a>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="phone" type="tel" class="validate" placeholder="EnterPhone" onChange={onChange}/>
          <a className="waves-effect waves-light right btn m-1"
              onClick={()=>clear()}
          >Cancel</a>
        </div>
        </>}
      </div>
    </div>
   <UserList search deleteUser = {removeUser}>{users}</UserList>
        
  </div> </div>
  );
}

export default Users;