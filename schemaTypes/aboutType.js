
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',

  // 👉 verhindert mehrere Dokumente + kein Löschen
  __experimental_actions: ['update', 'publish'],

  fields: [
    defineField({
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Hauptportrait der Künstlerin (ruhig, reduziert)',
    }),

    defineField({
      name: 'studioImage',
      title: 'Studio / Galerie Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Atmosphäre des Arbeitsraums oder Ausstellung',
    }),

    defineField({
      name: 'processImage',
      title: 'Prozess Detail',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Detail aus dem Arbeitsprozess (keine Serie!)',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
})
