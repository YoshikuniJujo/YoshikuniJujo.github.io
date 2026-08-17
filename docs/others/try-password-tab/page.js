const result = document.getElementById("result");
const result2 = document.getElementById("result2");

document.querySelector("#open-input").addEventListener("click", async () => {

	result.textContent = "入力待ち...";

	try {
		const value = await window.test.openInputTab();
		result.textContent = `結果: ${value}`;
	} catch (e) {
		result.textContent = `エラー: ${e}`;
	}

});


document.querySelector("#open-input2").addEventListener("click", async () => {

	result.textContent = "入力待ち...";

	try {
		const value = await window.test.openInputTab();
		result2.textContent = `結果: ${value}`;
	} catch (e) {
		result2.textContent = `エラー: ${e}`;
	}

});

