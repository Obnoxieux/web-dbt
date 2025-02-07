import type {GlobalConfig} from 'payload';

import {link} from '@/fields/link';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "infotext",
      type: "code",
      maxLength: 255,
      admin: {
        description: "Appears on leading edge. HTML is supported, but can be plain string.",
        language: "html",
      }
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 4,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Footer/RowLabel#RowLabel',
        },
      },
    },
  ],
};
