import { CollectionConfig } from 'payload'

export const Eventos: CollectionConfig = {
  slug: 'eventos',
  access: {
    read: () => true, // Allow all users (authenticated and unauthenticated) to read
  },
  fields: [
    {
      name: 'eventTitle',
      type: 'text',
    },
    {
      name: 'eventDescription',
      type: 'textarea',
    },
    {
      name: 'eventImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}