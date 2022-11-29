import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

const [name, setName] = useState('Juan');

    function showMessage(text) {
        if (text === ''){
            alert('No text');
        } else {
            alert(`Message received: ${text}`);
        }
    }

    function updateName (newName){
        setName(newName);
    }

    return (
        <div style={{background: 'lightblue', padding:'10px'}}>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
