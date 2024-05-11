
/// <reference path="./src/types/index.d.ts"  />
declare class UniUtils {


  static readonly ACCESS_TYPE = 'ACCESS_TYPE'
  static readonly ACCESS_TYPE1 = 'ACCESS_TYPE1'

  splicePath: (path: string, version: number, bizId: string, customPath: string) => string

  upload: () => Promise<any>

  downloadPrivate: () => Promise<any>
}

declare function request<T>(options: any): Promise<T>

declare class Photo {
  name: string;
}

declare class User {
  name: string;
}

export default UniUtils


export * from 'uni-utils'