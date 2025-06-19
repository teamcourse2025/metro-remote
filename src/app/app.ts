import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { MetroSelf } from '@metro-remote/metro-self';

@Component({
  imports: [NxWelcome, RouterModule, MetroSelf],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'metro-remote';
}
