import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AddAssemblyLineDto } from '../models/assembly-line/add-assembly-line-dto';
import { GetAssemblyLineDto } from '../models/assembly-line/get-assembly-line-dto';
import { UpdateAssemblyLineDto } from '../models/assembly-line/update-assembly-line-dto';

@Injectable({
  providedIn: 'root',
})
export class AssemblyLineService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddAssemblyLineDto) {
    return this.http.post<void>(this.apiUrl + 'assembly-line', dto);
  }

  getAll() {
    return this.http.get<GetAssemblyLineDto[]>(this.apiUrl + 'assembly-line');
  }

  getById(id: number) {
    return this.http.get<GetAssemblyLineDto | null>(this.apiUrl + 'assembly-line/' + id);
  }

  update(id: number, dto: UpdateAssemblyLineDto) {
    return this.http.put<UpdateAssemblyLineDto>(this.apiUrl + 'assembly-line/' + id, dto);
  }

  remove(id: number) {
    return this.http.delete<void>(this.apiUrl + 'assembly-line/' + id);
  }
}