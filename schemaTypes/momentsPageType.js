import {defineField, defineType} from 'sanity'

export const momentsPageType = defineType({
  name: 'momentsPage',
  title: 'Moments Seite',
  type: 'document',

  __experimental_actions: ['update', 'publish'],

  fields: [
    defineField({
      name: 'moments',
      title: 'Momente Reihenfolge',
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
      description: 'Die Reihenfolge (drag & drop) bestimmt die Reihenfolge auf der Momente Seite.',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Moments Seite',
      }
    },
  },
})
