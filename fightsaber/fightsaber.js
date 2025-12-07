const lightsabers = [
    {
        heading: "Blue Lightsabers",
        imgSrc: "images/lightsaber-blue.jpg",
        imgAlt: "a blue lightsaber",
        description: "The lightsaber of the Jedi Guardians. This lightsaber color represents the wielder's strong connection to lightsaber combat. The blue lightsaber also represents bravery, justice, and protection. Jedi Guardians are known for being front line warriors due to their strong connection to lightsaber combat and their overall bravery in combat."
    },
    {
        heading: "Green Lightsabers",
        imgSrc: "images/lightsaber-green.jpg",
        imgAlt: "a green lightsaber",
        description: "The lightsaber of the Jedi Consulars. This lightsaber color represents the wielder's strong connection to the force. The green lightsaber also represents spirituality, harmony, and wisdom. Jedi Consulars are known for being more diplomatic and always seeking peaceful solutions and negotiating with their enemies."
    },
    {
        heading: "Purple Lightsabers",
        imgSrc: "images/lightsaber-purple.jpg",
        imgAlt: "a purple lightsaber",
        description: "The purple lightsaber is incredibly unique in it's symbolism, as it represents a balance between the light side and the dark side of the force. The balance of this color is best illustrated by the color being made up of the colors red and blue the most prominent lightsaber colors of the light side and the dark side of the force. This lightsaber color also represents the wielder's wisdom, strength, and complex emotional state. This lightsaber is most commonly used by the Jedi, however, some Sith, such as the legendary Darth Revan, have been known to use the color as well."
    },
    {
        heading: "Yellow Lightsabers",
        imgSrc: "images/lightsaber-yellow.jpg",
        imgAlt: "a yellow lightsaber",
        description: "The lightsaber of Jedi Sentinels and Jedi Temple Guards. This lightsaber color represents balance, vigilance, and wisdom, and this is also reflected in it's wielders, who are known for their balance in both lightsaber combat and connection to the force. The yellow lightsaber also symbolizes the Jedi Temple Guard's duty to maintain order and neutrality within the Jedi Temple."
    },
    {
        heading: "Grey Lightsabers",
        imgSrc: "images/lightsaber-grey.jpg",
        imgAlt: "a grey lightsaber",
        description: "The grey lightsaber is an incredibly unique lightsaber color, representing the wielder's balance of the light side and the dark side of the force. This lightsaber color is used by Grey Jedi, who also balance Jedi and Sith traditions. Grey lightsabers are not a natural lightsaber color and are most commonly gained by healing red kyber crystals and cleansing them of the dark side, leaving the crystal grey."
    },
    {
        heading: "Red Lightsabers",
        imgSrc: "images/lightsaber-red.jpg",
        imgAlt: "a red lightsaber",
        description: "The lightsaber of the Sith. This lightsaber represents power, aggression, hatred, and the ruthless will of the Sith. This color is not a natural lightsaber color and this color is only gained by a Sith \"bleeding\" a kyber crystal by infusing it with all of their hatred, pain, and suffering turning the lightsaber red. This prcoess of bleeding the kyber crystal is an incredibly intense ritual for the Sith performing the ritual, and imbues the crystal with dark side energy."
    },
    {
        heading: "Standard Lightsaber Hilts",
        imgSrc: "images/standard.png",
        imgAlt: "standard lightsaber hilt",
        description: "These lightsaber hilts are the standard type of lightsaber hilt. While each lightsaber hilt is constructed uniquely by the Jedi or Sith, these are the universal standard for lightsaber hlits."
    },
    {
        heading: "Curved Lightsaber Hilts",
        imgSrc: "images/curved.png",
        imgAlt: "curved lightsaber hilt",
        description: "The curved lightsaber hilts are unique compared to standard lightsaber hilts due to the fact that the hilt is slightly curved at the bottom of the hilt to benefit the wielder in lightsaber dueling. The curved hilt provides more precision in dueling and makes it easier to perform thrust attacks with the lightsaber. The most common wielders of the curved hilt lightsaber use form 2, Makashi, due to the form's emphasis in lightsaber dueling and precise lightsaber strikes."
    },
    {
        heading: "Crossguard Lightsaber Hilts",
        imgSrc: "images/crossguard.jpg",
        imgAlt: "lightsaber hilt with a crossguard",
        description: "The crossguard lightsaber is an incredibly unique lightsaber hilt. The only known lightsaber with this hilt is Kylo Ren's lightsaber. This hilt was created because it's kyber crystal is cracked and spews more plasmic energy than non-cracked kyber crystals. Standard hilts couldn't contain the crystal because the hilts were always destroyed by the raw energy of the crystal. The crossguard hilt was then created to vent the excess plasmic energy spewed from the crystal which keeps the hilt intact."
    },
    {
        heading: "Staff Lightsaber Hilts",
        imgSrc: "images/staff.png",
        imgAlt: "lightsaber staff",
        description: "The lightsaber staff is a uniquely long lightsaber hilt. The reason for the hilt's excess length is because the hilt actually contains 2 kyber crystals meaning that lightsaber staffs are double bladed, with a lightsaber blade coming out of both ends of the staff. This allows for more versatility because the staffs often act as two seperate lightsabers combined into one. This means that if the staff is cut in half, the lightsaber can still work. Additionally, some staffs allow the wielder to seperate the staff into two seperate lightsabers, and allow the wielder to control whether to ignite either one or both blades of the staff."
    },
    {
        heading: "Kyber Crystals",
        imgSrc: "images/kyber-crystals.png",
        imgAlt: "multiple kyber crystals of different colors",
        description: "Kyber crystals act as the battery or the power source of the lightsaber. Without the kyber crystal, the lightsaber would simply be a useless hilt. Kyber crystals are also what give the lightsaber itscolor with the exception of red and grey lightsabers. There are different kinds of kyber crystals in the Star Wars universe. The most common way to get a kyber crystal is to find a naturally grown kyber crystal. Very few planets have naturally growing kyber crystals, so another kyber crystal that Jedi and Sith use are synthetic kyber crystals. These synthetic kyber crystals are man made and are essentially the same as natural kyber crystals. Kyber crystals also form strong bonds with their wielders through the force, which is why a lightsaber and its kyber crystal are such personal items to its wielder."
    }
];

