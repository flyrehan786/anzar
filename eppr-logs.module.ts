import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// PrimeNG Imports
import { TreeTableModule } from 'primeng/treetable';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';

// Component
import { EpprLogsComponent } from './eppr-logs.component';

@NgModule({
  declarations: [
    EpprLogsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TreeTableModule,
    DialogModule,
    ButtonModule,
    TooltipModule,
    CardModule
  ],
  exports: [
    EpprLogsComponent
  ]
})
export class EpprLogsModule { }