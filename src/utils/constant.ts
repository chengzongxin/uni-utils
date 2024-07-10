
// http://wiki.we.com:8090/pages/viewpage.action?pageId=60825281
const FROMTYPE = 3 // 发标来源入口

let thirdType: number = 0 // 未知 third_type

let appName: string = '' // 不同端小程序的appName 用来和token绑定鉴权

let defaultFrom: string = ''

const showVideoLive: boolean = false // false 不显示视频和直播, 一个开关

// /** 土巴兔服务协议页面链接 */
// const serviceProtocalPage = `${webPageUrl}?url=${encodeURIComponent(
//   'https://mapp.to8to.com/about/artical/detail/26?appostype=3'
// )}&title=土巴兔用户服务协议`
// /** 隐私政策页面链接 */
// const pravicyProtocalPage = `${webPageUrl}?url=${encodeURIComponent(
//   'https://mapp.to8to.com/about/artical/detail/27?appostype=3'
// )}&title=土巴兔隐私政策`

// #ifdef MP-WEIXIN
thirdType = 2
appName = 't8t-houseDesign'

defaultFrom = 'wxxcx_default_cc'
// #endif

// #ifdef MP-KUAISHOU
thirdType = 0 // 第三方帐号类型
appName = 't8t-ksxcx-jj'
// #endif

// #ifdef MP-BAIDU
thirdType = 3
appName = 't8t-bdxcx-jj'
defaultFrom = 'seo_baidu_xcx'
// #endif

// #ifdef MP-TOUTIAO
thirdType = 4
appName = 't8t-ttxcx-jj'

defaultFrom = 'ttxcx_default_cc' // 'toutiao_xcx'
// #endif

// #ifdef MP-ALIPAY
appName = 't8t-alipay-mpro'
thirdType = 6
// https://www.tapd.cn/22332451/prong/stories/view/1122332451001072859
// UC/夸克小程序使用 seo_sm_xcx
// 支付宝使用 zhifubao_xiaochengxu
defaultFrom = 'zhifubao_xiaochengxu'
// defaultFrom = 'seo_sm_xcx'
// #endif

const appVersion: string = '9.25.0'

const tumaxAppName = 't8t-app' // tumax那边的接口不支持t8t-houseDesign，要求写死t8t-app

export {
    thirdType,
    appName,
    tumaxAppName,
    //   appType,
    defaultFrom,
    appVersion,
    showVideoLive,
    FROMTYPE,
    //   serviceProtocalPage,
    //   pravicyProtocalPage,
}
