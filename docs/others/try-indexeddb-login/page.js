const status = document.querySelector("#status");

function
message(msg)
{
	console.log(msg);
	status.textContent = msg;
}

document.querySelector("#add-user").addEventListener(
	"submit", async event => {
		event.preventDefault();

		if (!window.mySign?.addUser) {
			message("window.mySign.addUser is not available");
			return;
		}

		const form = event.currentTarget;
		const uid = form.elements.uid.value;
		const pswd = form.elements.pswd.value;

		await window.mySign.addUser(uid, pswd);
		message("addUser completed");
	});

document.querySelector("#login").addEventListener(
	"submit", async event => {
		event.preventDefault();

		if (!window.mySign?.login) {
			message("window.mySign.login is not available");
			return;
		}

		const form = event.currentTarget;
		const uid = form.elements.uid.value;
		const pswd = form.elements.pswd.value;

		const ok = await window.mySign.login(uid, pswd);
		message(`login: ${ok}`);
	});
