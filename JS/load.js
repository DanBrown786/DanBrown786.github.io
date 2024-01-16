document.addEventListener('DOMContentLoaded', function () {
    const letters = document.querySelectorAll('.letter');
    const mainContent = document.getElementById('mainContent');

    // Animate the appearance of each letter
    anime.timeline({
      easing: 'easeInOutQuad',
      duration: 500,
    }).add({
      targets: '#letter1',
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 500,
    }).add({
      targets: '#letter2',
      opacity: [0, 1],
      translateY: [20, 0],
      offset: '-=500',
      delay: 500,
    }).add({
      targets: '#letter3',
      opacity: [0, 1],
      translateY: [20, 0],
      offset: '-=500',
      delay: 500,
    }).add({
      targets: '#letter4',
      opacity: [0, 1],
      translateY: [20, 0],
      offset: '-=500',
      delay: 500,
      complete: function() {
        // Fade out the loading screen and reveal the main content
        anime({
          targets: '#preloader',
          opacity: 0,
          duration: 500,
          easing: 'easeOutQuad',
          complete: function() {
            // Remove the loading screen to avoid overlaying the main content
            document.querySelector('#preloader').style.display = 'none';
          }
        });

        // Fade in the main content
        anime({
          target: '#mainContent',
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutQuad',
        });
      }
    });
  });