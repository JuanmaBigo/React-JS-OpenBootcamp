import React from 'react';

const Child = ({ name }) => {

    function pressButton() {
        alert('Default Text');
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }



    return (
        <div>
            <p onMouseOver={() => console.log('on mouse over')}>Child compoonent</p>
            <button onClick={() => alert('button 1 pressed')}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() => pressButtonParams('Hello')}>
                Button 3
            </button>
            <input
                placeholder='Insert text'
                onFocus={() => console.log('Input Focus')}
                onChange={(event) => console.log('input changed:', event.target.value)}
                onCopy={() => console.log('Copied text from input')}
            />
        </div>
    );
}

export default Child;
