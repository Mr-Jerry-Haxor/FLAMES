document.getElementById('calculateBtn').addEventListener('click', function() {
    let name1 = document.getElementById('name1').value.trim();
    let name2 = document.getElementById('name2').value.trim();
    
    if (name1 === '' || name2 === '') {
        alert("Please enter both names, lovebirds!");
        return;
    }

    // Convert names to lowercase and remove spaces
    name1 = name1.toLowerCase().replace(/\s/g, '');
    name2 = name2.toLowerCase().replace(/\s/g, '');

    // Step 1: Calculate unique character counts
    let commonCount = 0;
    let name1Arr = name1.split('');
    let name2Arr = name2.split('');
    
    // Count common characters
    name1Arr.forEach(char => {
        let index = name2Arr.indexOf(char);
        if (index !== -1) {
            commonCount++;
            name2Arr.splice(index, 1);  // Remove the character to prevent duplicate counting
        }
    });

    // Step 2: Determine the FLAMES result
    let flames = ['F', 'L', 'A', 'M', 'E', 'S']; // FLAMES sequence
    let totalCount = name1.length + name2.length - 2 * commonCount;

    let currentIndex = 0;
    while (flames.length > 1) {
        // Step 3: Eliminate based on the total count
        currentIndex = (currentIndex + totalCount - 1) % flames.length;
        flames.splice(currentIndex, 1);
    }

    // Step 4: Display the final result
    let result = flames[0]; // Final FLAMES result
    let resultText = '';
    let bgAnimation = '';

    switch (result) {
        case 'F': 
            resultText = 'You two are just friends! (But maybe something more?)';
            bgAnimation = 'loveHearts';
            break;
        case 'L': 
            resultText = 'A match made in heaven! You are in love! 💕';
            bgAnimation = 'loveHearts';
            break;
        case 'A': 
            resultText = 'There is affection between you two! Sweet! 💖';
            bgAnimation = 'loveHearts';
            break;
        case 'M': 
            resultText = 'A bond for eternity! You two are getting married! 💍';
            bgAnimation = 'marriageStars';
            break;
        case 'E': 
            resultText = 'Oh no... Enemies! But love can turn to friendship... 💔';
            bgAnimation = 'flame';
            break;
        case 'S': 
            resultText = 'You are siblings, or close like family! 👨‍👩‍👧‍👦';
            bgAnimation = 'flame';
            break;
    }

    // Show result
    document.getElementById('flames-result').textContent = result;
    document.getElementById('relationship-message').textContent = resultText;
    
    // Apply background animation class to body
    let emojiBackground = document.createElement('div');
    emojiBackground.classList.add('emoji-background');
    emojiBackground.style.animationName = bgAnimation;
    document.body.appendChild(emojiBackground);

    // Show the game result section
    document.querySelector('.game-results').style.visibility = 'visible';
});
