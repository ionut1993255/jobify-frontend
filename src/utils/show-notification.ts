import { Notify } from 'quasar'

export function showNotification(
  message: string,
  type: 'positive' | 'negative',
  customNotificationClass: string = '',
) {
  Notify.create({
    message,
    type,
    classes: customNotificationClass,
  })
}
