import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Cuenta, Empleado } from 'src/app/api/models';
import { CuentaControllerService, EmpleadoControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit{
  
  cuenta:Cuenta[]=[]
  empleado:Empleado[]=[]
  visibleCuenta:boolean=false

  constructor(
    private cuentaService:CuentaControllerService,
    private empleadoService:EmpleadoControllerService,
    private messageService:NzMessageService,
    private fc: FormBuilder
  ){}

  formCuenta: FormGroup = this.fc.group({
    empleadoId: [],
    id: [],
    nombre: [],
    tipo: []
  })

  ngOnInit(): void {
    this.cuentaService.find().subscribe(data=>this.cuenta=data)
    this.empleadoService.find().subscribe(data=>this.empleado=data)
  }
  eliminarCuenta(id:string):void{
    this.cuentaService.deleteById({id}).subscribe(()=>{
      this.cuenta=this.cuenta.filter(x=> x.id !== id);
      this.messageService.success('Registro Borrado')
    })

  }

  cancelarCuenta():void{
    this.messageService.info('Su registro sigue activo')
  }

  ocultarCuenta():void{
    this.visibleCuenta=false
    this.formCuenta.reset
  }

  mostrarCuenta(data?:Cuenta):void{
    if(data?.id){
      this.formCuenta.setValue(data)
    }
    this.visibleCuenta=true
  }

  guardarCuenta():void{
    if(this.formCuenta.value.id){
      this.cuentaService.updateById({'id':this.formCuenta.value.id,'body':this.formCuenta.value}).subscribe(
        ()=>{
          this.cuenta = this.cuenta.map(obj =>{
            if(obj.id === this.formCuenta.value.id){
              return this.formCuenta.value
            }
            return obj
          })
          this.messageService.success('Registro Actualizado')
          this.formCuenta.reset()
        }
      )
    }else{
      delete this.formCuenta.value.id
      this.cuentaService.create({body:this.formCuenta.value}).subscribe((datoAgregado)=>{
        this.cuenta = [...this.cuenta,datoAgregado]
        this.messageService.success(`Guardado con exito`) 
        this.formCuenta.reset() 
      })
    }
    this.visibleCuenta = false
  }
}
