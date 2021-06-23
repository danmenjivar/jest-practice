const Caesar = {
  encrypt: function (plainText, shift) {
    if (shift < 0) {
      return this.encrypt(plainText, shift + 26);
    }
    let output = "";

    for (let i = 0; i < plainText.length; i++) {
      let char = plainText[i];

      if (char.match(/[a-z]/i)) {
        const code = plainText.charCodeAt(i);

        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      output += char;
    }

    return output;
  },
  decrypt: function (cipherText, shift) {
    return this.encrypt(cipherText, -shift);
  },
};

module.exports = Caesar;
