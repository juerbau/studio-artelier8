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

      validation: (Rule) => Rule.unique().error('Serie darf nur einmal vorkommen'),

      description: 'Reihenfolge bestimmt die Anzeige auf der Serienseite',
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
