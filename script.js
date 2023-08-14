const labels = document.querySelectorAll('.form-control label');

// const label1 = labels[0];
// label1.innerHTML = label1.innerText.split('').map((letter, idx) => `<span>${letter}</span>`).join('');
// console.log(label1.innerHTML);

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('');
});
