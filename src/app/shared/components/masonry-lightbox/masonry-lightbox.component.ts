import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-masonry-lightbox',
  templateUrl: './masonry-lightbox.component.html',
  styleUrls: ['./masonry-lightbox.component.scss'],
	animations: [
		trigger('animation', [
			transition('void => visible', [
				style({transform: 'scale(0.5)'}),
				animate('150ms', style({transform: 'scale(1)'}))
			]),
			transition('visible => void', [
				style({transform: 'scale(1)'}),
				animate('150ms', style({transform: 'scale(0.5)'}))
			])
		]),
		trigger('animation2', [
			transition(':leave', [
				style({opacity: 1}),
				animate('50ms', style({opacity: 0.8}))
			])
		])
	]
})
export class MasonryLightboxComponent implements OnInit {
	@Input() galleryData: string[] = []
	@Input() showCount = false

	previewImage = false
	showMask = false
	currentLightboxImage: string = this.galleryData[0]
	currentIndex = 0
	controls = true
	totalImageCount = 0

  constructor() { }

  ngOnInit(): void {
		this.totalImageCount = this.galleryData.length
	}

	onPreviewImage(index: number): void{
		this.showMask = true
		this.previewImage = true
		this.currentIndex = index
		this.currentLightboxImage = this.galleryData[index]
	}

	onAnimationEnd(event: AnimationEvent){
		if(event.toState === 'void'){
			this.showMask = false
		}
	}

	onClosePreview(){
		this.previewImage = false
	}

	onKeyDown(event):void{
		console.log(event)
	}

	next(): void{
		this.currentIndex = this.currentIndex + 1

		if(this.currentIndex > this.galleryData.length - 1){
			this.currentIndex = 0
		}

		this.currentLightboxImage = this.galleryData[this.currentIndex]
	}

	prev():void{
		this.currentIndex = this.currentIndex - 1

		if(this.currentIndex < 0){
			this.currentIndex = this.galleryData.length - 1
		}

		this.currentLightboxImage = this.galleryData[this.currentIndex]

	}

	// Detectar teclado

	@HostListener('window:keyup', ['$event'])
	keyEvent(event: KeyboardEvent){
		if (event.key === 'ArrowLeft') {
      this.prev()
    } else if (event.key === 'ArrowRight') {
      this.next();
    }
	}

}
