import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfAction } from '@metro-remote/metro-self-common-types';
import { FormsModule } from '@angular/forms';
import { MetroSelfService } from '@metro-remote/metro-self-services';
import { delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'metro-self',
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './metro-self.html',
  styleUrl: './metro-self.css',
  standalone: true,
})
export class MetroSelf {
  @Input() actions: SelfAction[] = [];

  selectedAction: SelfAction | null = null;
  confirmed = false;
  loading = false;
  resultMessage = '';
  fadeOut = false;

  constructor(
    private http: HttpClient,
    private metroSelfService: MetroSelfService
  ) {}

  selectAction(action: SelfAction) {
    this.resultMessage = '';
    this.selectedAction = action;
    this.confirmed = false;
  }

  cancelAction() {
    this.selectedAction = null;
  }

  confirmAction() {
    if (!this.selectedAction) return;

    this.confirmed = true;
    this.loading = true;

    this.fakeRestCall(this.selectedAction.actionId.toString()).subscribe({
      next: (response) => {
        this.resultMessage = `הפעולה בוצעה בהצלחה`;
      },
      error: () => {
        this.resultMessage = `הפעולה נכשלה`;
      },
      complete: () => {
        this.loading = false;
        this.selectedAction = null;
        this.confirmed = false;

        this.fadeOut = false;

        setTimeout(() => {
          this.fadeOut = true;

          setTimeout(() => {
            this.resultMessage = '';
          }, 500);
        }, 1000);
      },
    });
  }

  fakeRestCall(actionId: string) {
    // Simulate HTTP request with delay
    return of({ success: true }).pipe(delay(1500));
  }
}
