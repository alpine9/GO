import React, {useState} from "react";

function ChatRoom(){
    //1）初始化  用户输入和发送信息的变量
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');//定义状态变量 （保存用户输入的新消息）

    //2）处理 发送消息函数：
    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {//检查用户输入是否为空（trim去除前后空格）
            setMessages([...messages,{ text: newMessage }]);//更新messages
            //扩展运算符 ([...messages]) 创建数组：之前的messages数组+newMessage
            setNewMessage('');//刷新输入框
        }else{
            window.alert("用户输入内容无效")
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">聊天室</h2>
                    {/*显示发送的消息*/}
                    <div className="border rounded p-3 chat-box">
                        {messages.map((message, index) => (
                            <div key={index} className="message">{message.text}</div>
                        ))}
                    </div>
                    <div className="input-group mt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="输入消息..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleSendMessage}
                            >
                                发送
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatRoom
