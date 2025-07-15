import type {Block} from 'payload';

export const Code: Block = {
  slug: 'code',
  interfaceName: 'CodeBlock',
  fields: [
    {
      name: 'items',
      type: 'relationship',
      relationTo: "codeblocks",
      hasMany: true,
      minRows: 1,
    }
  ],
};