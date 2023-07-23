import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/app.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private service: EmployeeService, private router: Router) { }
  
    ngOnInit(): void {
    }

  

  data: any

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required)
  });

  addEmployee() {
    this.data = this.form.value;
    this.service.addEmployee(this.data).subscribe(data => {
      // redirect to home page
      this.router.navigate(['/']);
    });

  }

}
