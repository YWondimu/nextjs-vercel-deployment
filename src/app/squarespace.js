document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    const pageKey = window.location.pathname;

    // Log the current page key for debugging
    console.log('Page Key: ', pageKey);

    // Restore scroll position on page load
    const scrollPosition = sessionStorage.getItem(pageKey + '_scrollPosition');
    if (scrollPosition) {
        console.log('Restoring scroll position:', scrollPosition);
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    // Save scroll position before navigating away
    window.addEventListener('beforeunload', function() {
        console.log('Saving scroll position:', window.scrollY);
        sessionStorage.setItem(pageKey + '_scrollPosition', window.scrollY);
    });
});
