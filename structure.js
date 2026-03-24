export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // 🔹 Collections
      S.documentTypeListItem('artwork').title('Artworks'),
      S.documentTypeListItem('series').title('Series'),
      S.documentTypeListItem('moment').title('Moments'),

      // 🔹 Singletons
      S.listItem()
        .title('Serien Reihenfolge')
        .child(S.document().schemaType('seriesList').documentId('seriesList')),

      S.listItem()
        .title('Homepage Slider')
        .child(S.document().schemaType('homeSlider').documentId('homeSlider')),

      S.listItem()
        .title('Moments Page')
        .child(S.document().schemaType('momentsPage').documentId('momentsPage')),

      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
    ])
