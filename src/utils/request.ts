
// // request.ts
// // import { RequestOptions, ResponseType } from '@dcloudio/uni-app'
// // import { RequestSuccessCallback, RequestFailCallback } from '@dcloudio/uni-types'
// interface CustomFetchOptions {
//     // 可以在这里添加自定义的选项类型
// }

// export default async function request<T>(options: CustomFetchOptions): Promise<T> {
//     // 设置默认配置
//     const defaultOptions: CustomFetchOptions = {
//         url: '',
//         method: 'GET',
//         data: {},
//         header: {
//             'content-type': 'application/json;charset=UTF-8',
//         },
//         // responseType: 'text' as ResponseType,
//     };

//     // 合并用户配置和默认配置
//     const opt = Object.assign({}, defaultOptions, options);

//     try {
//         // 发起请求并等待结果
//         const res = await uni.request<T>({
//             ...opt,
//             // 确保返回值是Promise<T>类型
//         });

//         // 请求成功处理
//         if (res.statusCode === 200) {
//             return res.data;
//         } else {
//             // 根据需要处理非200状态码
//             throw new Error(`Request failed with status ${res.statusCode}`);
//         }
//     } catch (err) {
//         // 错误处理
//         throw err;
//     }
// }

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