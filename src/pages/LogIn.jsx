import React, {useContext,useState} from 'react'
import AuthContext from "../components/context"

const LogIn = () => {
  const [error,setError] = useState('')
  const loginData = {login:'argredg', pass : '121212'}
  const [inputData, setInputData] = useState({
    login:'',
    pass:'',

  })
  const onChange = (e) => {
    const field ={}
    field[e.target.id] = e.target.value
    setInputData((data)=>({...inputData,...field}))
    setError('')
  }
  const login = () => {
    if (loginData.login === inputData.login && loginData.pass === inputData.pass){
      setIsAuth(true)
    }
    setError ('Wrong data')
  }

  const {isAuth, setIsAuth} = useContext(AuthContext);
    return(
<form className ="container">
 <div class="row">
  
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate"/>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"/>
         
        </div>
      </div>
   {error && <h5 className="red-text text-darken-4"> {error}</h5>}                        
      <a onClick = {() =>setIsAuth(true)} class = 'waves-effect waves=light btn '>Login</a> 
    </form>

    )
}

export default LogIn;