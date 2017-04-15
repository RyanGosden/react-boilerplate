import React from 'react';
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';
import '../../dist/css/test-component.css';




export default class App extends React.Component{
    render(){
        return (
            <div className="test-component">
                <div> Hi </div>
                <DatePicker />
            </div>
        )
    }
}
