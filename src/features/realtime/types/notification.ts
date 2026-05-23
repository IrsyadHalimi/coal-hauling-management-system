export type NotificationLevel =
  | 'INFO'
  | 'WARNING'
  | 'CRITICAL'

export type Notification = {
  id: number

  title: string

  description: string

  level: NotificationLevel

  createdAt: string
}