import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { JwtTokenService } from 'src/app/core/jwt/jwt-token.service';
import { LoginService } from 'src/app/core/service/login/login.service';
import { Ilogin } from 'src/app/core/type/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  validateForm: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginService.login(this.validateForm.value).subscribe(
        (result: Ilogin) => {
          this.jwtTokenService.setLocalStorageItem(
            'ACCESS_TOKEN',
            result?.accessToken
          );
          this.message.success('login sucess');
          this.route.navigate(['/transaction']);
        },
        (error) => {
          console.error('Login Error:', error);
          this.message.error(`bad credentials`);
        }
      );
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private message: NzMessageService,
    private loginService: LoginService,
    private fb: NonNullableFormBuilder,
    private jwtTokenService: JwtTokenService,
    private route: Router
  ) {}
}
