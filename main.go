package main

import (
	// "fmt"
	"log"
	"net/http"

	"github.com/destafajri/video-chat-app/server"
)
func main() {
	server.AllRooms.Init()

	http.HandleFunc("/create", server.CreateRoomHandler)
	http.HandleFunc("/join", server.JoinRoomHandler)

	err := http.ListenAndServe(":1000", nil)
	if err !=nil {
		log.Fatal(err)
	}

}