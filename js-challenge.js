// ========== Challenge 1 ==========

function palindrome(kata) {
  let reversed = "";

  for (let i = kata.length - 1; i >= 0; i--) {
    reversed += kata[i];
  }

  return kata == reversed;
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false

// ========== Challenge 2 ==========

function hitungJumlahKata(kalimat) {
  let count = 0;

  if (kalimat.length < 1) return 0;

  for (const i in kalimat) {
    if (/\s/.test(kalimat[i])) {
      count++;
    }
  }

  return count + 1;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5

// ========== Challenge 3 ==========

function changeVocals(str) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let changedStr = "";

  for (const i in str) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      changedStr += lower[lower.indexOf(str[i]) + 1];
    } else if (
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      changedStr += upper[upper.indexOf(str[i]) + 1];
    } else {
      changedStr += str[i];
    }
  }

  return changedStr;
}

function reverseWord(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

function setLowerUpperCase(str) {
  let formattedStr = "";

  for (const i in str) {
    if (str[i] == str[i].toLowerCase()) {
      formattedStr += str[i].toUpperCase();
    } else if (str[i] == str[i].toUpperCase()) {
      formattedStr += str[i].toLowerCase();
    }
  }

  return formattedStr;
}

function removeSpaces(str) {
  let trimmedStr = "";

  for (const i in str) {
    if (!/\s/.test(str[i])) trimmedStr += str[i];
  }

  return trimmedStr;
}

function passwordGenerator(name) {
  if (name.length < 5) return "Minimum inputted character is 5";
  return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
}

// TEST CASES
console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// ========== Challenge 4 ==========

function meleeRangedGrouping(str) {
  let hero = "";
  let type = "";
  let heroState = true;
  let melee = [];
  let ranged = [];

  for (const i in str) {
    if (str[i] == "-") {
      heroState = false;
    } else if (str[i] == ",") {
      // push hero based on attack type
      if (type == "Melee") {
        melee = [...melee, hero];
      } else if (type == "Ranged") {
        ranged = [...ranged, hero];
      }

      // initial state
      hero = "";
      type = "";
      heroState = true;
    } else {
      if (heroState) {
        hero += str[i];
      } else {
        type += str[i];
      }
    }
  }

  // push last hero
  if (hero != "" && type != "") {
    if (type == "Melee") {
      melee = [...melee, hero];
    } else if (type == "Ranged") {
      ranged = [...ranged, hero];
    }
  }

  return str == "" ? [] : [[...ranged], [...melee]];
}

// TEST CASES
console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []

// ========== Challenge 5 ==========

function stringToArray(string) {
  let arr = [];
  let temp = [];

  for (const i in string) {
    if (string[i] != ",") {
      temp = [...temp, string[i]];
    } else {
      arr = [...arr, temp];
      temp = [];
    }
  }

  // push last element
  if (temp.length > 0) {
    arr = [...arr, temp];
    temp = [];
  }

  return arr;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
