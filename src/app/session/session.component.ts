import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Niivue} from '@niivue/niivue';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { interval } from 'rxjs';

const interval$ = interval(300); // every X ms send azimuth and elevation

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.sass']
})
export class SessionComponent implements OnInit {
  private id?: string;
  private isEditor = false;
  private serverConnection$?: WebSocketSubject<unknown>;
  private niivue: Niivue;
  private sessionKey?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = params.get('id')!;
        if(params.has('sessionKey')) {
          this.isEditor = true;
          this.sessionKey = params.get('sessionKey')!;
          console.log('sessionKey is ' + this.sessionKey);
        }
        this.serverConnection$ = webSocket(`ws://localhost:3000/websockets?session=${this.id}`);
      }
    )
    
    const url = './assets/mni152.nii.gz';
    const volumeList = [
      {
        url,
        volume: { hdr: null, img: null },
        colorMap: 'gray',
        opacity: 1,
        visible: true,
      },
    ];
    this.niivue = new Niivue({show3Dcrosshair: true});
    this.niivue.attachTo('gl');
    this.niivue.loadVolumes(volumeList);
    
    this.serverConnection$?.subscribe({
      next: msg => {    
        const message = msg as JSON;
        // console.log((msg as JSON));
        if(message['azimuth']) {
          this.niivue.scene.renderAzimuth = message['azimuth'];
          this.niivue.scene.renderElevation = message['elevation'];
          this.niivue.volScaleMultiplier = message['zoom'];
          this.niivue.scene.clipPlane = message['clipPlane'];
          this.niivue.drawScene();
        }

        if(message['key']) {
          this.sessionKey = message['key'];
          console.log(this.sessionKey);
          alert(this.sessionKey);
        }
        
      }, // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
     });
    
    // if this is the editor we need create the session
    if(this.isEditor) {
      this.serverConnection$?.next({
        "type": "create",       
      });
    }

    const subscribe = interval$.subscribe(() => {
      if(this.isEditor) {
        this.serverConnection$?.next({
          "type": "put", 
          "azimuth": this.niivue.scene.renderAzimuth,
          "elevation": this.niivue.scene.renderElevation,
          "clipPlane": this.niivue.scene.clipPlane,
          "zoom": this.niivue.volScaleMultiplier,
          "key": this.sessionKey
        });    
      }
    });
    
  }

}
