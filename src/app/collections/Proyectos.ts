import { CollectionConfig } from 'payload'

export const Proyectos: CollectionConfig = {
  slug: 'proyectos',
  fields: [
    {
      name: 'projectTitle',
      type: 'text',
    },
    {
      name: 'projectDescription',
      type: 'textarea',
    },
  ],
}