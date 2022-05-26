/**
 * @typedef {Object} NiivueOptions
 * @property {number} [options.textHeight=0.3] the text height for orientation labels (0 to 1). Zero for no text labels
 * @property {number} [options.colorbarHeight=0.05] size of colorbar. 0 for no colorbars, fraction of Nifti j dimension
 * @property {number} [options.colorBarMargin=0.05] padding around colorbar when displayed
 * @property {number} [options.crosshairWidth=1] crosshair size. Zero for no crosshair
 * @property {array}  [options.backColor=[0,0,0,1]] the background color. RGBA values from 0 to 1. Default is black
 * @property {array}  [options.crosshairColor=[1,0,0,1]] the crosshair color. RGBA values from 0 to 1. Default is red
 * @property {array}  [options.selectionBoxColor=[1,1,1,0.5]] the selection box color when the intensty selection box is shown (right click and drag). RGBA values from 0 to 1. Default is transparent white
 * @property {array}  [options.clipPlaneColor=[1,1,1,0.5]] the color of the visible clip plane. RGBA values from 0 to 1. Default is white
 * @property {boolean} [options.trustCalMinMax=true] true/false whether to trust the nifti header values for cal_min and cal_max. Trusting them results in faster loading because we skip computing these values from the data
 * @property {string} [options.clipPlaneHotKey="KeyC"] the keyboard key used to cycle through clip plane orientations. The default is "c"
 * @property {string} [options.viewModeHotKey="KeyV"] the keyboard key used to cycle through view modes. The default is "v"
 * @property {number} [options.keyDebounceTime=50] the keyUp debounce time in milliseconds. The default is 50 ms. You must wait this long before a new hot-key keystroke will be registered by the event listener
 * @property {boolean} [options.isRadiologicalConvention=false] whether or not to use radiological convention in the display
 * @property {string} [options.logging=false] turn on logging or not (true/false)
 * @property {string} [options.loadingText="waiting on images..."] the loading text to display when there is a blank canvas and no images
 * @property {boolean} [options.dragAndDropEnabled=true] whether or not to allow file and url drag and drop on the canvas
 */
/**
 * @class Niivue
 * @type Niivue
 * @description
 * Niivue can be attached to a canvas. An instance of Niivue contains methods for
 * loading and rendering NIFTI image data in a WebGL 2.0 context.
 * @constructor
 * @param {NiivueOptions} [options={}] options object to set modifiable Niivue properties
 * @example
 * let niivue = new Niivue({crosshairColor: [0,1,0,0.5], textHeight: 0.5}) // a see-through green crosshair, and larger text labels
 */
