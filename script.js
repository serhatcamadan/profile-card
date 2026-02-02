const followButton = document.querySelector('.follow-button');
const followersCount = document.querySelector('.followers-count');
const unfollowButton = document.querySelector('.unfollow-button');
const isFollowingText = document.querySelector('.is-following');
let isFollowing = false;

function getCount() {
    return parseInt(followersCount.textContent, 10) || 0;
}

function setCount(n) {
    followersCount.textContent = n;
}

followButton.addEventListener('click', () => {
    if (isFollowing === false) {
        setCount(getCount() + 1);
        isFollowing = true;
        isFollowingText.textContent = 'You are following this user';
        isFollowingText.style.backgroundColor= '#6CA651'
    } else {
        alert('You are already following this user');
    }
});

unfollowButton.addEventListener('click', () => {
    if (isFollowing === true) {
        setCount(getCount() - 1);
        isFollowing = false;
        isFollowingText.textContent = 'You are not following this user';
        isFollowingText.style.backgroundColor= '#C3110C'; 
    } else {
        alert('You are already unfollowing this user');
    }
});

