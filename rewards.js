document.addEventListener('DOMContentLoaded', () => {
    const coinDisplay = document.getElementById('coin-display');
    const redeemBtns = document.querySelectorAll('.redeem-btn');

    let coins = localStorage.getItem('coins') || 0;
    coinDisplay.textContent = coins;

    redeemBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cost = parseInt(btn.parentElement.getAttribute('data-cost'));
            if (coins >= cost) {
                coins -= cost;
                localStorage.setItem('coins', coins);
                coinDisplay.textContent = coins;
                alert('Reward redeemed!');
            } else {
                alert('Not enough coins!');
            }
        });
    });
});