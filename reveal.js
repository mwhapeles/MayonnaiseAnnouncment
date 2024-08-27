// Check JS is Connected
//console.log('👍 JS Connected');

// import the library

// get all the card
//document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
  //  item.addEventListener('click', event => {

      // toggle class on card
  //    item.classList.toggle('flipped');
  //    test();
  //  })
  
//})

const card = document.querySelector('.card');
const audio = document.querySelector('#catAudio');

card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    audio.play();
 
// test(); is connected to the confetti function    
    test();
});