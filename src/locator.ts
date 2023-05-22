import { Client, Channel, GuildChannel } from 'discord.js'

/**
 * Locates a channel by name or ID from the client's channel cache.
 *
 * @param {Client} cli - The Discord client instance.
 * @param {string} searchFor - The search parameter, either a channel name or channel ID.
 * @returns {Promise<Channel>} - A promise that resolves to the located channel.
 * @throws {Error} - If the channel is not found.
 */
async function locator(cli: Client, searchFor: string): Promise<Channel> {
	const chan = cli.channels.cache.find((c) => {
		if (c instanceof GuildChannel) {
			return c.name === searchFor || c.id === searchFor.toString()
		}
		return false
	})

	if (!chan) {
		throw new Error('Channel not found')
	}
	return chan
}

/**
 * Locates a channel in a specific guild using the guild ID and channel ID.
 *
 * @param {Client} cli - The Discord client instance.
 * @param {string} guildId - The ID of the guild.
 * @param {string} chanId - The ID of the channel.
 * @returns {Promise<Channel>} - A promise that resolves to the located channel.
 * @throws {Error} - If the guild cannot be located from the client.
 */
async function viaGuild(
	cli: Client,
	guildId: string,
	chanId: string,
): Promise<Channel> {
	const guild = cli.guilds.cache.get(guildId)
	if (!guild) {
		throw new Error('Unable to locate Guild from Client')
	}
	const channel = guild.channels.cache.get(chanId) as Channel
	return channel
}

/**
 * Locates a Discord Channel via the Client
 *
 * @param {Client} cli - The Discord client instance.
 * @param {Object} data - The data object containing parameters for locating the channel.
 * @param {string} data.guildId - The ID of the guild (optional).
 * @param {string} data.lookup - The search parameter, either a channel name or channel ID.
 * @returns {Promise<Channel>} - A promise that resolves to the located channel.
 * @throws {Error} When the parameters are not supplied, invalid, or the channel is not found.
 */

export async function locateChan(
	cli: Client,
	data: { guildId?: string; lookup: string },
): Promise<Channel> {
	const { guildId, lookup } = data || {}

	if (!cli) {
		throw new Error('Client parameter must be supplied.')
	}
	if (!lookup) {
		throw new Error(
			'Search parameter must be supplied. Either a channel name or channel ID',
		)
	}
	if (!guildId) {
		return locator(cli, lookup)
	}
	return viaGuild(cli, guildId, lookup)
}
