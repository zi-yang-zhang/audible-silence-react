import React, { ChangeEvent, useState } from 'react';
import { Marked } from 'marked-ts';
// import { highlight } from 'highlight.js';

import './MarkdownDisplay.css'
const MarkdownDisplay: React.FC = () => {
    // Marked.setOptions({ highlight: (code, lang) => highlight(lang || '', code).value });

    const [mdText, setMdText] = useState('1');

    function handleTextInput(e: ChangeEvent<HTMLTextAreaElement>){
        setMdText(Marked.parse(e.target.value))
    }
    return (
      <div className="markdown-display">
        <iframe className='output' srcDoc={mdText} title='compiled'/>
        <textarea className='input' onChange={handleTextInput}>
        </textarea>
      </div>
    );
  }
  
  export default MarkdownDisplay;
  