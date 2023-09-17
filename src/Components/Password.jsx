import React, { useState } from "react";
import showPasswordIcon from "./show-password-icon.jpg"

function Password() {
    const [password, setPassword] = useState('');
    const [hidden, setHidden] = useState(true);

    return (<div className="flex w-[22rem] gap-3 justify-items-stretch items-stretch">
        {hidden ?
            (<input type="password"
            className="w-5/6 "
            value={password}
            onChange={Event => 
                setPassword(Event.target.value)
            }></input>)
        
            : (
                <input type="text"
                className="w-5/6 "
                value={password}
                onChange={Event => 
                setPassword(Event.target.value)
                }></input>
            )
                
            }
        <button className="w-[7.5%] h-[10%]" onClick={() =>setHidden(hidden => !hidden) }><img src={showPasswordIcon} className="mr-0 w-[100%] h-[100%]"  /></button>

    </div>)
    

}

export default Password