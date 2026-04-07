import { GlobalConfig } from 'payload'

export const Eventos: GlobalConfig = {
  slug: 'eventos',
  fields: [
    {
      name: 'eventTitle',
      type: 'text',
    },
    {
      name: 'eventDescription',
      type: 'textarea',
    },
  ],
}