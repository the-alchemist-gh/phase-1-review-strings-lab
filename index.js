// Write your code in this file!
const currentUser = "Grace Hopper";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `${welcomeMessage.toUpperCase()}`;

const shortGreeting = `${welcomeMessage.slice(0,7)}, ${currentUser.slice(0,1)}${welcomeMessage.slice(welcomeMessage.length-1)}`;

console.log(shortGreeting);