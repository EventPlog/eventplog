const users = [
  {
    id: 1,
    first_name: 'Steve',
    last_name: 'Omobola',
    avatar_url: '/steve.jpg',
    occupation: 'Software Engineer'
  },
  {
    id: 2,
    first_name: 'Chinwe',
    last_name: 'Ifejikara',
    avatar_url: '/sample-avatar.jpg',
    occupation: 'Product Manager'
  },
  {
    id: 3,
    first_name: 'Sunday',
    last_name: 'Nzeribe',
    avatar_url: '/sunday.jpg',
    occupation: 'Digital Analyst'
  }
]

const announcements = [
  {
    id: 1,
    body: "We’re moving the venue from `NG_HUB` to `CIVIC HIVE`. It’s on the *2nd* floor, 42 Montgomergy road",
    announcer: users[0],
    publish_date: '20th June, 2018',
    publish_time: '5:04pm'
  },
  {
    id: 2,
    body: "Now you can sync with your team every Wednesday between 5pm and 8pm until 28th July, 2018 at `Civic Hive` to work on your idea.\n\nInternet and Power will be free, courtesy *Civic Hive*",
    announcer: users[0],
    publish_date: '20th June, 2018',
    publish_time: '2:38pm'
  }
]

const communities = {
  data: [
    {
      id: 1,
      name: 'Facebook Developer Circle Lagos',
      description: 'A community of developers united in knowledge sharing.',
      featured_image: '/login-bg.jpg',
      logo: '/dev-c-lagos-logo.png',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      interests: ['Technology', 'Software Engineering'],
      link_color: '#2291f9',
      members: users,
      joined: true,
    },
    {
      id: 2,
      name: 'Google Developer Group',
      display_name: 'Google Developer Group',
      description: 'Developer community bringing up community interest, powereed by google',
      featured_image: '/tech_is_in_you.png',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      link_color: 'red',
      interests: ['Developers'],
      members: users,
      joined: false,
    },
    {
      id: 3,
      name: 'ForLoop Lagos',
      display_name: 'ForLoop Lagos',
      description: 'A community of developers united in knowledge sharing',
      featured_image: '/login-bg.jpg',
      no_of_members: 200,
      no_of_upcoming_events: 2,
      link_color: 'green',
      interests: ['Technology'],
      members: users,
      joined: true,
    },
  ],
  meta: {
    "current_page": 1,
    "total_pages": 1,
    "per_page": 10 
  }
}

const events = {
  data: [
    {
      id: 1,
      title: 'Tech is in you',
      description: "<p> Clear you calendars, it’s going down. this HTML file is a template. If you open it directly in the browser, you will see an empty page. </p> <p> \"You can add webfonts, meta tags, or analytics to this file.&nbsp; The build step will place the bundled scripts into the {'<body>'} tag.&nbsp; To begin the development, run \`npm start\` or \`yarn start\`.&nbsp; To create a production bundle, use \`npm run build\` or \`yarn build\`. </p> ",
      featured_image: '/tech_is_in_you.png',
      interested: true,
      interested_persons: 211,
      start_date: '28 June, 2018',
      start_time: '10:00am',
      end_date: '28 June, 2018',
      end_time: '01:00pm',
      venue: 'StartZone, Gbagada',
      community: communities.data[0],
      organizers: users,
      announcements,
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
      featured_image: '/login-bg.jpg',
      interested: false,
      interested_persons: 211,
      start_date: '28 June, 2018',
      start_time: '10:00am',
      end_date: '28 June, 2018',
      end_time: '01:00pm',
      venue: 'StartZone, Gbagada',
      community: communities.data[1],
      organizers: users,
    },
    {
      id: 3,
      title: 'Figma Design Series',
      description: "##### Task Ready: \n\n * Article writing, \n * Blogging \n * Technical writing\n *  Social media : define your realm of influence",
      featured_image: '/login-bg.jpg',
      interested: false,
      interested_persons: 108,
      start_date: '28 June, 2018',
      start_time: '10:00am',
      end_date: '28 June, 2018',
      end_time: '01:00pm',
      venue: 'StartZone, Gbagada',
      community: communities[2],
      announcements,
      organizers: users,
    }
  ],
  meta: {
    activePage: '1'
  }
}

const feedback = [
  {
    id: 1,
    satisfaction: 60,
    nps: 0.5,
    swags: 0,
    comment: "I **Loved** this event!! Thank you so much for putting it together!",
    user: {
      id: 3,
      first_name: 'Sarah',
      last_name: 'Omoloye',
      community_role: 'Top Contributor'
    },
  },
  {
    id: 1,
    satisfaction: 60,
    nps: 0.5,
    swags: 0,
    comment: "This was awesome crew! Might it be great **if** we used `eventbrite` for this?&nbsp; I would love to test out my  design skills if you guys permit? \n\nPS: Never done this before though. Lol!",
    user: {
      id: 3,
      first_name: 'John',
      last_name: 'Dariye',
      community_role: 'First Time Contributor'
    },
  },
  {
    id: 1,
    satisfaction: 60,
    nps: 0.5,
    swags: 0,
    comment: "I had a rant to give and never planned on sharing feedback. But the bot asked nicely, so I did. Love the concept :)",
    user: {
      id: 3,
      first_name: 'Chineye',
      last_name: 'Ogbonna',
      community_role: 'Member'
    },
  }
]

const feedbackReport = {
  id: 1,
  event_id: 2,
  summary: {
    interested: {
      total: 60,
      male: 40,
      female: 20
    },
    checked_in: {
      total: 60,
      male: 40,
      female: 20
    },
    feedback_received: {
      total: 20,
      male: 12,
      female: 8
    },
    percentage_avg_satisfaction: {
      total: 20,
      male: 12,
      female: 8
    },
    nps: 0.5,
  },
  data: feedback,
  meta: {}
}


export default {
  communities,
  feedback,
  events,
  feedbackReport,
}