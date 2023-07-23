import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/app.service';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee?: any
  data: any
  

  constructor(private service: EmployeeService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getEmployee(id).subscribe(data => {
      this.employee = data
      console.log(this.employee)
    })
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    
  })

  submit(){
    this.data = this.form.value
    this.employee.name = this.data.name
    this.employee.email = this.data.email
    this.employee.position = this.data.position
    
    console.log(this.data)

    this.service.updateEmployee(this.employee?.id, this.employee).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }

}
