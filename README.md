# 便利Slack Bot

## About This

一般的に便利と思われる機能を追加していくSlack Bot。汎用性を追い求めていくぞ。

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
## Slack App Require scopes

* Oauth & Permissions
  * Scopes -> Bot Token Scopes
    * `chat:write`
    * `channels:read`
    * `emoji:read`
* Event Subscriptions
  * Subscribe to bot events
    * `emoji_changed`
    * `channel_created`
    * `channel_rename`
    * `channel_archive`
    * `channel_deleted`

## ローカルでの開発

```sh
cp .env.sample .env
```

```sh
# ビルド
npm run build
# ローカル実行
npm run local
# lint
npm run lint-staged
npm run lint
```