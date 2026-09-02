console.log("main.js loaded");
console.log(window.nostr);

const event = {
	created_at: 1750000000,
	kind: 1,
	tags: [],
	content: "Hello, Nostr!" };

const pubKey = await window.nostr.getPublicKey();
document.querySelector("#public-key").textContent = pubKey;

const signedEvent = await window.nostr.signEvent(event);
document.querySelector("#signed-event").textContent =
	JSON.stringify(signedEvent, null, 2);
