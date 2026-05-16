import {defineType, defineField} from 'sanity';

export const artworkType = defineType({
  name: 'artwork',
  title: 'Bilder',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Browser Adresse',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (input = '') =>
          input
            .toLowerCase()
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim()
            .slice(0, 200),
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Hauptbild',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'galleryImages',
      title: 'Detailbilder',
      type: 'array',
      of: [{type: 'image'}],
      validation: (Rule) => Rule.max(4).error('Maximal 4 Detailbilder erlaubt.'),
    }),

    defineField({
      name: 'size',
      title: 'Größe',
      type: 'string',
      description: 'z.B. 40 x 60 cm',
    }),

    defineField({
      name: 'technique_de',
      title: 'Technik (DE)',
      type: 'string',
    }),

    defineField({
      name: 'technique_en',
      title: 'Technik (EN)',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Jahr',
      type: 'number',
    }),

    defineField({
      name: 'sold',
      title: 'Verkauft',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'description_de',
      title: 'Beschreibung (DE)',
      type: 'text',
      rows: 5,
      description: 'Möglichst nicht mehr als 5 Zeilen.',
    }),

    defineField({
      name: 'description_en',
      title: 'Beschreibung (EN)',
      type: 'text',
      rows: 5,
      description: 'Möglichst nicht mehr als 5 Zeilen.',
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
        subtitle: year ? `Year: ${year}` : '',
        media,
      }
    },
  },
})
