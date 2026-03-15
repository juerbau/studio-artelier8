export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('artwork').title('Artworks'),

      S.documentTypeListItem('series').title('Series'),

      S.listItem()
        .title('Serien Reihenfolge')
        .child(S.document().schemaType('seriesList').documentId('seriesList')),

      S.listItem()
        .title('Homepage Slider')
        .child(S.document().schemaType('homeSlider').documentId('homeSlider')),
    ])
