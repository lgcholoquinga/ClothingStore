import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ShareModule,
        CommonModule,
        ContactRoutingModule
    ]
})
export class ContactModule { }
