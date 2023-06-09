import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../componentes/services/alumnos.service';
import { Alumno } from '../componentes/models/index';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Inscripciones } from '../../inscripciones/componentes/models';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-detalles-alumnos',
  templateUrl: './detalles-alumnos.component.html',
  styleUrls: ['./detalles-alumnos.component.scss']
})
export class DetallesAlumnosComponent implements OnDestroy {

  alumno: Alumno | undefined;
  private destroyed$ = new Subject()
  dataSource = new MatTableDataSource<Inscripciones>();

  displayedColumns: string[] = ['id', 'curso', 'fecha_inicio', 'desuscribir']

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLowerCase();
  }

  constructor(private matDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private alumnosServices: AlumnosService,
  ) {  }

  desuscribirAlumno(alumnoForDelete: Alumno): void {
    if (confirm("Esta seguro de borrar?")) {
      this.dataSource.data = this.dataSource.data.filter(
        (alumnoActual) => alumnoActual.id !== alumnoForDelete.id,
      );
    }
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }
}
