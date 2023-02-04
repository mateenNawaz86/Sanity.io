export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'github',
      type: 'string',
      title: 'Github',
    },
    {
      name: 'linkedIn',
      type: 'string',
      title: 'LinkedIn',
    },
    {
      name: 'fb',
      type: 'string',
      title: 'Facebook',
    },
    {
      title: 'image',
      name: 'profileimage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
  ],
}
