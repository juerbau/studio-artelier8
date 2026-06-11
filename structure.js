export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // 🔹 Collections
      S.documentTypeListItem('artwork').title('Bilder'),
      S.documentTypeListItem('series').title('Serien'),
      S.documentTypeListItem('moment').title('Momente'),
      S.documentTypeListItem('discoverGallery').title('Discover Galleries'),
      S.documentTypeListItem('beforeAfterGallery').title('Vorher / Nachher Slider'),

      S.divider(),

      // 🔹 Newsletter
      S.documentTypeListItem('newsletter').title('Newsletter'),

      S.divider(),

      // 🔹 Singletons
      S.listItem()
        .title('Serien Reihenfolge')
        .child(S.document().schemaType('seriesList').documentId('seriesList')),

      S.listItem()
        .title('Homepage Slider')
        .child(S.document().schemaType('homeSlider').documentId('homeSlider')),

      S.listItem()
        .title('Moments Seite')
        .child(S.document().schemaType('momentsPage').documentId('momentsPage')),

      S.listItem()
        .title('Über mich Seite')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

      S.listItem()
        .title('Open Graph Bilder')
        .child(S.document().schemaType('openGraph').documentId('openGraph')),

      S.listItem()
        .title('Discover Journey')
        .child(S.document().schemaType('discoverJourney').documentId('discoverJourney')),

      S.listItem()
        .title('BeforeAfter Journey')
        .child(S.document().schemaType('beforeAfterJourney').documentId('beforeAfterJourney')),
    ])
