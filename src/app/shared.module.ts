import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './structure/header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
    ],
    providers: [
        CurrencyPipe,
        DecimalPipe,
        DatePipe
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        IonicModule,
        CurrencyPipe,
        DecimalPipe,
        DatePipe,
        HeaderComponent
    ]
})
export class SharedModule {}