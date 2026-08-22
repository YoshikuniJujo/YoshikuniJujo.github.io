const result = document.getElementById("result");

document.querySelector("#open-input").addEventListener("click", async () => {

	result.textContent = "入力待ち...";

	try {
		const value = await window.tryPasswordTab.queryInput("123");
		result.textContent = `結果: ${value}`;
	} catch (e) {
		result.textContent = `エラー: ${e}`;
	}

});

async function openInputTabByShortcut(event) {
	if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "f"
	) {
		event.preventDefault();

		result.textContent = "入力待ち...";
		try {
			const value = await window.tryPasswordTab.queryInput("123");
			result.textContent = `結果: ${value}`;
		} catch (e) {
			result.textContent = `エラー: ${e}`;
		}
	}
}

document.addEventListener("keydown", openInputTabByShortcut);
