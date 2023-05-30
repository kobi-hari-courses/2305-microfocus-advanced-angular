import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { AdminFeatureKey } from './redux/admin.state';
import { adminReducer } from './redux/admin.reducer';
import { AdminRoutingModule } from './admin-routing.module';
@NgModule({
    imports: [
        AdminRoutingModule,
        StoreModule.forFeature(AdminFeatureKey, adminReducer)
    ]
})
export class AdminModule {

}