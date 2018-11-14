import Auth from 'js/auth/actions'
import {
  genEventLink,
  genCommunityLink,
  genUserProfileLink,
} from 'js/utils'

export default [
  {
    path: '/c/:id',
    name: 'community',
    genItems(community) {
      const communityLink = genCommunityLink(community)
      const menuItems = [
        { name: community.name, icon: 'users', link: communityLink },
      ];
      return {title: 'Community Links', items: menuItems}
    }
  },
  {
    path: '/e/:id/backstage',
    name: 'backstage',
    genItems(_, event) {
      const eventLink = genEventLink(event)
      const isAdmin = event.organizer_role && (['admin', 'owner']
          .find(role => role == event.organizer_role.toLowerCase()))

      const menuItems = [
        { name: event.title, icon: 'home', link: `${eventLink}` },
        (isAdmin ? {name: "Settings", icon: 'settings', link: `${eventLink}/backstage/settings` } : {}),
        { name: "Guests", icon: 'users', link: `${eventLink}/backstage/guests` },
        { name: "Feedback", icon: 'send', link: `${eventLink}/backstage/feedback` },
        (isAdmin ? { name: "Planning", icon: 'file alternate outline', link: `${eventLink}/backstage/tasks` } : {}),
        event.community ? { name: `Back to ${event.community.name} community`, link: `${genCommunityLink(event.community)}` } : {},
      ];
      return {title: 'Event Links', items: menuItems}
    }
  },
  {
    path: '/e/:id',
    name: 'event',
    genItems(_, event) {
      const eventLink = genEventLink(event)
      const isAdmin = event.organizer_role && (['admin', 'owner']
          .find(role => role == event.organizer_role.toLowerCase()))
      const menuItems = [
        { name: event.title, icon: 'home', link: `${eventLink}` },
        { name: "Resources", icon: 'file alternate outline', link: `${eventLink}/resources` },
        { name: "Speakers", icon: 'bullhorn', link: `${eventLink}/presentations` },
        { name: "Feedback", icon: 'asl interpreting', link: `${eventLink}/feedback` },
        (isAdmin ? {name: "Settings", icon: 'settings', link: `${eventLink}/backstage/settings` } : {}),
        event.community ? { name: `Back to ${event.community.name} community`, link: `${genCommunityLink(event.community)}` } : {},
      ];
      return {title: 'Event Links', items: menuItems}
    }
  },
  {
    path: '/u/:id',
    name: 'user',
    genItems(_, event, user) {
      const userLink = genUserProfileLink(user)
      const isLoggedInUser = user.id == Auth.currentUser().id
      console.log('logged in? ', isLoggedInUser, user, Auth.currentUser())
      const menuItems = [
        { name: "Events", icon: 'file outline', link: `${userLink}/events` },
        { name: "Communities", icon: 'users', link: `${userLink}/resources` },
        { name: "Resources", icon: 'file outline', link: `${userLink}/resources` },
        (isLoggedInUser ? {name: "Settings", icon: 'settings', link: `${userLink}/settings` } : {}),
      ];
      return {title: 'User Links', items: menuItems}
    }
  },
]
