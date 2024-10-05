import logo from './logo.svg';
import './PipelineInterface.css';
import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

function CodeEditor({ code, setCode }) {
  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      className="CodeEditor"
      style={{
        fontFamily: '"Fira Code", monospace',
        fontSize: 14,
        backgroundColor: '#252526',
        border: '1px solid #555',
        color: '#d4d4d4',
        borderRadius: '5px',
      }}
    />
  );
}

function PipelineInterface() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

    // Function to run the code
    function runCode() {
      try {
        // Capture console output
        const originalLog = console.log;
        const outputArray = [];
        console.log = (message) => outputArray.push(message);
        console.error = (message) => outputArray.push(`Error: ${message}`);
  
        // Evaluate the code
        eval(code);
  
        // Restore console.log
        console.log = originalLog;
  
        // Set the output to the textarea
        setOutput(outputArray.join('\n'));
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    }

  function buildCode() {

  }

  function testCode() {
    
  }

  function deployCode() {
    
  }

  return (
    <div className="PipelineInterface">
        <header className="PipelineInterfaceHeaderBar">
          <h1>Pipeline Interface</h1>
        </header>
          <div>
            <button onClick={buildCode}>Build</button>
            <button onClick={testCode}>Test</button>
            <button onClick={deployCode}>Deploy</button>
            <button onClick={runCode}>Run</button>
          </div>
          <h2>Code Editor</h2>
          <CodeEditor code={code} setCode={setCode} className="CodeEditor"/>
          <h2>Console Output</h2>
          <textarea
          value={output}
          readOnly
          className="ConsoleOutput"
        />
    </div>
  );
}

export default PipelineInterface;