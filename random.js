const optionsList = ['outfit - complex', 'outfit - simple', 'face features', 'hair', 'body', 'props', 'background'];

const headwearList = ['beanie', 'flower crown', 'cap', 'sun hat', 'fedora', 'bucket hat', 'headband', 'captains cap']; // 50%
const topList = ['shirt', 't-shirt', 'tube top', 'tank top', 'camisole top', 'crop top', 'bikini top', 'undearwear top ', 'sweatshirt', 'off-shoulder top', 'hoodie', 'jumper', 'sweater', 'blouse', 'tunic', 'dress', 'jumpsuit', 'romper', 'bodysuit', 'swimsuit']; // 95%
const topLength = ['long sleeve', 'short sleeve', 'sleeveless', 'cropped'];
const outwearList = ['denim jacket', 'biker jacket', 'raincoat', 'trench coat', 'puffer jacket', 'blazer', 'cardigan', 'kimono', 'parka', 'coat', 'windbreaker', 'jacket', 'poncho']; // 50%
const bottomList = ['jeans', 'shorts', 'dress pants', 'skirt', 'cargo pants', 'leggins', 'chinos', 'paperbag waist pants', 'sweatpants', 'flared pants', 'bikini bottoms', 'undearwear', 'overalls']; // 100%
const shoesList = ['heels', 'flats', 'sandals', 'espadrilles', 'sneakers', 'boots', 'loafers', 'slip-on shoes', 'flip flops', 'slippers', 'platform shoes', 'knee high boots', 'wedges', 'dress shoes', 'chucks']; // 90%
const accesoriesList = ['bag', 'belt', 'sunglasses', 'glasses', 'gloves', 'scarf', 'hair clips', 'necklace', 'watch', 'rings', 'bracelets', 'ear cuffs', 'hoop earrings', 'stud earrings', 'headphones'];
 
const patternList = ['plain', 'striped', 'checkered', 'floral', 'tie-dye', 'graphic pattern', 'dotted', 'animal print']; //80 %
const textureList = ['satin', 'velvet', 'leather', 'denim', 'sequins', 'lace', 'fur', 'cotton', 'pleated', 'corduroy', 'woven'];
const colorList = ['light', 'dark', 'vivid', 'monochromatic', 'pastel', 'double colored'];

const animalList = ['cat', 'dog', 'ferret', 'weasel', 'toad', 'owl', 'rat', 'hamster', 'mouse', 'fish', 'turtle', 'rabbit', 'hedgehog', 'guinea pig', 'chinchilla', 'pig', 'red fox', 'squirrel', 'parrot', 'goat', 'chicken', 'duck', 'goose', 'canary', 'raven', 'goldfish', 'koi', 'bees', 'snake', 'otter', 'lion', 'tortoise', 'turtle', 'bear', 'eagle', 'fenec', 'cheetah', 'tarantula', 'hyena', 'praying mantis', 'gecko', 'wolf', 'racoon', 'monkey', 'salamander', 'axolotl', 'binturong', 'red panda', 'panda']

let randomLookContainer = new Array();

randomLookContainer.push(headwearList[Math.floor(Math.random() * headwearList.length)]);
randomLookContainer.push(topList[Math.floor(Math.random() * topList.length)]);
randomLookContainer.push(topLength[Math.floor(Math.random() * topLength.length)]);
randomLookContainer.push(outwearList[Math.floor(Math.random() * outwearList.length)]);
randomLookContainer.push(bottomList[Math.floor(Math.random() * bottomList.length)]);
randomLookContainer.push(shoesList[Math.floor(Math.random() * shoesList.length)]);
randomLookContainer.push(accesoriesList[Math.floor(Math.random() * accesoriesList.length)]);

randomLookContainer.push("with a <b>" + patternList[Math.floor(Math.random() * patternList.length)] + "</b> pattern");
randomLookContainer.push("incorporate a <b>" + textureList[Math.floor(Math.random() * textureList.length)] + "</b> texture");
randomLookContainer.push("use <b>" + colorList[Math.floor(Math.random() * colorList.length)] + "</b> colors :)");

function randomLook () {
    document.getElementById('randomButton').disabled = 'true';
    document.getElementById('outcome').innerHTML = randomLookContainer.join("<br>");
}

function refreshPage () {
    window.location.reload();
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}