(() => {
    const $kmInput = document.querySelector('#km');
    const $timeInput = document.querySelector('#time');
    const $btnCalculate = document.querySelector('.btn-calculate');
    const $result = document.querySelector('.result');

    $btnCalculate.addEventListener('click', (event) => {
        event.preventDefault();

        const price = ((2 + parseFloat($kmInput.value) * 1.4) + parseFloat($timeInput.value) * 0.26);

        $result.innerHTML = "R$ " + price.toFixed(2);

    });
})();