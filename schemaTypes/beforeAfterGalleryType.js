import {defineField, defineType} from 'sanity'

export const beforeAfterGalleryType = defineType({
  name: 'beforeAfterGallery',
  title: 'Vorher / Nachher Slider',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
    }),

    defineField({
      name: 'beforeImage',
      title: 'Vorher Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'afterImage',
      title: 'Nachher Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'afterImage',
    },

    prepare({title, media}) {
      return {
        title,
        media,
        subtitle: 'Vorher / Nachher Slider',
      }
    },
  },
})
