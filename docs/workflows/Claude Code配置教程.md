可以，给你一版**下次照着做的最简总结**。

## 这次真正的问题

不是 Claude Code 坏了，也不是你不会用。

问题是这几个点：

1. 之前配的接口地址不对
    
2. 还混进过旧的 Anthropic 配置
    
3. 你是**中国区 MiniMax 用户**，所以地址要用中国区的
    
4. MiniMax Coding Plan 要用它自己的 key
    

---

## 你最后成功的正确配置

你现在能用，是因为用了这两个环境变量：

```bash
export ANTHROPIC_BASE_URL="https://api.minimaxi.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="你的sk-cp开头的MiniMax key"
```

注意：

- 中国用户用 `api.minimaxi.com`
    
- 不是 `api.minimax.com`
    
- 也不是国际区那个 `api.minimax.io`
    

---

## 下次如果要重新配，直接按这个流程

### 第一步：先清掉旧配置

```bash
unset ANTHROPIC_API_KEY
unset ANTHROPIC_AUTH_TOKEN
unset ANTHROPIC_BASE_URL
```

### 第二步：重新设置正确的 MiniMax 中国区配置

```bash
export ANTHROPIC_BASE_URL="https://api.minimaxi.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="你的sk-cp开头的MiniMax key"
```

### 第三步：检查有没有设置成功

```bash
env | grep ANTHROPIC
```

正常应该看到类似：

```bash
ANTHROPIC_BASE_URL=https://api.minimaxi.com/anthropic
ANTHROPIC_AUTH_TOKEN=sk-cp-xxxxxx
```

### 第四步：启动 Claude Code

```bash
claude
```

### 第五步：测试一下

进去后输入：

```text
你好
```

如果能正常回复，就说明好了。

---

## 这次你踩过的坑

以后你一看到这些，就知道哪里有问题：

### 1. 出现登录网页

比如让你去 `platform.claude.com` 登录。

这说明你走到 **Anthropic 官方登录流程** 里了，不是 MiniMax 的方式。  
这时候不要继续，直接退出。

### 2. 出现这个报错

```text
insufficient balance (1008)
```

这次它其实是因为前面的配置混乱、地址不对、旧配置干扰，不是你订阅一定没流量。

### 3. 地址写错

你之前写过：

```bash
https://api.minimax.com/anthropic
```

这个不对。

你作为中国用户，要用：

```bash
https://api.minimaxi.com/anthropic
```

---

## 最后记住两句话就够了

### 你是中国区 MiniMax 用户时：

```bash
ANTHROPIC_BASE_URL=https://api.minimaxi.com/anthropic
```

### 你要用的是：

```bash
ANTHROPIC_AUTH_TOKEN=你的sk-cp开头的key
```

不是网页登录，不是乱选 Anthropic 账号登录。

---

## 你现在最推荐的用法

每次新开终端，如果没做永久保存，就先输：

```bash
export ANTHROPIC_BASE_URL="https://api.minimaxi.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="你的sk-cp开头的MiniMax key"
claude
```

这三行基本就够了。

如果你要，我下一条可以直接给你一份 **“永久保存到 Linux Mint 里”的命令**，以后开终端不用再重复输入。