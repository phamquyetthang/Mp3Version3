import TrackPlayer from 'react-native-track-player';

module.exports = async function() {

  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  })

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  })

  TrackPlayer.addEventListener('remote-next', async () => {
    TrackPlayer.skipToNext();
  })

  TrackPlayer.addEventListener('remote-duck', async () => {
    TrackPlayer.pause();
  })

  TrackPlayer.addEventListener('remote-previous', async () => {
    TrackPlayer.skipToPrevious();
  })
};