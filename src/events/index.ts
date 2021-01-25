import { App } from "@slack/bolt";

const EMOJI_NOTIFICATION_CHANNEL: string = process.env.EMOJI_NOTIFICATION_CHANNEL!;
const NOTIFICATION_CHANNEL: string = process.env.NOTIFICATION_CHANNEL!;
export const events = (app: App): void => {

  app.event("emoji_changed", async ({ event, context }) => {
    if (event.subtype === "add") {
      try {
        await app.client.chat.postMessage({
          token: context.botToken,
          channel: EMOJI_NOTIFICATION_CHANNEL,
          text: `:tada: added new emoji : \`:${event.name}:\` :${event.name}:`,
        });
      } catch (error) {
        console.log(error);
      }
    }
  });

  app.event("channel_created", async ({ event, context }) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: NOTIFICATION_CHANNEL,
        text: `:tada: added new channel : #${event.channel.name} `,
        link_names: true,
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_rename", async ({ event, context }) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: NOTIFICATION_CHANNEL,
        text: `:pencil2: rename channel : #${event.channel.name} `,
        link_names: true,
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_archive", async ({ event, context }) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: NOTIFICATION_CHANNEL,
        text: `:notebook: archived channel : #${event.channel} `,
        link_names: true,
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_deleted", async ({ event, context }) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: NOTIFICATION_CHANNEL,
        text: `:shower: deleted channel : #${event.channel} `,
        link_names: true,
      });
    } catch (error) {
      console.log(error);
    }
  });
};
