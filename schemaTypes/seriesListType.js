import {defineField, defineType} from 'sanity'

export const seriesListType = defineType({
  name: 'seriesList',
  title: 'Serien Reihenfolge',
  type: 'document',

  __experimental_actions: ['update', 'publish'],

  fields: [
    defineField({
      name: 'series',
      title: 'Serien',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'series'}],
          options: {
            disableNew: true,
          },
        },
      ],

      validation: (Rule) => Rule.unique().error('Eine Serie darf nur max. einmal vorkommen'),

      description: 'Die Reihenfolge (drag & drop) bestimmt die Anzeige auf der Serienseite',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Serien Reihenfolge',
      }
    },
  },
})
