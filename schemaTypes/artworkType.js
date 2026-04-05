import {defineType, defineField} from 'sanity';

export const artworkType = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
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
      name: 'series',
      title: 'Serie',
      type: 'reference',
      to: [{type: 'series'}],
      validation: (Rule) => Rule.required(),
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
      title: 'Technique (EN)',
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
      rows: 4,
    }),

    defineField({
      name: 'description_en',
      title: 'Description (EN)',
      type: 'text',
      rows: 4,
    }),
  ],

  // Fix für das alte title_de Ordering
  orderings: [
    {
      title: 'Title (A–Z)',
      name: 'titleAsc',
      by: [{field: 'title', direction: 'asc'}],
    },
    {
      title: 'Year (newest)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
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
