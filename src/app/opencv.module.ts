import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var cv: any;
declare var Utils: any;

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class OpencvModule {
  static isReady: boolean = false;
  static utils = new Utils("errorMessage: OpencvModule");
  static loadedCascadeClassifiers = new Map<string, typeof cv.CascadeClassifier>();

  constructor() {
    this.loadOpenCv();
  }

  static async waitForOpenCv() {
    while (OpencvModule.isReady === false) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }

  async loadOpenCv() {
    if (typeof cv === 'undefined') {
      console.error('OpenCV.js is not loaded');
      return;
    }

    // Set the callback function that will be invoked after the library is loaded
    cv.onRuntimeInitialized = () => {
      console.log('OpenCV.js is ready to use!');
      OpencvModule.isReady = true;
    };
  };

  static async loadCascadeClassifier(cascadeFile: string): Promise<typeof cv.CascadeClassifier> {
    if (this.loadedCascadeClassifiers.has(cascadeFile)) {
      return this.loadedCascadeClassifiers.get(cascadeFile);
    }
    const cc = new cv.CascadeClassifier();
    OpencvModule.utils.createFileFromUrl(cascadeFile, "/models/" + cascadeFile, () => {
      cc.load(cascadeFile);
    });
    // Wait for the cascade classifier to be loaded.
    let tickCount = 0;
    while (cc === undefined || cc?.empty()) {
      console.log('Tick...');
      await new Promise((resolve) => setTimeout(resolve, 100));
      tickCount++;
      if (tickCount > 20) {
        console.error('Error loading cascade classifier file: ' + cascadeFile);
        return;
      }
    }
    this.loadedCascadeClassifiers.set(cascadeFile, cc);
    return cc;
  }
}
