import { defineStore } from 'pinia';

export interface Notification {
  message: string;
  type: NotificationType;
  notifyTime: number;
}

export enum NotificationType {
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

interface State {
  notifications: Notification[];
}

export const useNotifyStore = defineStore('notify', {
  state: (): State => {
    return {
      notifications: [],
    };
  },
  actions: {
    notify(
      messageOrError: unknown,
      type: NotificationType,
      milliseconds: number = 5000
    ) {
      let message: string = '';
      if (messageOrError instanceof Error) message = messageOrError.message;
      if (typeof messageOrError === 'string') message = messageOrError;
      const notification: Notification = {
        message,
        type,
        notifyTime: Date.now(),
      };
      this.notifications.push(notification);
      setTimeout(
        this.removeNotification.bind(this),
        milliseconds,
        notification
      );
    },
    removeNotification(notification: Notification) {
      this.notifications = this.notifications.filter(
        (n) => n.notifyTime != notification.notifyTime
      );
    },
  },
});
