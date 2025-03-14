/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    let splitWords = [];
    let word = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== " ") {
            word += words[i];
        }

        if (words[i] === " " || i === words.length -1) {
            if (word !== " ") {
                splitWords.push(word);
                word = "";
            }
        }
    } 

    if (splitWords.length === 0) {
        return [];
    }

    let totalLength = 0;
    for (let i = 0; i < splitWords.length; i++) {
        totalLength += splitWords[i].length;
    }

    let avgLength = Math.round(totalLength / splitWords.length);

    let result = [];
    for (let i = 0; i < splitWords.length; i++) {
        if (splitWords[i].length === avgLength) {
            result.push(splitWords[i]);
        }
    }

    return result;
  }
  
  console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
  console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
  console.log(averageLengthWord('I am diligent')); // []