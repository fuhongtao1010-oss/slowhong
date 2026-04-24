---
type: workflow
tags:
  - hermes
  - model
  - kimi
  - nvidia
  - tutorial
created: 2026-04-21
---

# Hermes 更换大模型详细教程（MiniMax 改 NVIDIA Kimi 2.5）

这篇是给小白看的实操版。

目标只有一件事：
把 Hermes 现在正在用的模型，从 `MiniMax-M2.7` 改成 NVIDIA 接口里的 `Kimi 2.5`。

这次实际改成功后的关键值是：

- 模型名：`moonshotai/kimi-k2.5`
- provider：`custom`
- 接口地址：`https://integrate.api.nvidia.com/v1`
- API key：你自己的 `nvapi-...`

注意：
不要把模型名写成 `kimi2.5`。
这次能正常识别的写法是 `moonshotai/kimi-k2.5`。

---

## 一、先搞懂：到底改的是哪一个文件

Hermes 的主配置文件在：

```bash
/home/hong/.hermes/config.yaml
```

你要改的就是它。

这个文件里有两个地方和模型有关：

1. 顶部的 `model:`  
这是 Hermes 平时主对话默认用的模型。

2. 下面的 `delegation:`  
这是 Hermes 需要把任务分发给子助手时用的模型。

如果你只改上面，不改下面，结果通常是：

- 平时聊天已经换了
- 但一到 delegation、子任务、分流，还在偷偷用旧模型

所以这次要两个地方一起改。

---

## 二、开始前先做 3 件事

### 1. 确认你有 NVIDIA 的 API key

应该长这样：

```text
nvapi-xxxxxxxxxxxxxxxx
```

如果没有 key，后面改完也用不了。

### 2. 确认你有终端

这篇教程默认你在 Linux 终端里操作。

### 3. 先备份原配置

这是非常重要的一步。

执行：

```bash
cp /home/hong/.hermes/config.yaml /home/hong/.hermes/config.yaml.bak
```

这条命令的作用是：
把当前正在使用的配置文件，复制一份备份。

如果你后面改错了，可以直接恢复：

```bash
cp /home/hong/.hermes/config.yaml.bak /home/hong/.hermes/config.yaml
```

---

## 三、先看一眼你当前的配置是不是旧模型

执行：

```bash
sed -n '1,12p' /home/hong/.hermes/config.yaml
```

如果你之前还在用 MiniMax，一般会看到类似：

```yaml
model:
  default: MiniMax-M2.7
  provider: minimax-cn
  base_url: https://api.minimaxi.com/v1
```

再看 delegation：

```bash
sed -n '225,235p' /home/hong/.hermes/config.yaml
```

可能会看到类似：

```yaml
delegation:
  model: MiniMax-M2.7
  provider: minimax-cn
```

如果你看到的是这些，就说明你确实还在旧配置上。

---

## 四、正确配置长什么样

这次要改成下面这样。

### 1. `model:` 这一段应该改成

```yaml
model:
  default: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
  api_key: 你的 nvapi key
```

### 2. `delegation:` 这一段应该改成

```yaml
delegation:
  model: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
  api_key: 你的 nvapi key
  max_iterations: 50
  reasoning_effort: medium
```

---

## 五、最简单的修改方法

### 方法 A：直接编辑文件

如果你会用编辑器，直接打开：

```bash
nano /home/hong/.hermes/config.yaml
```

然后：

1. 找到最上面的 `model:`
2. 把里面旧的 `MiniMax-M2.7`、`minimax-cn`、旧 `base_url` 改掉
3. 往下找到 `delegation:`
4. 把里面旧模型也改掉
5. 保存退出

如果你用的是 `nano`：

- 保存：`Ctrl + O`
- 回车确认
- 退出：`Ctrl + X`

---

## 六、直接照抄的完整参考配置

下面这段是这次成功配置后的核心部分。

注意：
`api_key` 那一行要换成你自己的，不要照抄别人的 key。

```yaml
model:
  default: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
  api_key: nvapi-替换成你自己的key

delegation:
  model: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
  api_key: nvapi-替换成你自己的key
  max_iterations: 50
  reasoning_effort: medium
  default_toolsets:
  - terminal
  - file
  - web
```

---

## 七、改完以后怎么检查有没有写对

### 第一步：检查主模型

执行：

```bash
sed -n '1,12p' /home/hong/.hermes/config.yaml
```

你应该看到：

```yaml
model:
  default: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
```

### 第二步：检查 delegation

执行：

```bash
sed -n '225,234p' /home/hong/.hermes/config.yaml
```

