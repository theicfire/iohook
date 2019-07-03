'use strict';

const ioHook = require('../index.js');
let grabKeys = false;

ioHook.on("mousedown",function(msg){console.log(msg);});

ioHook.on("keypress",function(msg){
  console.log(msg);});

ioHook.on("keydown",function(msg){
  if (msg.ctrlKey && msg.altKey && msg.keycode == 24) {
    console.log('ctrl + alt + o!');
    grabKeys = !grabKeys;
    if (grabKeys) {
      ioHook.disableKeyPropagation();
    } else {
      ioHook.enableKeyPropagation();
    }
    console.log('grabKeys: ', grabKeys);
  }
  
  console.log(msg);});

ioHook.on("keyup",function(msg){console.log(msg);});

ioHook.on("mouseclick",function(msg){console.log(msg)});

ioHook.on("mousewheel",function(msg){console.log(msg)});

ioHook.on("mousemove",function(msg){console.log(msg)});

ioHook.on("mousedrag",function(msg){console.log(msg)});

//start ioHook
ioHook.start();
// ioHook.setDebug(true); // Uncomment this line for see all debug information from iohook
// ioHook.disableClickPropagation();

const CTRL = 29;
const ALT = 56;
const F7 = 65;

ioHook.registerShortcut([CTRL, F7], (keys) => {
  console.log('Shortcut pressed with keys:', keys);
});

let shId = ioHook.registerShortcut([ALT, F7], (keys) => {
  console.log('This shortcut will be called once. Keys:', keys);
  ioHook.unregisterShortcut(shId);
})

console.log('Hook started. Try type something or move mouse');