export function Niivue(options?: NiivueOptions): void;
export class Niivue {
    /**
     * @typedef {Object} NiivueOptions
     * @property {number} [options.textHeight=0.3] the text height for orientation labels (0 to 1). Zero for no text labels
     * @property {number} [options.colorbarHeight=0.05] size of colorbar. 0 for no colorbars, fraction of Nifti j dimension
     * @property {number} [options.colorBarMargin=0.05] padding around colorbar when displayed
     * @property {number} [options.crosshairWidth=1] crosshair size. Zero for no crosshair
     * @property {array}  [options.backColor=[0,0,0,1]] the background color. RGBA values from 0 to 1. Default is black
     * @property {array}  [options.crosshairColor=[1,0,0,1]] the crosshair color. RGBA values from 0 to 1. Default is red
     * @property {array}  [options.selectionBoxColor=[1,1,1,0.5]] the selection box color when the intensty selection box is shown (right click and drag). RGBA values from 0 to 1. Default is transparent white
     * @property {array}  [options.clipPlaneColor=[1,1,1,0.5]] the color of the visible clip plane. RGBA values from 0 to 1. Default is white
     * @property {boolean} [options.trustCalMinMax=true] true/false whether to trust the nifti header values for cal_min and cal_max. Trusting them results in faster loading because we skip computing these values from the data
     * @property {string} [options.clipPlaneHotKey="KeyC"] the keyboard key used to cycle through clip plane orientations. The default is "c"
     * @property {string} [options.viewModeHotKey="KeyV"] the keyboard key used to cycle through view modes. The default is "v"
     * @property {number} [options.keyDebounceTime=50] the keyUp debounce time in milliseconds. The default is 50 ms. You must wait this long before a new hot-key keystroke will be registered by the event listener
     * @property {boolean} [options.isRadiologicalConvention=false] whether or not to use radiological convention in the display
     * @property {string} [options.logging=false] turn on logging or not (true/false)
     * @property {string} [options.loadingText="waiting on images..."] the loading text to display when there is a blank canvas and no images
     * @property {boolean} [options.dragAndDropEnabled=true] whether or not to allow file and url drag and drop on the canvas
     */
    /**
     * @class Niivue
     * @type Niivue
     * @description
     * Niivue can be attached to a canvas. An instance of Niivue contains methods for
     * loading and rendering NIFTI image data in a WebGL 2.0 context.
     * @constructor
     * @param {NiivueOptions} [options={}] options object to set modifiable Niivue properties
     * @example
     * let niivue = new Niivue({crosshairColor: [0,1,0,0.5], textHeight: 0.5}) // a see-through green crosshair, and larger text labels
     */
    constructor(options?: NiivueOptions);
    opts: any;
    defaults: any;
    canvas: any;
    gl: any;
    colormapTexture: any;
    volumeTexture: any;
    drawTexture: any;
    drawBitmap: any;
    drawOpacity: any;
    drawPenLocation: any;
    drawPenAxCorSag: any;
    overlayTexture: any;
    overlayTextureID: any;
    sliceShader: any;
    lineShader: any;
    renderShader: any;
    pickingShader: any;
    colorbarShader: any;
    fontShader: any;
    bmpShader: any;
    bmpTexture: any;
    bmpTextureWH: any;
    passThroughShader: any;
    orientShaderAtlasU: any;
    orientShaderU: any;
    orientShaderI: any;
    orientShaderF: any;
    orientShaderRGBU: any;
    surfaceShader: any;
    meshShader: any;
    genericVAO: any;
    unusedVAO: any;
    crosshairs3D: any;
    pickingSurfaceShader: any;
    DEFAULT_FONT_GLYPH_SHEET: any;
    DEFAULT_FONT_METRICS: any;
    fontMets: any;
    sliceTypeAxial: any;
    sliceTypeCoronal: any;
    sliceTypeSagittal: any;
    sliceTypeMultiplanar: any;
    sliceTypeRender: any;
    sliceType: any;
    scene: any;
    syncOpts: any;
    readyForSync: any;
    back: any;
    overlays: any;
    volumes: any;
    meshes: any;
    furthestVertexFromOrigin: any;
    volScaleMultiplier: any;
    volScale: any;
    vox: any;
    mousePos: any;
    numScreenSlices: any;
    screenSlices: any;
    isDragging: any;
    dragStart: any;
    dragEnd: any;
    dragClipPlaneStartDepthAziElev: any;
    lastTwoTouchDistance: any;
    otherNV: any;
    volumeObject3D: any;
    pivot3D: any;
    furthestFromPivot: any;
    intensityRange$: any;
    imageLoaded$: any;
    currentClipPlaneIndex: any;
    lastCalled: any;
    multiTouchGesture: any;
    gestureInterval: any;
    selectedObjectId: any;
    CLIP_PLANE_ID: any;
    VOLUME_ID: any;
    DISTANCE_FROM_CAMERA: any;
    meshShaders: any;
    initialized: any;
    loadingText: any;
    eventsToSubjects: any;
    subscriptions: any;
    /**
     * attach the Niivue instance to the webgl2 canvas by element id
     * @param {string} id the id of an html canvas element
     * @example niivue = new Niivue().attachTo('gl')
     * @example niivue.attachTo('gl')
     */
    attachTo(id: string): Promise<Niivue>;
    /**
     * register a callback function to run when known Niivue events happen
     * @param {("location")} event the name of the event to watch for. Event names are shown in the type column
     * @param {function} callback the function to call when the event happens
     * @example
     * niivue = new Niivue()
     *
     * // 'location' update event is fired when the crosshair changes position via user input
     * function doSomethingWithLocationData(data){
     *    // data has the shape {mm: [N, N, N], vox: [N, N, N], frac: [N, N, N], values: this.volumes.map(v => {return val})}
     *    //...
     * }
     * niivue.on('location', doSomethingWithLocationData)
     * niivue.on('intensityRange', callback)
     * niivue.on('imageLoaded', callback)
     */
    on(event: ("location"), callback: Function): void;
    /**
     * off unsubscribes events and subjects (the opposite of on)
     * @param {("location")} event the name of the event to watch for. Event names are shown in the type column
     * @example
     * niivue = new Niivue()
     * niivue.off('location')
     */
    off(event: ("location")): void;
    /**
     * attach the Niivue instance to a canvas element directly
     * @param {object} canvas the canvas element reference
     * @example
     * niivue = new Niivue()
     * niivue.attachToCanvas(document.getElementById(id))
     */
    attachToCanvas(canvas: object): Promise<Niivue>;
    /**
     * Sync the scene controls (orientation, crosshair location, etc.) from one Niivue instance to another. useful for using one canvas to drive another.
     * @param {object} otherNV the other Niivue instance that is the main controller
     * @example
     * niivue1 = new Niivue()
     * niivue2 = new Niivue()
     * niivue2.syncWith(niivue1)
     */
    syncWith(otherNV: object, syncOpts?: {
        "2d": boolean;
        "3d": boolean;
    }): void;
    sync(): void;
    arrayEquals(a: any, b: any): boolean;
    resizeListener(): void;
    getRelativeMousePosition(event: any, target: any): {
        x: number;
        y: number;
    };
    getNoPaddingNoBorderCanvasRelativeMousePosition(event: any, target: any): {
        x: number;
        y: number;
    };
    mouseContextMenuListener(e: any): void;
    mouseDownListener(e: any): void;
    mouseLeftButtonHandler(e: any): void;
    mouseRightButtonHandler(e: any): void;
    calculateMinMaxVoxIdx(array: any): number[];
    calculateNewRange(volIdx?: number): void;
    mouseUpListener(): void;
    checkMultitouch(e: any): void;
    touchStartListener(e: any): void;
    touchEndListener(): void;
    mouseMoveListener(e: any): void;
    resetBriCon(): void;
    touchMoveListener(e: any): void;
    handlePinchZoom(e: any): void;
    keyUpListener(e: any): void;
    keyDownListener(e: any): void;
    wheelListener(e: any): void;
    registerInteractions(): void;
    dragEnterListener(e: any): void;
    dragOverListener(e: any): void;
    getFileExt(fullname: any, upperCase?: boolean): string;
    dropListener(e: any): Promise<void>;
    setRadiologicalConvention(isRadiologicalConvention: any): void;
    getRadiologicalConvention(): any;
    /**
     * add a new volume to the canvas
     * @param {NVImage} volume the new volume to add to the canvas
     * @example
     * niivue = new Niivue()
     * niivue.addVolume(NVImage.loadFromUrl({url:'./someURL.nii.gz'}))
     */
    addVolume(volume: NVImage): void;
    /**
     * add a new mesh to the canvas
     * @param {NVMesh} mesh the new mesh to add to the canvas
     * @example
     * niivue = new Niivue()
     * niivue.addMesh(NVMesh.loadFromUrl({url:'./someURL.gii'}))
     */
    addMesh(mesh: NVMesh): void;
    /**
     * get the index of a volume by its unique id. unique ids are assigned to the NVImage.id property when a new NVImage is created.
     * @param {string} id the id string to search for
     * @example
     * niivue = new Niivue()
     * niivue.getVolumeIndexByID(someVolume.id)
     */
    getVolumeIndexByID(id: string): number;
    saveImage(fnm: any, isSaveDrawing?: boolean): Promise<boolean>;
    getMeshIndexByID(id: any): number;
    setMeshProperty(id: any, key: any, val: any): void;
    setMeshLayerProperty(mesh: any, layer: any, key: any, val: any): void;
    setRenderAzimuthElevation(a: any, e: any): void;
    /**
     * get the index of an overlay by its unique id. unique ids are assigned to the NVImage.id property when a new NVImage is created.
     * @param {string} id the id string to search for
     * @see NiiVue#getVolumeIndexByID
     * @example
     * niivue = new Niivue()
     * niivue.getOverlayIndexByID(someVolume.id)
     */
    getOverlayIndexByID(id: string): number;
    /**
     * set the index of a volume. This will change it's ordering and appearance if there are multiple volumes loaded.
     * @param {NVImage} volume the volume to update
     * @param {number} [toIndex=0] the index to move the volume to. The default is the background (0 index)
     * @example
     * niivue = new Niivue()
     * niivue.setVolume(someVolume, 1) // move it to the second position in the array of loaded volumes (0 is the first position)
     */
    setVolume(volume: NVImage, toIndex?: number): void;
    setMesh(mesh: any, toIndex?: number): void;
    removeVolume(volume: any): void;
    removeMesh(mesh: any): void;
    /**
     * Move a volume to the bottom of the stack of loaded volumes. The volume will become the background
     * @param {NVImage} volume the volume to move
     * @example
     * niivue = new Niivue()
     * niivue.moveVolumeToBottom(this.volumes[3]) // move the 4th volume to the 0 position. It will be the new background
     */
    moveVolumeToBottom(volume: NVImage): void;
    /**
     * Move a volume up one index position in the stack of loaded volumes. This moves it up one layer
     * @param {NVImage} volume the volume to move
     * @example
     * niivue = new Niivue()
     * niivue.moveVolumeUp(this.volumes[0]) // move the background image to the second index position (it was 0 index, now will be 1)
     */
    moveVolumeUp(volume: NVImage): void;
    /**
     * Move a volume down one index position in the stack of loaded volumes. This moves it down one layer
     * @param {NVImage} volume the volume to move
     * @example
     * niivue = new Niivue()
     * niivue.moveVolumeDown(this.volumes[1]) // move the second image to the background position (it was 1 index, now will be 0)
     */
    moveVolumeDown(volume: NVImage): void;
    /**
     * Move a volume to the top position in the stack of loaded volumes. This will be the top layer
     * @param {NVImage} volume the volume to move
     * @example
     * niivue = new Niivue()
     * niivue.moveVolumeToTop(this.volumes[0]) // move the background image to the top layer position
     */
    moveVolumeToTop(volume: NVImage): void;
    mouseDown(x: any, y: any): void;
    mouseMove(x: any, y: any): void;
    /**
     * convert spherical AZIMUTH, ELEVATION to Cartesian
     * @param {number} azimuth azimuth number
     * @param {number} elevation elevation number
     * @returns {array} the converted [x, y, z] coordinates
     * @example
     * niivue = new Niivue()
     * xyz = niivue.sph2cartDeg(42, 42)
     */
    sph2cartDeg(azimuth: number, elevation: number): any[];
    /**
     * update the clip plane orientation in 3D view mode
     * @param {array} azimuthElevationDepth a two component vector. azimuth: camera position in degrees around object, typically 0..360 (or -180..+180). elevation: camera height in degrees, range -90..90
     * @example
     * niivue = new Niivue()
     * niivue.setClipPlane([42, 42])
     */
    setClipPlane(depthAzimuthElevation: any): void;
    /**
     * set the crosshair color
     * @param {array} color an RGBA array. values range from 0 to 1
     * @example
     * niivue = new Niivue()
     * niivue.setCrosshairColor([0, 1, 0, 0.5]) // set crosshair to transparent green
     */
    setCrosshairColor(color: any[]): void;
    setDrawingEnabled(trueOrFalse: any): void;
    setPenValue(penValue: any): void;
    setDrawOpacity(opacity: any): void;
    /**
     * set the selection box color. A selection box is drawn when you right click and drag to change image intensity
     * @param {array} color an RGBA array. values range from 0 to 1
     * @example
     * niivue = new Niivue()
     * niivue.setSelectionBoxColor([0, 1, 0, 0.5]) // set to transparent green
     */
    setSelectionBoxColor(color: any[]): void;
    sliceScroll2D(posChange: any, x: any, y: any, isDelta?: boolean): void;
    /**
     * set the slice type. This changes the view mode
     * @param {(Niivue.sliceTypeAxial | Niivue.sliceTypeCoronal | Niivue.sliceTypeSagittal | Niivue.sliceTypeMultiplanar | Niivue.sliceTypeRender)} sliceType an enum of slice types to use
     * @example
     * niivue = new Niivue()
     * niivue.setSliceType(Niivue.sliceTypeMultiplanar)
     */
    setSliceType(st: any): Niivue;
    /**
     * set the opacity of a volume given by volume index
     * @param {number} volIdx the volume index of the volume to change
     * @param {number} newOpacity the opacity value. valid values range from 0 to 1. 0 will effectively remove a volume from the scene
     * @example
     * niivue = new Niivue()
     * niivue.setOpacity(0, 0.5) // make the first volume transparent
     */
    setOpacity(volIdx: number, newOpacity: number): void;
    /**
     * set the scale of the 3D rendering. Larger numbers effectively zoom.
     * @param {number} scale the new scale value
     * @example
     * niivue = new Niivue()
     * niivue.setScale(2) // zoom some
     */
    setScale(scale: number): void;
    /**
     * set the color of the 3D clip plane
     * @param {array} color the new color. expects an array of RGBA values. values can range from 0 to 1
     * @example
     * niivue = new Niivue()
     * niivue.setClipPlaneColor([1, 1, 1, 0.5]) // white, transparent
     */
    setClipPlaneColor(color: any[]): void;
    overlayRGBA(volume: any): Uint8ClampedArray;
    vox2mm(XYZ: any, mtx: any): mat.vec3;
    /**
     * clone a volume and return a new volume
     * @param {number} index the index of the volume to clone
     * @returns {NVImage} returns a new volume to work with, but that volume is not added to the canvas
     * @example
     * niivue = new Niivue()
     * niivue.cloneVolume(0)
     */
    cloneVolume(index: number): NVImage;
    /**
     * load an array of volume objects
     * @param {array} volumeList the array of objects to load. each object must have a resolvable "url" property at a minimum
     * @returns {Niivue} returns the Niivue instance
     * @example
     * niivue = new Niivue()
     * niivue.loadVolumes([{url: 'someImage.nii.gz}, {url: 'anotherImage.nii.gz'}])
     */
    loadVolumes(volumeList: any[]): Niivue;
    /**
     * load an array of meshes
     * @param {array} meshList the array of objects to load. each object must have a resolvable "url" property at a minimum
     * @returns {Niivue} returns the Niivue instance
     * @example
     * niivue = new Niivue()
     * niivue.loadMeshes([{url: 'someMesh.gii}])
     */
    loadMeshes(meshList: any[]): Niivue;
    loadConnectome(json: any): Promise<Niivue>;
    createEmptyDrawing(): void;
    drawPt(x: any, y: any, z: any, penValue: any): void;
    drawLine(ptA: any, ptB: any, penValue: any): void;
    createRandomDrawing(): void;
    closeDrawing(): void;
    refreshDrawing(isForceRedraw?: boolean): void;
    r8Tex(texID: any, activeID: any, dims: any, isInit?: boolean): any;
    rgbaTex(texID: any, activeID: any, dims: any, isInit?: boolean): any;
    requestCORSIfNotSameOrigin(img: any, url: any): void;
    loadPngAsTexture(pngUrl: any, textureNum: any): Promise<any>;
    loadFontTexture(fontUrl: any): void;
    loadBmpTexture(bmpUrl: any): void;
    initFontMets(): void;
    loadFont(fontSheetUrl?: any, metricsUrl?: any): Promise<void>;
    fontMetrics: any;
    loadDefaultFont(): Promise<void>;
    initText(): Promise<void>;
    setMeshShader(meshShaderNameOrNumber?: number): void;
    meshShaderNames(sort?: boolean): any[];
    init(): Promise<Niivue>;
    cuboidVertexBuffer: any;
    fiberShader: any;
    /**
     * update the webGL 2.0 scene after making changes to the array of volumes. It's always good to call this method after altering one or more volumes manually (outside of Niivue setter methods)
     * @example
     * niivue = new Niivue()
     * niivue.updateGLVolume()
     */
    updateGLVolume(): void;
    refreshLayers(overlayItem: any, layer: any, numLayers: any): void;
    /**
     * query all available color maps that can be applied to volumes
     * @param {boolean} [sort=true] whether or not to sort the returned array
     * @returns {array} an array of colormap strings
     * @example
     * niivue = new Niivue()
     * colormaps = niivue.colorMaps()
     */
    colorMaps(sort?: boolean): any[];
    /**
     * update the colormap of an image given its ID
     * @param {string} id the ID of the NVImage
     * @param {string} colorMap the name of the colorMap to use
     * @example
     * niivue = new Niivue()
     * niivue.setColorMap(someImage.id, 'red')
     */
    setColorMap(id: string, colorMap: string): void;
    setFrame4D(id: any, frame4D: any): void;
    getFrame4D(id: any): any;
    colormapFromKey(name: any): any;
    colormap(lutName?: string): Uint8ClampedArray;
    refreshColormaps(): Niivue;
    sliceScale(): {
        volScale: number[];
        vox: any[];
    };
    mouseClick(x: any, y: any, posChange?: number, isDelta?: boolean): void;
    drawSelectionBox(leftTopWidthHeight: any): void;
    drawColorbar(leftTopWidthHeight: any): void;
    textWidth(scale: any, str: any): number;
    drawChar(xy: any, scale: any, char: any): number;
    drawLoadingText(text: any): void;
    drawText(xy: any, str: any, scale?: number): void;
    drawTextRight(xy: any, str: any, scale?: number): void;
    drawTextBelow(xy: any, str: any, scale?: number): void;
    updateInterpolation(layer: any): void;
    setAtlasOutline(isOutline: any): void;
    setInterpolation(isNearest: any): void;
    draw2D(leftTopWidthHeight: any, axCorSag: any): void;
    calculateMvpMatrix(): mat.mat4[];
    calculateRayDirection(): mat.vec3;
    setPivot3D(): void;
    draw3D(): string;
    drawMesh3D(isDepthTest?: boolean, alpha?: number): void;
    drawCrosshairs3D(isDepthTest?: boolean, alpha?: number): void;
    mm2frac(mm: any, volIdx?: number): number[];
    vox2frac(vox: any, volIdx?: number): number[];
    frac2vox(frac: any, volIdx?: number): number[];
    frac2mm(frac: any, volIdx?: number): mat.vec4;
    canvasPos2frac(canvasPos: any): any[];
    scaleSlice(w: any, h: any): number[];
    drawThumbnail(): void;
    drawScene(): string | void;
}
export { NVMesh } from "./nvmesh.js";
export { NVImage } from "./nvimage";
export type NiivueOptions = {
    /**
     * the text height for orientation labels (0 to 1). Zero for no text labels
     */
    textHeight?: number;
    /**
     * size of colorbar. 0 for no colorbars, fraction of Nifti j dimension
     */
    colorbarHeight?: number;
    /**
     * padding around colorbar when displayed
     */
    colorBarMargin?: number;
    /**
     * crosshair size. Zero for no crosshair
     */
    crosshairWidth?: number;
    /**
     * the background color. RGBA values from 0 to 1. Default is black
     */
    backColor?: any[];
    /**
     * the crosshair color. RGBA values from 0 to 1. Default is red
     */
    crosshairColor?: any[];
    /**
     * the selection box color when the intensty selection box is shown (right click and drag). RGBA values from 0 to 1. Default is transparent white
     */
    selectionBoxColor?: any[];
    /**
     * the color of the visible clip plane. RGBA values from 0 to 1. Default is white
     */
    clipPlaneColor?: any[];
    /**
     * true/false whether to trust the nifti header values for cal_min and cal_max. Trusting them results in faster loading because we skip computing these values from the data
     */
    trustCalMinMax?: boolean;
    /**
     * the keyboard key used to cycle through clip plane orientations. The default is "c"
     */
    clipPlaneHotKey?: string;
    /**
     * the keyboard key used to cycle through view modes. The default is "v"
     */
    viewModeHotKey?: string;
    /**
     * the keyUp debounce time in milliseconds. The default is 50 ms. You must wait this long before a new hot-key keystroke will be registered by the event listener
     */
    keyDebounceTime?: number;
    /**
     * whether or not to use radiological convention in the display
     */
    isRadiologicalConvention?: boolean;
    /**
     * turn on logging or not (true/false)
     */
    logging?: string;
    /**
     * the loading text to display when there is a blank canvas and no images
     */
    loadingText?: string;
    /**
     * whether or not to allow file and url drag and drop on the canvas
     */
    dragAndDropEnabled?: boolean;
};
import { NVImage } from "@niivue/niivue/src/nvimage";
import { NVMesh } from "@niivue/niivue/src/nvmesh";
import * as mat from "gl-matrix";
