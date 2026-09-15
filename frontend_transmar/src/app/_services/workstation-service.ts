import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AddWorkstationDto } from '../models/workstation/add-workstation-dto';
import { GetWorkstationDto } from '../models/workstation/get-workstation-dto';
import { UpdateWorkstationDto } from '../models/workstation/update-workstation-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkstationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddWorkstationDto) {
    return this.http.post<void>(this.apiUrl + 'workstation', dto);
  }

  getAll() {
    return this.http.get<GetWorkstationDto[]>(this.apiUrl + 'workstation');
  }

  getById(id: number) {
    return this.http.get<GetWorkstationDto | null>(this.apiUrl + 'workstation/' + id);
  }

  update(id: number, dto: UpdateWorkstationDto) {
    return this.http.put<UpdateWorkstationDto>(this.apiUrl + 'workstation/' + id, dto);
  }

  remove(id: number) {
    return this.http.delete<void>(this.apiUrl + 'workstation/' + id);
  }
}