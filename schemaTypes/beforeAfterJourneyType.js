import {defineField, defineType} from 'sanity'

export const beforeAfterJourneyType = defineType({
  name: 'beforeAfterJourney',
  title: 'Vorher / Nachher Journey',
  type: 'document',

  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'beforeAfterGallery',
            },
          ],
        },
      ],
      options: {
        disableNew: true,
      },
    }),
  ],
})
