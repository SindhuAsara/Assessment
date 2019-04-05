package main

import (
    "encoding/json"
    "fmt"
    "io/ioutil"
)

func main() {
    jason, _ := ioutil.ReadFile("./sample.json")
    var data map[string]interface{}
    _ = json.Unmarshal(jason, &data)
    fmt.Println(data["id"])
    fmt.Println(data)
}