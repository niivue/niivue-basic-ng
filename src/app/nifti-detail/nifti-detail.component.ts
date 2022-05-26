import { Component, OnInit } from '@angular/core';
import {Niivue} from '@niivue/niivue';

@Component({
  selector: 'app-nifti-detail',
  templateUrl: './nifti-detail.component.html',
  styleUrls: ['./nifti-detail.component.sass']
})
export class NiftiDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const url = '/assets/mni152.nii.gz';
    const volumeList = [
      {
        url,
        volume: { hdr: null, img: null },
        colorMap: 'gray',
        opacity: 1,
        visible: true,
      },
    ];
    const niivue = new Niivue({show3Dcrosshair: true});
    niivue.attachTo('gl');
    niivue.loadVolumes(volumeList);
  }

}
