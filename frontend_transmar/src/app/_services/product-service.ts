import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AddProductDto } from '../models/product/add-product-dto';
import { GetProductDto } from '../models/product/get-product-dto';
import { UpdateProductDto } from '../models/product/update-product-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  add(dto: AddProductDto) {
    return this.http.post<void>(this.apiUrl + 'product', dto);
  }

  getAll() {
    return this.http.get<GetProductDto[]>(this.apiUrl + 'product');
  }

  getById(id: number) {
    return this.http.get<GetProductDto | null>(this.apiUrl + 'product/' + id);
  }

  update(id: number, dto: UpdateProductDto) {
    return this.http.put<UpdateProductDto>(this.apiUrl + 'product/' + id, dto);
  }

  remove(id: number) {
    return this.http.delete<void>(this.apiUrl + 'product/' + id);
  }
}