import { CodeBlock, dracula, monokai  } from 'react-code-blocks';


const MyCodeBlock = ({ codeString }) => (
  <CodeBlock
    text={codeString}
    language={"javascript"}
    showLineNumbers={true}
    theme={monokai}
  />
);

export default MyCodeBlock;