import {defineField, defineType} from 'sanity';


export const seriesListType = defineType({
  name: 'seriesList',
  title: 'Serien Reihenfolge',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // kein create/delete
  fields: [
    defineField({
      name: 'series',
      title: 'Serien',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'series'}]}],
    }),
  ],
})
