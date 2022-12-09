import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Cuenta, Empleado } from 'src/app/api/models';
import { CuentaControllerService, EmpleadoControllerService } from 'src/app/api/services';

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
    this.messageService.info('Su registro sigue activo')
  }

  ocultar():void{
    this.visible=false
    this.formEmpleado.reset
  }

  mostrar(data?:Empleado):void{
    if(data?.id){
      this.formEmpleado.setValue(data)
    }
    this.visible=true
  }

  guardar():void{
    if(this.formEmpleado.value.id){
      this.empleadoService.updateById({'id':this.formEmpleado.value.id,'body':this.formEmpleado.value}).subscribe(
        ()=>{
          this.empleado = this.empleado.map(obj =>{
            if(obj.id === this.formEmpleado.value.id){
              return this.formEmpleado.value
            }
            return obj
          })
          this.messageService.success('Registro Actualizado')
          this.formEmpleado.reset()
        }
      )
    }else{
      delete this.formEmpleado.value.id
      this.empleadoService.create({body:this.formEmpleado.value}).subscribe((datoAgregado)=>{
        this.empleado = [...this.empleado,datoAgregado]
        this.messageService.success(`Guardado con exito`) 
        this.formEmpleado.reset() 
      })
    }
    this.visible = false
  }
}
