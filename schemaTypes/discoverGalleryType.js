import {defineType, defineField} from 'sanity'

export const discoverGalleryType = defineType({
  name: 'discoverGallery',
  title: 'Discover Gallery',
  type: 'document',

  fields: [
    defineField({
      name: 'title_de',
      title: 'Titel (DE)',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),

    defineField({
      name: 'title_en',
      title: 'Titel (EN)',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),

    defineField({
      name: 'imageTopLeft',
      title: 'Bild oben links',
      type: 'image',
      options: {hotspot: true},
      description: 'Detailbild oder Akzent',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'imageTopRight',
      title: 'Bild oben rechts',
      type: 'image',
      options: {hotspot: true},
      description: 'Situationsbild',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'imageBottomLeft',
      title: 'Bild unten links',
      type: 'image',
      options: {hotspot: true},
      description: 'Situationsbild',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'imageBottomRight',
      title: 'Bild unten rechts',
      type: 'image',
      options: {hotspot: true},
      description: 'Detailbild oder Akzent',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title_de',
      media: 'imageTopLeft',
    },

    prepare({title, media}) {
      return {
        title,
        media,
        subtitle: 'Discover Gallery',
      }
    },
  },
})
