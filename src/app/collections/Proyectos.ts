import { CollectionConfig } from 'payload'

export const Proyectos: CollectionConfig = {
  slug: 'proyectos',
  access: {
    read: () => true, // Allow all users (authenticated and unauthenticated) to read
  },
  fields: [
    {
      name: 'projectTitle',
      type: 'text',
    },
    {
      name: 'projectDescription',
      type: 'textarea',
    },
    {
      name: 'projectImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}