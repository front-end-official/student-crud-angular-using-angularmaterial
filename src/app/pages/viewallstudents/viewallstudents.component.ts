import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { UpdatestudentComponent } from '../updatestudent/updatestudent.component';
import { ViewonestudentComponent } from '../viewonestudent/viewonestudent.component';
@Component({
  selector: 'app-viewallstudents',
  templateUrl: './viewallstudents.component.html',
  styleUrls: ['./viewallstudents.component.scss']
})
export class ViewallstudentsComponent {

  studentData:[]=[]

  displayedColumns: string[] = ['stuId', 'stuName', 'stuAge', 'stuSection','stuMarks','action'];
  dataSource: MatTableDataSource<Entity>=new MatTableDataSource<Entity>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit()
  {
    this.viewall()
  }
  constructor(private route: Router, private service: StudentService,public dialog: MatDialog) { }

  viewall() {
    this.service.all().subscribe((all: any) => {
      this.studentData=all
      this.dataSource.data = this.studentData; // Assign data to the MatTableDataSource
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  deleteStudent(stuId:any)
  {

      this.service.delete(stuId).subscribe((del:any)=>{
        this.viewall()
      })
      
  }

  // with id
  openDialog(stuData:Entity) {
    console.log("stuData::",stuData)
    const dialogRef =    this.dialog.open(UpdatestudentComponent, {
      width: '550px',
      data: {studentData: stuData}

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.viewall();

    });
  }


  //without id
  openDialog2(stuData:Entity) {
    console.log("stuData::",stuData)
    const dialogRef =    this.dialog.open(UpdatestudentComponent, {
      width: '550px',
      data: {studentData: stuData}

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.viewall();

    });
  }

viewone(stuData:Entity)
{
  this.dialog.open(ViewonestudentComponent,{
    data: {studentData: stuData.stuId}
  })
  this.route.navigate(['one'])

}



}

export interface Entity {
  stuId: number;
  stuName: String;
  stuAge: String;
  stuSection: String;
  stuMarks: number;
}
