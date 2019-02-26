export default {
  event_categories: [
    'Technology',
    'Education',
    'Automotive/Transportation',
    'Agriculture/Food and Beverage',
    'Business',
    'Construction/Real Estate',
    'Defence/Space',
    'Entertainment/Media',
    'Hospitality',
    'Energy/Oil and Gas',
    'Finance/Banking',
    'Government/Not-for-Profit',
    'Healthcare/BioTech',
    'Logistics',
    'Manufacturing',
    'Professional Services(Legal, Insurance, Accounting, HR, Marketing)',
    'Retail and E-Commerce',
    'Relationships',
    'Religion',
    'Security',
    'Self-Development',
    'Telecommunications',
    'Women',
    'Other'
  ],

  defaultRSVPQuestions: [
    {id: 'first_name', body: 'First Name', question_type: 'short_answer', default: true},
    {id: 'last_name', body: 'Last Name', question_type: 'short_answer', default: true},
    {id: 'gender', body: 'Gender', question_type: 'single_choice', default: true, options: [{body: 'Male'}, {body: 'Female'}]},
    {id: 'email', body: 'Email', question_type: 'short_answer', default: true},
  ],

  platform_cost: process.env.REACT_APP_PLATFORM_COST || 0.10,

  currency: process.env.REACT_APP_CURRENCY,

  slack: {
    partnerReportChannel: process.env.SLACK_PARTNER_REPORT_CHANNEL || '#bot-test',
    communityReportChannel: process.env.SLACK_COMMUNITY_REPORT_CHANNEL || '#bot-test',
    guestsReportChannel: process.env.SLACK_GUEST_REPORT_CHANNEL || '#bot-test'
  },
}