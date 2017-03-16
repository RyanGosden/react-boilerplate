import React from 'react';
import { DatePicker, Slider } from 'antd';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <div> Hi </div>
                <DatePicker />
                <Slider defaultValue={30} />

            </div>
        )
    }
}
