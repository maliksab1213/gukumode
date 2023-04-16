module.exports.config = {
    name: "sppy",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "fk",
    description: "logo",
    commandCategory: "logos",
    usages: "prefix + sppy",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args}) {
    const { threadID, messageID, senderID, body } = event;
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    const moduleName = this.config.name;
    let text = args.join(" ")
    let params = {text};
    params = qs.stringify(params);
    api.sendMessage("", event.threadID, event.messageID);
    const pathsave = __dirname + `/cache/avtlolv2952.png`;
    let imageBuffer;
await axios.get(`https://api.botcahx.biz.id/api/textpro/3dboxtext?apikey=Admin&text=${text}`, {
            responseType: "arraybuffer"
        })
        .then(data => {
            const imageBuffer = data.data;
            fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
            api.sendMessage({body: ``, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);})
        .catch(error => {
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};