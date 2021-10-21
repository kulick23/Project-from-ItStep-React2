import React, { useEffect, useState } from 'react'

const UserList = (props) => {
  const [filter,setFilter] = useState(props.children)



useEffect(()=>{
  setFilter(props.children)
},[props.children])

  const getSearch = () => {
    if (filter){
      return filter
    }
    return props.children
  }
  const userSearch = getSearch();
    const onChange = (e) => {
        setFilter(props.children.filter((user)=>user.name.toLowerCase().includes(e.target.value.toLowerCase())))
       }

    return (
        <>
        {props.search && <div className="row">
            <div class="input-field col s12">
            <i class="material-icons prefix">search</i>
            <textarea 
            onChange={onChange} id="icon_prefix2"
            class="materialize-textarea"
            placeholder="Search by name"
            ></textarea>
            </div>
        </div>}
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Delete</th>
            </tr>
            </thead>

            <tbody>
            { props.children && filter.map((user)=>
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td> <i className="material-icons"
                        onClick={()=>props.deleteUser(user.id)}
                >delete</i></td>
            </tr>
            )}
            </tbody>
        </table> 
        </>
    )
}

export default UserList