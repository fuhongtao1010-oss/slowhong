# A股趋势分析工具

## 项目概述

这是一个使用Python Flask框架构建的A股趋势分析工具，支持多只股票同时分析，集成AKShare和MiniMax API。

## 功能特点

1. 支持多只股票同时分析
2. 集成AKShare获取实时行情数据
3. 计算并显示移动平均线等技术指标
4. 生成趋势评分和标签
5. 提供Web界面供用户输入股票代码并查看分析结果

## 使用方法

1. 安装依赖: `pip install -r requirements.txt`
2. 配置环境变量: 在`.env`文件中设置`MINIMAX_API_KEY`
3. 运行应用: `python app.py`
4. 在浏览器中访问: `http://localhost:5000`

## 后续升级方向

1. 添加详细的图表分析
2. 集成更多技术指标
3. 与MiniMax API集成进行更深入的分析
4. 添加详细的解释和风险提示