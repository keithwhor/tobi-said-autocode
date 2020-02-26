const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/**
* An HTTP endpoint that acts as a webhook for Slack message.channels event
* @param {object} event
* @returns {object} result Your return value
*/
module.exports = async (event) => {

  // Store API Responses
  const result = {slack: {}};

  console.log(`Running [Slack → Retrieve Channel, DM, or Group DM by id]...`);
  result.slack.channel = await lib.slack.conversations['@0.2.5'].info({
    id: `${event.event.channel}`
  });

  
  if (event.event.text.toLowerCase().startsWith('tobi said')) {
    await lib.slack.channels['@0.6.5'].messages.create({
      channel: `#${result.slack.channel.name}`,
      text: `https://www.youtube.com/watch?v=i92Ws7qPTRg`
    });
  }
  

  return result;

};