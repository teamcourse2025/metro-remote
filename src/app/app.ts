import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { MetroSelf } from '@metro-remote/metro-self';
import {
  ActionSyncType,
  SelfAction,
} from '@metro-remote/metro-self-common-types';

@Component({
  imports: [RouterModule, MetroSelf],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'metro-remote';
  actions: SelfAction[] = [];

  ngOnInit(): void {
    this.actions.push({
      actionId: 1,
      title: 'טאב תקוע / איקס אדום על הטאב / איפוס טאבים',
      description: 'שים לב! הינך הולך לסגור את כל הטאבים הפתוחים',
      actionSyncType: ActionSyncType.Synchronized,
    } as SelfAction);

    this.actions.push({
      actionId: 2,
      title: 'שחרור פריט תקוע בהכנה',
      description:
        'שים לב! הינך הולך להסיר מפריטים בהכנה את כל הפריטים התקועים',
      actionSyncType: ActionSyncType.Synchronized,
    } as SelfAction);
  }
}
