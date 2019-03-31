import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-next-episode',
  templateUrl: './next-episode.component.html',
  styleUrls: ['./next-episode.component.scss']
})
export class NextEpisodeComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<NextEpisodeComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  close(): void {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
