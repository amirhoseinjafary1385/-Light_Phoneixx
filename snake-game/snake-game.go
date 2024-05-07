//@Light_Phoneixx
package main

import (
	"fmt"
	"net/http"
)

func main() {

	fmt.Println("Server is running on  http://localhost:8080")
	http.Handle("/", http.FileServer(http.Dir("./public")))
	http.ListenAndServe(":8080", nil)
}
