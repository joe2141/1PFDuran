import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { FormularioComponent } from './formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
