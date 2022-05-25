/**
 * @class NVMesh
 * @type NVMesh
 * @description
 * a NVImage encapsulates some images data and provides methods to query and operate on images
 * @constructor
 * @param {array} dataBuffer an array buffer of image data to load (there are also methods that abstract this more. See loadFromUrl, and loadFromFile)
 * @param {string} [name=''] a name for this image. Default is an empty string
 * @param {number} [opacity=1.0] the opacity for this image. default is 1
 * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
 * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
 * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
 * @param {boolean} [visible=true] whether or not this image is to be visible
 */
export function NVMesh(pts: any, tris: any, name?: string, rgba255: number[], opacity?: number, visible?: boolean, gl: any, connectome?: any, dpg?: any, dps?: any, dpv?: any): void;
export class NVMesh {
    /**
     * @class NVMesh
     * @type NVMesh
     * @description
     * a NVImage encapsulates some images data and provides methods to query and operate on images
     * @constructor
     * @param {array} dataBuffer an array buffer of image data to load (there are also methods that abstract this more. See loadFromUrl, and loadFromFile)
     * @param {string} [name=''] a name for this image. Default is an empty string
     * @param {number} [opacity=1.0] the opacity for this image. default is 1
     * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
     * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
     * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
     * @param {boolean} [visible=true] whether or not this image is to be visible
     */
    constructor(pts: any, tris: any, name?: string, rgba255: number[], opacity?: number, visible?: boolean, gl: any, connectome?: any, dpg?: any, dps?: any, dpv?: any);
    name: any;
    id: any;
    furthestVertexFromOrigin: any;
    extentsMin: any;
    extentsMax: any;
    opacity: any;
    visible: any;
    indexBuffer: any;
    vertexBuffer: any;
    vao: any;
    offsetPt0: any;
    hasConnectome: any;
    pts: any;
    layers: any;
    fiberLength: any;
    fiberDither: any;
    fiberColor: any;
    fiberDecimationStride: any;
    fiberMask: any;
    colormap: any;
    dpg: any;
    dps: any;
    dpv: any;
    rgba255: any;
    tris: any;
    updateFibers(gl: any): void;
    fiberLengths: any;
    indexCount: any;
    updateConnectome(gl: any): void;
    updateMesh(gl: any): void;
    vertexCount: any;
    setLayerProperty(id: any, key: any, val: any, gl: any): void;
    setProperty(key: any, val: any, gl: any): void;
    generatePosNormClr(pts: any, tris: any, rgba255: any): Float32Array;
}
export namespace NVMesh {
    function readTCK(buffer: any): {
        pts: number[];
        offsetPt0: number[];
    };
    function readTRK(buffer: any): {
        pts: number[];
        offsetPt0: number[];
        dps: {
            id: any;
            vals: any[];
        }[];
        dpv: {
            id: any;
            vals: any[];
        }[];
    };
    function readSTC(buffer: any, n_vert: any): Float32Array;
    function readCURV(buffer: any, n_vert: any): Float32Array;
    function readANNOT(buffer: any, n_vert: any): Uint32Array;
    function readVTK(buffer: any): {
        pts: any[];
        offsetPt0: any[];
        positions?: undefined;
        indices?: undefined;
    } | {
        positions: Float32Array;
        indices: Int32Array;
        pts?: undefined;
        offsetPt0?: undefined;
    } | {
        pts: Float32Array;
        offsetPt0: Uint32Array;
    };
    function readDFS(buffer: any, n_vert?: number): {
        positions: Float32Array;
        indices: Int32Array;
        colors: Float32Array;
    };
    function readMZ3(buffer: any, n_vert?: number): any[] | {
        positions: Float32Array;
        indices: Int32Array;
        scalars: any[];
        colors: Float32Array;
    };
    function readLayer(name: any, buffer: any, nvmesh: any, opacity?: number, colorMap?: string, colorMapNegative?: string, useNegativeCmap?: boolean, cal_min?: any, cal_max?: any): void;
    function readOFF(buffer: any): {
        positions: Float32Array;
        indices: Int32Array;
    };
    function readOBJ(buffer: any): {
        positions: Float32Array;
        indices: Int32Array;
    };
    function readFreeSurfer(buffer: any): {
        positions: Float32Array;
        indices: Int32Array;
    };
    function readSRF(buffer: any): {
        positions: Float32Array;
        indices: Int32Array;
        colors: Float32Array;
    };
    function readSTL(buffer: any): {
        positions: Float32Array;
        indices: Int32Array;
    };
    function readGII(buffer: any, n_vert?: number): any[] | {
        positions: any;
        indices: any;
    };
    function loadConnectomeFromJSON(json: any, gl: any, name?: string, colorMap?: string, opacity?: number, visible?: boolean): Promise<NVMesh>;
    function readMesh(buffer: any, name: any, gl: any, opacity?: number, rgba255?: number[], visible?: boolean): Promise<NVMesh>;
    function readTRX(buffer: any): Promise<{
        pts: any[];
        offsetPt0: any[];
        dpg: {
            id: string;
            vals: any[];
        }[];
        dps: {
            id: string;
            vals: any[];
        }[];
        dpv: {
            id: string;
            vals: any[];
        }[];
        header: any;
    }>;
    /**
     * factory function to load and return a new NVMesh instance from a given URL
     * @param {string} url the resolvable URL pointing to a nifti image to load
     * @param {string} [name=''] a name for this image. Default is an empty string
     * @param {string} [colorMap='gray'] a color map to use. default is gray
     * @param {number} [opacity=1.0] the opacity for this image. default is 1
     * @param {boolean} [visible=true] whether or not this image is to be visible
     * @returns {NVMesh} returns a NVImage intance
     * @example
     * myImage = NVMesh.loadFromUrl('./someURL/mesh.gii') // must be served from a server (local or remote)
     */
    function loadFromUrl({ url, gl, name, opacity, rgba255, visible, layers, }?: string): NVMesh;
    function readFileAsync(file: any): Promise<any>;
    /**
     * factory function to load and return a new NVImage instance from a file in the browser
     * @param {string} file the file object
     * @param {string} [name=''] a name for this image. Default is an empty string
     * @param {number} [opacity=1.0] the opacity for this image. default is 1
     * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
     * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
     * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
     * @param {boolean} [visible=true] whether or not this image is to be visible
     * @returns {NVImage} returns a NVImage intance
     * @example
     * myImage = NVImage.loadFromFile(SomeFileObject) // files can be from dialogs or drag and drop
     */
    function loadFromFile({ file, gl, name, opacity, rgba255, visible, layers, }?: string): NVImage;
    function loadFromBase64({ base64, gl, name, opacity, rgba255, visible, layers, }?: {
        base64?: any;
        gl?: any;
        name?: string;
        opacity?: number;
        rgba255?: number[];
        visible?: boolean;
        layers?: any[];
    }): Promise<NVMesh>;
}
