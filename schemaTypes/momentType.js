
import {defineField, defineType} from 'sanity'

export const momentType = defineType({
  name: 'moment',
  title: 'Moments',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mainImage',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
      description: 'Zentrales Bild dieses Moments',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'year',
      title: 'Jahr',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'location',
      title: 'Ort / Institution',
      type: 'string',
      description: 'z.B. Berlin, Galerie XY',
    }),

    defineField({
      name: 'description_de',
      title: 'Beschreibung (DE)',
      type: 'text',
      rows: 3,
      description: 'Kurz halten (max. 2–3 Zeilen)',
    }),

    defineField({
      name: 'description_en',
      title: 'Beschreibung (EN)',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'featured',
      title: 'Hauptmoment',
      type: 'boolean',
      initialValue: false,
      description: 'Wird als großes Highlight oben angezeigt',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      year: 'year',
    },
    prepare({title, media, year}) {
      return {
        title,
        subtitle: year ? `${year}` : '',
        media,
      }
    },
  },
})
