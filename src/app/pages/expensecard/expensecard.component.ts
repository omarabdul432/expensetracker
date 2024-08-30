import { Component, inject, Input, OnInit } from '@angular/core';
import { Commonmodels } from '../../models/commonmodels';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseserviceService } from '../../_services/expenseservice.service';

@Component({
  selector: 'app-expensecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expensecard.component.html',
  styleUrl: './expensecard.component.scss'
})
export class ExpensecardComponent implements OnInit{
  // id:string=''
  expenseser=inject(ExpenseserviceService)
  router=inject(Router)
  route=inject(ActivatedRoute)

  ngOnInit(): void {
    // this.route.params.subscribe((param:Params)=>{
    //   this.id=param['id']
     
    // })
  }

  @Input() detail:Commonmodels={
    id:'',
    price:'',
    title:'',
    description:''
  }

  onEdit(){
    this.router.navigate(['expense-form',this.detail.id])
    
  }

  onRemove(){
    this.expenseser.delete(this.detail.id).subscribe(()=>{})
  }

}
