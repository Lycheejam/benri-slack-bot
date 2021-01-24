import { events } from "./events";
import "reflect-metadata";

const { App, LogLevel } = require("@slack/bolt");

const logLevel = process.env.SLACK_LOG_LEVEL || LogLevel.DEBUG;

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel
});

events(app);

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
