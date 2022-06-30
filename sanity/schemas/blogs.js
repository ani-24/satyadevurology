export default {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      initialValue: "Dr. Kumar Rajesh Ranjan",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "date",
      title: "Publishing Date",
      type: "date",
      options: {
        dateFormat: "Do MMM",
      },
    },
  ],
};
