import { Injectable } from '@angular/core';
import { LoginDto } from '../models/login-dto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TokenDto } from '../models/token-dto';
import { tap } from 'rxjs';
import { RegisterDto } from '../models/register-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(dto: LoginDto) {
    return this.http.post<TokenDto>(this.apiUrl + 'user/login', dto).pipe(
      tap((response) => {
        if (!response.token) {
          return;
        }
      }),
    );
  }

  register(dto: RegisterDto) {
    return this.http.post(this.apiUrl + 'user', dto);
  }
}
