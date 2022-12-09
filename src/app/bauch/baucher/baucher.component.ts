import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Baucher, Cuenta } from 'src/app/api/models';
import { BaucherControllerService, CuentaControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-baucher',
  templateUrl: './baucher.component.html',
  styleUrls: ['./baucher.component.css']
})
export class BaucherComponent implements OnInit{

  baucher:Baucher[]=[]
  cuenta:Cuenta[]=[]
  visibleCuenta:boolean=false
  constructor(
    private baucherService:BaucherControllerService,
    private messageService:NzMessageService,
    private fbc:FormBuilder
  ){}

  formBaucher: FormGroup = this.fbc.group({
    id:[],
    empleadoid:[],
    fecha:[]
  })


  ngOnInit(): void {
    this.baucherService.find().subscribe(data=>this.baucher=data)
  }

  mostrarCuenta(data?:Baucher):void{
    if(data?.id){
      this.formBaucher.setValue(data)
    }
    this.visibleCuenta=true
  }

}
