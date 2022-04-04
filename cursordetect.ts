export interface CursorDetectionInterface {
    getCursorX(): number;
    getCursorY(): number;
    start(callback: (options: {cursorX: number;cursorY: number;})=>void):void;
    close(): void;
}

export class CursorDetect implements CursorDetectionInterface {
  private cursorPos: { x: number; y: number };
  private container: HTMLElement;
  private cursorMoveMothod;
  constructor(options: { target: HTMLElement }) {
    this.cursorPos = {
      x: 0,
      y: 0,
    };
    this.container = options.target;
  }
  public getCursorX(): number {
    return this.cursorPos.x;
  }
  public getCursorY(): number {
    return this.cursorPos.y;
  }
  public close(): void {
    this.container.removeEventListener(
      "mousemove",
      this.cursorMoveMothod,
      true
    );
  }
  public start(callback: (options: { cursorX: number; cursorY: number; }) => void): void {
    this.cursorMoveMothod = (e: MouseEvent) => {
      this.cursorPos.x = e.offsetX;
      this.cursorPos.y = e.offsetY;

      if(callback !== undefined){
          callback({
              cursorX: this.getCursorX(),
              cursorY: this.getCursorY()
          })
      }
    };
    this.container.addEventListener("mousemove", this.cursorMoveMothod, true);
  }
}