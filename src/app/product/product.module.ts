import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        ProductRoutingModule,
        MaterialModule
    ]
})
export class ProductModule { }
