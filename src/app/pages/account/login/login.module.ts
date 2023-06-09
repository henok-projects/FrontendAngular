import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/account/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        title: 'Home | Login page',
      },
    ]),
  ],
  providers: [AuthService],
})
export class LoginModule {}
