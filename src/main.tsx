import './style/global.less';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import zhCN from '@arco-design/web-react/es/locale/zh-CN';
// import enUS from '@arco-design/web-react/es/locale/en-US';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalContext } from './context';
import lazyload from './utils/lazyload';
import app from '@/store/app';


function Index() {
  const [lang, setLang] = useState('zh-CN');


  const contextValue = {
    lang,
    setLang,
  };

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={contextValue}>
        <Switch>
          <Route path="/index" component={lazyload(() => import('@/pages/index'))} />
        </Switch>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
