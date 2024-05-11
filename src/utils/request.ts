export default function request(options) {
    return new Promise((resolve, reject) => {
        // 设置默认配置
        const defaultOptions = {
            url: 'https://apigw.to8to.com/cgi/gw/get/floatingConfig',
            method: 'GET',
            data: {},
            header: {
                'content-type': 'application/json;charset=UTF-8',
            },
            dataType: 'json',
        }

        // 合并用户配置和默认配置
        const opt = Object.assign({}, defaultOptions, options)

        // 发起请求
        uni.request(opt)
            .then(res => {
                // 请求成功处理
                if (res.statusCode === 200) {
                    resolve(res.data)
                } else {
                    // 根据需要处理非200状态码
                    reject(res.errMsg)
                }
            })
            .catch(err => {
                // 错误处理
                reject(err)
            })
    })
}