const prefixes = ["Cool", "Wild", "Sneaky", "Happy", "Lucky", "Crazy", "Swift"];
const suffixes = ["Panda", "Ninja", "Tiger", "Wizard", "Dragon", "Master", "Queen"];


// Function to get a random format for the nickname separator
function getRandomFormat() {
    let formatType = Math.floor(Math.random() * 4);
    let randomDigits = Math.floor(Math.random() * 100);
    const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];
    let randomSymbol = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    switch (formatType) {
        case 0:
            return ' ';
        case 1:
            return '_';
        case 2:
            return randomDigits + randomSymbol;
        default:
            return '';
    }
}


// Function to generate a random nickname using a prefix and a suffix
function generateNickname() {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const useRandomFormat = document.getElementById('toggle-format').checked;

    const separator = useRandomFormat ? getRandomFormat() : ' ';
    return prefix + separator + suffix;
}


// Function to set up event listeners for the button click
function setupEventListeners() {
    const button = document.getElementById('generate-btn');
    const nicknameDisplay = document.getElementById('nickname');

    button.addEventListener('click', () => {
        const nickname = generateNickname();
        nicknameDisplay.textContent = nickname;
    });
}

// Initialize event listeners
setupEventListeners();