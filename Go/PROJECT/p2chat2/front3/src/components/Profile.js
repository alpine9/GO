import React,{useState} from 'react'

function Profile(){
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleSaveProfile = () => {
        // 保存用户配置文件
    };

    // return (
    //     <div>
    //         <h2>User Profile</h2>
    //         <input
    //             type="text"
    //             placeholder="Name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //         />
    //         <textarea
    //             placeholder="Bio"
    //             value={bio}
    //             onChange={(e) => setBio(e.target.value)}
    //         ></textarea>
    //         <button onClick={handleSaveProfile}>Save</button>
    //     </div>
    // );
    const userProfile = {
        name: 'baicaoer',
        email: 'baicao@example.com',
        bio: 'GO Projecter',
        // 添加更多个人信息
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center">个人简介</h2>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{userProfile.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{userProfile.email}</h6>
                            <p className="card-text">{userProfile.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile