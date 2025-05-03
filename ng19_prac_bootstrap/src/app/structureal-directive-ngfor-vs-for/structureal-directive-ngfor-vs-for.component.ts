import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structureal-directive-ngfor-vs-for',
  imports: [CommonModule],
  templateUrl: './structureal-directive-ngfor-vs-for.component.html',
  styleUrl: './structureal-directive-ngfor-vs-for.component.scss'
})
export class StructurealDirectiveNgforVsForComponent {

  employees: any[] = [
    {empName: 'Shawn', empNumber: 101, empEmail: 'shawn@gmail.com', empDept: 'Tax'},
    {empName: 'Michal', empNumber: 102, empEmail: 'michal@gmail.com', empDept: 'Comp'},
    {empName: 'Miz', empNumber: 103, empEmail: 'mize@gmail.com', empDept: 'IT'},
    {empName: 'Kane', empNumber: 104, empEmail: 'kane@gmail.com', empDept: 'Finance'},
  ]

  companies: string[] = [
    'Atos', 'Capgemini', 'TCS', 'EY', 'Google'
  ]
}
