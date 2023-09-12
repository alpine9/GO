package handlers

import (
	"fmt"
	"net/http"
)

func ProfileHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("用户查看个人简介")
}
