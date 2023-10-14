import React from 'react';
import loadable from '@loadable/component';
import Spin from '@arco-design/web-react/lib/Spin';

// https://github.com/gregberge/loadable-components/pull/226
function load(fn, options) {
  const Component = loadable(fn, options);

  Component.preload = fn.requireAsync || fn;

  return Component;
}

function LoadingComponent(props: {
  loader: any;
  error: boolean;
  timedOut: boolean;
  pastDelay: boolean;
}) {
  if (props.error) {
    console.error(props.error);
    return null;
  }
  return (
    <div>
      <Spin />
    </div>
  );
}

const lazyload = (loader) => {
  if(!loader) return () => null;
  return  load(loader, {
      fallback: LoadingComponent({
        loader,
        pastDelay: true,
        error: false,
        timedOut: false,
      }),
  });
}

export default lazyload;


const scriptCache = {};

/**
 * @name 动态加载js
 * @param url 
 * @returns 
 */
export function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (scriptCache[url]) {
      // 如果 URL 已经加载过，直接返回缓存的 Promise 对象
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.onload = () => {
      scriptCache[url] = true; // 将 URL 标记为已加载
      resolve(true);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}