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
        { name: 'Back Home', icon: 'angle left', link: `/` },
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
        { name: `Back to ${event.title}`, icon: 'angle left', link: `${eventLink}` },
        (isAdmin ? {name: "Settings", icon: 'settings', link: `${eventLink}/backstage/settings` } : {}),
        { name: "Guests", icon: 'users', link: `${eventLink}/backstage/guests` },
        { name: "Feedback", icon: 'send', link: `${eventLink}/backstage/feedback` },
        (isAdmin ? { name: "Planning", icon: 'file alternate outline', link: `${eventLink}/backstage/tasks` } : {}),
      ];
      return {title: 'Event Links', items: menuItems}
    }
  },
  {
    path: '/e/:id',
    name: 'event',
    genItems(_, event = {}) {
      if (!event.id) return {}

      const eventLink = genEventLink(event)
      const isAdmin = event.organizer_role && (['admin', 'owner']
          .find(role => role == event.organizer_role.toLowerCase()))

      let menuItems = [
        event.community ? { name: `Back to ${event.community.name} community`, icon: 'angle left', link: `${genCommunityLink(event.community)}` } : {},
        { name: event.title, link: `${eventLink}` },
        process.env.REACT_APP_SPONSORSHIP_ENABLED == 'true' && event.id
          ? { name: "Become a Sponsor", icon: 'money', link: `${eventLink}/sponsors/new`, className: 'sponsor' }
          : {},
        { name: "Speakers", icon: 'bullhorn', link: `${eventLink}/presentations` },
        { name: "Resources", icon: 'file alternate outline', link: `${eventLink}/resources` },
        { name: "Feedback", icon: 'asl interpreting', link: `${eventLink}/feedback` },
      ];

      if (isAdmin) {
        menuItems = menuItems.concat([
          {name: "Settings", icon: 'settings', link: `${eventLink}/backstage/settings` },
          {name: "Edit Event", icon: 'edit', link: `${eventLink}/backstage/settings?activeIndex=1` },
          {name: "Register a guest", icon: 'user plus', link: `${eventLink}/register` },
          {name: "Upload Guest CSV", icon: 'send', link: `${eventLink}/backstage/guests?activeIndex=1` },
          {name: "Check In Guests", icon: 'user', link: `${eventLink}/backstage/guests` },
        ])
      }
      return {title: 'Event Links', items: menuItems}
    }
  },
  {
    path: '/u/:id',
    name: 'user',
    genItems(_, event, user) {
      const userLink = genUserProfileLink(user)
      const isLoggedInUser = user.id == Auth.currentUser().id
      const pronoun = isLoggedInUser ? 'Your' : `${user.less_formal_name}'s`
      const menuItems = [
        { name: `${pronoun} Events`, icon: 'file outline', link: `${userLink}/events` },
        { name: `${pronoun} Communities`, icon: 'users', link: `${userLink}/resources` },
        { name: `${pronoun} Resources`, icon: 'file outline', link: `${userLink}/resources` },
        (isLoggedInUser ? {name: `${pronoun} Settings`, icon: 'settings', link: `${userLink}/settings` } : {}),
      ];
      return {title: 'User Links', items: menuItems}
    }
  },
]
