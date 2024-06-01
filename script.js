document.addEventListener('DOMContentLoaded', () => {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fb-followers').innerText = data.facebook.followers;
            document.getElementById('twitter-followers').innerText = data.twitter.followers;
            document.getElementById('instagram-followers').innerText = data.instagram.followers;
            document.getElementById('youTube-subscribers').innerText = data.youTube.subscribers;
        })
        .catch(error => console.error('Error fetching data:', error));
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
fetchData();
