//shows current Date & Time
function showDateTime(){
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedDateTime = date.toLocaleDateString('en-US', options);
    const displayedDateTime = `Today is ${formattedDateTime}`; 
    document.getElementById("current-date").innerHTML = displayedDateTime;
    console.log(displayedDateTime);
}

// Submit user info and display greeting
function submitInfo() {
    const name = document.getElementById('name').value;
    const feeling = document.getElementById('mood').value;
    const number = Math.abs(Math.round(parseFloat(document.getElementById('numberInput').value)));
    alertPolygonName(number);
    const greeting = `The Masterfull Eagle welcomes you, ${name}!\nI see you're feeling ${feeling}!`;
    document.getElementById('demo').innerHTML = greeting;
}

// Alert polygon name based on user's favorite number
function alertPolygonName(number) {
    const polygonNames = ['there is no polygon with 0 sides', 'henagon', 'digon', 'trigon', 'tetragon', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'enneagon', 'decagon'];
    const index = Math.min(Math.max(number, 0), polygonNames.length - 1);
    if (number === 0) {
        alert("There is no polygon with 0 sides!");
    } else {
        alert(`The polygon with ${number} side(s) is called a ${polygonNames[index]}.`);
    }
}

// Display random dragon fact
function eagleFacts() {
    const facts = [
        "Keen Eyesight: Eagles have incredibly sharp vision. Their eyes are specially designed to focus on both forward and peripheral vision simultaneously. This keen eyesight allows them to spot prey from great distances while soaring high in the sky.",
        "Impressive Speed: Bald eagles, in particular, can reach speeds of up to 40 miles per hour (64 kilometers per hour) while flying horizontally. When diving, they can reach speeds of around 100 miles per hour (160 kilometers per hour).",
        "Eagles hold significant symbolism in various cultures worldwide. For example, in ancient Greek mythology, the eagle was associated with Zeus, the king of the gods. In many modern cultures, including the United States, the eagle is a symbol of freedom, strength, and power."
     ];
    displayOutput(getRandomElement(facts));
}

// Display random mythical creature info
function dJHistory() {
    const creatures = [
        "Origin: DJing as we know it today originated in the late 1960s and early 1970s in New York City. It emerged from the hip-hop and disco scenes, where DJs began experimenting with manipulating vinyl records to create new sounds and rhythms.",
        "Technological Evolution: DJing has undergone significant technological advancements over the years. From the traditional vinyl turntables to the introduction of digital turntables, CDJs, and software-based DJing platforms, technology has continually shaped and revolutionized the art form.",
        "Global Influence: DJing has evolved into a global phenomenon, with DJs achieving celebrity status and playing a crucial role in various music genres, including electronic dance music (EDM), hip-hop, and pop. DJs often serve as tastemakers, introducing audiences to new music and shaping musical trends worldwide."
    ];
    displayOutput(getRandomElement(creatures));
}

// Display random crafting material info
function fastBird() {
    const materials = [
        "Speed Record: The peregrine falcon holds the title of the fastest animal on the planet when it's in a dive, called a stoop. During this high-speed hunting dive, it can reach speeds of over 240 miles per hour (386 kilometers per hour).",
        "Adaptations for Speed: The peregrine falcon's streamlined body, long, pointed wings, and stiff feathers contribute to its incredible speed and agility in flight. Its aerodynamic shape allows it to cut through the air with minimal resistance.",
        "Hunting Technique: Peregrine falcons use their speed to hunt birds in mid-air. They often stoop from great heights, tucking their wings close to their bodies to increase speed as they dive towards their prey. At the last moment, they extend their talons to strike with incredible precision."
    ];
    displayOutput(getRandomElement(materials));
}

// Display random featured artisan info
function feidFacts() {
    const artisans = [
        "Early Beginnings: Feid, whose full name is Salomón Villada Hoyos, was born on August 19, 1992, in Medellín, Colombia. He began his music career at a young age, experimenting with various genres before finding success in reggaeton and Latin pop.",
        "Collaborations: Feid has collaborated with numerous renowned artists in the Latin music industry, including J Balvin, Maluma, and Nicky Jam. These collaborations have helped him gain recognition both in Colombia and internationally.",
        "Hit Songs: Feid has released several hit songs that have topped the charts in Latin America and beyond. Some of his popular tracks include 'Que Raro,' 'Perfecta,' and 'Porfa' with Justin Quiles. His catchy melodies and infectious rhythms have garnered him a loyal fan base."
    ];
    displayOutput(getRandomElement(artisans));
}

// Get random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Display output message
function displayOutput(message) {
    document.getElementById('output').textContent = message;
}

// Call displayDateTime function when the page loads
document.addEventListener('DOMContentLoaded', showDateTime);

