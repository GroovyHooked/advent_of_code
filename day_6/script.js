const data = document.querySelector('pre').innerText;

for (let i = 0; i <= data.length; i++) {
  const values = data.split('').splice(i, 4);
  if (values.length === new Set(values).size) {
    console.log(i + 4);
    break;
  }
}
