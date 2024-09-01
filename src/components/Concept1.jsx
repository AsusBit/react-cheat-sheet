import { useState } from "react";

export default function Concept1 (){
  const [num, setNum] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <div>
        <p>
            num1: {num}
        </p>

        <button className=" border-[#00d200] border-[2px] px-[2rem] active:scale-95" onClick={()=>{ setNum(num + 1) } }>Anas</button>
        </div>
    </div>)
}