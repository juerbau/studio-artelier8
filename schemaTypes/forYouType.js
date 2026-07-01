import {defineField, defineType} from 'sanity'

export const forYouType = defineType({
  name: 'forYouImages',
  title: 'Für Dich Bilder',
  type: 'document',

  fieldsets: [
    {
      name: 'process',
      title: 'Process Steps',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'transform',
      title: 'Vorher / Nachher',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],

  fields: [
    defineField({
      name: 'stepOneImage',
      title: 'Bild Schritt 01',
      type: 'image',
      fieldset: 'process',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'stepTwoImage',
      title: 'Bild Schritt 02',
      type: 'image',
      fieldset: 'process',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'stepThreeImage',
      title: 'Bild Schritt 03',
      type: 'image',
      fieldset: 'process',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'stepFourImage',
      title: 'Bild Schritt 04',
      type: 'image',
      fieldset: 'process',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'beforeImage',
      title: 'Vorher Bild',
      type: 'image',
      fieldset: 'transform',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'afterImage',
      title: 'Nachher Bild',
      type: 'image',
      fieldset: 'transform',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      media: 'afterImage',
    },

    prepare({media}) {
      return {
        title: 'Für Dich Bilder',
        subtitle: 'Process Steps & Vorher/Nachher',
        media,
      }
    },
  },
})
