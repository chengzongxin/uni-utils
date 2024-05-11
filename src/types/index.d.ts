
declare module 'uni-utils' {
  /**
 * 登录态
 */
  type LoginInfo = {
    uid: number,
    ticket: string
  }

  /**
   * 获取私有链接参数
   */
  type LocalSignParams = {
    bizId: string,
    fullpath: string,
    env: string,
    expire: number,
    accessType: string,
    customPath: string
    accountId?: number,
    appName?: string
  }

}
