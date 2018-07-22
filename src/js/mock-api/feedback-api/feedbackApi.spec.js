import FeedbackApi from './index'

import data from '../data'

describe('.show()', () => {
  it('should return a report for an event', async () => {
    const report = data.feedbackReport
    let apiResponse = await FeedbackApi.getReport()
    expect(apiResponse.event_id).toEqual(report.event_id)
  })
})