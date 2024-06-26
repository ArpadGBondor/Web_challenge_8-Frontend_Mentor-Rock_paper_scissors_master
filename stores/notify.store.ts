import { defineStore } from 'pinia';

export interface Notification {
  message: string;
  type: NotificationType;
  notifyTime: number;
}

export enum NotificationType {
  Info = 'bg-blue-100 border-l-4 border-blue-500 text-blue-700',
  Success = 'bg-green-100 border-l-4 border-green-500 text-green-700',
  Warning = 'bg-orange-100 border-l-4 border-orange-500 text-orange-700',
  Error = 'bg-red-100 border-l-4 border-red-500 text-red-700',
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
