/**
 * @class Shader
 * @type Shader
 * @constructor
 * @param {WebGL2RenderingContext} gl
 * @param {string} vertexSrc
 * @param {string} fragmentSrc
 */
export function Shader(gl: WebGL2RenderingContext, vertexSrc: string, fragmentSrc: string): void;
export class Shader {
    /**
     * @class Shader
     * @type Shader
     * @constructor
     * @param {WebGL2RenderingContext} gl
     * @param {string} vertexSrc
     * @param {string} fragmentSrc
     */
    constructor(gl: WebGL2RenderingContext, vertexSrc: string, fragmentSrc: string);
    program: any;
    uniforms: any;
    use(gl: any): void;
}
export function compileShader(gl: any, vert: any, frag: any): any;
export function getGLExtension(gl: any, ext: any): boolean;
