document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const article = this.closest('article');
            const moreText = article.querySelector('.more-text');
            if (moreText) {
                moreText.style.display = 'block'; // Show more text
            }
            article.querySelector('.read-more').style.display = 'none'; // Hide "read more" button
            article.querySelector('.see-less').style.display = 'block'; // Show "see less" button
        });
    });

    document.querySelectorAll('.see-less').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const article = this.closest('article');
            const moreText = article.querySelector('.more-text');
            if (moreText) {
                moreText.style.display = 'none'; // Hide extra text
            }
            article.querySelector('.read-more').style.display = 'block'; // Show "read more" button
            article.querySelector('.see-less').style.display = 'none'; // Hide "see less" button
        });
    });
});
