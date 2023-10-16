import './style/global.less';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import zhCN from '@arco-design/web-react/es/locale/zh-CN';
// import enUS from '@arco-design/web-react/es/locale/en-US';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GlobalContext } from './context';
import lazyload from './utils/lazyload';
import { app } from '../../arco-vite/dist/react-code-js.es.js';
import '../../arco-vite/dist/style.css';
app.appId = "cms";
app.setTheme("dark");


function Index() {
  const [lang, setLang] = useState('zh-CN');
  useEffect(() => {
    localStorage.setItem('AUTH_TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwLCJuYW1lIjoiYWRtaW4iLCJyb2xlcyI6WyJhZG1pbiJdLCJ0ZW5hbnRJZCI6IjEwMCIsImlhdCI6MTY5NzM5MTM2NywiZXhwIjoxNjk4Njg3MzY3fQ.iK-MNo-mCb5GpCo9GdE8aIdFrTdp3YOOQSJdWZ0J-Jg'
    )
  })


  const contextValue = {
    lang,
    setLang,
  };

  return (
    <DndProvider backend={HTML5Backend}>
    <HashRouter basename="/">
      <GlobalContext.Provider value={contextValue}>
        <Switch>
          <Route path="/home" component={lazyload(() => import('@/pages/home'))} />
          <Route path="/code" component={lazyload(() => import('@/pages/code'))} />
          <Redirect to="/home" />
        </Switch>
      </GlobalContext.Provider>
    </HashRouter>
    </DndProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));