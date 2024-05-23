const fetchData =() => {
    fetch('http://localhost:3000/socialMediaStats')
    .then(response => response.json())
    .then(data => {
        const fb = document.getElementById('fb-followers');
        const fbFollowers = data.facebook.followers;
        fb.innerText = fbFollowers;
        const twitter = document.getElementById('twitter-followers');
        const twitterFollowers = data.twitter.followers;
        twitter.innerText = twitterFollowers;
        const instagram = document.getElementById('instagram-followers');
        const instagramFollowers = data.instagram.followers;
        instagram.innerText = instagramFollowers;
        const youTube = document.getElementById('youTube-subscribers');
        const youTubeSubscribers = data.youTube.subscribers;
        youTube.innerText = youTubeSubscribers;
    })
}
    fetchData();

