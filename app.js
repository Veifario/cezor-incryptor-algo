const inputEncryption = document.querySelector("#encrypt");
const inputDecryption = document.querySelector("#decrypt");
const outputDecrypt = document.querySelector("#outputDecrypt");
const outputEncrypt = document.querySelector("#outputEncrypt");

// Index for shifting the encryption
let index = 3;

const encryptSentance = (sentance, index) =>
	sentance
		.split("")
		.map((e) =>
			String.fromCharCode(
				e.toLowerCase().charCodeAt() === 32
					? 32
					: e.toLowerCase().charCodeAt() - 96 + index > 26
					? 96 + (index - Math.abs(e.toLowerCase().charCodeAt() - 122))
					: e.toLowerCase().charCodeAt() + index
			)
		)
		.join("");

const decryptSentance = (sentance, index) =>
	sentance
		.split("")
		.map((e) =>
			String.fromCharCode(
				e.toLowerCase().charCodeAt() === 32
					? 32
					: e.toLowerCase().charCodeAt() - 96 - index <= 0
					? 122 - (index - Math.abs(e.toLowerCase().charCodeAt() - 96))
					: e.toLowerCase().charCodeAt() - index
			)
		)
		.join("");

inputEncryption.addEventListener("change", (e) => {
	outputEncrypt.innerText = encryptSentance(e.target.value, index);
});

inputDecryption.addEventListener("change", (e) => {
	outputDecrypt.innerText = decryptSentance(e.target.value, index);
});
