import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { AdminFeatureKey } from './redux/admin.state';
import { adminReducer } from './redux/admin.reducer';
import { AdminRoutingModule } from './admin-routing.module';
import { ExamEditorComponent } from './components/exam-editor/exam-editor.component';
import { MainAgeComponent } from './components/main-age/main-age.component';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        StoreModule.forFeature(AdminFeatureKey, adminReducer)
    ],
    declarations: [
      ExamEditorComponent,
      MainAgeComponent
    ], 
    exports: [
      ExamEditorComponent
    ]
})
export class AdminModule {

}