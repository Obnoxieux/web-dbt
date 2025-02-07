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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Posts],
  globals: [Header, Footer],
  editor: defaultLexical,
  secret: process.env.PAYLOAD_SECRET || '',
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
