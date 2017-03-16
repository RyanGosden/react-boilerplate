import React from 'react';
import ReactDOM from 'react-dom';

class x extends React.Component {

    render(){
        return(
            <div>
                "Hello"
            </div>
        );
    }

}


ReactDOM.render(
    <x />,
    document.getElementById('root')
);