let essays = [
  'An aim is a goal or objective to achieve in life. In order to succeed in life, one must have a goal. My aim in life is to be a teacher. Teaching is a noble and responsible profession. I have come to know that the ever-increasing misery and distress, are due to the ignorance and illiteracy of the people of our country. So I have decided to spread education among the masses as much as possible within my humble power.',
  'The Dowry system is evil in society. It has reduced the sacred affair of marriage to a business deal. Brides are treated as a marketable commodity. The parents of the brides are often put under inhuman pressure for a handsome dowry. Sometimes they become paupers to get their daughters married. In many cases, young brides are ruthlessly tortured or pushed to suicide.',
  'Oceans and lakes have much in common, but they are also quite different. Both are bodies of water, but oceans are very large bodies of salt water, while lakes are much smaller bodies of fresh water. Lakes are usually surrounded by land, while oceans are what surround continents. Both have plants and animals living in them. The ocean is home to the largest animals on the planet, whereas lakes support much smaller forms of life. When it is time for a vacation, both will make a great place to visit and enjoy.',
  'It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon. The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk. Upon Neil’s first step onto the moon’s surface, he declared, “That’s one small step for man, one giant leap for mankind.” It sure was!',
  'test',
];
let randomNumber = Math.floor(Math.random() * essays.length);
let textarea = document.querySelector('#text');
let startBtn = document.querySelector('#start');
let h2 = document.querySelector('h2');
let para = document.querySelector('p');
para.innerHTML = essays[randomNumber];
let paraText = para.innerText;
let paraArray = paraText.split(' ');
let h4 = document.querySelector('h4');
h4.innerHTML = `Words: ${paraArray.length}`;
let e = 0;
let incorrect = 0;
let seconds = 0;
let timer;
let color = 'white';
textarea.style.display = 'none';
para.innerHTML = '';
//adding spans to every word of essay
for (let i = 0; i < paraArray.length; i++) {
  para.innerHTML += `<span style='color: ${color}'>${paraArray[i]} </span>`;
}
let spans = document.querySelectorAll('span');

startBtn.addEventListener('click', () => {
  h4.style.alignSelf = 'flex-start';
  h2.style.display = 'none';
  para.style.display = 'block';
  startBtn.style.display = 'none';
  textarea.style.display = 'flex';
  textarea.focus();
  timer = setInterval(() => {
    seconds++;
  }, 1000);
});
//when a key is pressed
textarea.addEventListener('keydown', (key) => {
  if (key.key == ' ') {
    let text = textarea.value;
    let myText = text.split(' ').join('');
    console.log(myText);

    if (myText == paraArray[e]) {
      console.log(`this is e: ${e}`);
      spans[e].style.color = 'green';
      e++;
      console.log('yes');
    } else {
      console.log('no');
      spans[e].style.color = 'red';
      incorrect++;

      e++;
    }
    textarea.value = '';
  }
  if (e == paraArray.length) {
    clearInterval(timer);
    startBtn.style.display = 'block';
    textarea.style.display = 'none';
    h2.style.display = 'flex';
    h2.innerHTML = `Tpying speed: ${(
      paraArray.length / (seconds / 60) -
      incorrect
    ).toFixed(2)} Wpm`;
    para.style.display = 'none';
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.color = 'white';
    }
    h4.style.alignSelf = 'center';
    h4.innerHTML = `Correct words: ${paraArray.length - incorrect}/${
      paraArray.length
    }`;
    e = 0;
    incorrect = 0;
    seconds = 0;
  }
});
console.log('😎');
