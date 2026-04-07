import { GlobalConfig } from 'payload'

export const Nosotros: GlobalConfig = {
  slug: 'nosotros',
  fields: [
    {
      name: 'aboutTitle',
      type: 'text',
    },
    {
      name: 'aboutDescription',
      type: 'textarea',
    },
  ],
}