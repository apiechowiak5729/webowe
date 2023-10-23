import fs from 'fs';


function RandomNumbers() {
    const numbers = [];
    const timestamp = Date.now();
    const filename = `random-${timestamp}.txt`;
  
  for (let i = 0; i < 20; i++) {
    const randomNum = Math.floor(Math.random() * (2158 - (-420)) + (-420));
    numbers.push(randomNum);
  }
  
  return { numbers, filename };
}

function writeToFile(numbers, filename) {
  const data = numbers.join('\n');
  fs.writeFileSync(filename, data);
  console.log(`20 losowo wygenerowanych liczb zapisano w pliku: ${filename}`);
}

const { numbers, filename } = RandomNumbers();
writeToFile(numbers, filename);

