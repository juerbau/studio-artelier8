import {defineType, defineField} from 'sanity'

export const newsletterType = defineType({
  name: 'newsletter',
  title: 'Newsletter',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title_en',
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
      name: 'text_de',
      title: 'Text (DE)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(20).max(500),
      description: 'Ruhig, reduziert, eher Atmosphäre als Erklärung',
    }),

    defineField({
      name: 'text_en',
      title: 'Text (EN)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(20).max(500),
      description: 'Calm, minimal, more atmosphere than explanation',
    }),

    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'draft',
      options: {
        list: [
          {title: 'Entwurf', value: 'draft'},
          {title: 'Bereit zum Versand', value: 'ready'},
          {title: 'Versendet', value: 'sent'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      description: 'Nur Newsletter mit Status "Bereit zum Versand" können versendet werden',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'sentAt',
      title: 'Versendet am',
      type: 'datetime',
      readOnly: true,
      description: 'Wird nach dem Versand automatisch gesetzt',
    }),
  ],

  preview: {
    select: {
      title: 'title_de',
      media: 'mainImage',
      status: 'status',
    },
    prepare({title, media, status}) {
      const subtitleMap = {
        draft: 'Entwurf',
        ready: 'Bereit zum Versand',
        sent: 'Versendet',
      }

      return {
        title,
        media,
        subtitle: subtitleMap[status] || 'Ohne Status',
      }
    },
  },
})
