const faqItems = document.querySelectorAll('.faq-item');
 faqItems.forEach (item => {
    const question =item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.arrow');

    question.addEventListener('click', () =>{
        answer.classList.toggle('hidden');
        arrow.classList.toggle('rotate-180');
    });
 })

 