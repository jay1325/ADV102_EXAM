import React, { useState } from 'react';

function Stack(){
    const [stack, setStack] = useState([]);
    const [inputValue, setinputValue] = useState('');
    
    const handlePush = () =>{
        if(inputValue !== ''){
            const newStack =stack.concat([parseInt(inputValue)]);  
            setStack(newStack);
            setinputValue('');                                
        }
    };

    const handlePop =()=>{
        if (stack.length > 0){
           const newStack = stack.slice(0,stack.length -1) ;
           setStack(newStack);
        }
        };
        return(
             <div>
                <input
                type="number"
                value={inputValue}
                onChange={e =>setinputValue (e.target.value)}/>
                <button onClick={handlePush}>Push</button>
                <button onClick={handlePop}>Pop</button>
                <div>
                {stack.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
                </div>
            </div>
            );
}
export default Stack;
