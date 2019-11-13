import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-learning',
  templateUrl: './css-learning.component.html',
  styleUrls: ['./css-learning.component.css']
})
export class CssLearningComponent implements OnInit {
  values: any = [
    { "key": 'Tomoto', "value": 'Tomato' },
    { "key": 'Orange', "value": 'Orange' },
    { "key": 'DodgerBlue', "value": 'DodgerBlue' },
    { "key": 'MediumSeaGreen', "value": 'MediumSeaGreen' },
    { "key": 'Gray', "value": 'Gray' },
    { "key": 'SlateBlue', "value": 'SlateBlue' },
    { "key": 'Violet', "value": 'Violet' },
    { "key": 'LightGray', "value": 'LightGray' },
  ]
  constructor() { }

  ngOnInit() {
  }

}
