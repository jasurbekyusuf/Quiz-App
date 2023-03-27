import { QuestionService } from './../service/question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public name: string = ""
  public questionList : any = []
  public currentQuestion: number =0
  public points: number = 0
  counter = 60

  constructor(private questionService: QuestionService){}

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!
    this.getAllQuestions()
  }

  getAllQuestions(){
    this.questionService.getQuestionJson()
      .subscribe(res =>{
        this.questionList = res.question
      })
  }

  nextQuestion() {
    this.currentQuestion++
  }

  prevQuestion() {
    this.currentQuestion--
  }
}
