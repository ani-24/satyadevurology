export default {
  name: "pressRelease",
  title: "Press Release",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
