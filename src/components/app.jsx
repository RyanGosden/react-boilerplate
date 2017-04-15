import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


export default class App extends React.Component{
    render(){
        return (
            <div>
                <div> Hi </div>
                <DatePicker />

            </div>
        )
    }
}
