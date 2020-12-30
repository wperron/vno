/**
 * Bundle Cycle Objects
 */
export interface InitializeInterface {
  root: ComponentInterface | null;
}

export interface ParserInterface {
  root: any;
  vue: string;
  parse(): any;
}

export interface CompilerInterface {
  root: ComponentInterface;
  mount: string;
  vue: string;
}

export interface RendererInterface {
  defaults: HtmlInterface;
  html: string;
}

/**
 * Data Structures
 */

export interface ComponentInterface {
  label: string;
  path: string | URL;
  child: SiblingInterface | null;
  sibling: ComponentInterface | null;
  isRoot: boolean;
  split?: string[];
  data?: string;
  runData(): boolean;
  imports?: string[];
  name?: string;
  template?: string;
  script?: string;
  style?: string;
  instance?: any;
}
export interface SiblingInterface {
  head: ComponentInterface | null;
  tail: ComponentInterface | null;
  add(component: ComponentInterface): void;
}

export interface StorageInterface {
  [key: string]: ComponentInterface;
}

/**
 * User Input Options
 */
export interface OptionsInterface {
  entry: string;
  root: string;
  vue?: string;
}

export interface HtmlInterface {
  language: string;
  title: string;
  root: string;
  vue: string;
  link: any;
  script: any;
  meta: MetaInterface;
  build: BuildInterface;
}

interface MetaInterface {
  charset: string;
  httpEquiv: string[];
  viewport: string;
}

interface BuildInterface {
  bundle: string;
  style: string;
}

/**
 * Utils
 */

export interface UtilityInterface {
  indexOfRegExp(regex: RegExp, array: any[]): number;
  sliceAndTrim(
    array: any[],
    start: number,
    end: number,
    regex?: RegExp,
    replaced?: string,
  ): string;
  toKebab(str: string): string;
  print(): true;
}