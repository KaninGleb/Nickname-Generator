const prefixes = [
    "Cool", "Wild", "Sneaky", "Happy", "Lucky",
    "Crazy", "Swift", "Mysterious", "Brave", "Funny",
    "Lunar", "Solar", "Secret", "Rapid", "Magical",
    "Silly", "Fearsome", "Oceanic", "Heavenly", "Forest",
    "Epic", "Fierce", "Gentle", "Mighty", "Cunning",
    "Noble", "Bold", "Charming", "Witty", "Sly",
    "Vicious", "Jolly", "Rogue", "Daring", "Fearless",
    "Spunky", "Zany", "Ethereal", "Vibrant", "Dazzling",
    "Gallant", "Whimsical", "Crafty", "Radiant", "Funky",
    "Eager", "Nifty", "Chill", "Snazzy", "Crafted",
    "Epic", "Gleeful", "Dashing", "Dynamo", "Hyper",
    "Charming", "Gritty", "Savvy", "Really Cool", "Slick",
    "Snappy", "Bubbly", "Rambunctious", "Feisty", "Vivacious",
    "Joyful", "Energetic", "Intrepid", "Sassy", "Lively",
    "Plucky", "Zesty", "Radiant", "Lucid", "Noble",
    "Mellow", "Daring", "Vivid", "Cheerful", "Mischievous",
    "Noble", "Spirited", "Epic", "Zealous", "Serene",
    "Unstoppable"
];

const suffixes = [
    "Panda", "Ninja", "Tiger", "Wizard", "Dragon",
    "Master", "Queen", "Hero", "Robot", "Warrior",
    "Cat", "Bird", "Lion", "Rabbit", "Phoenix",
    "Turbo", "Mage", "Fighter", "Fox", "Kitten",
    "Superstar", "Giant", "Shadow", "Dreamer", "Genius",
    "Champion", "Knight", "Explorer", "Scribe", "Bard",
    "Sorcerer", "Ranger", "Jester", "Gladiator", "Savant",
    "Titan", "Sphinx", "Viking", "Sailor", "Samurai",
    "Brawler", "Rogue", "Seeker", "Adventurer", "Guardian",
    "Prophet", "Tamer", "Alchemist", "Scribe", "Shaman",
    "Phantom", "Druid", "Wanderer", "Seer", "Chieftain",
    "Bishop", "Glitch", "Mystic", "Dynamo", "Sage",
    "Rebel", "Banshee", "Wraith", "Witch", "Scribe",
    "Maestro", "Artisan", "Maverick", "Pioneer", "Vanguard",
    "Ranger", "Battler", "Virtuoso", "Sentry", "Paladin",
    "Legend", "Sorceress", "Enchantress", "Seer", "Noble",
    "Dynamo", "Overlord", "Champion", "Guardian", "Warden",
    "Dreamweaver", "Mastermind", "Star", "Heroine", "Knave"
];


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