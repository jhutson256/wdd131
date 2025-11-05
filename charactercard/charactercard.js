const levelSpan = document.querySelector('#level');
const healthSpan = document.querySelector('#health');
const attack = document.querySelector('#attack');
const levelUp = document.querySelector('#level-up');

const snortleblat = {
    level: 5,
    health: 100,
    decreaseHealth: function() {
        if (this.health > 0) {
            this.health -= 20;
            healthSpan.textContent = this.health;
        }

        else if (this.health == 0) {
            alert('Character Died');
        }
    },
    increaseLevel: function() {
        this.level += 1;
        levelSpan.textContent = this.level;
    }
};

attack.addEventListener('click', function() {
    snortleblat.decreaseHealth();
});

levelUp.addEventListener('click', function() {
    snortleblat.increaseLevel();
});

levelSpan.textContent = snortleblat.level;
healthSpan.textContent = snortleblat.health;