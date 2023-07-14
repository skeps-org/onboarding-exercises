function simulateAsyncAPICall() {
 return new Promise((resolve, reject) => {
   // Simulate a random delay between 1 and 3 seconds
   const delay = Math.floor(Math.random() * 3000) + 1000;

   setTimeout(() => {
     // Generate a random number between 1 and 100
     const randomNumber = Math.floor(Math.random() * 100) + 1;

     if (randomNumber <= 20) {
       // 20% chance of rejecting with an error message
       reject("API call failed");
     } else {
       // 80% chance of resolving with a success message
       resolve("API call successful");
     }
   }, delay);
 });
}