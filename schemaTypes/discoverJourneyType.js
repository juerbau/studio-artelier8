import {defineType, defineField} from 'sanity'

export const discoverJourneyType = defineType({
  name: 'discoverJourney',
  title: 'Discover Journey',
  type: 'document',

  fields: [
    defineField({
      name: 'galleries',
      title: 'Discover Galleries',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'discoverGallery'}],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Discover Journey',
        subtitle: 'Reihenfolge der Entdeckungsreise',
      }
    },
  },
})
