import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { CustomErrorStateMatcherDirective } from './error-state-matcher';

@NgModule({
    imports: [
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    declarations: [CustomErrorStateMatcherDirective],
    exports: [
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        CustomErrorStateMatcherDirective
    ],
    providers: [{ provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }]
})
export class MaterialModule {}
