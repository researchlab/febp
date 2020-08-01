import React from 'react';
import styles from './style.css';

export default class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }
    render(){
        return (
            <div className={styles.root}>
                <h2>用户登录</h2>
                <form ref="addForm" action="#">
                    <p>
                        <label htmlFor="name">姓名:</label><input type="text" id="name" ref="name" placeholder="请输入姓名"/>
                    </p>
                    <p>
                        <label htmlFor="pass"> 密码:</label><input type="password" id="pass" ref="pass" placeholder="请输入用户名"/>
                    </p>
                    <input type="submit" value="登录" onClick={this._login.bind(this)} className={styles.button}/>
                    <input type="reset" value="清空" className={styles.button}/>
                    <div>
                        {this.state.name ? "欢迎" + this.state.name + "登录":null}
                    </div>
                </form>
            </div>
        )
    }

    _login(){
        const name = this.refs.name.value;
        const pass = this.refs.pass.value;
        if (name.length == 0 || pass.length == 0){
            alert("用户名和密码不能为空");
        } else {
            this.setState({
                name:name
            })
        }
    }
}
