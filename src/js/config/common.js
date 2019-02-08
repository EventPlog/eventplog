export default {
  event_categories: [
    'Automotive/Transportation',
    'Agriculture/Food and Beverage',
    'Construction/Real Estate',
    'Defence/Space',
    'Education',
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
    'Religion',
    'Security',
    'Telecommunications',
    'Technology',
    'Other'
  ],

  defaultRSVPQuestions: [
    {id: 'first_name', body: 'First Name', question_type: 'short_answer', default: true},
    {id: 'last_name', body: 'Last Name', question_type: 'short_answer', default: true},
    {id: 'gender', body: 'Gender', question_type: 'single_choice', default: true, options: [{body: 'Male'}, {body: 'Female'}]},
    {id: 'email', body: 'Email', question_type: 'short_answer', default: true},
  ],

  platform_cost: process.env.REACT_APP_PLATFORM_COST || 0.10,

  currency: process.env.REACT_APP_CURRENCY
}