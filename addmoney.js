document.getElementById('btn-addMoney-1').addEventListener('click',function(event){
    event.preventDefault();
    donation('input-amount-1','flood-balance','Noakhali Flood');
});
document.getElementById('btn-addMoney-2').addEventListener('click',function(event){
    event.preventDefault();
    donation('input-amount-2','feni-balance','Feni Flood');
});
document.getElementById('btn-addMoney-3').addEventListener('click',function(event){
    event.preventDefault();
    donation('input-amount-3','quata-balance','Quata Support');
});
document.getElementById('btn-addMoney-4').addEventListener('click',function(event){
    event.preventDefault();
    donation('input-amount-4','refugee-balance','Rohingya Refugee');
});
document.getElementById('btn-addMoney-5').addEventListener('click',function(event){
    event.preventDefault();
    donation('input-amount-5','medical-balance','Medical Support');
});

function donation(inputId,balanceId,cause){
    const addMoney = getInputValueById(inputId);
    if(isNaN(addMoney)){
        alert('Input amount number only');
        document.getElementById(inputId).value = '';
        return;
    }
    if(addMoney <= 0){  
        alert('Input Positive Number');
        document.getElementById(inputId).value = '';
        return;
    }
    const balance = getTextValueById('main-balance');
    const specificBalance = getTextValueById(balanceId);
    if(addMoney > balance){
        alert('Insufficient Money');
    document.getElementById(inputId).value = '' ;
    return;
    }

    const newBalance =specificBalance + addMoney;
    document.getElementById(balanceId).innerText = newBalance;
    const reduceBalance = balance - addMoney;
    document.getElementById('main-balance').innerText = reduceBalance;
    document.getElementById(inputId).value = '';

    const modal = document.getElementById('my_modal_1');
    if(modal){
        modal.showModal();
    };
    

}

function transactionHistory(cause,amount,remainingBalance){
    const historyList = document.getElementById('history-list');
    const transactionCard = document.createElement('div');
    transactionCard.classList.add('border','border-gray-300','rounded-lg','p-4','bg-white','shadow-md','mb-4');
    
    transactionCard.innerHTML = `
                <div class="flex justify-between items-center text-center">
                <p class="text-[#111111]  font-medium text-lg">Cause: ${cause}</p>
                <p class="text-[#111111]  font-medium text-lg">Amount Donated: <span>${amount} BDT</span></p>
                <p class="text-[#111111]  font-medium text-lg">Remaining Balance: ${remainingBalance} BDT</p>
            </div>
            <p class="text-[#111111]  font-medium text-lg">Date: ${new Date().toLocaleString('en-US',{ timeZone: 'Asia/Dhaka'})}</p>`;
    historyList.appendChild(transactionCard);
}
function showSectionById(id){
    //hide all the section
    document.getElementById('index').classList.add('hidden');
    document.getElementById('transaction').classList.add('hidden');
    document.getElementById('blog').classList.add('hidden');
    //show the specific section
    document.getElementById(id).classList.remove('hidden');
}