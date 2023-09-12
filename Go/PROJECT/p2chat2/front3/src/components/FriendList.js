import React,{useState} from 'react'

function FriendList(){
    const [friends, setFriends] = useState([
        { id: 1, name: '好友1' },
        { id: 2, name: '好友2' },
        { id: 3, name: '好友3' },
    ]);

    const [newFriendName, setNewFriendName] = useState('');

    //添加好友
    const handleAddFriend = () => {
        // //1）定义JSON格式的变量
        // const requestData={
        //     newFriendName:newFriendName,
        // }
        // //2)fetch发起http请求
        // fetch("/friends",{
        //     method:"POST",
        //     headers:{//定义请求头
        //         "Content-Type":"application/json",
        //     },
        //     body:JSON.stringify(requestData),
        //
        // })
        //     .then((response)=>{//(参数)=>{方法体} 这里定义了一个匿名函数
        //         if (response.ok){
        //             console.log("添加好友请求成功")
        //             //成功执行以下操作
        //             if (newFriendName.trim() !== '') {
        //                 const newFriend = { id: Date.now(), name: newFriendName };
        //                 setFriends([...friends, newFriend]);
        //                 setNewFriendName(''); // 清空输入框
        //             }
        //         }else{
        //             console.log("添加好友请求失败")
        //         }
        // })
        //     .catch((error)=>{
        //         console.error("发生错误",error)
        //     })
        //成功执行以下操作
        if (newFriendName.trim() !== '') {
            const newFriend = { id: Date.now(), name: newFriendName };
            setFriends([...friends, newFriend]);
            setNewFriendName(''); // 清空输入框
        }

    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">好友列表</h2>

                    {/* 添加好友的表单 */}
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="添加好友"
                            value={newFriendName}
                            onChange={(e) => setNewFriendName(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={handleAddFriend}
                            >
                                添加
                            </button>
                        </div>
                    </div>

                    {/* 好友列表 */}
                    <ul className="list-group">
                        {friends.map((friend) => (
                            <li key={friend.id} className="list-group-item">
                                {friend.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}
export default FriendList