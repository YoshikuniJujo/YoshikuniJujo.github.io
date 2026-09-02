const event = {
	created_at: 1750000000,
	kind: 1,
	tags: [],
	content: "Hello, Nostr!" };

const nostr = await waitForNostr();

const pubKey = await nostr.getPublicKey();
document.querySelector("#public-key").textContent = pubKey;

const signedEvent = await nostr.signEvent(event);
document.querySelector("#signed-event").textContent =
	JSON.stringify(signedEvent, null, 2);

async function
waitForNostr()
{
	while (!window.nostr)
		await new Promise(resolve => setTimeout(resolve, 500));
	return window.nostr;
}
