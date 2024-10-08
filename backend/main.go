package main

import (
	"github.com/gin-gonic/gin"
	"github.com/mandrigin/gin-spa/spa"
)

func main() {
	r := gin.Default()
	r.GET("/api", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})
	r.Use(spa.Middleware("/", "../dist"))
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
