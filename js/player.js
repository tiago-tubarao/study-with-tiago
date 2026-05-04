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

function parseTimestamp(time) {
  const parts = String(time || '0:00').split(':').map(part => parseInt(part, 10));
  if (parts.some(Number.isNaN)) return 0;
  if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
  return (parts[0] * 60) + (parts[1] || 0);
}

function markActiveTimestamp(ytId, time, secs, iframe) {
  document.querySelectorAll('.chapter-list button').forEach(button => {
    const handler = button.getAttribute('onclick') || '';
    const isActive = handler.includes(ytId) && handler.includes(time);
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  if (iframe) {
    iframe.dataset.currentStart = String(secs);
    iframe.dataset.currentTimestamp = String(time);
  }
}

function setIframeStart(ytId, secs) {
  const iframe = document.getElementById('yt-' + ytId) || document.querySelector(`iframe[src*="${ytId}"]`);
  if (!iframe) return null;
  iframe.src = `https://www.youtube.com/embed/${ytId}?enablejsapi=1&start=${secs}&autoplay=1`;
  return iframe;
}

function jumpTo(ytId, time) {
  if (!ytId) return;
  const secs = parseTimestamp(time);
  const iframe = document.getElementById('yt-' + ytId) || document.querySelector(`iframe[src*="${ytId}"]`);
  markActiveTimestamp(ytId, time, secs, iframe);

  if (ytPlayers[ytId]) {
    try {
      ytPlayers[ytId].seekTo(secs, true);
      ytPlayers[ytId].playVideo();
      if (iframe) iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    } catch (error) {
      // If the iframe API object exists but is not ready, keep the user in-page with the URL fallback.
    }
  }

  const fallbackIframe = setIframeStart(ytId, secs);
  markActiveTimestamp(ytId, time, secs, fallbackIframe);
  if (fallbackIframe) fallbackIframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Called automatically by YouTube API when loaded
function onYouTubeIframeAPIReady() {
  initPlayers();
}
