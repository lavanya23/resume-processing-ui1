import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';

const routes: Routes = [
  { path: '', component: FileUploadFormComponent }, // Set FileUploadFormComponent as the default component
  { path: '**', redirectTo: '' }, // Redirect all other routes to the default component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
