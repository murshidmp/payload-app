import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText', 
    },
    
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media', 
      required: true,
      label: 'Associated Media', 
    },
  ],
};

export default Posts;
