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

const bodyStyle = {
  backgroundColor: "#000",
  minHeight: "100vh",
  textShadow: '0 0 10px #00d200',
}

const title = "mt-10 mr-5 text-[4rem]";
const sub = "text-[3rem] mr-5";

function App() {

  return (
    <div style={bodyStyle}>
      <div className='font-handjet text-green-500' style={{direction: 'rtl'}}>
        <p className='text-[10rem] underline-offset-[40px] underline'>ملخص رياكت لجماعة CSG</p>

        <Title text={"ما هو React؟"} />
        <Sub text={"هي framework مخصص لjavascript يستخدم لبناء مواقع."} />

        <Title text={"ما الذي تحتاجه للبدء في React؟"} />
        <Sub text={"قبل أن تبدأ في استخدام React، هناك بعض الأدوات التي ستحتاجها. أولاً، تحتاج إلى Node.js و npm (أداة إدارة الحزم). بعد ذلك، يمكنك إنشاء مشروع React باستخدام create-react-app."} />

        <Title text={"الخطوات"} />
        <Sub text={"تأكد من تثبيت Node.js و npm على جهازك. يمكنك التحقق من ذلك باستخدام الأوامر التالية:"} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.5rem] rounded'>
          <CodeBlock codeString={`node -v\nnpm -v`} />
        </div>

        <Sub text={"بعد التحقق من تثبيت Node.js و npm، استخدم الأمر التالي لإنشاء مشروع React جديد:"} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.5rem] rounded'>
          <CodeBlock codeString={`npx create-react-app my-app\ncd my-app\nnpm start`} />
        </div>

        <Sub text={"الآن وقد قمت بإنشاء مشروع React، يمكنك البدء في بناء مكوناتك وتطبيقاتك."} />

        <Title text={"المفهوم الأول: components"} />
        <div className='flex'>
          <Sub text={"هي قطع من الكود تحطها مع بعضها و تبني بيها الصفحه، نفس الlego"} />
          <img src={lego} className='w-[20rem] contrast-150' />
        </div>
        <Sub text={"تكتب بهذا الشكل:"} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.5rem] rounded'>
          <CodeBlock codeString={"export default function Component(){\nreturn(\n<div>CSG</div>\n)}"} />
        </div>

        <Title text={"المفهوم الثاني: props"} />
        <Sub text={"هي وسيلة لتمرير البيانات بين components. يعني تقدر ترسل معلومات من component إلى آخر."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.5rem] rounded'>
          <CodeBlock codeString={`function Welcome(name) {\n  return <h1>اهلا {name}</h1>;\n}\n\n<Welcome name="Hamzah" />`} />
        </div>
      {/* props */}

        <PropExample/>
        <Title text={"المفهوم الثالث: state"} />
        <Sub text={"هي طريقة للتحكم في البيانات داخل component. مثلا لو عندك زر و تبغى تحسب كم مره المستخدم ضغط الزر."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.5rem] rounded'>
          <CodeBlock codeString={`import { useState } from "react";\n\nexport default function Concept1 (){\n  const [num, setNum] = useState(0);\n\n  return (\n    <div className="flex justify-center items-center">\n      <div>\n        <p>\n            num1: {num}\n        </p>\n\n        <button className=" border-[#00d200] border-[2px] px-[2rem] active:scale-95" onClick={()=>{ setNum(num + 1) } }>Anas</button>\n        </div>\n    </div>)\n}`} />
        </div>

        <Title>مثال على الكود:</Title>
        <div className='text-[3rem]'>
          <Concept1 />
        </div>
        <Title text={"المفهوم الرابع: useEffect"} />
        <Sub text={"هي طريقة لتنفيذ شغلات معينة بعد ما يتغير state معين أو أول ما يحمل component."} />
        <div style={{textShadow: "0 0 0px", direction: 'ltr', fontFamily: 'monospace'}} className='text-[1.5rem] rounded'>
          <CodeBlock codeString={`import { useState, useEffect } from "react";\n\nexport default function Concept (){\n  const [num, setNum] = useState(0);\n  const [num2, setNum2] = useState(0)\n\n  useEffect(()=>{\n    setNum2(num2 + 2);\n  },[num])\n  return (\n    <div>\n        <p>\n            {num}\n        </p>\n        <p>\n            {num2}\n        </p>\n        <button onClick={()=>{ setNum(num + 1) } }>Anas</button>\n    </div>)\n}`} />
        </div>

        <Title>مثال على الكود:</Title>
        <div className='text-[3rem]'>
          <Concept />
        </div>
        <p className={title}>هذا كل شيء لليوم، نراكم في الحلقة القادمة...</p>
      </div>
    </div>
  );
}

export default App;
