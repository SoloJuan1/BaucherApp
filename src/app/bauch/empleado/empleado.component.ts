import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Empleado } from 'src/app/api/models';
import { EmpleadoControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado:Empleado[]=[];
  visible:boolean=false
  constructor(
    private empleadoService:EmpleadoControllerService,
    private messageService:NzMessageService,
    private fb: FormBuilder
  ){ }

  formEmpleado: FormGroup = this.fb.group({
    id:[],
    nombre:[],
    codigoEmpleado:[],
    sueldo:[]
  })

  ngOnInit(): void {
    this.empleadoService.find().subscribe(data=>this.empleado=data)

  }

  eliminar(id:string):void{
    this.empleadoService.deleteById({id}).subscribe(()=>{
      this.empleado=this.empleado.filter(x=> x.id !== id);
      this.messageService.success('Registro Borrado')
    })
  
  }

  cancelar():void{
    this.messageService.info('su registro sigue activo')
  }

  ocultar():void{
    this.visible=false
  }

  mostrar(data?:Empleado):void{
    this.visible=true
  }

  guardar():void{

  }
}
