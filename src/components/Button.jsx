export default function ButtonToIncrement({muhanned, num, setNum}){



    return(
        <div>
           
      <button onClick={()=>{ setNum(num + 1) } }>{muhanned}</button>

      </div>
    )
  }


  //  ()=>{}