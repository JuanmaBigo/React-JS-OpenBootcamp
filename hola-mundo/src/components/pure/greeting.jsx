import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 21
        };
    }

    render() {
        return (
            <div>
                <h1>
                HOLA {this.props.name}!
                </h1>
                <h2>
                Tienes {this.state.age} años.
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => ({
            age: prevState.age + 1,
        }));
    };
}



Greeting.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};

export default Greeting;
