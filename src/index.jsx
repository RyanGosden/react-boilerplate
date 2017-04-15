// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

// Components
import App from './components/app.jsx';

ReactDOM.render(<LocaleProvider locale={enUS}><App /></LocaleProvider>, document.getElementById('main'));




// http://kloc.io/setting-up-react-workflow-babel-webpack/
