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
};