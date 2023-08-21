import './App.css';
import React, { useState } from 'react';
import { marked } from 'marked'

function App() {
  const [input, setInput] = useState('');

  function handleChange(event){
    setInput(event.target.value);
  }
  const markedText = marked(input);

  return (

    <div className="App">
        <div>
            <h2>Editor</h2>
            <textarea 
                id="editor" 
                value={input} 
                onChange={handleChange} 
                rows={10} 
                cols={50}
                />
        </div>

        <div className='preview'>
          <h2>Previewer</h2>
          <div
              id="preview"
              dangerouslySetInnerHTML={{__html: markedText}}
          />
        </div>
        
    </div>
  );
}

export default App;
