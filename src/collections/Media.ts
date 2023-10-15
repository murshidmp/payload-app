import { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*','video/*'],
  },
  fields: [
    {
        name: 'type',
        type: 'select',
        options: [
          { label: 'Image', value: 'image' },
          { label: 'Video', value: 'video' },
          { label: 'Short Video', value: 'shortVideo' },
        ],
        required: true,
      },
  ],
}

export default Media;