import { GlobalConfig } from 'payload'

export const Nosotros: GlobalConfig = {
  slug: 'nosotros',
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