import { CollectionConfig } from 'payload'

export const MediaCollection: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'caption',
      type: 'text',
    },
  ],
}
