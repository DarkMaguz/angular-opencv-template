import { Component } from '@angular/core';
import { OpencvModule } from '../opencv.module';

declare var cv: any;

@Component({
  selector: 'app-opencv',
  templateUrl: './opencv.component.html',
  styleUrls: ['./opencv.component.scss'],
})
export class OpencvComponent {

  constructor() {
    OpencvModule.waitForOpenCv().finally(() => {
      // Create an image element and load an image
      let imageElement = document.createElement('img');
      imageElement.src = '/TheBigBangTheory.jpg';
      imageElement.onload = () => {
        try {
          this.processImage(imageElement);
        } catch (error) {
          console.error('Error processing image: ', error);
        }
      };
    });
  }


  // Function that draws the detected faces on an image.
  async processImage(imageElement: HTMLImageElement) {
    // Create a Mat object from the image
    const mat = cv.imread(imageElement);

    const grayMat = new cv.Mat();
    // Convert the image to grayscale
    cv.cvtColor(mat, grayMat, cv.COLOR_RGBA2GRAY);

    // Load the face detection classifier (Haar Cascade for frontal face)
    const faceCascade = await OpencvModule.loadCascadeClassifier('haarcascade_frontalface_default.xml');

    // Sanity check that the face cascade was loaded.
    if (faceCascade.empty()) {
      console.error('Error loading faceCascade files: ');
      return;
    }

    // Detect faces in the image.
    const faces = new cv.RectVector();
    const size = new cv.Size(0.5, 0.5); // Minimum size of the face to detect
    faceCascade.detectMultiScale(grayMat, faces, 1.2, 10, 0, size, size);

    console.log('Detected ' + faces.size() + ' faces');

    // Draw rectangles around detected faces
    for (let i = 0; i < faces.size(); i++) {
      const face = faces.get(i);
      let point1 = new cv.Point(faces.get(i).x, faces.get(i).y);
      let point2 = new cv.Point(faces.get(i).x + faces.get(i).width,
        faces.get(i).y + faces.get(i).height);
      cv.rectangle(mat, point1, point2, [255, 0, 0, 255]);
    }

    // Display the processed image in a canvas element
    const canvas = document.getElementById('canvasOutput') as HTMLCanvasElement;
    cv.imshow(canvas, mat);

    // Clean up memory
    mat.delete();
    faces.delete();
    grayMat.delete();
  }
}
