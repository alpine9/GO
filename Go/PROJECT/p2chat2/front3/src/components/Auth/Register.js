import React,{useState} from "react";

function Register(){

    //useState创建了 状态变量 和 对应的set函数
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');


    const handleRegister = () => {

        //1）创建存储（要响应给前端的）JSON格式 的变量
        const requestDate = {
            username:username,//左边是JSON变量requestData的属性，右边是 状态变量（用户输入会赋给它）
            password:password,
        }


        // 2）通过fetch 发送 HTTP网络请求 到 服务器的'/register'接口(重难点)
        //fetch:用于发起HTTP网络请求（比如：POST） fetch（url，配置对象）
            fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",//定义请求体的 内容类型 为 JSON
                },
                body: JSON.stringify(requestDate),//将定义的JS对象 转换为 JSON字符串
            })
                .then((response) => {
                    if (response.ok) {//服务区响应成功（状态码：200-299）
                        console.log("注册成功");//控制台打印
                    } else {//服务区响应失败（不在200-299）
                        console.error("注册失败");
                    }
                })
                .catch((error) => {//捕获网络请求错误
                    console.error("发生错误:", error);///打印错误信息
                });
        };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h2 className="text-center">注册</h2>
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
                        <button
                            type="button"
                            className="btn btn-primary btn-block mx-auto"
                            onClick={handleRegister}
                        >
                            注册
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register