const backgroundImages = [
    "images/city.jpg",
    "images/forest.jpeg",
    "images/lava.jpg",
    "images/sith-lair.jpg"
];

let selectBackground = document.querySelector("#background-select");
let background = document.querySelector("body");
let randomBackground = Math.floor(Math.random() * backgroundImages.length);
const backgroundImg = backgroundImages[randomBackground];

selectBackground.setAttribute("aria-expanded", "false");
selectBackground.addEventListener("change", changeBackground);
document.body.style.backgroundImage = `url("${backgroundImg}")`;

function changeBackground() {
    let current = selectBackground.value;

    if (current === "city") {
        document.body.style.backgroundImage = `url("${backgroundImages[0]}")`;
    } else if (current === "forest") {
        document.body.style.backgroundImage = `url("${backgroundImages[1]}")`;
    } else if (current === "lava") {
        document.body.style.backgroundImage = `url("${backgroundImages[2]}")`;
    } else if (current === "sith-lair") {
        document.body.style.backgroundImage = `url("${backgroundImages[3]}")`;
    } else {
        document.body.style.backgroundImage = `url("${backgroundImg}")`;
    }

    selectBackground.setAttribute("aria-expanded", "true");
}

const jediHealth = document.querySelector("#jedi-health");
const sithHealth = document.querySelector("#sith-health");

let jedi = {
    health: 100,
    increaseHealth: function() {
        switch (this.health) {
            case 50:
                this.health += 50;
                jediHealth.textContent = this.health;
                break;
            case 60:
                this.health += 40;
                jediHealth.textContent = this.health;
                break;
            case 70:
                this.health += 30;
                jediHealth.textContent = this.health;
                break;
            case 80:
                this.health += 20;
                jediHealth.textContent = this.health;
                break;
            case 90:
                this.health += 10;
                jediHealth.textContent = this.health;
                break;
            case 100:
                alert("You are already at full health");
                break;
            case 0:
                alert("You have already died");
                break;
            default:
                this.health += 50;
                jediHealth.textContent = this.health;
                break;
        }
    },
    jediAttack: function() {
        if (this.health > 0 && sith.health > 0) {
            sith.health -= 10;
            this.health -= 20;
            jediHealth.textContent = this.health;
            sithHealth.textContent = sith.health;
            alert("Your opponent counter-attacked and dealt 20 damage");
        } else if (sith.health === 0) {
            alert("Your opponent has been defeated");
        } else if (this.health === 0) {
            alert("You have been defeated");
        }
    }
};

let sith = {
    health: 100,
    sithAttack: function() {
        if (this.health > 0 && jedi.health > 0) {
            jedi.health -= 20;
            this.health -= 10;
            jediHealth.textContent = jedi.health;
            sithHealth.textContent = this.health;
            alert("Your opponent counter-attacked and dealt 10 damage");
        } else if (jedi.health === 0) {
            alert("Your opponent has been defeated");
        } else if (this.health === 0) {
            alert("You have been defeated");
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    jediHealth.textContent = jedi.health;
    sithHealth.textContent = sith.health;

    document.querySelector("#force-heal").addEventListener("click", function() {
        jedi.increaseHealth();
    });

    document.querySelector("#force-push").addEventListener("click", function() {
        jedi.jediAttack();
    });

    document.querySelector("#jedi-attack").addEventListener("click", function() {
        jedi.jediAttack();
    });

    document.querySelector("#force-lightning").addEventListener("click", function() {
        sith.sithAttack();
    });

    document.querySelector("#force-choke").addEventListener("click", function() {
        sith.sithAttack();
    });

    document.querySelector("#sith-attack").addEventListener("click", function() {
        sith.sithAttack();
    });
});

let randomNum = Math.floor(Math.random() * lightsabers.length);
let loreContainer = document.querySelector("#lore-container");
let button = document.querySelector("#search-button");

button.addEventListener("click", search);

function search() {
    let loreQuery = document.querySelector("#search-box").value;

    let filteredLore = lightsabers.filter(function(lore) {
        return (
            lore.heading.toLowerCase().includes(loreQuery.toLowerCase()) ||
            lore.description.toLowerCase().includes(loreQuery.toLowerCase())
        );
    });

    loreContainer.innerHTML = "";

    filteredLore.forEach(function(lore) {
        renderLore(lore);
    });
}

function loreTemplate(lore) {
    return `
        <div class="lore-card">
            <img class="lore-img" src=${lore.imgSrc} alt=${lore.imgAlt}>
            <div id="description">
                <h2>${lore.heading}</h2>
                <p>${lore.description}</p>
            </div>
        </div>`
}

function renderLore(lore) {
    let html = loreTemplate(lore);
    loreContainer.innerHTML += html
}

function init() {
    renderLore(lightsabers[randomNum]);
}

init();