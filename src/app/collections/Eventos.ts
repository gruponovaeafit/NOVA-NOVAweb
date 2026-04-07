import { CollectionConfig } from 'payload'

export const Eventos: CollectionConfig = {
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