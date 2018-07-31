import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import {  Department } from './department';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class DepartmentsService {

  
  departmentsUrl='api/departments'

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.departmentsUrl)
    .pipe(map(data => data));
  }

  createDepartment( department: Department): Observable<Department> {
    return this.http.post<Department>(this.departmentsUrl, department, httpOptions);
  }




    getDepartment(id: string ): Observable<Department> {
    const url = `${this.departmentsUrl}/${id}`;
    return this.http.get<Department>(url);} 
    
    
    updateDepatament(id: String, department : Department): Observable<any> {
      const url = `${this.departmentsUrl}/${id}`;
      return this.http.put(url, department, httpOptions); 
    }

    deleteDepatament (id: String): Observable<Department> {
      const url = `${this.departmentsUrl}/${id}`;
      return this.http.delete<Department>(url, httpOptions); 
    }


}
