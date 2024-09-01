import { useState } from "react"

export default function PropExample(){
    const [text, setText] = useState("");
    return (
        <div className=" justify-center items-center flex" style={{direction: 'ltr', fontSize: '2rem'}} >
            <form style={{display: 'grid', width: '20rem', marginTop: '1rem'}}>
                <input type="text" placeholder="enter text to try!" value={text} onChange={(e)=>{setText(e.target.value)}}/>
                <button onClick={(e)=>{e.preventDefault()}} className="border-[#00d200] m-2 border-[2px] px-[2rem] active:scale-95">your text is here: <br/>{text}</button>
                <textarea value={`and here: ${text}`}></textarea>
            </form>
        </div>
    )
}