你应该看到：

```yaml
delegation:
  model: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
```

### 第三步：用 Hermes 自己的状态命令确认

执行：

```bash
/home/hong/.hermes/hermes-agent/venv/bin/hermes status
```

如果配置已经生效，状态里应该能看到类似：

```text
Model:        moonshotai/kimi-k2.5
Provider:     Custom endpoint
```

这一步最关键。

因为它不是看“你文件里写了什么”，而是看“Hermes 现在读到的配置是什么”。

---

## 八、什么时候需要重启 Hermes

分两种情况。

### 情况 1：Hermes 网关没在跑

如果你执行 `hermes status` 后看到：

```text
Gateway Service: stopped
```

那就说明后台网关当前没运行。

这种情况下：
你改完配置就行。
下次启动 Hermes 时，会自动读新配置。

### 情况 2：Hermes 网关正在跑

如果后台服务正在运行，老进程可能还拿着旧配置。

这时你需要重启。

最稳妥的是先看帮助：

```bash
/home/hong/.hermes/hermes-agent/venv/bin/hermes gateway --help
```

如果你是用 systemd 跑的用户服务，也可能需要：

```bash
systemctl --user restart hermes
```

如果你不知道自己是不是 systemd 起的，不要乱杀进程。
先看 `hermes status` 和 `hermes gateway --help`。

---

## 九、最容易踩的坑

### 坑 1：模型名写错

错误写法：

```text
kimi2.5
kimi-2.5
kimi2-5
```

这次实际能用的写法是：

```text
moonshotai/kimi-k2.5
```

### 坑 2：provider 还写成 `minimax-cn`

如果你现在走的是 NVIDIA 的接口，就不应该再写：

```yaml
provider: minimax-cn
```

要改成：

```yaml
provider: custom
```

因为这是一个自定义 OpenAI 兼容接口。

### 坑 3：只改主模型，不改 delegation

这样会出现表面已经换了，但子任务仍然走旧模型。

### 坑 4：把别人的 API key 直接抄进教程或仓库

建议只在你本机的实际配置文件里写 key。

在教程、笔记、截图里，尽量写成：

```text
nvapi-替换成你自己的key
```

### 坑 5：以为改完文件就 100% 生效

真正保险的判断标准不是“我改了”，而是：

```bash
hermes status
```

里面已经显示：

- `Model: moonshotai/kimi-k2.5`
- `Provider: Custom endpoint`

---

## 十、给完全新手的最短版流程

如果你嫌上面太长，只照这个做：

### 1. 备份

```bash
cp /home/hong/.hermes/config.yaml /home/hong/.hermes/config.yaml.bak
```

### 2. 打开配置文件

```bash
nano /home/hong/.hermes/config.yaml
```

### 3. 把 `model:` 改成

```yaml
model:
  default: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
  api_key: nvapi-替换成你自己的key
```

### 4. 把 `delegation:` 改成

```yaml
delegation:
  model: moonshotai/kimi-k2.5
  provider: custom
  base_url: https://integrate.api.nvidia.com/v1
  api_key: nvapi-替换成你自己的key
```

### 5. 保存退出

### 6. 验证

```bash
/home/hong/.hermes/hermes-agent/venv/bin/hermes status
```

### 7. 看到这两行就算成功

```text
Model:        moonshotai/kimi-k2.5
Provider:     Custom endpoint
```

---

## 十一、这次我实际替你改动的内容

这次实际已经改成功的文件是：

```text
/home/hong/.hermes/config.yaml
```

实际结果是：

- Hermes 主模型已切到 `moonshotai/kimi-k2.5`
- provider 已切到 `custom`
- base_url 已切到 `https://integrate.api.nvidia.com/v1`
- delegation 也同步切到了同一套配置

---

## 十二、以后如果想换回 MiniMax

思路也一样：

1. 打开 `config.yaml`
2. 把 `model:` 和 `delegation:` 一起改回去
3. `provider` 改回对应的 provider
4. `base_url` 和 `api_key` 改回原来的
5. 再跑一次 `hermes status` 确认

不要只改一半。

---

## 十三、一句话结论

这次更换 Hermes 大模型，本质上就是改 `config.yaml` 里的两块：

- `model`
- `delegation`

并且把它们都统一成：

- 模型：`moonshotai/kimi-k2.5`
- provider：`custom`
- 接口：`https://integrate.api.nvidia.com/v1`

最后用 `hermes status` 验证，看到 `Custom endpoint + moonshotai/kimi-k2.5`，才算真正完成。
