import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TableEmployees';
  
  savedData: any[] = [];
  
  id:number=0;
  name:string="";
  surname:string="";
  age:number=0;
 
  constructor() {
    const savedDataString = localStorage.getItem('userData');
    this.savedData = savedDataString ? JSON.parse(savedDataString) : [];
  }

  OnSave() {
    this.savedData.push({
      id: this.id,
      name: this.name,
      surname: this.surname,
      age: this.age
    });
    localStorage.setItem('userData', JSON.stringify(this.savedData));
    this.id = 0;
    this.name = "";
    this.surname = "";
    this.age = 0;
  }

  onDelete(index: number){ 
    this.savedData.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(this.savedData));
  }

}
