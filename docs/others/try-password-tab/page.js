const result1 = document.getElementById("result1");
const resultAnswerId = document.getElementById("result-answer-id");

const parameter1 = document.getElementById("parameter1");
const parameter2 = document.getElementById("parameter2");
const parameter3 = document.getElementById("parameter3");

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
	const pr = parameter1.value;
	console.log(pr);
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

parameter1.addEventListener("keydown", (e) => {
	if (e.key == "Enter")
		document.getElementById("open-input1").click();
});

parameter2.addEventListener("keydown", (e) => {
	if (e.key == "Enter")
		document.getElementById("open-input2").click();
});

parameter3.addEventListener("keydown", (e) => {
	if (e.key == "Enter")
		document.getElementById("open-input3").click();
});
