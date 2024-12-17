document.addEventListener('DOMContentLoaded', () => {
    const playersTable = document.getElementById('ranking-table').getElementsByTagName('tbody')[0];
    const substitutesList = document.getElementById('ranking-list');
    const addPlayerForm = document.getElementById('player-form');
    const playerNameInput = document.getElementById('player-name');
    const playerNameteam = document.getElementById('player-team');
    const playerNamepoint = document.getElementById('player-points');
    
    const playerPhotoInput = document.getElementById('player-img');
    
    let players = [];
    let substitutes = [];

    function updateTable() {
        playersTable.innerHTML = '';
        players.forEach((player, index) => {
            const row = playersTable.insertRow();
            row.innerHTML = `
                <td>${player.name}</td>
                <td>${player.team}</td>
                <td>${player.points}</td>
            
                <td><img src="${player.img}" alt="${player.name}" style="width: 50px; height: 50px; border-radius: 50%;"></td>
                <td><button onclick="removePlayer(${index})">Supprimer</button></td>
            `;
        });
    }

    function updateSubstitutes() {
        substitutesList.innerHTML = '';
        substitutes.forEach(substitute => {
            const li = document.createElement('li');
            li.textContent = substitute.name;
            substitutesList.appendChild(li);
        });
    }

    window.removePlayer = function(index) {
        const removedPlayer = players.splice(index, 1)[0];
        substitutes.push(removedPlayer);
        updateTable();
        updateSubstitutes();
    };

    addPlayerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const player = {
            name: playerNameInput.value,
            team: playerNameteam.value,
            points: playerNamepoint.value,
            img: playerPhotoInput.value
        };
        players.push(player);
        playerNameInput.value = '';
        playerNameteam.value = '';
        playerPhotoInput.value = '';
        playerPhotoInput.value = '';
        updateTable();
    });

    // Carrousel automatique
}); 



let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Retour au dernier élément
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Retour au premier élément
    }

    updateCarousel();
}

function updateCarousel() {
    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}%)`;
}

// Carrousel automatique
setInterval(() => {
    moveSlide(1); // Défilement automatique
}, 3000);
