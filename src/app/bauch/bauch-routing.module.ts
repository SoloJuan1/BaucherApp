import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaucherComponent } from './baucher/baucher.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { DetallebaucherComponent } from './detallebaucher/detallebaucher.component';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [
  {path:'',
  children:[
    {path:'empleado',component:EmpleadoComponent},
    {path:'cuenta',component:CuentaComponent},
    {path:'baucher',component:BaucherComponent},
    {path:'detallebaucher',component:DetallebaucherComponent}
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BauchRoutingModule { }
