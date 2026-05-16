
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'aboutPage',
  title: 'About Seite',
  type: 'document',

  // 👉 verhindert mehrere Dokumente + kein Löschen
  __experimental_actions: ['update', 'publish'],

  fields: [
    defineField({
      name: 'portraitImage',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Bild von Dir.',
    }),

    defineField({
      name: 'studioImage',
      title: 'Studio / Galerie',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Bild von Deiner Galerie.',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'About Seite',
      }
    },
  },
})
