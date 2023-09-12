import React, { useState } from 'react';
// import { auth } from './firebase'; // 初始化 Firebase 认证（使用Firebase身份验证服务 来实现 注册功能）

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //async 关键字用于定义异步函数（允许在函数内部使用 await 来等待一个异步操作的完成）
    const handleLogin = async() => {//有异步操作：（优）不用，会用传统回调或Promise链 ；更易捕获错误
        //     //登录成功后（Firebase会为用户生成身份验证令牌（authentication token）用于标识用户身份），然后导航到chat路径（或者受保护的页面）
        //     await auth.signInWithusernameAndPassword(username, password)//等待 signInWithusernameAndPassword（Firebase身份验证的一种方法）

        //1）定义JSON格式的响应变量
        const requestData={
            username:username,
            password:password,
        }
        // 2）发送注册请求
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((response) => {
                if (response.ok) {//状态码200-299
                    console.log("注册成功");
                } else {
                    console.error("注册失败");
                }
            })
            .catch((error) => {
                console.error("发生错误:", error);
            });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="text-center">登录</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">用户名</label>
                            <input
                                type="username"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">密码</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {/*一旦导入Bootstrap就可以使用他的与预定义类名就可以了 比如上面btn 按钮，btn-primary蓝色*/}
                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={handleLogin}
                        >
                            登录
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login