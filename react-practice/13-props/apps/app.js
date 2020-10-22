import React from 'react';
import Props from './props';
import MultiProps from './multi_props';
import PropsChinldren from './props_children';

let propsData = {
    name:"mike",
    address:"china",
    height:"173cm"
}

function test(param){
    let newParam = param.concat('mike');
    console.log(newParam);
}

class App extends React.Component{


    render(){
        return (<div>
            <Props data="我是props属性"/>
            <MultiProps data={{...propsData}} data2={"我是属性值2"} data3={test}/>
            <MultiProps/>
            <PropsChinldren>
                <p>我是p标签</p>
                <h4>我是h4</h4>
                <button>我是button</button>
                <label>我是label</label>
                <p>我是文本组件p</p>
            </PropsChinldren>
        </div>)
    }
};

export default App;