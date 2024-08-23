// Check JS is Connected
//console.log('👍 JS Connected');

// import the library
let confetti = new Confetti("confetti");
// get all the card
document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {
      confetti = new Confetti("confetti"); 

      // toggle class on card
      item.classList.toggle('flipped');
    })
  
})


