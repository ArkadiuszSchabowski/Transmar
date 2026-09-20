import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetAssemblyLineWorkstationDto } from '../models/assembly-line-workstation/get-assignment-dto';
import { AddAssemblyLineWorkstationDto } from '../models/assembly-line-workstation/add-assignment-dto';

@Injectable({
  providedIn: 'root',
})
export class AssemblyLineWorkstationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddAssemblyLineWorkstationDto) {
    return this.http.post<void>(this.apiUrl + 'assembly-line-workstation', dto);
  }

  getAll() {
    return this.http.get<GetAssemblyLineWorkstationDto[]>(this.apiUrl + 'assembly-line-workstation');
  }

  remove(id: number) {
    return this.http.delete<void>(this.apiUrl + 'assembly-line-workstation/' + id);
  }
}
