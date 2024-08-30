import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Commonmodels } from '../../models/commonmodels';
import { ExpenseserviceService } from '../../_services/expenseservice.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-expensesform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './expensesform.component.html',
  styleUrl: './expensesform.component.scss'
})
export class ExpensesformComponent implements OnInit{
  expenseform!:FormGroup
  detail:Commonmodels|undefined
  id:string=''
  isEdit:boolean=true

  route=inject(ActivatedRoute)
  router=inject(Router)
  
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id=param['id']
    })
    if(this.id){
      this.expenseser.getDetails(this.id).subscribe((res:any)=>{
        this.detail=res
        this.viewFormValue()
      })
    }
  }

  viewFormValue(){
    this.expenseform.patchValue({
      price:this.detail?.price,
      title:this.detail?.title,
      description:this.detail?.description
    })
  }

  constructor(private fb:FormBuilder,private expenseser:ExpenseserviceService){
    this.expenseform=this.fb.group({
      price:new FormControl('',[Validators.required]),
      title:new FormControl('',[Validators.required]),
      description:new FormControl('')
    })
  }

  details:Commonmodels={
    id:'',
    price:'',
    title:'',
    description:''
  }
  onSubmit(){

    this.details.price=this.expenseform.value.price
    this.details.title=this.expenseform.value.title
    this.details.description=this.expenseform.value.description
    console.log(this.details)

    if(!this.isEdit){
      
      this.expenseser.add(this.details).subscribe((res:any)=>{
        this.details=res
      })
      
      this.expenseform.reset()
      this.router.navigateByUrl('/')

    }else{
      this.details.id=this.id
      this.expenseser.update(this.details).subscribe((res:any)=>{
        this.details=res
        this.router.navigateByUrl('/')
      })
    }

  }

  onBack(){
    this.router.navigateByUrl('/')
  }
}
