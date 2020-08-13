import React from 'react';

import Loadable from 'react-loadable';

// 异步组件
const LoadableComponent = Loadable({
    loader: () => import('./'), // 异步加载当前目录下的index.js 组件
    loading(){   // 加载过程中要显示的组件;
        return <div>正在加载...</div>
    },
});

// 导出一个无状态组件
export default () => <LoadableComponent/>;