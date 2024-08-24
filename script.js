// Check JS is Connected
//console.log('👍 JS Connected');

// import the library

// get all the card
document.querySelectorAll('.card').forEach( item => {
    
    // for each item i.e. card, do this
    item.addEventListener('click', event => {

      // toggle class on card
      item.classList.toggle('flipped');
      test();
    })
  
})

const catAudio = document.getElementById('catAudio');
        const   
 audio = document.getElementById('catAudio');

        playButton.addEventListener('click', () => {
            audio.play();   

        });