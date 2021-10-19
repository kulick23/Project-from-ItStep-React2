import React from 'react'

const UserList = (props) => {
    const onChange=(e)=>{
        console.log(e.target.value)
      }
    return (
        <>

      {props.search && <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
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
     { props.children && props.children.map((user)=><tr>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td><i className="material-icons"
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
