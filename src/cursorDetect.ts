export class CursorDetect {
  private type: "inner" | "outer";
  private cursorPos: { x: number; y: number };
  private container: HTMLElement;
  private cursorMoveMethod : any;
  constructor(options: { target: HTMLElement, type: "inner" | "outer" }) {
    this.cursorPos = {
      x: 0,
      y: 0,
    };
    this.container = options.target;
    this.type = options.type;
  }

  public getCursorX(): number {
    return this.cursorPos.x;
  }
  public getCursorY(): number {
    return this.cursorPos.y;
  }
  public clear(): void {
    this.container.removeEventListener(
      "mousemove",
      this.cursorMoveMethod,
      true
    );
  }

  public start(callback?: (options: { cursorX: number; cursorY: number; }) => void): void {

    this.cursorMoveMethod = (e: MouseEvent) => {
      if(this.type === "outer"){
        this.cursorPos.x = e.clientX;
        this.cursorPos.y = e.clientY;
      }
      if(this.type === "inner"){
        this.cursorPos.x = e.offsetX;
        this.cursorPos.y = e.offsetY;
      }

      if(callback !== undefined){
          callback({
              cursorX: this.getCursorX(),
              cursorY: this.getCursorY()
          })
      }
    };

    this.container.addEventListener("mousemove", this.cursorMoveMethod, true);
  }
}