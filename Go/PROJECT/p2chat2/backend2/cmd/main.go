package main //这里是程序的入口文件  所以一定记得 main

import (
	handlers "backend2/internal/handlers"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	r := mux.NewRouter() //创建新的路由

	// 创建路由规则和处理程序
	r.HandleFunc("/register", handlers.RegisterHandler).Methods("POST")
	r.HandleFunc("/login", handlers.LoginHandler).Methods("POST")
	r.HandleFunc("/chat", handlers.ChatHandler).Methods("POST")
	r.HandleFunc("/profile", handlers.ProfileHandler).Methods("POST")
	r.HandleFunc("/friends", handlers.FriendsHandler).Methods("POST")

	// 启动HTTP服务器并使用路由
	fmt.Println("Start port:3001...")
	http.Handle("/", r)
	http.ListenAndServe(":3001", nil)

}
