import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  students:Student[];

  constructor(private studenService:StudentService) {}

  ngOnInit(): void {
    this.getStudentList();    
  }

  private getStudentList(){
    this.studenService.getStudentsList().subscribe(data => {
      this.students = data;
    });
  }
}
