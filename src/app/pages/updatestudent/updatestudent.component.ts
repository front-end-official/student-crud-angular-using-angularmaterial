import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Entity } from '../viewallstudents/viewallstudents.component';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})
export class UpdatestudentComponent {
  addForm!:FormGroup
  constructor(
    private service:StudentService,
    @Optional() public dialogRef: MatDialogRef<UpdatestudentComponent>,private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {studentData: Entity },
    ){
      this.addForm=fb.group({
        stuName:['',[Validators.required]],
        stuAge:['',[Validators.required]],
        stuMarks:['',[Validators.required]],
        stuSection:['',[Validators.required]],
      })
    }

    ngOnInit()
    {
      this.addForm.patchValue(this.data.studentData)
    }

    updatestudent()
    {
      console.log("update::",this.addForm.value)
      this.service.update(this.data.studentData.stuId,this.addForm.value).subscribe((update:any)=>{
        console.log("update::",this.addForm.value)
      }),
      this.dialogRef.close(true)
    }

    clear()
    {
      // this.addForm.reset()
      this.addForm.patchValue(this.data.studentData)
    }
}
