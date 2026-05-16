import {defineType, defineField} from 'sanity'

export const homeSliderType = defineType({
  name: 'homeSlider',
  title: 'Homepage Slider',
  type: 'document',

  fields: [
    defineField({
      name: 'slides',
      title: 'Slider Artworks',
      type: 'array',

      of: [
        {
          type: 'reference',
          to: [{type: 'artwork'}],

          options: {
            disableNew: true,
          },
        },
      ],

      validation: (Rule) => Rule.required().min(1).error('Mindestens ein Artwork auswählen!'),

      description: 'Die Reihenfolge (drag & drop) bestimmt die Reihenfolge im Home-Slider.',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Homepage Slider',
      }
    },
  },
})
