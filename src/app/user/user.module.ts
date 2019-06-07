import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [UserFormComponent, UserSearchComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
