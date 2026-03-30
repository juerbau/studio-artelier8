import {defineField, defineType} from 'sanity'

export const momentsPageType = defineType({
  name: 'momentsPage',
  title: 'Moments Page',
  type: 'document',

  __experimental_actions: ['update', 'publish'],

  fields: [
    defineField({
      name: 'moments',
      title: 'Momente (Reihenfolge)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'moment'}],
          options: {
            disableNew: true, // 🔥 verhindert "Create new"
          },
        },
      ],
      description: 'Reihenfolge bestimmt die Darstellung auf der Seite',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Moments Page',
      }
    },
  },
})
