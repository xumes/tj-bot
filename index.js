const tjbot = require("tjbot");
const config = require('./config');

//configurações gerais
const credentials = config.credentials;
const WORKSPACEID = config.conversationWorkspaceId;
const hardware = ['led', 'servo', 'microphone', 'speaker','camera'];
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
    wave: {
        servoPin: 7 // corresponds to BCM 7 / physical PIN 26
    },
    see: {
        confidenceThreshold: {
            object: 0.5,   // only list image tags with confidence > 0.5
            text: 0.1     // only list text tags with confidence > 0.5
        },
        camera: {
            height: 720,
            width: 960,
            verticalFlip: false, // flips the image vertically, may need to set to 'true' if the camera is installed upside-down
            horizontalFlip: false // flips the image horizontally, should not need to be overridden
        }
    }
};

//aqui começa para valer
const tj = new TJBot(hardware, configuration, credentials);

tj.listen((texto)=> {
  console.log(texto)
})
