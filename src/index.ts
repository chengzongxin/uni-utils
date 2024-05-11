export default class UniUtils {
    name: string;
    version: string;

    constructor() {
        this.name = 'utils'
        this.version = '1.0.0'
    }

    /**
     * 组织上传文件的路径
     * 注：v3版本传入path，签名接口的响应数据会拼接上bizId + customPath。
     * 其他版本不会做这样的处理，故v2在前端处理拼接
     * @param version 签名接口版本
     * @param bizId bizId
     * @param customPath customPath
     * @param path path
     */
    splicePath(path: string, version: number, bizId: string, customPath: string) {
        const arr = [];
        if (version === 2) {
            if (bizId) {
                arr.push(bizId);
            }
            if (customPath) {
                arr.push(customPath);
            }
        }
        arr.push(path.replace(/^\//, ''));
        return arr.join('/');
    }


    /**
    * 统一环境变量key
    * @param originEnv 
    * @returns 
    */
    unifyEnv(originEnv: string): string {
        const dev = ['dev', 'develop', 'development']
        const test = ['test']
        const uat = ['uat', "prev"]
        const prod = ['prod', 'production', 'online', "master", "main"]
        return dev.includes(originEnv) && "dev" || test.includes(originEnv) && "test" || uat.includes(originEnv) && "uat" || prod.includes(originEnv) && "prod";
    }

}
