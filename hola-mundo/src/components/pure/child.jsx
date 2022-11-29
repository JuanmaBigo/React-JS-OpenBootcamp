import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {
    const messageRef = useRef('');
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }
    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }


    return (
        <div style={{ background: 'white' }}>
            <p onMouseOver={() => console.log('on mouse over')} style={{ background: 'yellow', width: 'fit-content', margin: 'auto', marginBottom: '10px' }}>
            Hello: {name}</p>
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
                placeholder='Send text to father'
                onFocus={() => console.log('Input Focus')}
                onChange={(event) => console.log('input changed:', event.target.value)}
                onCopy={() => console.log('Copied text from input')}
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{ marginTop: '25px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name'></input>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
