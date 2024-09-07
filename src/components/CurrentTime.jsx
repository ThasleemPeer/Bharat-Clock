import { useEffect } from "react";
import { useState } from "react";
let CurrentTime =()=>{
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        console.log("interval has been set")
        const intervalId=setInterval(()=>{
            setTime(new Date());

        },1000);
        return ()=>{
            clearInterval(intervalId);
            console.log("cancelled the interval");
        }

    },[]);
    return <p  className="lead">
        This is the Current time: {time.toLocaleDateString() }-{" "}-{time.toLocaleTimeString()}
        </p>

}
export default CurrentTime;