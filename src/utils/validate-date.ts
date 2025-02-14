import { Notify } from 'quasar'

export function validateDate(date: string): boolean {
  if (!date) {
    Notify.create({
      message: 'Please choose a date!',
      type: 'negative',
      classes: 'custom-notify',
    })

    return false
  }

  return true
}
