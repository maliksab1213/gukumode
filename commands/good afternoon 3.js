const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "good Afternoon3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "fk",
  description: "Good afternoon No Prefix",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Good afternoon Je Lunch Zarror Kha lena", "Good Afternoon Pagloπ", "πMuah Good Afternoon", "Gd Afternoon πJe", "Good Afternoon Khana khalo janπ", "Gd afternoon πMuah", "Good Afternoon πJan mobile Rakhdo or khana khana khalo", "Good Afternoon Ummaaaaah π",];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("GOOD AFTERNOON") == 0 || (event.body.indexOf("Afternoon") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("lmao") || input2.includes("lol") || input2.includes("π") || input2.includes("πΉ") || input2.includes("π€£") || input2.includes("π") || input2.includes("π") || input2.includes("π") || input2.includes("xd")){
					        	return api.setMessageReaction("π", event.messageID, (err) => {}, true)
} 
    if(input2.includes("kawawa") || input2.includes("sad") || input2.includes("agoi") || input2.includes("sakit") ||input2.includes("skit") || input2.includes("pain") || input2.includes("pighati")){
					        	return api.setMessageReaction("π’", event.messageID, (err) => {}, true)
    }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }