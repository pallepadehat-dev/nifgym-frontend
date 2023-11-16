import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  token: "613cdb561bdbf6827c1234ec2aab9c81a4f75fd9",
  clientId: "4434e103-89e2-4b8b-b690-d1f889f2ab9d",
  branch: "main",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "createhold",
        label: "Lav Hold",
        path: "content/hold",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            type: "datetime",
            description: "skriv en title",
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "95808dc139379ffddc41bb88222d08c447fcc207",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
