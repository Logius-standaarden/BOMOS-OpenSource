import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
import { generateMermaidFigures } from "https://logius-standaarden.github.io/publicatie/respec/plugins/mermaid.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc0",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "bomos",
  shortName: "opensource",
  publishDate: "2023-01-31",
  publishVersion: "0.0.1",
  subtitle: "BOMOS voor open source",
  // TODO: Remove before publishing
  prevVersion: [],
  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "BOMOS-OpenSource.pdf",
      },
  ],

  postProcess: [ generateMermaidFigures ]
});
