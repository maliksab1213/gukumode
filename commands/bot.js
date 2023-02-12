module.exports.config = {
  name: "bot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "fk",
  description: "",
  commandCategory: "system",
  usages: "",
  cooldowns: 3,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/cADNxtq.jpg",
"https://i.imgur.com/CaLd6wU.jpg", 
"https://i.imgur.com/PcSYBZc.jpg", 
"https://i.imgur.com/RcKlIiB.jpg", 
"https://i.imgur.com/IoYQOYr.jpg", 
"https://i.imgur.com/RjTa2Ph.jpg", 
  ];
	 var callback = () => api.sendMessage({body:`CoMMandoBot Virsun 8.0.2 \n following Corrector \n The Super Seiyan Omni King Son Guku< : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/ken.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ken.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ken.jpg")).on("close",() => callback());
   };