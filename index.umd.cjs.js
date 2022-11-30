(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cursorDetect = {}));
})(this, (function (exports) { 'use strict';

    class CursorDetect {
        constructor(options) {
            this.cursorPos = {
                x: 0,
                y: 0,
            };
            this.container = options.target;
            this.type = options.type;
        }
        getCursorX() {
            return this.cursorPos.x;
        }
        getCursorY() {
            return this.cursorPos.y;
        }
        clear() {
            this.container.removeEventListener("mousemove", this.cursorMoveMethod, true);
        }
        start(callback) {
            this.cursorMoveMethod = (e) => {
                if (this.type === "outer") {
                    this.cursorPos.x = e.clientX;
                    this.cursorPos.y = e.clientY;
                }
                if (this.type === "inner") {
                    this.cursorPos.x = e.offsetX;
                    this.cursorPos.y = e.offsetY;
                }
                if (callback !== undefined) {
                    callback({
                        cursorX: this.getCursorX(),
                        cursorY: this.getCursorY()
                    });
                }
            };
            this.container.addEventListener("mousemove", this.cursorMoveMethod, true);
        }
    }

    exports.CursorDetect = CursorDetect;

}));
