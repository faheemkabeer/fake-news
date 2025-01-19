function openLink() {
  const urlInput = document.getElementById('urlInput');
  const url = urlInput.value.trim();

  // Validate if the URL starts with "http://" or "https://"
  if (url && (url.startsWith('http://') || url.startsWith('https://'))) {
    window.open(url, '_blank');
  } else {
    alert('Please enter a valid URL starting with http:// or https://');
  }
}
