import React from 'react';
import ReactDOM from 'react-dom';

export default class x extends React.Component {

    render(){
        return(
            <div>
                Hi
            </div>
        );
    }

}


reactDOM.render(<x/>, document.getElementById('root'));