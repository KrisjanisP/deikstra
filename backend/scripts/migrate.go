package main

import (
	"github.com/KrisjanisP/deikstra/service/config"
	"github.com/KrisjanisP/deikstra/service/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

func main() {
	conf := config.LoadAppConfig()
	db, err := gorm.Open(postgres.Open(conf.DBConnString), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	log.Println("connected to database")
	err = db.AutoMigrate(
		&models.User{},
		&models.Language{},
		&models.TaskSubmission{},
		&models.TaskSubmEvaluation{},
		&models.ExecSubmission{},
		&models.Task{},
		&models.TaskType{},
		&models.TaskTest{},
		&models.TaskSubtask{},
		&models.TaskTag{},
		&models.MarkdownStatement{},
		&models.MDStatementExample{},
		&models.PDFStatement{},
		&models.TaskSubmEvalTest{},
	)
	if err != nil {
		panic(err)
	}
	log.Println("database migration completed")
}
