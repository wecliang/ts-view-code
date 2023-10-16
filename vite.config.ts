import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';
import vitePluginForArco from '@arco-plugins/vite-react';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import setting from './src/settings.json';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import vitePluginRequire from 'vite-plugin-require';



// https://vitejs.cn/guide/
// https://github.com/vitejs/awesome-vite#plugins
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ],
  },
  plugins: [
    vitePluginRequire({}),
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': "ReactRouterDOM",
      'react-dnd': "ReactDnD",
      'react-dnd-html5-backend': "ReactDnDHTML5Backend",
      // '@arco-design/web-react': 'arco',
      // '@arco-design/web-react/icon': "arcoicon",
    }),
    react({
      babel: {
        babelrc: false,
        configFile: false,
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-proposal-class-properties',
          // ['babel-plugin-import',
          //   {
          //     libraryName: '@arco-design/web-react',
          //     libraryDirectory: 'es',
          //     camel2DashComponentName: false,
          //     style: true, // 样式按需加载
          //   },
          // ]
        ],
      },
    }),
    svgrPlugin({
      svgrOptions: {},
    }),
    vitePluginForArco({
      theme: '@arco-themes/react-arco-pro',
      modifyVars: {
        'arcoblue-6': setting.themeColor,
      },
    }),
    monacoEditorPlugin({ 
      customDistPath: (root: string, buildOutDir: string) => {
        return `${root}/${buildOutDir}/monacoeditorwork`;
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 3098,
    https: true,
    proxy: {
      '/wizapi': {
        // target: 'http://api-d.tinvapi.com/',
        target: 'http://127.0.0.1:9000',
        changeOrigin: true
      },
    }
  },
});
