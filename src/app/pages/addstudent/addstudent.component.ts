import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/service/student.service';
import { Entity } from '../viewallstudents/viewallstudents.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent {
addForm!:FormGroup;
constructor(private fb:FormBuilder,private service:StudentService,private route:Router){
  this.addForm=fb.group({
    stuName:['',[Validators.required]],
    stuAge:['',[Validators.required]],
    stuMarks:['',[Validators.required]],
    stuSection:['',[Validators.required]],
  })
}
addStuden:Entity[]=[]
add() {
  console.log('Form Value:', this.addForm.value);

  if (this.addForm.valid) {
    this.service.add(this.addForm.value).subscribe(
      (add: any) => {
        this.addStuden = add;
        this.route.navigate(['/all']);
      },
      (error) => {
        console.error('Error adding data:', error);
      }
    );
  } else {
    console.error('Form is invalid. Cannot submit.');
  }
}



}
