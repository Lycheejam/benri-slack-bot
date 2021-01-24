import { App } from "@slack/bolt";

export const events = (app: App): void => {
  app.event("emoji_changed", async ({ event, context}) => {
    var message = '';
    if (event.subtype == 'add') {
      message = `:tada: added new emoji : \`:${event.name}:\` :${event.name}:`
    } else if (event.subtype == 'remove') {
      message = `:shower: removed emoji : \`:${event.names[0]}:\``
    } else if (event.subtype == 'rename') {
      message = `:pencil2: rename emoji alias : \`:${event.old_name}:\` → \`:${event.new_name}:\` :${event.new_name}:`
    }

    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: ,
        text: message
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_created", async ({ event, context}) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: ,
        text: `:tada: added new channel : #${event.channel.name} `,
        link_names: true
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_rename", async ({ event, context}) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: ,
        text: `:pencil2: rename channel : #${event.channel.name} `,
        link_names: true
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_archive", async ({ event, context}) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: ,
        text: `:notebook: archived channel : #${event.channel} `,
        link_names: true
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.event("channel_deleted", async ({ event, context}) => {
    try {
      await app.client.chat.postMessage({
        token: context.botToken,
        channel: ,
        text: `:shower: deleted channel : #${event.channel} `,
        link_names: true
      });
    } catch (error) {
      console.log(error);
    }
  });
};