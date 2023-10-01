// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mon", "Dad", "The Dog", "The elephant", "The Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "cow", "fish", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

// Function to handle the noun1 button click
function noun1_on_click() {
    document.getElementById("chosenNoun1").textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

// Function to handle the verb button click
function verb_on_click() {
    document.getElementById("chosenVerb").textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

// Function to handle the adjective button click
function adjective_on_click() {
    document.getElementById("chosenAdjective").textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

// Function to handle the noun2 button click
function noun2_on_click() {
    document.getElementById("chosenNoun2").textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

// Function to handle the setting button click
function setting_on_click() {
    document.getElementById("chosenSetting").textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Function to handle the playback button click
function playback_on_click() {
    const story = `${document.getElementById("chosenNoun1").textContent} ${document.getElementById("chosenVerb").textContent} ${document.getElementById("chosenAdjective").textContent} ${document.getElementById("chosenNoun2").textContent} ${document.getElementById("chosenSetting").textContent}`;
    document.getElementById("story").textContent = story;
}

// Function to handle the random button click
function random_on_click() {
    const randomStory = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(settings)}`;
    document.getElementById("story").textContent = randomStory;
}

// Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Event Listeners
document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);

// Adding your student ID/name dynamically
const studentId = "200542632"; // Replace with your actual student ID
document.getElementById("studentId").textContent = `Student ID: ${studentId}`;
