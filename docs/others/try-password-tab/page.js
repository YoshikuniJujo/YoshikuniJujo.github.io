const result = document.getElementById("result");

document.querySelector("#open-input2").addEventListener("click", async () => {

	result2.textContent = "入力待ち...";

	try {
		const value = await window.test.openInputTab2();
		result2.textContent = `結果: ${value}`;
	} catch (e) {
		result2.textContent = `エラー: ${e}`;
	}

});

async function openInputTabByShortcut(event) {
	if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "f"
	) {
		event.preventDefault();

		result2.textContent = "入力待ち...";
		try {
			const value = await window.test.openInputTab2();
			result2.textContent = `結果: ${value}`;
		} catch (e) {
			result2.textContent = `エラー: ${e}`;
		}
	}
}

document.addEventListener("keydown", openInputTabByShortcut);
