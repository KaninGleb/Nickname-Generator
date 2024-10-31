const prefixes = ["Cool", "Wild", "Sneaky", "Happy", "Lucky", "Crazy", "Swift"];
const suffixes = ["Panda", "Ninja", "Tiger", "Wizard", "Dragon", "Master", "Queen"];

function generateNickname() {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${prefix} ${suffix}`;
}

console.log(generateNickname());
