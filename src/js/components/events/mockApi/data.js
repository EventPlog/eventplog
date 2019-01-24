export default {
  communities: [
    {
      id: 1,
      name: 'Facebook Developer Circle Lagos',
      description: 'A community of developers united in knowledge sharing.',
      featured_image: '/samplePic.jpg',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Technology',
      fg_color: '#2f3c5b',
      joined: true,
    },
    {
      id: 2,
      name: 'Google Developer Group',
      description: 'Developer community bringing up community interest, powereed by google.',
      featured_image: '/samplePic.png.png',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Developers',
      joined: false,
    },
    {
      id: 3,
      name: 'Facebook Developer Circle Lagos',
      description: 'A community of developers united in knowledge sharing',
      featured_image: '/samplePic.jpg',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      focus: 'Technology',
      joined: true,
    },
  ],

  events: [
    {
      id: 1,
      title: 'Tech is in you',
      description: "<p> Clear you calendars, it’s going down. this HTML file is a template. If you open it directly in the browser, you will see an empty page. </p> <p> \"You can add webfonts, meta tags, or analytics to this file.&nbsp; The build step will place the bundled scripts into the {'<body>'} tag.&nbsp; To begin the development, run \`npm start\` or \`yarn start\`.&nbsp; To create a production bundle, use \`npm run build\` or \`yarn build\`. </p> ",
      featured_image: '/samplePic.png.png',
      interested: true,
      interested_persons: 211,
      start_date: '28 June, 2018',
      start_time: '10:00am',
      end_date: '28 June, 2018',
      end_time: '01:00pm',
      venue: 'StartZone, Gbagada',
      community: {
        id: 3,
        name: 'Facebook Developer Circle Lagos',
        description: 'A community of developers united in knowledge sharing',
        featured_image: '/samplePic.jpg',
        no_of_members: 200,
        no_of_upcoming_events: 2,
        focus: 'Developers',
        fg_color: '#2f3c5b',
        joined: false,
      },
      comments: [
        {
          id: 1,
          body: "Might it be great **if** we used `eventbrite` for this?&nbsp; I would love to test out my  design skills if you guys permit? \n\nPS: Never done this before though. Lol!",
          user: {
            id: 3,
            first_name: 'Sarah',
            last_name: 'Omoloye',
            community_role: 'Top Contributor'
          },
          responses: [
            {
              id: 3,
              body: `Lol! Sounds like something to look forward to. \n\nThanks Sarah!`,
              user: {
                id: 3,
                first_name: 'George',
                last_name: 'James',
                avatar_url: '/steve.jpg',
                community_role: 'Organizer'
              }
            }
          ]
        },
        {
          id: 2,
          body: "Suggestions: How about we come with markers to the venue and engage in more practical workshops?",
          user: {
            id: 3,
            first_name: 'Sunday',
            last_name: 'Bisoye',
            avatar_url: '/sunday.jpg',
            community_role: 'Contributor'
          },
          responses: [
            {
              id: 3,
              body: `We'd love that David. Thanks for the initiative!`,
              user: {
                id: 3,
                first_name: 'George',
                last_name: 'James',
                avatar_url: '/steve.jpg',
                community_role: 'Organizer'
              }
            }
          ]
        }
      ]

    },
    {
      id: 2,
      title: 'Writers corner workshop with writing and use of English',
      description: "<p> Clear you calendars, it’s going down. this HTML file is a template. If you open it directly in the browser, you will see an empty page. </p> <p> \"You can add webfonts, meta tags, or analytics to this file.&nbsp; The build step will place the bundled scripts into the {'<body>'} tag.&nbsp; To begin the development, run \`npm start\` or \`yarn start\`.&nbsp; To create a production bundle, use \`npm run build\` or \`yarn build\`. </p> ",
      featured_image: '/samplePic.jpg',
      interested: false,
      interested_persons: 211,
      start_date: '28 June, 2018',
      start_time: '10:00am',
      end_date: '28 June, 2018',
      end_time: '01:00pm',
      venue: 'StartZone, Gbagada',
      community: {
        id: 1,
        name: 'GDG Lagos',
        description: 'A community of developers united in knowledge sharing',
        featured_image: '/samplePic.png.png',
        no_of_members: 200,
        no_of_upcoming_events: 2,
        focus: 'Technology',
        fg_color: '#2f3c5b',
        joined: false,
      }
    },
    {
      id: 3,
      title: 'Figma Design Series',
      description: "##### Task Ready: \n\n * Article writing, \n * Blogging \n * Technical writing\n *  Social media : define your realm of influence",
      featured_image: '/samplePic.png.png',
      interested: false,
      interested_persons: 108,
      start_date: '28 June, 2018',
      start_time: '10:00am',
      end_date: '28 June, 2018',
      end_time: '01:00pm',
      venue: 'StartZone, Gbagada',
      community: {
        id: 2,
        name: 'Facebook Developer Circle Lagos',
        description: 'A community of developers united in knowledge sharing',
        featured_image: '/samplePic.png.png',
        no_of_members: 200,
        no_of_upcoming_events: 2,
        focus: 'Technology',
        fg_color: '#2f3c5b',
        joined: false,
      }
    }
  ]
}