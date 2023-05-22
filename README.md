# Discord Channel Locator 🔎

Efficient and simple module to locate Discord channels via name, or channel ID.

[![install size](https://packagephobia.com/badge?p=discord.js@14.11.0)](https://packagephobia.com/result?p=discord.js@14.11.0)

## Example 💡

```js
import { locateChan } from 'discord-channel-locator'

  const generalChan = await locateChan(Client, {
   lookup: 'general',
  })
```

## Installation ℹ️

`npm i discord-channel-locator`

## Usage 📝

### `locateChan(client, options)`

### `client` - Your Discord.js Client

## Options <Object\>

### `lookup` <String\>

The name or the channel ID to locate

### `guildId` <String || null>

The ID of the guild to search for the channels in. This is optional. If not provided, the module will search for channels in all guilds the bot has access to.

#### Notes

An error is thrown when the channel is not found, so be sure to catch it.
