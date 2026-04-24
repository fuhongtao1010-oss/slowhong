# 来源：小白的"4步"VPS自建翻墙节点实战教程

- **作者**：Benjieming（@Benjieming1Q84）
- **发布时间**：2026-04-16 14:05（美国东部时间）
- **原始链接**：https://x.com/benjieming1q84/status/2044658383547252887
- **数据**：16条回复 · 68次转发 · 238个点赞 · 423次收藏 · 27K浏览

---

## 摘要

一篇面向小白的VPS自建翻墙节点实战教程，分4步完成：购买VPS、登录VPS、安装X-UI面板、搭建节点。附优惠码、工具推荐和问题解决建议。

---

## 核心内容

### 前言

作者自述买的VPS月付2.99U，重度使用者需多对比。香港和马来西亚节点据说最好，但购买时香港缺货，目前用韩国节点。速度如图所示表现尚可。

---

### 第一步：购买VPS

推荐平台：**Evoxt** 或 **Mikyhost**，作者选了Evoxt。

- 官网注册地址（含affiliate）：https://console.evoxt.com/aff.php?aff=3927
- 优惠码：`AFF3927-88`，享5%折扣
- 推荐节点：香港或马来西亚（作者购买时香港缺货，选了韩国节点）
- 推荐系统：**Ubuntu**
- 付款方式：支持**支付宝**
- 购买后获得3项关键信息（备用）：
  - IP Address（如 `136.0.5.XXX`）
  - Username（如 `root`）
  - Password（如 `hdw3aeK7YXXXXX`）

---

### 第二步：登录VPS

工具：**FinalShell**（电脑上下载安装）

下载地址：https://www.hostbuf.com/t/988.html

操作步骤：
1. 点击左上角白色文件夹的"＋"号，选择 **SSH链接**
2. 填写4个信息：
   - **名称**：随便取
   - **主机**：VPS的IP地址
   - **用户名**：VPS的用户名（一般是 `root`）
   - **密码**：VPS的密码
3. 双击或右键选择**连接**
4. 连接成功后出现 `root@XXXXX:~#` 提示符
5. 升级VPS系统，运行：
   ```
   apt update -y && apt upgrade -y && apt install sudo curl -y
   ```
   - 此过程耗时较长，耐心等待
   - 再次出现 `root@XXXXX:~#` 即升级成功

---

### 第三步：安装X-UI面板

在FinalShell运行安装命令：

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

打开和设置X-UI面板：
1. 在FinalShell运行 `x-ui`，调出菜单（0-26，共27项）
2. 输入 `10`，查看3个关键信息：
   - 面板登录网站
   - 用户名
   - 密码
3. 如果只有网站没有用户名和密码，在菜单输入 `6` 重置

---

### 第四步：搭建节点

1. 打开X-UI面板（输入之前获得的网站、账户、密码登录）
2. 点击左侧"**入站列表**"，点击"**添加入站**"
3. 选择 **VLESS + TCP + Reality** 组合（作者使用的配置）
4. 填写Reality信息时，**Target** 和 **SNI** 改成 `apple` 或 `microsoft`
5. 点击"**Get New Cert**"，再点击"**创建**"
6. 创建完成后，点击左侧**二维码**，复制**订阅链接**导入翻墙软件
7. 若速度慢，打开 **BBR加速**：
   - FinalShell运行 `x-ui`，菜单输入 `24`，选择 **Enable BBR**

---

### 参考资料

- 油管视频教程：https://www.youtube.com/watch?v=MuWTmEiNe1g&t=529s
- 作者过往问题记录：https://x.com/benjieming1q84/status/2042909718264582475

---

标签：#翻墙 #VPS #X-UI #Reality #教程 #小白
