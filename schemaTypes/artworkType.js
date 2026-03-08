import {defineType, defineField} from 'sanity';

export const artworkType = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',

  fields: [
    defineField({
      name: 'title_de',
      title: 'Titel (DE)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title_en',
        slugify: (input) =>
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
    }),

    defineField({
      name: 'size',
      title: 'Größe',
      type: 'string',
      description: 'z.B. 40 x 60 cm',
    }),

    defineField({
      name: 'technique',
      title: 'Technik',
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
      name: 'featured',
      title: 'Featured Artwork',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'description_de',
      title: 'Beschreibung (DE)',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'description_en',
      title: 'Description (EN)',
      type: 'text',
      rows: 4,
    }),
  ],

  preview: {
    select: {
      title: 'title_de',
      media: 'mainImage',
    },
  },
});
