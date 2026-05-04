// ══════════════════════════════════════════════
// YouTube IFrame Player API Wrapper
// Enables seekTo() within embedded videos
// ══════════════════════════════════════════════

const ytPlayers = {};

function initPlayers() {
  document.querySelectorAll('.video-embed iframe').forEach(iframe => {
    const ytId = iframe.id ? iframe.id.replace('yt-', '') : getYouTubeIdFromSrc(iframe.src);
    if (ytId && !ytPlayers[ytId]) {
      if (!iframe.id) iframe.id = 'yt-' + ytId;
      ytPlayers[ytId] = new YT.Player(iframe.id, {
        events: {
          onReady: () => console.log('YT Player ready: ' + ytId)
        }
      });
    }
  });
}

function getYouTubeIdFromSrc(src) {
  const match = String(src || '').match(/youtube\.com\/embed\/([^?&/]+)/);
  return match ? match[1] : '';
}

function jumpTo(ytId, time) {
  if (!ytId) return;
  const parts = time.split(':');
  const secs = parseInt(parts[0]) * 60 + parseInt(parts[1]);

  if (ytPlayers[ytId]) {
    ytPlayers[ytId].seekTo(secs, true);
    ytPlayers[ytId].playVideo();
    document.getElementById('yt-' + ytId).scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    const iframe = document.getElementById('yt-' + ytId) || document.querySelector(`iframe[src*="${ytId}"]`);
    if (!iframe) return;
    iframe.src = `https://www.youtube.com/embed/${ytId}?enablejsapi=1&start=${secs}&autoplay=1`;
    iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Called automatically by YouTube API when loaded
function onYouTubeIframeAPIReady() {
  initPlayers();
}
