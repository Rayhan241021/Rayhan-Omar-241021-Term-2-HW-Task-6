document.getElementById('toggle-feature').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});

function submitReview() {
    var username = document.getElementById('username').value;
    var rating = document.getElementById('rating').value;
    var review = document.getElementById('review').value;

    if (username && rating && review) {
        var reviewList = document.getElementById('reviews-list');
        var newReview = document.createElement('li');
        newReview.className = 'list-group-item';
        newReview.innerHTML = `<strong>${username}</strong> (Rating: ${rating}/10): ${review}`;
        reviewList.appendChild(newReview);

        document.getElementById('review-form').reset();
        alert('Thank you for your review, ' + username + '!');
    } else {
        alert('Please fill out all fields before submitting.');
    }
}