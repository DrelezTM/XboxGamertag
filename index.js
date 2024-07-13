const axios = require('axios');
const jsdom = require('jsdom');

async function xboxGamertag(gamertag) {
    try {
        const response = await axios({
            url: `https://xboxgamertag.com/search/${gamertag}`,
            method: 'get'
        });

        const { window } = new jsdom.JSDOM(response.data);

        const userAvatar = window.document.querySelector('img[class="rounded img-thumbnail"]');
        const userDetails = Array.from(window.document.querySelectorAll('div[class="col-auto profile-detail-item"]'));

        const gameName = Array.from(window.document.querySelectorAll('div[class="game-card-desc"] > h3'));
        const lastPlayed = Array.from(window.document.querySelectorAll('div[class="game-card-desc"] > p[class="text-sm"]'));
        const gamePlatform = Array.from(window.document.querySelectorAll('div[class="game-card-desc"] > p[class="text-xs"]'));
        const gameAchievements = Array.from(window.document.querySelectorAll('div[class="game-card-desc"] div[class="col-9 font-weight-bold"]'));
        const gameProgress = Array.from(window.document.querySelectorAll('div[class="progress"] div[class="progress-bar"]'));

        const result = {
            gamertag: gamertag,
            avatar: `https:${userAvatar.src}`,
            detail: {},
            history: []
        };

        userDetails.forEach(detail => {
            const content = detail.textContent.trim().split('\n').map(line => line.trim());
            for (let i = 0; i < content.length; i++) {
                if (content[i] === 'Gamerscore') {
                    result.detail.gamerscore = content[i + 1];
                } else if (content[i] === 'Games Played') {
                    result.detail.gamesplayed = content[i + 1];
                }
            }
        });

        for (let i = 0; i < gameName.length; i++) {
            result.history.push({
                gamename: gameName[i].textContent.trim(),
                lastplayed: lastPlayed[i].textContent.trim(),
                platform: gamePlatform[i].textContent.trim(),
                gamescore: gameAchievements[i * 2] == undefined ? undefined : gameAchievements[i * 2].textContent.trim(),
                achievement: gameAchievements[i * 2 + 1] == undefined ? undefined : gameAchievements[i * 2 + 1].textContent.trim(),
                progress: gameProgress[i].textContent.trim(),
            });
        }

        return {
            message: 'Successfully found Gamertag!',
            profile: result
        }
    } catch (err) {
        return {
            message: 'Gamertag not found!'
        }
    }
}

module.exports = xboxGamertag;