package handlers

import (
	"fmt"
	"net/http"
)

// 注册
func RegisterHandler(w http.ResponseWriter, r *http.Request) { //*http.Request易错 这里的参数要和 要求的r.HandleFunc参数相符
	fmt.Println("用户注册成功")
}

// 登录
func LoginHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("用户登录成功")
}
