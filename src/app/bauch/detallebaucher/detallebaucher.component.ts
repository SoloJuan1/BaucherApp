import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Detallebaucher } from 'src/app/api/models';
import { DetallebaucherBaucherControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-detallebaucher',
  templateUrl: './detallebaucher.component.html',
  styleUrls: ['./detallebaucher.component.css']
})
export class DetallebaucherComponent implements OnInit {

  detallebaucher:Detallebaucher[]=[]

  constructor(
    private Detallebaucher:DetallebaucherBaucherControllerService,
    private messageService:NzMessageService,
    private fdb:FormBuilder
  ){}

  ngOnInit(): void {

  }

  formBaucher: FormGroup = this.fdb.group({
    id:[],
    empleadoid:[],
    fecha:[]
  })
}
