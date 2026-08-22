const result = document.getElementById("result");

document.querySelector("#open-input").addEventListener("click", async () => {
	queryInput(123) });

document.addEventListener("keydown", (ev) => openInputTabByShortcut(123, ev));

async function
openInputTabByShortcut(a, event)
{
	if (event.ctrlKey && event.shiftKey &&
		event.key.toLowerCase() === "f") {
		event.preventDefault(); queryInput(123); }
}

async function
queryInput(a)
{
	result.textContent = "入力待ち...";
	try {	const value = await window.tryPasswordTab.queryInput(a);
		result.textContent = `結果: ${value}`;
	} catch (e) { result.textContent = `エラー: ${e}`; }
}
