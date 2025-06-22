import { ActionSyncType } from '../enums/action-sync-type.enum';

export interface SelfAction {
  actionId: number;
  title: string;
  description: string;
  actionSyncType: ActionSyncType;
  parentActionId?: number;
}
