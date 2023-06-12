export function generateRandomNumber(): string {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    return randomNumber.toString() + '.png'; 
  }
  
