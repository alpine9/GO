package handlers

import (
	"fmt"
	"net/http"
)

func FriendsHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("用户查看好友列表")
}
