import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector: 'app-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  @Input() rating: number = 0;
  maxCropWidth: number = 75;
  cropWidth: number = this.maxCropWidth;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  private _maxNumberOfStars = 5
  maxNumberOfStars: Array<number> = new Array<number>(this._maxNumberOfStars);

  ngOnChanges(): void {
    this.cropWidth = this.rating * this.maxCropWidth/this._maxNumberOfStars;
  }

  onClick(): void{
    console.log(`Clicked rating is ${this.rating}`);
    this.notify.emit(`Clicked rating ${this.rating}`);
  }
}

