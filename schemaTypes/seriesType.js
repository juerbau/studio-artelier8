import {defineType, defineField} from 'sanity'

export const seriesType = defineType({
  name: 'series',
  title: 'Series',
  type: 'document',

  fields: [
    defineField({
      name: 'title_de',
      title: 'Titel (DE)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title_en',
      },
    }),

    defineField({
      name: 'image',
      title: 'Serienbild',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'artworks',
      title: 'Artworks dieser Serie',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'artwork'}],

          options: {
            disableNew: true,
          },

          preview: {
            select: {
              title: 'title',
              media: 'mainImage',
            },
          },
        },
      ],

      validation: (Rule) =>
        Rule.unique().error('Ein Artwork darf nur einmal in dieser Liste vorkommen'),

      description: 'Drag & Drop sortierbar',
    }),
  ],

  preview: {
    select: {
      title: 'title_de',
      media: 'image',
    },
  },
})
