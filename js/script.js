//Object Array to hold quotes, sources, citaitons and years
const quotes = [
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    translation:
      "Jadilah dirimu sendiri dan katakan apa yang kamu rasakan, karena mereka yang mempermasalahkan tak penting dan mereka yang penting tak akan mempermasalahkan.",
    source: "Dr. Seuss",
  },
  {
    quote: "This too, shall pass.",
    translation: "Ini juga akan berlalu.",
    source: "Anonymous",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    translation:
      "Tetaplah melihat bintang-bintang namun tetaplah dengan kaki di tanah.",
    source: "Theodore Roosevelt",
  },
  {
    quote:
      "The only person you should try to be better than is the person you were yesterday.",
    translation:
      "Satu-satunya orang yang harus kamu coba lampaui adalah dirimu sendiri yang kemarin.",
    source: "Anonymous",
  },
  {
    quote:
      "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    translation:
      "Jangan pernah dibiarkan bisu karena intimidasi. Jangan perbolehkan dirimu menjadi korban. Terima tak ada satu pun definisi tentang hidupmu; tentukan sendiri.",
    source: "Harvey Fierstein",
  },
  {
    quote:
      "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    translation:
      "Iman adalah seni memegang teguh pada hal-hal yang telah diterima oleh akal kita, terlepas dari perubahan suasana hati kita.",
    source: "C.S. Lewis",
  },
  {
    quote:
      "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
    source: "Sador",
    translation:
      "Seseorang yang melarikan diri dari ketakutannya mungkin akan menemukan bahwa dia hanya mengambil jalan pintas untuk bertemu dengannya.",
    citation: "Children of Húrin",
  },
  {
    quote: "Life's too mysterious to take too serious.",
    translation: "Hidup terlalu misterius untuk diambil terlalu serius.",
    source: "Mary Engelbreit",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    translation:
      "Tak ada yang bisa membuatmu merasa rendah diri tanpa persetujuanmu.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
    translation:
      "Wanita yang mengikuti kerumunan biasanya tidak akan pergi lebih jauh dari kerumunan itu sendiri. Wanita yang berjalan sendirian cenderung menemukan dirinya di tempat-tempat yang belum pernah dikunjungi siapa pun sebelumnya.",
    source: "Albert Einstein",
  },
  {
    quote:
      "You can't go around building a better world for people. Only people can build a better world for people. Otherwise, it's just a cage.",
    source: "Terry Pratchett",
    citation: "Witches Abroad",
    translation:
      "Kamu tak bisa hanya berkeliling membangun dunia yang lebih baik bagi orang lain. Hanya orang-oranglah yang bisa membangun dunia yang lebih baik bagi orang lain. Jika tidak, itu hanya akan menjadi sebuah penjara.",
    year: "1991",
  },
  {
    quote:
      "There isn't a way things should be. There's just what happens, and what we do.",
    source: "Terry Pratchett",
    translation:
      "Tak ada cara yang seharusnya. Hanya ada apa yang terjadi, dan apa yang kita lakukan.",
    citation: "A Hat Full of Sky",
  },
  {
    quote:
      "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
    source: "Rocky Balboa",
    citation: "Rocky",
    translation:
      "Ini bukan tentang seberapa keras kamu bisa memukul; ini tentang seberapa keras kamu bisa terkena pukulan dan tetap melangkah maju.",
    year: "1976",
  },
  {
    quote: "More fuck yeah, less fuck that.",
    translation: "Lebih banyak 'iya pasti', kurang 'tidak mungkin'.",
    source: "Anonymous",
  },
  {
    quote:
      "If you want to go fast, go alone. If you want to go far, go together.",
    translation:
      "Jika ingin pergi cepat, pergilah sendirian. Jika ingin pergi jauh, pergilah bersama-sama.",
    source: "African proverb",
  },
  {
    quote: "It's OK to not be OK, as long as you don't stay that way.",
    translation:
      "Tidak apa-apa tidak baik-baik saja, selama kamu tidak bertahan dalam keadaan tersebut.",
    source: "Anonymous",
  },
  {
    quote:
      "I can be changed by what happens to me but I refuse to be reduced by it.",
    translation:
      "Aku bisa berubah karena apa yang terjadi padaku, tetapi aku menolak untuk direndahkan olehnya.",
    source: "Maya Angelou",
  },
  {
    quote: "Believe you can and you're halfway there.",
    translation:
      "Percayalah bahwa kamu bisa, dan kamu sudah setengah jalan menuju keberhasilan.",
    source: "T. Roosevelt",
  },
  {
    quote:
      "May I never be complete. May I never be content. May I never be perfect.",
    translation:
      "Semoga aku tidak pernah merasa lengkap. Semoga aku tidak pernah merasa puas. Semoga aku tidak pernah sempurna.",
    source: "Chuck Palahniuk",
  },
  {
    quote:
      "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more, so that we may fear less.",
    translation:
      "Tak ada yang perlu ditakuti dalam hidup; yang perlu dilakukan hanyalah dipahami. Inilah waktunya untuk memahami lebih banyak, agar kita tak perlu takut.",
    source: "Marie Curie",
  },
  {
    quote: "Those who don't believe in magic will never find it.",
    translation:
      "Mereka yang tidak percaya pada sihir tidak akan pernah menemukannya.",
    source: "Roald Dahl",
  },
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

//Function to select random rgb color value
function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var randomColor = "rgb(" + red + "," + green + "," + blue + ")";
  return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object
function printQuote() {
  var quotes = getRandomQuote();
  var quoteContainer = document.getElementById("quote-box");
  var quoteString = `<p class="quote">${quotes.quote}</p>
  <p class="translation">${quotes.translation}<p/>
  <p class="source">${quotes.source}`;
  if (quotes.citation) {
    quoteString += `<span class="citation">${quotes.citation}</span>`;
  }
  if (quotes.year) {
    quoteString += `<span class="year">${quotes.year}</span></p>`;
  } else {
    quoteString += "</p>";
  }
  quoteContainer.innerHTML = quoteString;

  //assigns random color value to document background color
  document.body.style.backgroundColor = getRandomColor();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function () {
  printQuote();
}, 15000);

//Event listener on LoadQuote button to generate new quote
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
