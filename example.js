import { CursorDetect } from "./cursordetect.js";

let a = document.getElementById("block1");
let b = document.getElementById("block2");

const block1 = new CursorDetect({target: a});
const block2 = new CursorDetect({target: b});

block1.start((e)=>{
    console.log("block1 : " + e.cursorX + ":" + e.cursorY);
})

block2.start((e)=>{
    console.log("block2 : " + e.cursorX + ":" + e.cursorY);
})

block1.close();
block2.close();