import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import {authenticatedOrPublished} from "@/access/authenticatedOrPublished";

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: authenticatedOrPublished,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
}
