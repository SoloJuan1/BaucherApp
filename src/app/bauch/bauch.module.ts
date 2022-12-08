import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BauchRoutingModule } from './bauch-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { BaucherComponent } from './baucher/baucher.component';
import { DetallebaucherComponent } from './detallebaucher/detallebaucher.component';

//ng zoro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [
    EmpleadoComponent,
    CuentaComponent,
    BaucherComponent,
    DetallebaucherComponent
  ],
  imports: [
    CommonModule,
    BauchRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzModalModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDatePickerModule,
    NzSelectModule,
    NzRadioModule

  ]
})
export class BauchModule { }
