const TJBot = require("tjbot");
const config = require('./config');

//configurações gerais
const credentials = config.credentials;
const WORKSPACEID = config.conversationWorkspaceId;
const hardware = ['led', 'servo', 'microphone','camera'];
const configuration = {
    robot: {
        gender: 'female',
        name: 'Ada'
    },
    listen: {
        language: 'pt-BR',
        microphoneDeviceId: "plughw:1,0",
    },
    speak: {
        language: 'pt-BR'
    },

    log: {
          level: 'verbose'
      }
};

//aqui começa para valer
const tj = new TJBot(hardware, configuration, credentials);

console.log("You can ask me to introduce myself or tell you a joke.");
console.log("Try saying, \"" + tj.configuration.robot.name + ", please introduce yourself\" or \"" + tj.configuration.robot.name + ", who are you?\"");
console.log("You can also say, \"" + tj.configuration.robot.name + ", tell me a joke!\"");

tj.listen(function(msg) {
    // check to see if they are talking to TJBot
    if (msg.startsWith(tj.configuration.robot.name)) {
        // remove our name from the message
        var turn = msg.toLowerCase().replace(tj.configuration.robot.name.toLowerCase(), "");

        // send to the conversation service
        tj.converse(WORKSPACEID, turn, function(response) {
            // speak the result
            tj.speak(response.description);
        });
    }
});
