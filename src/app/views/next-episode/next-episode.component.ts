import {Component, Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material';
import {Episode} from '../../models/Episode';

@Component({
  selector: 'app-next-episode',
  templateUrl: './next-episode.component.html'
})
export class NextEpisodeComponent {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<NextEpisodeComponent>,
    // gets the data passed into the sheet while opening
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: Episode
  ) {}
  // closes mat bottom sheet
  close(): void {
    this.bottomSheetRef.dismiss();
  }
}
