const result1 = document.getElementById("result1");
const resultAnswerId = document.getElementById("result-answer-id");

document.querySelector("#open-input1").addEventListener("click", async () => {
	queryInput("123") });

document.querySelector("#open-input2").addEventListener("click", async () => {
	queryInput("456") });

document.querySelector("#open-input3").addEventListener("click", async () => {
	queryInput("789") });

document.addEventListener("keydown", openInputTabByShortcut);

async function
openInputTabByShortcut(event)
{
	if (event.ctrlKey && event.shiftKey &&
		event.key.toLowerCase() === "f") {
		event.preventDefault(); queryInput("123"); }
}

async function
queryInput(a)
{
	result1.textContent = "入力待ち...";
	try {	const value = await window.tryPasswordTab.queryInput(a);
		resultAnswerId.textContent = `${a}`;
		result1.textContent = `結果: ${value}`;
	} catch (e) { result1.textContent = `エラー: ${e}`; }
}
