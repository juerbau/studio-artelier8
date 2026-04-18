import {defineType, defineField} from 'sanity'

export const openGraphType = defineType({
  name: 'openGraph',
  title: 'Open Graph Bilder',
  type: 'document',

  fields: [
    defineField({
      name: 'ogHome',
      title: 'OG Bild Home',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'ogSeriesOverview',
      title: 'OG Bild Serienübersicht',
      type: 'image',
      options: {hotspot: true},
    }),
  ],

  preview: {
    select: {
      title: 'Open Graph Bilder',
      media: 'image',
    },
  },
})
