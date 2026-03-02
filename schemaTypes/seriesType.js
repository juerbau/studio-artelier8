import {defineField, defineType} from 'sanity'

export const seriesType = defineType({
  name: 'series',
  title: 'Serien',
  type: 'document',
  fields: [
    defineField({
      name: 'title_de',
      title: 'Titel (DE)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title_en',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            .replace(/[^a-z0-9\s-]/g, '') // entfernt Sonderzeichen
            .replace(/\s+/g, '-') // Leerzeichen → -
            .replace(/-+/g, '-') // doppelte - entfernen
            .trim()
            .slice(0, 200),
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Coverbild',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
})