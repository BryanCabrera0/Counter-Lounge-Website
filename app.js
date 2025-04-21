const dadjokes = [
    "I told my wife she was drawing her eyebrows too high. She looked surprised.", "Hello, is this the police? I found a wallet. Can you send someone to pick it up? No? Okay, I’ll just leave it here. It’s not like I’m going to steal it or anything.",
    "I used to play piano by ear, but now I use my hands.", "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.", "Why don’t skeletons fight each other? They don’t have the guts.", "I would tell you a joke about an elevator, but it’s an uplifting experience.", "I used to be a baker, but I couldn’t make enough dough.", "I’m reading a book on anti-gravity. It’s impossible to put down!", "Why did the scarecrow win an award? Because he was outstanding in his field!", "I told my wife she should embrace her mistakes. She gave me a hug."
];
const randomDadjoke = dadjokes[Math.floor(Math.random() * dadjokes.length)];

if ("countLabel" == 25){
    document.appendChild(randomDadjoke);
}

