import {CollectionConfig} from "payload";

export const CodeBlocks: CollectionConfig = {
  slug: "codeblocks",
  access: {
    read: () => true
  },
  admin: {
    useAsTitle: "label"
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "language",
          type: "text",
          admin: {
            description: "Must be valid highlight.js language identifier. Not a select box because there are too many options.",
          },
          required: true,
        },
        {
          name: "label",
          type: "text",
          admin: {
            description: "Human-readable language name for identification in user-facing strings.",
          },
        },
      ]
    },
    {
      name: "codeSample",
      type: "code",
      admin: {
        description: "The actual code being shown."
      },
      required: true,
    }
  ]
}