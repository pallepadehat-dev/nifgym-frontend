import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "4434e103-89e2-4b8b-b690-d1f889f2ab9d", // Get this from tina.io
  token: "3c85b1bab537cacc6e19f93f7af22cebb4f81437", // Get this from tina.io

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
        name: "post",
        label: "Posts",
        path: "content/posts",
        ui: {
          router: ({ document }) => {
            return `/post/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "hold",
        label: "Hold Maker",
        path: "content/teams",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Hold Navn",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            type: "string",
            label: "Dato",
            description: "Dagen for hvornår der er træning.",
          },
          {
            name: "start_adress",
            type: "rich-text",
            label: "Start Tid / Adresse",
            description: "Start tid samt adresse.",
          },
          {
            name: "belob",
            type: "string",
            label: "Beløb",
            description: "Beløbeb på holdet.",
          },
          {
            type: "string",
            name: "paymentLink",
            label: "Betalings Link",
            required: true,
          },
          {
            type: "image",
            label: "Cover Billede",
            name: "coverImage",
            required: true,
          },
          {
            type: "string",
            name: "instruktorName",
            label: "Indstruktør Navn",
            required: true,
          },
          {
            type: "image",
            label: "Instruktør Billede",
            name: "instruktorImage",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Hold Beskrivelse",
            isBody: true,
          },
        ],
      },
      {
        name: "forsidehold",
        label: "Forside Hold",
        path: "content/forsidehold",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Hold Navn",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            label: "Hold Billede",
            name: "forsideholdimage",
            required: true,
          },
          {
            name: "holdbeskrivelse",
            type: "rich-text",
            label: "Hold Beskrivelse",
          },
        ],
      },
    ],
  },
});
