import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { IPageInfo } from '../character.interface';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',

})
export class PaginationComponent {
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @Input('page') page!: IPageInfo;
  @ViewChild('eyeSvgLeft', { read: ElementRef }) eyeSvgLeft!: ElementRef<SVGElement>;
  @ViewChild('eyeSvgRight', { read: ElementRef }) eyeSvgRight!: ElementRef<SVGGraphicsElement>;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    this.eyesMoves({ mouseEvent: e, svg: this.eyeSvgLeft })
    this.eyesMoves({ mouseEvent: e, svg: this.eyeSvgRight })
  }

  current: number = 1;


  eyesMoves({ mouseEvent, svg }: { mouseEvent: MouseEvent, svg: ElementRef }) {
    let eyeball = svg.nativeElement.querySelector('.eyeball');
    let pupil = svg.nativeElement.querySelector('.pupil');

    let pointerCursor = this.translateDOMCordinatesToSVG(mouseEvent, svg);


    let { pointerCenter, radiusEyeball, radiusPupil } = this.getCircleCenterAndRadius(eyeball, pupil);
    let angle = this.getAngle({ pointerCenter, pointerCursor });
    let distance = this.getDistanceBeetweenCursorAndEyeball({ pointerCenter, pointerCursor });
    let { radiusOuter } = this.adjustPupilMoviment({ distance, radiusEyeball, radiusPupil });

    let pointerMoved = {
      x: pointerCenter.x + Math.cos((angle * Math.PI) / 180) * radiusOuter,
      y: pointerCenter.y + Math.sin((angle * Math.PI) / 180) * radiusOuter
    }

    return this.updatePupils(pupil, pointerMoved)
  }

  // translate cursor HTML DOM coordinates to SVG DOM units
  translateDOMCordinatesToSVG(mouseEvent: any, svg: any) {
    let pointerCursor = new DOMPoint(mouseEvent.clientX, mouseEvent.clientY);
    return pointerCursor.matrixTransform(svg.nativeElement!.getScreenCTM()!.inverse());
  }

  // get center cx/cy and radius
  getCircleCenterAndRadius(eyeball: any, pupil: any) {
    let pointerCenter = { x: +eyeball!.getAttribute('cx')!, y: +eyeball!.getAttribute('cy')! };
    let radiusEyeball = +eyeball!.getAttribute('r')!;
    let radiusPupil = +pupil!.getAttribute('r')!;
    return { pointerCenter, radiusEyeball, radiusPupil }
  }

  // get angle between cursor and eyeball center;
  getAngle({ pointerCursor, pointerCenter }: { pointerCursor: any, pointerCenter: any }) {
    return (Math.atan2(pointerCursor.y - pointerCenter.y, pointerCursor.x - pointerCenter.x) * 180) / Math.PI;
  }

  //get distance between cursor and eyeball center
  getDistanceBeetweenCursorAndEyeball({ pointerCursor, pointerCenter }: { pointerCursor: any, pointerCenter: any }) {
    let a = pointerCursor.x - pointerCenter.x;
    let b = pointerCursor.y - pointerCenter.y;
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }

  // adjust pupil movement inside eyeball boundaries
  adjustPupilMoviment({ distance, radiusEyeball, radiusPupil }: { distance: number, radiusEyeball: number, radiusPupil: number }) {
    let offset = distance < radiusEyeball ? 1 / radiusEyeball * distance : 1;
    let radiusOuter = (radiusEyeball - radiusPupil) * offset;
    return { offset, radiusOuter };
  }

  // update pupils attributes
  updatePupils(pupil: any, pointerMoved: any) {
    pupil!.setAttribute('cx', `${pointerMoved.x}`)
    pupil!.setAttribute('cy', `${pointerMoved.y}`)
  }

  changePage(page: string) {
    const numberPattern = /\d+/g;
    let props = page.split('?')[1]

    this.current = Number(props.match(numberPattern)![0])

    return this.changePageEmit.emit({ page: props })
  }
}
