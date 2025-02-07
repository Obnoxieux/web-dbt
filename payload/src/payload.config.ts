// storage-adapter-import-placeholder
import {mongooseAdapter} from '@payloadcms/db-mongodb'
import path from 'path'
import {buildConfig} from 'payload'
import {fileURLToPath} from 'url'
import sharp from 'sharp'

import {Users} from './collections/Users'
import {Media} from './collections/Media'
import {Pages} from "@/collections/Pages";
import {Posts} from "@/collections/Posts";
import {defaultLexical} from "@/fields/defaultLexical";
import {plugins} from "@/plugins";
import {Header} from "@/globals/Header/config";
import {Footer} from "@/globals/Footer/config";
import {nodemailerAdapter} from "@payloadcms/email-nodemailer";
import * as process from "node:process";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      description: "Where Bits and Bytes are assembled",
      icons: [
        {
          type: 'image/png',
          rel: 'icon',
          url: '/assets/favicon.svg',
        },
      ],
      openGraph: {
        description: "Where Bits and Bytes are assembled",
        images: [
          {
            height: 192,
            url: '/assets/touch-icon.png',
            width: 192,
          },
        ]
      },
      title: "web-dbt Admin Panel",
      titleSuffix: "- web-dbt Admin"
    }
  },
  collections: [Users, Media, Pages, Posts],
  globals: [Header, Footer],
  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || '',
  cors: "*",
  email: nodemailerAdapter({
    defaultFromAddress: "cms@obnx.dev",
    defaultFromName: "web-dbt Admin",
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    ...plugins
    // storage-adapter-placeholder
  ],
})
