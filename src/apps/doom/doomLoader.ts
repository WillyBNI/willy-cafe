interface DoomModuleFactory {
  (options: {
    canvas: HTMLCanvasElement;
    locateFile(path: string): string;
    onRuntimeInitialized(): void;
    print(text: string): void;
    printErr(text: string): void;
  }): void;
}

let doomPromise: Promise<void> | null = null;


export function loadDoom(canvas: HTMLCanvasElement): Promise<void> {

  if (doomPromise) {
    return doomPromise;
  }


  doomPromise = new Promise((resolve, reject) => {


    const script = document.createElement("script");

    script.src = "/doom/engine/doom.js";


    script.onload = () => {

      console.log("doom.js loaded");


      const factory = (window as unknown as { Module?: DoomModuleFactory }).Module;


      if (typeof factory !== "function") {
        reject(
          new Error("Doom Module factory not found")
        );
        return;
      }


      factory({

        canvas,


        locateFile(path: string) {

          console.log("locateFile:", path);


          if (path.endsWith("doom.wasm")) {
            return "/doom/engine/doom.wasm";
          }


          if (path.endsWith("doom.data")) {
            return "/doom/engine/doom.data";
          }


          return path;
        },


        onRuntimeInitialized() {

          console.log(
            "Doom runtime initialized!"
          );

          resolve();

        },


        print(text: string) {
          console.log("[DOOM]", text);
        },


        printErr(text: string) {
          console.error("[DOOM]", text);
        }

      });

    };


    script.onerror = () => {
      reject(
        new Error("Failed to load doom.js")
      );
    };


    document.body.appendChild(script);

  });


  return doomPromise;
}