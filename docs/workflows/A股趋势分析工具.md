# A股趋势分析网页工具使用说明

## 项目概述
本项目是一个基于Python Flask框架构建的A股趋势分析工具，可以分析A股股票的实时趋势，计算技术指标并生成趋势评分。

## 使用方法

1. 安装依赖:
   pip install -r requirements.txt

2. 配置环境变量:
   在`.env`文件中设置`MINIMAX_API_KEY`

3. 运行应用:
   python app.py

4. 在浏览器中访问:

## 项目文件说明

- app.py: 主应用文件
- templates/index.html: 前端界面
- requirements.txt: 依赖文件
- .env: 环环境变量配置文件

## 后续开发计划

1. 添加详细的图表分析
2. 集成更多技术指标
3. 与MiniMax API集成进行更深入的分析
4. 添加详细的解释和风险提示