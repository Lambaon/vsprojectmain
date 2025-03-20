document.querySelector('input[type="text"]').addEventListener('input', function (event) {
    console.log('Input value:', event.target.value);
});

document.querySelector('input[type="text"]').addEventListener('input', function (event) {
    document.getElementById('imiamagaza').textContent = event.target.value;
});
