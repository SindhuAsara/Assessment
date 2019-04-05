package main

import (  
    "fmt"
    "io/ioutil"
	"crypto/sha256"
    "encoding/base64"
)

func main() {  
    data, err := ioutil.ReadFile("sample.txt")
    if err != nil {
        fmt.Println("Error in reading file", err)
        return
    }
	fmt.Println("Content of the file:", string(data))
	generateHash([]byte(string(data)))
}

   

func generateHash(bv []byte) {
    hasher := sha256.New()
    hasher.Write(bv)
	sha256 := base64.URLEncoding.EncodeToString(hasher.Sum(nil))
	fmt.Println("sha256 value : ",sha256)
}