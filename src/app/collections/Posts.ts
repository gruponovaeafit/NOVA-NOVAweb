import type { CollectionConfig } from "payload";

// This is the configuration for the "Posts" collection in Payload CMS.
export const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "includedInBlog",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};