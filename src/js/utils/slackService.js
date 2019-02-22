import fetch from 'isomorphic-fetch';

class SlackService {
  /*
    @event { id, title, description, url } object
    @return null
   */
  static send(payload) {
    console.log('event in slack formatter: ', payload)
    let slackUrl = process.env.REACT_APP_SLACK_WEBHOOK_URL;
    fetch(slackUrl, {
      method: 'POST',
      body: JSON.stringify(this.format(payload)),
    })
  }

  static format({id, title, description, url, prefixMsg, channel}) {
    return {
      "channel": channel,
      "attachments":[
        {
          "fallback":`${prefixMsg}: <${url}|${title}>`,
          "pretext":`${prefixMsg}: <${url}|${title}>`,
          "color":"good",
          "unfurl_links": true,
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