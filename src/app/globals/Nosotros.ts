import { GlobalConfig } from 'payload'

export const Nosotros: GlobalConfig = {
  slug: 'nosotros',
  access: {
    read: () => true, // Allow all users (authenticated and unauthenticated) to read
  },
  fields: [
    {
      name: 'aboutText',
      label: 'Who We Are Text',
      type: 'textarea',
    },
    {
      name: 'historyText',
      label: 'Our History Text',
      type: 'textarea',
    },
  ],
}