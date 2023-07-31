import { Component } from '@angular/core';
import { ResumeApiService } from '../resume-api.service';

@Component({
  selector: 'app-file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css'],
})
export class FileUploadFormComponent {
  jobRequirements: string = '';
  selectedFiles: File[] = []; // Change the property name to 'selectedFiles'
  results: any[] = [];

  constructor(private resumeApiService: ResumeApiService) {}

  onFilesSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadResume() {
    const formData = new FormData();
    formData.append('job_requirements', this.jobRequirements);

    for (const file of this.selectedFiles) {
      formData.append('candidate_files', file);
    }

    this.resumeApiService.uploadResume(formData).subscribe(
      (data) => {
        this.results = data['results'];
      },
      (error) => {
        console.error('Error uploading resumes:', error);
      }
    );
     
  }
  getMatchStatus(similarity: number): string {
    return similarity === 1 ? 'Matches' : 'Doesn\'t Match';
  }
}
