import React from "react";
import Password from "./Password";

function SignInBox() {
    return <div className="flex bg-purple-200 h-screen justify-center items-center">
        <div className="flex rounded-3xl flex-col bg-yellow-300 h-[30rem] w-96 content-center ">
            <div className="font-[Hallelujah] flex-[1] bg-yellow-300  w-full p-4 text-center w-full text-5xl rounded-3xl">Welcome to AirCanvas!</div> 
            <div className="flex-[2] p-4">
                <div p-1> Username or Email</div>
                <input type="text" className="w-5/6"></input>
                <div>Password</div>
                <Password />
            </div><div className="grid justify-items-center flex-[1]">
                <button className="  bg-purple-500 w-24 h-8 shadow-purple-400/70 shadow-lg rounded hover:shadow-purple-400">
                Login
                
                </button>
            </div>
            
            <div className=" flex flex-col font-sans flex-[2] bg-yellow-300  w-full  justify-center items-center p-5 rounded-3xl">
                <div className="mt-2"><a href="./">Sign Up</a></div>
                <div><a href="./">Forgot your password ?</a></div>                
            </div>

        </div>
    </div>
}

export default SignInBox