// ══════════════════════════════════════════════
// YouTube IFrame Player API Wrapper
// Enables seekTo() within embedded videos
// ══════════════════════════════════════════════

const ytPlayers = {};

function initPlayers() {
  document.querySelectorAll('.video-embed iframe').forEach(iframe => {
    const ytId = iframe.id.replace('yt-', '');
    if (ytId && !ytPlayers[ytId]) {
      ytPlayers[ytId] = new YT.Player(iframe.id, {
        events: {
          onReady: () => console.log('YT Player ready: ' + ytId)
        }
      });
    }
  });
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
    // Fallback: open in new tab if player not ready
    window.open(`https://www.youtube.com/watch?v=${ytId}&t=${secs}s`, '_blank');
  }
}

// Called automatically by YouTube API when loaded
function onYouTubeIframeAPIReady() {
  initPlayers();
}
