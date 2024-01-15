import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entity } from '../pages/viewallstudents/viewallstudents.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  all()
  {
    return this.http.get(`http://localhost:8080/stu/all`)
  }

  add(entity:Entity[])
  {
    return this.http.post(`http://localhost:8080/stu/add`,entity)
  }

 
  delete( id:number)
{
   return this.http.delete(`http://localhost:8080/stu/delete/${id}`)
}

serach(id:number)
{
  return this.http.get(`http://localhost:8080/stu/one/${id}`)
}
update(id:number, entity:Entity)
{
 return this.http.put(`http://localhost:8080/stu/update/${id}`,entity);
}

update2(entity:Entity)
{
  return this.http.put(`http://localhost:8080/stu/update2`,entity);
}

}