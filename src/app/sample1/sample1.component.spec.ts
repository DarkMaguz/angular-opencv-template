import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample1Component } from './sample1.component';
import { OpencvModule } from '../opencv.module';

describe('Sample1Component', () => {
  let component: Sample1Component;
  let fixture: ComponentFixture<Sample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        OpencvModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should processImage', () => {
    expect(component.processImage).toBeTruthy();
  });

  it('should processImage', () => {
    const spy = spyOn(component, 'processImage');
    const imageElement = document.createElement('img');
    imageElement.src = '/TheBigBangTheory.jpg';
    component.processImage(imageElement);
    expect(spy).toHaveBeenCalledWith(imageElement);
  });

  // it('should processImage with canvas', async () => {
  //   const imageElement = document.createElement('img');
  //   imageElement.src = '/TheBigBangTheory.jpg';
  //   imageElement.onload = async () => {
  //     await component.processImage(imageElement);
  //   };
  //   fixture.whenRenderingDone().then(() => {
  //     const canvas = fixture.nativeElement.querySelector('canvas') as HTMLCanvasElement;
  //     // console.log('fixture.nativeElement: ', fixture.nativeElement);
  //     // console.log('canvas: ', canvas);
  //     console.log('canvas.height: ', canvas.height);
  //     console.log('canvas.width: ', canvas.width);

  //     // const canvas = fixture.nativeElement.getElementById('canvasOutput') as HTMLCanvasElement;
  //     expect(canvas).toBeTruthy();
  //   });

  //   // const canvas = document.getElementById('canvasOutput') as HTMLCanvasElement;
  //   // expect(canvas.height).toEqual(imageElement.height);
  //   // expect(canvas.width).toEqual(imageElement.width);
  //   // const context = canvas.getContext('2d');
  //   // expect(context).toBeTruthy();

  // });

});
