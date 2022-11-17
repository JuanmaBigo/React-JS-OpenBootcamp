import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //  Breve explicación de useState:
    // const [variable, metodo para actualizarlo] = useState(valor inicial);
const [age, setAge] = useState(21);

const birthday = () => {
    setAge(age + 1);
};

    return (
        <div>
                <h1>
                HOLA {props.name} desde componente funcional!
                </h1>
                <h2>
                Tienes {age} años.
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
        </div>
    );
};


GreetingF.propTypes = {
name: PropTypes.string,
};


export default GreetingF;
