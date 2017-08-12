# moivecat
cat host moive..


## 使用指南
- 直接调用`npm run start`或者`npm start`
- 测试阶段请调用`npm run test`或者`npm test`


### 开发阶段依赖
- `http-server` : 在本地架起一个服务器,方便我们本地预览使用
- `browser-sync` : 也是在本地架起一个http服务器,当我们做网页适配的时候,可以帮助我们做浏览器同步

### package.json 中的`scripts`属性
- `scripts`:在package.json中的script中可以书写脚本,命令,通过`npm run xx`的形式运行
- start : 项目开始时调用
- prestart : 在运行start前会先运行prestart命令
- postinstall : 在prestart命令执行完毕之后会调用postinstall命令
- test : 测试阶段调用test指令
- pretest : 在test测试指令执行之前会先调用pretest指令

### `.bowerrc`
- `bower`安装依赖的时候是可以指定安装路径的,需要在`.bowerrc`内配置directory


### .gitignore
- git的忽略文件

### .editorconfig
- 统一不同开发者的不同开发工具中的不同配置
    - 比如说:不同开发工具中字体缩进,这些东西,我们统一格式
- 在Sublime中使用需要安装一个`EditorConfig`的插件
