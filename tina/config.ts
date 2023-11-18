import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  token: "613cdb561bdbf6827c1234ec2aab9c81a4f75fd9",
  clientId: "4434e103-89e2-4b8b-b690-d1f889f2ab9d",

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
        name: "hold",
        label: "Lav hold",
        path: "content/hold",
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
            name: "plads",
            type: "boolean",
            label: "Er der plads på holdet?",
            description: "Vælg om der stadig er flere pladser på holdet.",
            required: false,
          },
          {
            name: "betaling",
            label: "Betalings Metoder",
            type: "object",
            list: true,
            description: "Administere betaling.",
            fields: [
              {
                name: "belob",
                type: "string",
                label: "Beløb",
                description: "Beløbeb på holdet.",
              },
              {
                name: "belobpensionister",
                type: "string",
                label: "Beløb (pensionister)",
                description: "Beløbeb på holdet.",
              },
              {
                name: "klipkortbetaling",
                type: "rich-text",
                label: "Beløb (KlipKort)",
                description: "Beløbeb på holdet.",
              },
              {
                type: "string",
                name: "paymentLink",
                label: "Betalings Link",
                required: false,
              },
              {
                type: "string",
                name: "penstionpaymentLink",
                label: "Betalings Link (Pensionist)",
              },
            ],
          },
          {
            type: "image",
            label: "Cover Billede",
            name: "coverImage",
            required: true,
          },
          {
            label: "Instruktører",
            name: "instruktors",
            type: "object",
            list: true,
            fields: [
              {
                name: "instruktorname",
                label: "Instruktør Navn",
                type: "string",
              },
              {
                name: "bestyrlse",
                label: "Medlem af bestyrlse?",
                type: "boolean",
                required: false,
              },
              {
                name: "instruktorimage",
                label: "Instruktør Billede",
                type: "image",
                required: false,
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Hold Beskrivelse",
            isBody: true,
          },
          {
            type: "rich-text",
            name: "andetinfo",
            label: "Andet information",
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
      {
        name: "instruktors",
        label: "Instruktør(er)",
        path: "content/instruktorer",
        fields: [
          {
            type: "string",
            label: "Navn",
            name: "instruktorName",
            isTitle: true,
            description: "Navn på instruktørern",
            required: true,
          },
          {
            type: "string",
            label: "Alder",
            name: "instruktorAge",
            description: "Alder på instruktøreren",
            required: true,
          },
          {
            type: "rich-text",
            label: "Beskrivelse",
            name: "instruktorDescription",
            description: "Beskrivelse af instruktøreren",
            required: true,
          },
          {
            type: "image",
            label: "Billede",
            name: "instruktorImage",
            description: "Billede af instruktøreren",
            required: true,
          },
        ],
      },
      {
        name: "bestyrlsen",
        label: "Bestyrlsen",
        path: "content/bestyrlsen",
        fields: [
          {
            type: "string",
            label: "Navn",
            name: "bestyrlsenName",
            isTitle: true,
            description: "Navn på bestyrlsen medlemmet",
            required: true,
          },
          {
            type: "string",
            label: "Alder",
            name: "bestyrelsesAge",
            description: "Alder på Bestryelses Medlem",
            required: true,
          },
          {
            type: "rich-text",
            label: "Beskrivelse",
            name: "bestyrelsesDescription",
            description: "Beskrivelse af bestyreles medlem",
            required: true,
          },
          {
            type: "image",
            label: "Billede",
            name: "bestyrlesImage",
            description: "Billede af estyreles medlemmet",
            required: true,
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
