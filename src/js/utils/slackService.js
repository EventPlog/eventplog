import callWebApi from './webAPI';

class SlackService {
  /*
    @event { id, title, description, url } object
    @return null
   */
  static send(payload) {
    console.log('event in slack formatter: ', payload)
    let slackUrl = process.env.REACT_APP_SLACK_WEBHOOK_URL;
    callWebApi({
      url: slackUrl,
      method: 'POST',
      data: this.format(payload)
    })
  }

  static format({id, title, description, url}) {
    return {
      "attachments":[
        {
          "fallback":`A new request for sponsorship has been submitted: <${url}|${title}>`,
          "pretext":`A new request for sponsorship has been submitted: <${url}|${title}>`,
          "color":"good",
          "fields":[
            {
              "title":title,
              "value": description,
              "short":false
            }
          ]
        }
      ]
    }
  }
}

export default SlackService;