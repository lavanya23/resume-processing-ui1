import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResumeApiService {
  private apiUrl = 'https://api-python-demo1.azurewebsites.net/process_candidates';

  constructor(private http: HttpClient) {}

  uploadResume(formData: FormData) {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
