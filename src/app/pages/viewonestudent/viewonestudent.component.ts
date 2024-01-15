import { Component, Inject, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/service/student.service';
import { Entity } from '../viewallstudents/viewallstudents.component';

@Component({
  selector: 'app-viewonestudent',
  templateUrl: './viewonestudent.component.html',
  styleUrls: ['./viewonestudent.component.scss']
})
export class ViewonestudentComponent {
 addForm!:FormGroup
  constructor(
    private service:StudentService,
    @Optional() public dialogRef: MatDialogRef<ViewonestudentComponent>,private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {studentData: any },
    ){
      this.addForm=fb.group({
        stuId:['',[Validators.required]],
        stuName:['',[Validators.required]],
        stuAge:['',[Validators.required]],
        stuMarks:['',[Validators.required]],
        stuSection:['',[Validators.required]],
      })
    }

    ngOnInit()
    {
      this.service.serach(this.data.studentData).subscribe(one=>{
        this.addForm.patchValue(one)
        console.log(one)
      })

      // this.addForm.patchValue(this.data.studentData);
    }
}

