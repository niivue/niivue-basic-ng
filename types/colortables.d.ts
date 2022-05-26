export class colortables {
    colorMaps(sort?: boolean): string[];
    colormap(lutName?: string): Uint8ClampedArray;
    colormapFromKey(name: any): any;
    makeLut(Rs: any, Gs: any, Bs: any, As: any, Is: any): Uint8ClampedArray;
}
