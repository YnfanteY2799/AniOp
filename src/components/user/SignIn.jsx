import { useState } from 'react';


const SignIn  = (  ) =>{
    
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    return(

        <div className="box">
            
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                
                    <input className="input /*is-success*/" 
                    type="text" placeholder="Username" 
                    value={userName} onChange={(e)=>setUserName(e.target.value)}
                    />
                
                </div>
                {/* <p class="help is-success">This username is available</p> */}
            </div>

            <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                
                    <input className="input /*is-success*/" 
                    type="text" placeholder="Password" 
                    value={passWord} onChange={(e)=>setPassWord(e.target.value)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                {/* <p class="help is-success">This username is available</p> */}
            </div>


        </div>
    );

}

export { SignIn };