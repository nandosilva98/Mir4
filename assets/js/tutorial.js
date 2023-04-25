var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: 'e9LDb41zLHs'

      });
    }
    
    $(document).on('mouseover', '#player', function() {
      player.playVideo();
    });
    $(document).on('mouseout', '#player', function() {
      player.pauseVideo();
    });