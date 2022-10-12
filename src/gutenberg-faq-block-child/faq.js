let faqQuestion = document.getElementsByClassName( 'faq-question' );
for ( let i = 0; i < faqQuestion.length; i++ ) {
	faqQuestion[i].addEventListener( 'click', function() {
		console.log( 'Yes' );
		this.classList.toggle( 'active' );
		let faqAnswer = this.nextElementSibling;
		if ( faqAnswer.style.display === 'block' ) {
			faqAnswer.style.display = 'none';
		} else {
			faqAnswer.style.display = 'block';
		}
	});
}
