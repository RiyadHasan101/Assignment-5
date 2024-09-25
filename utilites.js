function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

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

document.getElementById('donation-btn').addEventListener('click',function(){
    showSectionById('index');
})
document.getElementById('history-btn').addEventListener('click',function(){
    showSectionById('transaction');
})
document.getElementById('blog-btn').addEventListener('click',function(){
    showSectionById('blog');
})


document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn =>{
            btn.classList.remove('bg-[#D3D3D3]');
            btn.classList.add('bg-[#B4F461]');
            });
            this.classList.remove('bg-[#B4F461]');
            this.classList.add('bg-[#D3D3D3]');
        });
    });
});

