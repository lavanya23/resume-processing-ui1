import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResumeApiService {
  private apiUrl = 'http://127.0.0.1:5000/process_candidates';

  constructor(private http: HttpClient) {}

  uploadResume(formData: FormData) {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
