import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MetroSelfService {
  constructor(private http: HttpClient) {}

  public runSelfCommand(actionId: number) {
    //  this.http.post(endpoint, {}).subscribe({
    //   next: (response: any) => {
    //     this.result = response.message || 'Action completed successfully.';
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     this.result = '❌ An error occurred while performing the action.';
    //     this.loading = false;
    //   },
    // });
    console.error(actionId);
  }
}
