import logo from './logo.svg';
import './App.css';
import ButtonToIncrement from './components/Button';
import { useState, useEffect } from 'react';
import Title from './components/Title';
import Sub from './components/Sub';
import lego from './lego.png'
import CodeBlock from './components/CodeBlock';
import Concept from './components/Concept';
import Concept1 from './components/Concept1';
import PropExample from './components/PropExample';
import { useNavigate } from 'react-router-dom';

const bodyStyle = {
  backgroundColor: "#000",
  minHeight: "100vh",
  textShadow: '0 0 10px #00d200',
  '@media (max-width: 600px)': {
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
  },
}

const title = "mt-10 mr-5 text-[4rem]";
const sub = "text-[3rem] scale-50 sm:scale-100 mr-5";
const btn = " border-[#00d200] border-[2px] px-[2rem] active:scale-95";
const arr = ["ammar", "anas", "muhanned", "hamzah"]

function App() {
  const [textA, setTextA] = useState(true)

  return (
    <div style={bodyStyle}>
      <div className='font-handjet text-green-500' style={{direction: 'rtl'}}>
        <p className='text-[2.5rem] text-center sm:text-[10rem] underline-offset-[1rem] sm:underline-offset-[40px] underline'>ملخص رياكت لجماعة CSG</p>

        <Title text={"ما هو React؟"} />
        <Sub text={"هي framework مخصص لjavascript يستخدم لبناء مواقع."} />

        <Title text={"ما الذي تحتاجه للبدء في React؟"} />
        <Sub text={"قبل أن تبدأ في استخدام React، هناك بعض الأدوات التي ستحتاجها. أولاً، تحتاج إلى Node.js و npm (أداة إدارة الحزم). بعد ذلك، يمكنك إنشاء مشروع React باستخدام create-react-app."} />

        <Title text={"الخطوات"} />
        <Sub text={"تأكد من تثبيت Node.js و npm على جهازك. يمكنك التحقق من ذلك باستخدام الأوامر التالية:"} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`node -v\nnpm -v`} />
        </div>

        <Sub text={"بعد التحقق من تثبيت Node.js و npm، استخدم الأمر التالي لإنشاء مشروع React جديد:"} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`npx create-react-app my-app\ncd my-app\nnpm start`} />
        </div>

        <Sub text={"الآن وقد قمت بإنشاء مشروع React، يمكنك البدء في بناء مكوناتك وتطبيقاتك."} />

        <Title text={"المفهوم الأول: components"} />
        <div className='sm:flex'>
          <Sub text={"هي قطع من الكود تحطها مع بعضها و تبني بيها الصفحه، نفس الlego"} />
          <img src={lego} className='w-[20rem] contrast-150' />
        </div>
        <Sub text={"تكتب بهذا الشكل:"} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={"export default function Component(){\nreturn(\n<div>CSG</div>\n)}"} />
        </div>

        <Title text={"المفهوم الثاني: props"} />
        <Sub text={"هي وسيلة لتمرير البيانات بين components. يعني تقدر ترسل معلومات من component إلى آخر."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`function Welcome(name) {\n  return <h1>اهلا {name}</h1>;\n}\n\n<Welcome name="Hamzah" />`} />
        </div>
      {/* props */}

        <PropExample/>
        <Title text={"المفهوم الثالث: state"} />
        <Sub text={"هي طريقة للتحكم في البيانات داخل component. مثلا لو عندك زر و تبغى تحسب كم مره المستخدم ضغط الزر."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`import { useState } from "react";\n\nexport default function Concept1 (){\n  const [num, setNum] = useState(0);\n\n  return (\n    <div className="flex justify-center items-center">\n      <div>\n        <p>\n            num1: {num}\n        </p>\n\n        <button className=" border-[#00d200] border-[2px] px-[2rem] active:scale-95" onClick={()=>{ setNum(num + 1) } }>Anas</button>\n        </div>\n    </div>)\n}`} />
        </div>

        <Title>مثال على الكود:</Title>
        <div className='text-[3rem]'>
          <Concept1 />
        </div>
        <Title text={"المفهوم الرابع: useEffect"} />
        <Sub text={"هي طريقة لتنفيذ شغلات معينة بعد ما يتغير state معين أو أول ما يحمل component."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`import { useState, useEffect } from "react";\n\nexport default function Concept (){\n  const [num, setNum] = useState(0);\n  const [num2, setNum2] = useState(0)\n\n  useEffect(()=>{\n    setNum2(num2 + 2);\n  },[num])\n  return (\n    <div>\n        <p>\n            {num}\n        </p>\n        <p>\n            {num2}\n        </p>\n        <button onClick={()=>{ setNum(num + 1) } }>Anas</button>\n    </div>)\n}`} />
        </div>

        <Title>مثال على الكود:</Title>
        <div className='text-[3rem]'>
          <Concept />
        </div>
        {/* React Router */}
        <Title text={"React Router"} />
        <Sub text={"هي مكتبة تساعدك على التنقل بين الصفحات في تطبيقات React. تستخدم بشكل أساسي لعمل صفحات متعددة في التطبيق."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <Router>\n      <nav>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </nav>\n      <Switch>\n        <Route exact path="/" component={HomePage} />\n        <Route path="/about" component={AboutPage} />\n      </Switch>\n    </Router>\n  );\n}`} />
        </div>

        {/* Review Form Handling */}
        <Title text={"Form Handling"} />
        <Sub text={"هي طريقة للتعامل مع المدخلات من المستخدمين مثل النماذج. يمكنك الحصول على القيم من المدخلات وتحديث الstate أو التعامل معها مباشرة."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`function FormExample() {\n  const [inputValue, setInputValue] = useState("");\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert(inputValue);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}`} />
        </div>

        {/* Conditional Rendering */}
        <Title text={"Conditional JSX"} />
        <Sub text={"تستخدم لعرض محتوى معين بناءً على شرط معين."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`function ConditionalRender({ showContent }) {\n  return (\n    <div>\n      {showContent ? <p>Show this content</p> : <p>Hide this content</p>}\n    </div>\n  );\n}`} />
        </div>
        <div style={{direction: 'ltr'}} className=' grid text-[2rem]'>
        {textA && <>{"<I use && , if im false i dont appear >"}<br/></>}
        {textA ? " <im true now> ":" <im false now> "}
        <button className={btn} onClick={()=>{setTextA(prev=> !prev)}}>toggle text</button>
        </div>

        {/* List Rendering with map */}
        <Title text={"Rendering Lists with map"} />
        <Sub text={"تستخدم لطباعة مجموعة من العناصر في JSX باستخدام loop."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`function ListExample() {\n  const items = ["Item 1", "Item 2", "Item 3"];\n\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}`} />
        </div>
        <p style={{direction: 'ltr'}} className='text-[2rem]'>{'list: ["ammar", "anas", "muhanned", "hamzah"]'}</p>
        {arr.map((name, index)=><p style={{direction: 'ltr'}} className='text-[2rem]' key={index}>print {index + 1}: {name}</p>)}


        {/* External Dependencies (React Icons) */}
        <Title text={"استخدام مكتبات خارجية: React Icons"} />
        <Sub text={"يمكنك استخدام مكتبات خارجية مثل React Icons لإضافة أيقونات إلى تطبيقك بسهولة."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`import { FaReact } from 'react-icons/fa';\n\nfunction IconExample() {\n  return <FaReact size={50} color="#61DAFB" />;\n}`} />
        </div>

        {/* Tailwind CSS */}
        <Title text={"استخدام TailwindCSS"} />
        <Sub text={"هي مكتبة لتصميم المواقع بشكل أسرع باستخدام كلاس CSS جاهزة."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.1rem] sm:text-[1.5rem] rounded'>
          <CodeBlock codeString={`function TailwindExample() {\n  return <button className="bg-blue-500 text-white px-4 py-2 rounded">Click me</button>;\n}`} />
        </div>
        <button className="bg-blue-500 active:scale-95 ease-in-out duration-100 text-white px-4 py-2 rounded">Click me</button>

        <p className={title}>هنا انتهت سيرتنا مع رياكت، بتقديم <a href="https://hamzahalnofli.com" style={{textShadow: "0 0 0px"}} className="text-red-600 hover:underline">حمزة النوفلي</a>.</p>

      </div>
    </div>
  );
}

export default App;
