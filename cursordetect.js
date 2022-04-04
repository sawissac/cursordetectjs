export class CursorDetect {
    constructor(options) {
        this.cursorPos = {
            x: 0,
            y: 0,
        };
        this.container = options.target;
    }
    getCursorX() {
        return this.cursorPos.x;
    }
    getCursorY() {
        return this.cursorPos.y;
    }
    close() {
        this.container.removeEventListener("mousemove", this.cursorMoveMothod, true);
    }
    start(callback) {
        this.cursorMoveMothod = (e) => {
            this.cursorPos.x = e.offsetX;
            this.cursorPos.y = e.offsetY;
            if (callback !== undefined) {
                callback({
                    cursorX: this.getCursorX(),
                    cursorY: this.getCursorY()
                });
            }
        };
        this.container.addEventListener("mousemove", this.cursorMoveMothod, true);
    }
}
