package handlers

import (
	"fmt"
	"github.com/gorilla/websocket"
	"net/http"
)

// 创建一个webSocket.Upgrader对象， 用于配置参数（webSocket连接）
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024, //读取webSocket缓存区的大小
	WriteBufferSize: 1024, //写入
}

func ChatHandler(w http.ResponseWriter, r *http.Request) { //WebSocket处理函数
	fmt.Println("用户聊天中...")
	//升级 HTTP连接 --> WebSocket连接
	conn, err := upgrader.Upgrade(w, r, nil)

	if err != nil { //升级失败（err捕获错误）
		fmt.Println("出现错误") //记录错误信息
	}
	defer conn.Close() //升级成功 则WebSocket连接会存储在 conn 中，并且在函数结束时关闭连接
}
