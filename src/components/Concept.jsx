import { useState, useEffect } from "react";

export default function Concept (){
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0)

  useEffect(()=>{
    setNum2(num2 + 2);
  },[num])
  return (
    <div className="flex justify-center items-center">
      <div>
        <p>
            num1: {num}
        </p>
        <p>
            num2: {num2}
        </p>
        <button className=" border-[#00d200] border-[2px] px-[2rem] active:scale-95" onClick={()=>{ setNum(num + 1) } }>Anas</button>
        </div>
    </div>)
}