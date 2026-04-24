[
远程遥控你的 Claude 龙虾：Claude Code 从 0 到 1 接入 Telegram 官方插件教程！
![Image](https://pbs.twimg.com/media/HD0-dYGboAIqDIo?format=jpg&name=900x900)





](https://x.com/tychozzz/article/2034851642521395214/media/2034851281047887874)

![🦞](https://abs-0.twimg.com/emoji/v2/svg/1f99e.svg "Lobster") 远程遥控你的 Claude 龙虾：Claude Code 从 0 到 1 接入 Telegram 官方插件教程！

  
1 万

今天早上 Claude Code 官方正式推出了 channels 插件，支持接入 Telegram 或者 Discord。  
今天早上 Claude Code 官方正式推出了 channels 插件，支持接入 Telegram 或 Discord。

这意味着你出门在外，手机上发一句话，家里的 Claude Code 就可以开始干活了。

[

![Image](https://pbs.twimg.com/media/HD0-os3boAYNP0M?format=jpg&name=medium)





](https://x.com/tychozzz/article/2034851642521395214/media/2034851475600678918)

❌ OpenClaw 龙虾 🦞

✅ Claude Code 龙虾 🦞

早上我实际测试了一遍，照着官方文档操作，3 分钟时间就可以搞定。

接下来我就快速给大家演示一下，如何将 Claude Code 接入 Telegram 电报机器人，远程遥控你的 Claude Code Agent！

如下图所示，打开你的 Terminal 终端，输入 /plugin install telegram@claude-plugins-official 命令，安装 Telegram 插件。

直接保持默认，一直回车完成安装。

[

![Image](https://pbs.twimg.com/media/HD08eWaboAEPB8A?format=jpg&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849098751516673)

插件安装成功。

[

![Image](https://pbs.twimg.com/media/HD08i11boAEG2TL?format=jpg&name=medium)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849175905738753)

按照提示，输入 /reload-plugins，完成重新加载。

[

![Image](https://pbs.twimg.com/media/HD08nOkboAMqHwz?format=jpg&name=medium)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849251264798723)

接着，打开 Telegram，全局搜索 BotFather。

在聊天框中，输入 /newbot，创建机器人。

接着继续输入机器人的名字，我就叫它“Nico投研Agent”。

接着继续输入机器人的唯一 ID。

复制一下这里的机器人 Token。

[

![Image](https://pbs.twimg.com/media/HD08r8GboAMUyKC?format=png&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849332206477315)

回到 Terminal 终端，继续输入命令：/telegram:configure [你的Bot-Token粘贴在这里]

如果这一步提示报错的话，退出 Claude，通过这个命令重新启动 claude --channels plugin:telegram@claude-plugins-official

[

![Image](https://pbs.twimg.com/media/HD08xgga8AEGoTd?format=jpg&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849427878506497)

接下来，Claude 会提示我们，需要到刚刚创建的 Telegram 机器人中，随便给机器人发一句话，获得一个配对码。

[

![Image](https://pbs.twimg.com/media/HD083FPboAQzJ2h?format=jpg&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849523638706180)

接着打开 Telegram，搜索刚才创建好的机器人 ID，打开对话。

获取到红框中的那行命令，复制一下。

如果你这一步发了消息之后，机器人没有任何反应，还是按照刚才的流程：

1️⃣ 重新输入 claude --channels plugin:telegram@claude-plugins-official 启动 Claude Code

2️⃣ 然后继续输入命令：/telegram:configure [你的Bot-Token粘贴在这里]，完成 Token 配置

3️⃣ 最后再回到 Telegram 给机器人发消息，应该就可以收到配对码了。

[

![Image](https://pbs.twimg.com/media/HD0882GboAESkMk?format=png&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849622653640705)

接着回到终端，输入刚才复制的那一行命令，然后一直按回车。

[

![Image](https://pbs.twimg.com/media/HD09CDHaMAAgDQa?format=jpg&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849712046747648)

配对之后，输入 yes。这样它会把 DM 策略从 pairing 切换到 allowlist，之后只有你一个人能跟 Bot 对话，陌生人发消息过来拿不到配对码。

[

![Image](https://pbs.twimg.com/media/HD09JkOboAUCTq0?format=jpg&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849841193656325)

接着在电报机器人中发一条消息。回到终端，我们选择第二个，之后就不需要重复确认了。

[

![Image](https://pbs.twimg.com/media/HD09RDHboAESNDy?format=jpg&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034849969744879617)

到此为止，通道就已经成功完成连接。

[

![Image](https://pbs.twimg.com/media/HD040P8boAAM8uB?format=jpg&name=medium)





](https://x.com/tychozzz/article/2034851642521395214/media/2034845076925685760)

之后就可以愉快地在手机 Telegram 上和你的 Claude Code 对话啦！  
现在你就可以在手机 Telegram 上愉快地与你的 Claude Code 聊天啦！

[

![Image](https://pbs.twimg.com/media/HD09Vs_boAAkSbB?format=png&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034850049705091072)

最后有一点需要注意，这个 Telegram 机器人仍然是连接你的本地终端，如果你的本地终端 Claude Code 关闭退出的话，这个机器人也无法回复你的消息。

建议大家直接使用 tmux 开一个后台进程，这样就不用担心手滑关掉了。

这一步直接让你的 Claude Code 帮你搞定。

[

![Image](https://pbs.twimg.com/media/HD09aHvboAIGXXf?format=png&name=small)





](https://x.com/tychozzz/article/2034851642521395214/media/2034850125605216258)

欢迎大家点赞、收藏、转发，感谢支持🙏
