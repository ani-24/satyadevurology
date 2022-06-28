import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "5vw62vpr",
  dataset: "production",
  useCdn: false,
  token: process.env.NEXT_SANITY_TOKEN,
  apiVersion: "2022-06-28",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
