import {Component, OnChanges} from "@angular/core";

@Component({
  selector: 'app-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  rating: number = 4;
  maxCropWidth: number = 75;
  cropWidth: number = this.maxCropWidth;
  private _maxNumberOfStars = 5
  maxNumberOfStars: Array<number> = new Array<number>(this._maxNumberOfStars);

  ngOnChanges(): void {
    this.cropWidth = this.rating * this.maxCropWidth/this._maxNumberOfStars;
  }
}

