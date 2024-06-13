# XboxGamertag
<p align="center">
  <img alt="@xboxgamertag" style="width: 150px;" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e">
</p>
<div align="center">
  <h3>XboxGamertag</h3>
  <p>A module to search and scrape <a href="https://xboxgamertag.com/">Xbox Gamertag</a>. This is not sponsored, supported, or affiliated with <a href="https://www.xbox.com/">Xbox</a>.</p>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/XboxGamertag">NPM</a> | <a href="https://github.com/DrelezTM/XboxGamertag">Repository</a> | <a href="https://dsc.gg/DrelezTM">Report Bug</a> | <a href="https://github.com/DrelezTM/XboxGamertag/issues">Issues</a>
</div>

## Installation 📑
* Install Modules
  ```sh
  npm i xboxgamertag
  ```
 
 ## How to Use 🔭
 * With Asynchronous
   * ESModule
    ```js
    import xboxGamertag from 'xboxgamertag';
   
    async function main(query) {
      const response = await xboxGamertag(query);
      console.log(response);
    }
   
    main("Drelez");
    ```
   * CommonJS
    ```js
    const xboxGamertag = require('xboxgamertag');
   
    async function main(query) {
      const response = await xboxGamertag(query);
      console.log(response);
    }
   
    main("Drelez");
    ```
  
 * Without Asynchronous
   * ESModule
    ```js
    import xboxGamertag from 'xboxgamertag';

    function main(query) {
      xboxGamertag(query).then((response) => {
        console.log(response);
      });
    }
   
    main("Drelez");
    ```
   * CommonJS
    ```js
    const xboxGamertag = require('xboxgamertag');

    function main(query) {
      xboxGamertag(query).then((response) => {
        console.log(response);
      });
    }
   
    main("Drelez");
    ```

## Response 📨
* Example Response
  ```json
  {
    "message": "Gamertag Berhasil Ditemukan",
    "profile": {
        "gamertag": "Drelez",
        "avatar": "https://images.weserv.nl/?url=https://images-eds-ssl.xboxlive.com/image?url=wHwbXKif8cus8csoZ03RW_ES.ojiJijNBGRVUbTnZKsoCCCkjlsEJrrMqDkYqs3Mr4hSPR51EO7YOcBVc07Tk5bdOFLOrIT2PBk7nzYYihZ287x72g7AkxO2sByN5BI1NuLBXqDrwdtEOeZKFtZfwvr5b_6aoOARmXS78pvHwyU-&format=png&maxage=1d&output=webp&w=90&h=90",
        "detail": {
            "gamerscore": "70",
            "gamesplayed": "1"
        },
        "history": [
            {
                "gamename": "Minecraft for Android",
                "lastplayed": "Last played 1 year ago",
                "platform": "Android",
                "gamescore": "70 / 2870",
                "achievement": "6 unlocked",
                "progress": "2.0%"
            }
        ]
    }
  }
  ```

## Built With 🛠
* [Axios](https://axios-http.com/docs/intro)
* [JSDOM](https://www.npmjs.com/package/jsdom)

## Error or Bug 🐞
* [Discord](https://dsc.gg/DrelezTM)
* [YouTube](https://www.youtube.com/p/DrelezTM)
* [Instagram](https://www.instagram.com/DrelezTM)
* [Issues](https://github.com/DrelezTM/XboxGamertag/issues)

## License 📜
* [License](https://github.com/DrelezTM/XboxGamertag/blob/main/LICENSE)
