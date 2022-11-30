declare class CursorDetect {
    private type;
    private cursorPos;
    private container;
    private cursorMoveMethod;
    constructor(options: {
        target: HTMLElement;
        type: "inner" | "outer";
    });
    getCursorX(): number;
    getCursorY(): number;
    clear(): void;
    start(callback?: (options: {
        cursorX: number;
        cursorY: number;
    }) => void): void;
}

export { CursorDetect };
