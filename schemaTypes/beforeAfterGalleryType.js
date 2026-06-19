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
    defineField({
      name: "displayFormat",
      title: "Darstellungsformat",
      type: "string",
      initialValue: "landscape",
      options: {
        list: [
          { title: "Querformat / 16:9", value: "landscape" },
          { title: "Quadratisch", value: "square" },
          { title: "Hochformat", value: "portrait" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
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
