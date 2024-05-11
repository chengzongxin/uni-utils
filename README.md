## 1. 直接安装

```
npm i @chengzongxin/uni-utils
```

## 2. 使用

在需要的文件中直接 import

```
import { Photo, User, UniUtils, request } from "@chengzongxin/uni-utils"
```

## 调试

要实现 JavaScript 代码修改后自动保存并自动构建（build），通常是在开发环境中配置自动构建或实时重载（LiveReload）功能。这可以通过不同的工具或框架实现，取决于你的开发环境和项目设置。以下是一些常见的方法：

Webpack + Watch Mode
如果你的项目使用 Webpack 作为构建工具，可以开启 Webpack 的 watch 模式。在你的 webpack.config.js 中可能不需要额外配置，直接在命令行运行：

```
npm run build -- --watch
```

在需要的调试的 demo 项目中引入

```
npm link @chengzongxin/uni-utils
```

之后只要修改了代码，会自动构建 Release，demo 项目也会自动运行
