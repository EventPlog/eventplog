import LeadApi from './index'

test('.create should return a mock api data', async () => {
  const leadData = {id: 1}
  let apiResponse = await LeadApi.create(leadData)
  expect(apiResponse).toEqual(leadData)
})