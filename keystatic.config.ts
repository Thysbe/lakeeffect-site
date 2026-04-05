import { config, collection, fields } from '@keystatic/core';

export default config({
  // Local mode in dev, GitHub mode in production (set env vars to activate)
  storage: process.env.KEYSTATIC_GITHUB_CLIENT_ID
    ? {
        kind: 'github',
        repo: { owner: 'Thysbe', name: 'lakeeffect-site' },
      }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Lake Effect Records' },
  },

  collections: {
    events: collection({
      label: 'Events',
      slugField: 'name',
      path: 'content/events/*',
      schema: {
        name: fields.slug({ name: { label: 'Event Name' } }),
        date: fields.text({
          label: 'Date',
          description: 'e.g. SAT MAY 02, 2026',
          validation: { isRequired: true },
        }),
        time: fields.text({
          label: 'Time',
          description: 'e.g. 10PM — 4AM',
          validation: { isRequired: true },
        }),
        venue: fields.text({ label: 'Venue', validation: { isRequired: true } }),
        address: fields.text({ label: 'Address' }),
        acts: fields.array(fields.text({ label: 'Act' }), {
          label: 'Acts',
          itemLabel: (props) => props.value || 'Act',
        }),
        price: fields.text({ label: 'Price', description: 'e.g. $15, Free, Free before 11PM / $10 after' }),
        note: fields.text({ label: 'Note', description: 'e.g. 21+, All ages' }),
      },
    }),

    merch: collection({
      label: 'Merch',
      slugField: 'name',
      path: 'content/merch/*',
      schema: {
        name: fields.slug({ name: { label: 'Item Name' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        price: fields.text({ label: 'Price', validation: { isRequired: true } }),
        tag: fields.select({
          label: 'Category',
          options: [
            { label: 'Apparel', value: 'Apparel' },
            { label: 'Music', value: 'Music' },
            { label: 'Accessories', value: 'Accessories' },
          ],
          defaultValue: 'Apparel',
        }),
        sizes: fields.text({
          label: 'Sizes',
          description: 'e.g. S / M / L / XL — leave blank if not applicable',
        }),
      },
    }),

    artists: collection({
      label: 'Artists',
      slugField: 'name',
      path: 'content/artists/*',
      schema: {
        name: fields.slug({ name: { label: 'Artist Name' } }),
        descriptor: fields.text({
          label: 'Descriptor',
          description: 'e.g. Deep house · Ambient',
        }),
      },
    }),
  },
});
