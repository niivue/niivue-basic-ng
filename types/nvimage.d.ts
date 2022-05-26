/**
 * query all available color maps that can be applied to volumes
 * @param {boolean} [sort=true] whether or not to sort the returned array
 * @returns {array} an array of colormap strings
 * @example
 * niivue = new Niivue()
 * colormaps = niivue.colorMaps()
 */
/**
 * @class NVImage
 * @type NVImage
 * @description
 * a NVImage encapsulates some images data and provides methods to query and operate on images
 * @constructor
 * @param {array} dataBuffer an array buffer of image data to load (there are also methods that abstract this more. See loadFromUrl, and loadFromFile)
 * @param {string} [name=''] a name for this image. Default is an empty string
 * @param {string} [colorMap='gray'] a color map to use. default is gray
 * @param {number} [opacity=1.0] the opacity for this image. default is 1
 * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
 * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
 * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
 * @param {boolean} [visible=true] whether or not this image is to be visible
 */
export function NVImage(dataBuffer: any[], name?: string, colorMap?: string, opacity?: number, pairedImgData?: any, trustCalMinMax?: boolean, percentileFrac?: number, ignoreZeroVoxels?: boolean, visible?: boolean, isDICOMDIR?: boolean, useQFormNotSForm?: boolean): void;
export class NVImage {
    /**
     * query all available color maps that can be applied to volumes
     * @param {boolean} [sort=true] whether or not to sort the returned array
     * @returns {array} an array of colormap strings
     * @example
     * niivue = new Niivue()
     * colormaps = niivue.colorMaps()
     */
    /**
     * @class NVImage
     * @type NVImage
     * @description
     * a NVImage encapsulates some images data and provides methods to query and operate on images
     * @constructor
     * @param {array} dataBuffer an array buffer of image data to load (there are also methods that abstract this more. See loadFromUrl, and loadFromFile)
     * @param {string} [name=''] a name for this image. Default is an empty string
     * @param {string} [colorMap='gray'] a color map to use. default is gray
     * @param {number} [opacity=1.0] the opacity for this image. default is 1
     * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
     * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
     * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
     * @param {boolean} [visible=true] whether or not this image is to be visible
     */
    constructor(dataBuffer: any[], name?: string, colorMap?: string, opacity?: number, pairedImgData?: any, trustCalMinMax?: boolean, percentileFrac?: number, ignoreZeroVoxels?: boolean, visible?: boolean, isDICOMDIR?: boolean, useQFormNotSForm?: boolean);
    DT_NONE: any;
    DT_UNKNOWN: any;
    DT_BINARY: any;
    DT_UNSIGNED_CHAR: any;
    DT_SIGNED_SHORT: any;
    DT_SIGNED_INT: any;
    DT_FLOAT: any;
    DT_COMPLEX: any;
    DT_DOUBLE: any;
    DT_RGB: any;
    DT_ALL: any;
    DT_INT8: any;
    DT_UINT16: any;
    DT_UINT32: any;
    DT_INT64: any;
    DT_UINT64: any;
    DT_FLOAT128: any;
    DT_COMPLEX128: any;
    DT_COMPLEX256: any;
    DT_RGBA32: any;
    name: any;
    id: any;
    colorMap: any;
    frame4D: any;
    opacity: any;
    percentileFrac: any;
    ignoreZeroVoxels: any;
    trustCalMinMax: any;
    visible: any;
    series: any;
    hdr: any;
    nFrame4D: any;
    nVox3D: any;
    img: any;
    calculateOblique(): void;
    obliqueRAS: any;
    THD_daxes_to_NIFTI(xyzDelta: any, xyzOrigin: any, orientSpecific: any): void;
    SetPixDimFromSForm(): void;
    readDICOM(buf: any): any[];
    readECAT(buffer: any): any[];
    readV16(buffer: any): any;
    readVMR(buffer: any): any;
    readMGH(buffer: any): any;
    readHEAD(dataBuffer: any, pairedImgData: any): any;
    readMHA(buffer: any, pairedImgData: any): any;
    readMIF(buffer: any, pairedImgData: any): any[];
    readNRRD(dataBuffer: any, pairedImgData: any): any;
    calculateRAS(): void;
    mm000: any;
    mm100: any;
    mm010: any;
    mm001: any;
    dimsRAS: any;
    pixDimsRAS: any;
    permRAS: any;
    toRAS: any;
    matRAS: any;
    vox2mm(XYZ: any, mtx: any): vec3;
    mm2vox(mm: any): number[];
    arrayEquals(a: any, b: any): boolean;
    /**
     * query all available color maps that can be applied to volumes
     * @param {boolean} [sort=true] whether or not to sort the returned array
     * @returns {array} an array of colormap strings
     * @example
     * myImage = NVImage.loadFromUrl('./someURL/someFile.nii.gz')
     * colormaps = myImage.colorMaps()
     */
    colorMaps(sort?: boolean): any[];
    setColorMap(cm: any): void;
    calMinMax(): any[];
    cal_min: any;
    cal_max: any;
    robust_min: any;
    robust_max: any;
    global_min: any;
    global_max: any;
    intensityRaw2Scaled(hdr: any, raw: any): any;
    saveToDisk(fnm: any, drawing8?: any): Promise<void>;
    /**
     * make a clone of a NVImage instance and return a new NVImage
     * @returns {NVImage} returns a NVImage intance
     * @example
     * myImage = NVImage.loadFromFile(SomeFileObject) // files can be from dialogs or drag and drop
     * clonedImage = myImage.clone()
     */
    clone(): NVImage;
    /**
     * fill a NVImage instance with zeros for the image data
     * @example
     * myImage = NVImage.loadFromFile(SomeFileObject) // files can be from dialogs or drag and drop
     * clonedImageWithZeros = myImage.clone().zeroImage()
     */
    zeroImage(): void;
    /**
     * Image M.
     * @typedef {Object} NVImageMetadata
     * @property {string} id - unique if of image
     * @property {number} datatypeCode - data type
     * @property {number} nx - number of columns
     * @property {number} ny - number of rows
     * @property {number} nz - number of slices
     * @property {number} nt - number of volumes
     * @property {number} dx - space between columns
     * @property {number} dy - space between rows
     * @property {number} dz - space between slices
     * @property {number} dt - time between volumes
     * @property {number} bpx - bits per voxel
     */
    /**
     * get nifti specific metadata about the image
     * @returns {NVImageMetadata} - {@link NVImageMetadata}
     */
    getImageMetadata(): NVImageMetadata;
    getValue(x: any, y: any, z: any): any;
    /**
     * calculate cuboid extents via pixdims * dims
     * @returns {number[]}
     */
    /**
     * @param {number} id - id of 3D Object (is this the base volume or an overlay?)
     * @param {WebGLRenderingContext} gl - WebGL rendering context
     * @returns {NiivueObject3D} returns a new 3D object in model space
     */
    toNiivueObject3D(id: number, gl: WebGLRenderingContext): NiivueObject3D;
}
export namespace NVImage {
    /**
     * factory function to load and return a new NVImage instance from a given URL
     * @constructs NVImage
     * @param {string} url the resolvable URL pointing to a nifti image to load
     * @param {string} [name=''] a name for this image. Default is an empty string
     * @param {string} [colorMap='gray'] a color map to use. default is gray
     * @param {number} [opacity=1.0] the opacity for this image. default is 1
     * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
     * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
     * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
     * @param {boolean} [visible=true] whether or not this image is to be visible
     * @returns {NVImage} returns a NVImage intance
     * @example
     * myImage = NVImage.loadFromUrl('./someURL/image.nii.gz') // must be served from a server (local or remote)
     */
    function loadFromUrl({ url, urlImgData, name, colorMap, opacity, trustCalMinMax, percentileFrac, ignoreZeroVoxels, visible, }?: string): NVImage;
    function readFileAsync(file: any): Promise<any>;
    /**
     * factory function to load and return a new NVImage instance from a file in the browser
     * @constructs NVImage
     * @param {string} file the file object
     * @param {string} [name=''] a name for this image. Default is an empty string
     * @param {string} [colorMap='gray'] a color map to use. default is gray
     * @param {number} [opacity=1.0] the opacity for this image. default is 1
     * @param {boolean} [trustCalMinMax=true] whether or not to trust cal_min and cal_max from the nifti header (trusting results in faster loading)
     * @param {number} [percentileFrac=0.02] the percentile to use for setting the robust range of the display values (smart intensity setting for images with large ranges)
     * @param {boolean} [ignoreZeroVoxels=false] whether or not to ignore zero voxels in setting the robust range of display values
     * @param {boolean} [visible=true] whether or not this image is to be visible
     * @returns {NVImage} returns a NVImage intance
     * @example
     * myImage = NVImage.loadFromFile(SomeFileObject) // files can be from dialogs or drag and drop
     */
    function loadFromFile({ file, name, colorMap, opacity, urlImgData, trustCalMinMax, percentileFrac, ignoreZeroVoxels, visible, isDICOMDIR, }?: string): NVImage;
    function loadFromBase64({ base64, name, colorMap, opacity, trustCalMinMax, percentileFrac, ignoreZeroVoxels, visible, }?: {
        base64?: any;
        name?: string;
        colorMap?: string;
        opacity?: number;
        trustCalMinMax?: boolean;
        percentileFrac?: number;
        ignoreZeroVoxels?: boolean;
        visible?: boolean;
    }): Promise<any>;
    /**
     * a factory function to make a zero filled image given a NVImage as a reference
     * @param {NVImage} nvImage an existing NVImage as a reference
     * @param {dataType} string the output data type. Options: 'same', 'uint8'
     * @returns {NVImage} returns a new NVImage filled with zeros for the image data
     * @example
     * myImage = NVImage.loadFromFile(SomeFileObject) // files can be from dialogs or drag and drop
     * newZeroImage = NVImage.zerosLike(myImage)
     */
    function zerosLike(nvImage: NVImage, dataType?: string): NVImage;
}
/**
 * Image M.
 */
export type NVImageMetadata = {
    /**
     * - unique if of image
     */
    id: string;
    /**
     * - data type
     */
    datatypeCode: number;
    /**
     * - number of columns
     */
    nx: number;
    /**
     * - number of rows
     */
    ny: number;
    /**
     * - number of slices
     */
    nz: number;
    /**
     * - number of volumes
     */
    nt: number;
    /**
     * - space between columns
     */
    dx: number;
    /**
     * - space between rows
     */
    dy: number;
    /**
     * - space between slices
     */
    dz: number;
    /**
     * - time between volumes
     */
    dt: number;
    /**
     * - bits per voxel
     */
    bpx: number;
};
import { vec3 } from "gl-matrix";
import { NiivueObject3D } from "@niivue/niivue/src/niivue-object3D";
