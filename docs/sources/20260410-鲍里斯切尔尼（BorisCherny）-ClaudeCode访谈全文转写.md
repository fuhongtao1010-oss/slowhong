---
type: source
source_type: transcript
author: Boris Cherny
platform: X / Podcast Video
url: https://x.com/billtheinvestor/status/2042312202733174838?s=46
tags: [source, transcript, claude-code, vibe-coding, ai-编程, coding-agents]
---

# 2026-04-10 - Boris Cherny - Claude Code 访谈全文转写

## 摘要
这是一份从 X 视频中提取出的完整自动转写稿。视频内容是 Claude Code 负责人 Boris Cherny 的长访谈，核心围绕：AI 编程工作流、vibe-coding、多 agent 并行、反馈驱动开发、AI 对产品经理/设计/数据等相邻岗位的影响，以及构建 AI 产品时该如何利用模型与工具能力。

## 使用说明
- 这是自动转写稿，不是人工逐字校对版。
- 整体内容已经完整拉出，适合后续继续做精修、切章节、提炼金句、做更细教程。
- 如果后续要高质量引用，建议对关键段落再做一轮人工校正。

## 关键信息
- 访谈核心对象：Anthropic Claude Code 负责人 Boris Cherny
- 主要主题：Claude Code、vibe-coding、并行 agent、反馈闭环、AI 产品方法论
- 这份页面的价值是“保留整篇原始材料”，而不是只保留推荐帖摘要

## 相关页面
- 20260410-比尔投资者（BillTheInvestor）-ClaudeCode负责人播客推荐.md
- AI 编程工具与氛围式编程
- Claude Code 与氛围式编程教程整理

## 全文转写

[0.0-6.3] A hundred percent of my code is written by Quackode. I have not edited it a single line by hand since November.
[6.3-10.7] Every day I ship 10, 20, 30, 4 requests. So like at the moment I have like 5 agents running.
[10.7-16.2] While recording this, yeah, you miss writing code. I have never enjoyed coding as much as I do today.
[16.2-21.2] Because I don't have to deal with all the minutiae of productivity per engineer has increased 200%.
[21.2-24.1] There's always this question. Should I learn to go in a year or two, it's not gonna matter.
[24.1-25.4] Coding is largely solved.
[25.4-28.0] I imagine a world where everyone is able to program.
[28.0-32.2] Anyone can just build software anytime. What's the next big shift to how software is written?
[32.2-34.9] Cloud is starting to come up with ideas. Looking through feedback.
[34.9-39.2] It's looking at bug reports. It's looking at telemetry for bug fixes and things to ship.
[39.2-44.6] A little more like a coworker or something like that. A lot of people listening to this robotic managers and they're probably sweating.
[44.6-47.6] I think by the end of the year everyone's gonna be a product manager and everyone codes.
[47.6-53.4] The title software engineer is gonna start to go away. It's just gonna be replaced by builder and it's gonna be painful for a lot of people.
[53.4-60.2] Today my guest is Boris, attorney, head of Claude, Code, Ad and Thropic.
[60.5-64.9] It is hard to describe the impact that Claude Code has had on the world.
[64.9-69.1] Around the time this episode comes out will be the one year anniversary of Claude Code.
[69.1-74.5] And in that short time, it is completely transformed the job of a software engineer.
[74.5-79.8] And it is now starting to transform the jobs of many other functions in tech, which we talk about.
[79.8-85.7] Claude Code itself is also a massive driver of anthropics over all growth over the past year.
[85.8-89.2] They just raised around it over $350 billion.
[89.2-93.7] In his Boris mentions, the growth of Claude Code itself is still accelerating.
[93.7-96.6] Just in the past month, their daily active users has doubled.
[96.6-101.0] Boris is also just a really interesting, thoughtful, deep-thinking human.
[101.0-105.7] And during this conversation, we discover we were born in the same city in Ukraine.
[105.7-107.8] That is so funny, I had no idea.
[107.8-112.9] A huge thank you to Ben Mann, Jenny Wend and Mike Krieger for suggesting topics for this conversation.
[112.9-119.9] Don't forget to check out Lenny's productpast.com for an incredible set of deals available exclusively to Lenny's newsletter subscribers.
[119.9-123.9] Let's get into it after a short word from our wonderful sponsors.
[123.9-133.9] Today's episode is brought to you by DX, the developer intelligence platform designed by leading researchers to thrive in the AI era, organizations need to adapt quickly.
[133.9-140.9] But many organizations need to struggle to answer pressing questions like, which tools are working, how are they being used?
[140.9-142.9] It's actually driving value.
[142.9-147.4] DX provides the data and insights that leaders need to navigate this shift.
[147.4-155.9] With DX companies like Dropbox, booking.com, Adian, and Intercom, get a deep understanding of how AI is providing value to their developers,
[155.9-158.9] and what impact AI is having an engineering productivity.
[158.9-163.9] To learn more, visit DX's website at getdx.com slash Lenny.
[163.9-166.9] That's getdx.com slash Lenny.
[166.9-169.9] Applications break in all kinds of ways.
[169.9-174.9] Crashes, slowdowns, regressions, and the stuff that you only see once real users show up.
[174.9-176.9] Century catches at all.
[176.9-186.9] See what happened, where and why, down to the commit that introduced the air, the developer who shipped it, in the exact line of code all in one connected view.
[186.9-191.9] I've definitely tried the five tabs and slack thread approach to debugging.
[191.9-192.9] This is better.
[192.9-198.9] Century shows you how the request moved, what ran, what slowdown, and what user saw.
[198.9-201.9] Seeer, Century's AI debugging agent takes it from there.
[201.9-207.9] It uses all of that Century context to tell you the root cause, suggest a fix, and even opens a PR for you.
[207.9-212.9] It also reviews your PRs and flags any breaking changes with fixes ready to go.
[212.9-220.9] Try Century and seeer for free at centry.io slash Lenny and use code Lenny for $100 in Century credits.
[220.9-225.9] That's SCM, TRY.io slash Lenny.
[225.9-233.6] Boris, thank you so much for being here and welcome to the podcast.
[233.6-235.6] Yeah, thanks for having me on.
[235.6-237.6] I want to start with a spicy question.
[237.6-240.6] About six months ago, I don't know if people even remember this.
[240.6-247.6] You actually left anthropic, you joined cursor, and then two weeks later you went back to anthropic.
[247.6-248.6] What happened there?
[248.6-250.6] I don't think I've ever heard the actual story.
[250.6-253.6] It's the fastest job change that I've ever heard.
[253.6-260.6] I joined cursor because I'm a big fan of the product.
[260.6-263.6] Honestly, I met the team and I was just really impressed.
[263.6-265.6] They're an awesome team.
[265.6-268.6] I still think they're awesome, and they're just building really cool stuff.
[268.6-270.6] They saw where AI coding was going.
[270.6-272.6] I think before a lot of people did.
[272.6-275.6] The idea of building could product was just very exciting for me.
[275.6-282.6] As soon as I got there, what I started to realize is what I really missed about ant was the mission.
[282.6-287.6] That's actually what originally drove me to ant also.
[287.6-290.6] Before I joined anthropic, I was working in big tech.
[290.6-299.6] At some point, I wanted to work at a lab to just help shape the future of this crazy thing that we're building in some way.
[299.6-301.6] The thing that drew me to anthropic was the mission.
[301.6-303.6] It was it's all about safety.
[303.6-311.6] When you talk to people at anthropic, you find someone in the hallway if you ask them why they're here, the answer is always going to be safety.
[311.6-315.6] This mission driven us just really resonated with me.
[315.6-320.6] I just know personally it's something I need in order to be happy.
[320.6-323.6] That's just a thing that I really missed.
[323.6-328.6] I found that whatever the work might be, no matter how exciting even if it's building a really cool product,
[328.6-330.6] it's just not really a substitute for that.
[330.6-335.6] For me, it was actually obvious that it was missing that pretty quick.
[335.6-339.6] Let me follow the thread of just coming back to anthropic in the work you've done there.
[339.6-345.6] The spot guess is going to come out around the year anniversary of launching cloud code.
[345.6-358.6] So when it's been a little time just reflecting on the impact that you've had, there's this report that we suddenly came out that I'm sure you saw by semi analysis that show that 4% of all GitHub commits are authored by cloud code now.
[358.6-363.6] And they predicted it'll be a fifth of all code commits on GitHub by the end of the year.
[363.6-368.6] The way they put it is while we blinked, AI consumed all software development.
[369.6-376.6] The day that we're recording this spot if I just put out this headline that their best developers haven't written a line of code since December.
[376.6-378.6] Thanks to AI.
[378.6-386.6] More and more of the most advanced senior engineers, including you, are sharing the fact that you don't write code anymore that it's all AI generated.
[386.6-390.6] And many aren't even looking at code anymore is how far we've gotten.
[390.6-396.6] In large part, thanks to this little project that you started and that your team is scaled over the past year.
[397.6-402.6] I'm curious just to hear your reflections on on this past year and the impact that your work has had.
[402.6-409.6] These numbers are just totally crazy, right? Like, 4% of all commits in the world is just way more than I imagined.
[409.6-412.6] Like, like you said, it still feels like the starting point.
[412.6-417.6] These are also just public commits. So we actually think if you look at private repositories, it's quite a bit higher than that.
[417.6-425.6] And I think the crazy thing for me isn't even the number that we're right now, but the pace at which we're growing because if you look at cloud codes growth rate kind of across any matter.
[425.6-430.6] It's continuing to accelerate. So it's not just going up, it's going up faster and faster.
[430.6-436.6] When I first started a quadcode, it was just going to be, it was just supposed to be a little hack.
[436.6-443.6] You know, we broadly knew it on the topic that we wanted to get a, we wanted to ship some kind of coding product.
[443.6-450.6] And, you know, for anthropic for a long time, we were building the models in this way that kind of fit our mental model of the way that we built safe HCI,
[450.6-456.6] where the model starts by being really good at coding, then it gets really good at tool use, then it gets really good at computer use.
[456.6-458.6] Roughly, this is like the trajectory.
[458.6-461.6] And, you know, we've been working on this for a long time.
[461.6-471.6] And when you look at the team that I started on, it was called the anthropic lab steam and actually my Krieger and, you know, then man, they just kick the steam off again for kind of round two.
[471.6-476.6] The team built some pretty cool stuff. So we built quadcode. We built MCP. We built the desktop app.
[476.6-482.6] So you can kind of see the seeds of this idea, you know, like it's coding, then it's tool use, then it's computer use.
[482.6-491.6] And the reason this matters for anthropic is because of safety, it's kind of, again, just back to that AI is getting more and more powerful.
[491.6-500.6] It's getting more and more capable. The thing that's happened in the last year is that for at least for engineers, the AI doesn't just write the code. It's not just a conversation program, but it actually uses tools.
[500.6-502.6] It acts in the world.
[502.6-507.6] And I think now with co-work we're starting to see the transition for non-technical folks also.
[507.6-513.6] For a lot of people that use conversational AI, this might be the first time that they're using the thing that actually act.
[513.6-518.6] It can actually use your Gmail, it can use your Slack. You can do all these things for you, and it's quite good at it.
[518.6-521.6] And it's only going to get better from here.
[521.6-526.6] So I think for anthropic for a long time, there's this feeling that we wanted to build something, but it was not obvious what.
[526.6-535.6] And so when I joined down, I spent one month kind of hacking and built a bunch of weird prototypes, most of them didn't ship, and you know, weren't even close to shipping.
[535.6-538.6] It was just kind of understanding the boundaries of what the model can do.
[538.6-543.6] Then I spent a month doing post-training, so to understand kind of the research side of it.
[543.6-546.6] And I think honestly, that's just for me as an engineer.
[546.6-552.6] I find that to do good work, you really have to understand the layer under the layer at which you work.
[553.6-563.6] And with traditional engineering work, if you're working on product, you want to understand the infrastructure, the runtime, the virtual machine, the language, kind of whatever that is, the system that you're building on it.
[563.6-570.6] But yeah, if you're working AI, you just really have to understand the model to some degree to do good work.
[570.6-576.6] So I took a little detour to do that, and then I came back and just started prototyping what eventually became quadcode.
[576.6-584.6] And the very first version of it, I have like a, there's like a video recording of the summer because I recorded this demo, and I posted it, it was called Quad CLI back then.
[584.6-598.6] And I just kind of showed off how it used a few tools and the shocking thing for me was that I gave it a bash tool and it just was able to use that to write code to tell me what music I'm listening to when I asked it, like, what music I'm listening to.
[598.6-600.6] In this the,
[600.0-601.4] craziest thing, right?
[601.4-605.8] Because there's no, I didn't instruct the model to say,
[605.8-608.7] you know, use this tool for this or kind of do whatever.
[608.7-612.0] The model was given this tool and it figured out how to use it to answer.
[612.0-614.2] This question that I have that I wasn't even sure if I could answer,
[614.2-616.8] what music am I listening to?
[616.8-621.0] And so I started prototyping this a little bit more.
[621.0-625.3] I made a post about it and I announced it internally and it got two likes.
[625.3-626.3] That's the...
[626.3-629.4] That was like, those like, center direction at the time.
[629.4-631.9] I think people internally, like when you think of coding tools,
[631.9-633.5] you think of, like, you think of IDE,
[633.5-636.9] you think about all these pretty sophisticated environments.
[636.9-640.1] No one thought that this thing could be terminal-based.
[640.1-641.6] That's sort of a weird way to design it.
[641.6-643.6] That wasn't really the intention.
[643.6-646.2] But, you know, from the story, I built it in a terminal
[646.2-649.4] because, you know, for the first couple months, it was just me.
[649.4-651.8] So it was just the easiest way to build.
[651.8-654.7] And for me, this is actually a pretty important product lesson.
[654.7-655.5] Right?
[655.5-658.7] You want to under-resource things a little bit at the start.
[658.7-662.9] Then we started thinking about what other form factors we should build.
[662.9-665.8] And we actually decided to stick with the terminal for a while.
[665.8-669.8] And the biggest reason was the model is improving so quickly.
[669.8-673.7] We thought that there wasn't really another form factor that could keep up with it.
[673.7-676.6] And honestly, this was just me kind of like struggling with,
[676.6-677.9] kind of like, what should we build?
[677.9-681.0] You know, like, for the last year, quadcode has just been all I think about.
[681.0-683.7] And so just like, late at night, this is just something I was thinking about.
[683.7-685.8] Like, I'll get the models continuing to improve.
[685.8-686.3] What do we do?
[686.3-687.6] How can we possibly keep up?
[687.6-691.4] And the terminal was honestly just the only idea that I had.
[691.4-696.8] And yeah, it ended up catching on after after I released it pretty quickly,
[696.8-698.4] it became a hit at unthropic.
[698.4-701.0] And the daily act of users just went vertical.
[701.0-704.4] And really early on, actually, before I launched it, then man,
[704.4-706.4] nudged me to make a DAU chart.
[706.4-709.7] And I was like, you know, it's kind of early maybe, you know, should we really do it right now?
[709.7-711.2] And he was like, yeah.
[711.2-714.0] And so the chart just went vertical pretty immediately.
[714.0-717.5] And then in February, we released it externally.
[717.8-722.2] Actually, something that people don't really remember is quadcode was not initially a hit.
[723.0-725.4] When we released it, it got a bunch of users.
[725.4-728.2] There were so Vata earlier doctors that got it immediately.
[728.2-731.9] But it actually took many months for everyone to really understand what this thing is.
[732.6-734.3] Just again, it's like, it's just so different.
[735.2-739.9] And when I think about it, kind of part of the reason quadcode works is this idea of late and demand,
[740.6-744.5] where we bring the tool to where people are and it makes existing workflows a little bit easier.
[745.1-747.6] But also because it's in the terminal, it'll take a little surprising.
[747.6-748.8] It's a little alien in this way.
[748.8-752.4] So you have to have to kind of be reminded and you have to learn to use it.
[753.0-757.9] And of course now, you know, quadcode is available in the iOS and Android quad app.
[757.9-762.6] It's available in the desktop app, it's available on the website, it's available as ad e extensions.
[762.6-766.8] And Slack and GitHub, you know, all these places where engineers are, it's a little more familiar.
[766.8-767.9] But that wasn't the starting point.
[769.4-774.2] So yeah, I mean, at the beginning, it was kind of a surprise that this thing was even useful.
[775.0-778.6] And, you know, as the team grew, as the product grew,
[779.6-783.9] as it started to become more and more useful to people, just people around the world from, you know,
[783.9-788.2] small startups to the biggest thing companies started using it and they started getting feedback.
[789.0-793.0] And I think just reflecting back is, it's been such a humbling experience.
[793.3-795.3] Because we just keep learning from our users.
[795.3-799.3] And just the most exciting thing is, like, you know, none of us really know what we're doing.
[800.2-802.6] And we're just trying to figure out along with everyone else.
[803.0-805.5] The single best signal for that is just feedback from users.
[806.3-808.8] So that's just been the best. I've been surprised so many times.
[809.4-813.2] It's incredible how fast something can change in today's world.
[813.7-817.7] You launched this a year ago. And it was the first time people could use AI to code. But
[818.8-823.5] in a year, the entire profession of software engineering has dramatically changed.
[824.2-829.0] Like, there's all these predictions. Oh, AI's give you an 100% AI's of code is going to be written by AI.
[829.0-831.2] And it's like, no, that's crazy. What are you talking about?
[832.0-834.0] Of course, it's happening exactly as they said.
[834.0-837.0] It's just things move so fast and change so fast now.
[838.0-841.4] Yeah, it's really fast. Back at a back at code with cloud back in May.
[841.4-845.3] Those like our first, you know, like developer conference that we did as on Thropic.
[846.3-849.0] I did a short talk in the Q&A after the talk.
[850.0-852.7] 人物 were asking, what are your predictions for the end of the year?
[852.7-858.2] And my prediction back in May of 2025 was, but then to the year, you might not need to ID to code anymore.
[858.3-861.9] And we're going to start to see engineers not doing this in the I remember the room like all that we gasped.
[863.0-868.5] This is a crazy prediction. But I think like, I don't think like, this is just the way the way we think about things is
[868.5-875.2] exponentials. And this is like very deep in the DNA. Like if you look at our co-founders, like three of them were the first three authors on the
[875.2-882.0] scaling loss paper. So we really just think in exponentials. And if you kind of look at the exponential, the
[882.0-885.4] percent of code that was written by cloud at that point, if you just trace the line,
[885.8-889.7] it's pretty obvious we're going to cross 100% by then to the year. Even if it just does not match into
[889.7-896.8] which and at all. And so all I did was trace the line and yeah, in November that, you know, that happened for me personally.
[896.8-901.2] And that's been the case since and we're starting to see that for a lot of different customers too.
[901.2-904.1] I thought that was really interesting, which you just shared there about kind of the journey.
[904.1-909.7] Is this kind of idea for just playing around and seeing what happens. This came up comes up with open
[909.7-913.9] cloud a lot, just like Peter was playing around and just like a thing happened. And it feels like that's a
[913.9-918.6] central kind of ingredient to a lot of the biggest innovations in AI's people just sitting around trying
[918.6-923.3] stuff to pushing the models further than most other people. I mean, this is the thing about innovation,
[923.3-928.2] right? Like you can't, you can't force it. There's no roadmap for innovation. You just have to give people space.
[928.2-933.7] You have to give them maybe the word is like safety. So it's like psychological safety that it's okay to fail.
[933.7-938.2] It's okay if 80% of the ideas are bad. You also have to hold them accountable if it's
[938.2-942.9] if they do as bad. You know, you cut your losses move on to the next idea instead of investing more.
[943.8-949.4] In the early days of quadcode, I had no idea that this thing would be useful at all because even in February
[949.4-956.0] when we released it, it was writing maybe 20% of my code, not more. And even in May, it was writing maybe 30%
[956.0-960.9] I was still using, you know, Kurt's are from most of my code. And it only crossed 100% in November.
[960.9-965.0] So it took a while. But even from the early estate, it just felt like I was onto something. And I was
[965.0-970.2] just spending like every night, every weekend, hockey on this. And luckily my, you know, my wife was very supportive.
[971.4-975.7] But it just felt like it was onto something. It wasn't obvious what. And then sometimes, you know,
[975.7-981.0] you find a threat. You just have to pull on it. So at this point 100% of your code is written by a cloud code.
[981.0-986.2] Is that, is that kind of the current state of your coding? Yeah. So 100% of my code is written by cloud code.
[986.2-992.5] I'm a fairly prolific coder. And this has been the case even when I worked back at Instagram. I was like one of the
[992.5-997.5] top few most productive engineers. And that's actually that's still the case. Here at
[997.5-1003.0] Dundrappic. Wow. And that's a little out of the team. Yeah, yeah, do it. Still a lot of coding.
[1004.1-1008.2] And so every, you know, every day I ship like 10, 20, 34, class, something like that. Every day.
[1008.2-1017.1] A hunt, every day. Yeah. Good guy. 100% written by cloud code. I have not added a single line by hand since
[1017.1-1025.2] November. And yeah, that's been it. I do look at the code. So I don't think we're kind of at the
[1025.2-1029.0] point where you can be totally hands off, especially when there's a lot of people, you know, like running the
[1029.0-1033.8] program, you have to make sure that it's correct. You have to make sure it's safe and so on. And then we also have
[1033.8-1039.3] cloud doing automatic code review for everything. So here it is for a cloud reviews 100% of all requests.
[1040.0-1044.1] There's still a layer of like human review after it. But you kind of like you still do want some of
[1044.1-1049.0] these checkpoints. Like you still want a human looking at the code unless it's like pure prototype code that,
[1049.0-1053.6] you know, it's not going to run. It's not going to run anywhere. It's just a prototype. What's kind of the next
[1053.6-1060.6] friend tier. So at this point, 100% of your code is being written by AI. This is clearly where everyone is going
[1060.6-1066.6] in software engineering. That felt like a crazy milestone. Now, it's just like, of course, this is the world now.
[1067.4-1072.3] What's, what's kind of the next big shift to how software is written that either your team's already operating
[1072.4-1077.3] in or you think will head towards. I think something that's happening right now is cloud is starting to
[1077.3-1083.3] come up with ideas. So cloud is looking through feedback. It's looking at bug reports. It's looking at
[1084.2-1088.6] you know, like telemetry and then things like this and it's starting to come up with ideas for bug fixes and
[1088.9-1094.4] things to ship. So it's just starting to get a little more, you know, like a little more like a
[1094.4-1099.1] go work for or something like that. I think the second thing is we're starting to branch out of coding a little bit.
[1099.1-1104.0] So I think at this point it's safe to say that coding is largely solved. At least for the kind of
[1104.0-1108.9] programming that I do is just a solved problem because cloud can do it. And so now we're starting to think about
[1108.9-1113.8] okay, like what's next? What's beyond this? There's a lot of things that are kind of adjacent to coding
[1113.8-1119.4] and I think this is going to be coming. But also just, you know, general tasks, you know, like an I use
[1119.4-1123.8] core every day now to do all sorts of things that are just not related to coding at all and just to do it
[1123.8-1127.8] automatically. For example, I had to pay it perking ticket other day. I just had to do it.
[1128.8-1133.2] All of my project management for the team. Core does all of it. It's like syncing stuff between
[1133.2-1139.0] spreadsheets and messaging people on Slack and email and all of those kind of stuff. So I think the
[1139.0-1144.4] frontier is something like this. And I don't think it's coding because I think coding is, you know,
[1144.4-1148.6] it's pretty much solved. And over the next few months, I think what we're going to see is just across
[1148.6-1152.5] the industry. It's going to become increasingly solved. You know, for every kind of code based,
[1152.5-1157.1] every text that people work on. This idea of helping you come up with what to work on is so
[1157.1-1161.2] interesting. A lot of people listening to this or product managers and they're probably sweating.
[1162.1-1167.3] How do you use cloud for this? Do you just talk to it? Does there anything clever you've come up with to
[1167.3-1172.2] help you use it to come up with what's it build? Honestly, the simplest thing is like open quadcode or
[1172.2-1177.5] core can point it out as a slack thread. You know, like for us, we have this channel that that's all the
[1177.5-1183.6] internal feedback about quadcode. Since we first released it, even in like 2024 internally,
[1183.7-1187.8] it's just been this fire hose of feedback. And it's the best. And like in the early days,
[1187.8-1192.9] what I would do is anytime that someone sends feedback, I would just go in and out fix every single thing,
[1192.9-1197.4] as fast as I possibly could. So like within a minute, within five minutes or whatever. And it's just
[1197.4-1200.2] really fast feedback cycle. It encourages people to give more.
[1200.0-1204.4] more and more feedback is just so important because it makes them feel heard. Because, you know, like,
[1204.4-1208.4] usually when you use a product, you get feedback, it just goes into a black hole somewhere and then you don't get feedback again.
[1209.2-1213.1] So if you make people feel heard, then they want to contribute and they want to help make the thing better.
[1214.2-1219.8] And so now I kind of do the same thing, but quite honestly, it does a lot of the work. So I pointed at the channel and it's like,
[1219.8-1224.2] okay, here's a few things that I can do. I just put up a couple of PRs want to take a look at that.
[1224.2-1227.7] I'm like, yeah, have you noticed that it is getting much better at this?
[1228.0-1231.3] Because this is kind of the holy grail right now. It's like, cool building solved.
[1231.7-1235.3] Coder view became kind of the next bottleneck, the LLPRs who's going to review them all.
[1235.9-1241.6] The next big open question is just like, okay, now we need it. Now humans are necessary for figuring out what to build,
[1241.6-1245.2] which is prioritizing, you're saying that that's where Claude Cod is starting to help you.
[1245.2-1250.0] Has it gotten a lot better with, like, say, up as 4, 6 or what's been the trajectory there?
[1250.7-1255.8] Yeah, yeah, it's improved a lot. I think some of it is kind of like training that we do specific to coding.
[1256.4-1261.3] So obviously, you know, best coding modeled in the world and, you know, it's getting better and better.
[1261.3-1267.2] Like 4.6 is just incredible. But also actually a lot of the training that we do outside of coding translates pretty well too.
[1267.2-1272.8] So there is this kind of like transfer where you teach the model to do, you know, X and it kind of gets better at Y.
[1274.4-1279.4] Yeah, and the gains have just been insane. Like, I don't throw up it over the last year,
[1279.4-1283.2] like, since we introduced what code we probably, I don't know the exact number. We probably like 4x,
[1283.2-1288.5] then generating team or something like this. But productivity per engineer has increased 200%.
[1289.5-1294.6] In terms of, like, 4 requests. And like this number is just crazy for anyone that actually works in the space and works on
[1294.6-1299.5] deaf productivity. Because back in the previous life, I was at meta and, you know, when am I responsibility is was
[1299.5-1305.2] code quality for the company. So this is like, all of our code bases, those my responsibility, like, Facebook, Instagram,
[1305.2-1310.8] WhatsApp, well, this stuff. And a lot of that was about productivity because if you make the code higher quality,
[1310.8-1317.0] then engineers are more productive. And things that we saw is, you know, in a year with hundreds of engineers
[1317.0-1320.7] working on it, you would see a gain of like a few percentage points of productivity. So I'll go like this.
[1321.8-1326.2] And so now we're using these gains of just hundreds of percentage points. It's just absolutely insane.
[1326.2-1330.5] What's also in saying is just how normalize this is all been. Like, we hear these numbers, like, of course.
[1330.5-1336.6] Yeah, I was doing this to us. It's just it's so unprecedented. The amount of change that is happening to
[1336.6-1342.0] software development to building products is just the world of tech. It's just like so easy to get used to it.
[1342.0-1348.3] But it's important to recognize this is crazy. This is something like I have to remind myself once in a while,
[1348.3-1353.2] there's sort of like a downside of this because the model changes. So there's actually like there's many kind of
[1353.2-1357.5] a downside that we could talk about. But I think one of the amount of personal levels, the model changes
[1357.5-1365.6] so often that I sometimes get stuck in this like old way of thinking about it. And I even find that like new
[1365.6-1372.5] people on the team or even new grads that join do stuff in a more kind of like, AGI forward way than I do.
[1373.2-1377.4] So like, sometimes for example, I had this case like a couple months ago where there was a memory
[1377.4-1381.9] week. And so like what this is is, you know, like quadcode the memory usage is going up and at some point
[1381.9-1386.2] it crashes. This is like a very common kind of engineering problem that you know, every engineer has
[1386.2-1391.0] debugged a thousand times. And traditionally the way that you do it is you take a heap snapshot,
[1391.0-1395.2] you put it into a specialty bugger, you kind of figure out what's going on, you know, use these special
[1395.2-1400.6] tools to see what's happening. And I was doing this and I was kind of like looking through these traces and
[1400.6-1406.0] trying to figure out what was going on. And the engineer that was newer on the team just had quadcode
[1406.0-1411.1] it. It was like, hey, it seems like there's a week and you figured out until like quadcode did exactly
[1411.1-1415.4] the same thing that I was doing. It took the heap snapshot, erode a little tool for itself. So it
[1415.4-1421.2] can kind of like analyze it itself. It was sort of like a just-in-time program. And it found the issue and put
[1421.2-1427.1] a quadcode faster than I could. So it's something where like for those of us that have been using the
[1427.1-1432.9] model for a long time, you still have to kind of transport yourself to the current moment and not get stuck
[1433.6-1438.2] back in an old model because it's not sonnet 3.5 anymore. The new models are just completely
[1438.2-1444.8] completely different. And just this mindset shift is very different. I hear you have these very specific
[1444.8-1451.0] principles that you've codified for your team that when people join you, you kind of walk them through them.
[1451.0-1455.3] I believe one of them is what's better than doing something, having quadcode do it. And it feels like
[1455.3-1459.3] that's exactly what you describe with this memory leak is just like, you almost forgot that principle
[1459.3-1463.5] of like, okay, let me see if cloud can solve this for me. There's this- there's this interesting
[1463.5-1469.3] thing that happens also when you- when you underfund everything a little bit because then people are
[1469.3-1474.5] kind of forced to quantify. And this is something that we see. So you know for work where sometimes we just put
[1474.5-1480.4] like one engineer on a project and the way that they're able to ship really quickly, because they want to
[1480.4-1484.5] ship quickly, this is like a intrinsic motivation that comes from within. It's just wanting to do a good job.
[1484.5-1488.2] One, if you have a good idea, you just really want to get it out there. No one has to force you to do that.
[1488.2-1493.8] That comes from you. And so if you have cloud, you can just use that to automate a lot of work.
[1494.7-1498.8] And that's kind of what we see over and over. So I think that's kind of like one principle is
[1498.8-1504.0] underfunding things a little bit. I think another principle is just encouraging people to go faster.
[1504.0-1509.4] So if you can do something today, you should just do it today. And this is something we really,
[1509.4-1514.1] really, really encourage on the team. Early on, it was really important because it was just me. And so
[1514.1-1519.2] our only advantage was speed. The only way that we could ship a product that would compete in this
[1519.2-1525.6] very crowded coding market. But now it is still very much a principle we help on the team. And if you want to
[1525.6-1532.2] go faster, a really good way to do that is to just have cloud do more stuff. So it just very much encourages that.
[1532.2-1537.6] This idea of underfunding. It's so interesting because in general, there's this feeling like AI is going to
[1538.3-1543.2] allow you to not have as many employees, not have as many engineers. And so it's not only you can be more
[1543.2-1547.9] productive, which you're saying is that you will actually do better if you're underfund. It's not just
[1547.9-1553.9] that AI can make you faster. It's you will get more out of the AI tooling if you have fewer people working on something.
[1554.8-1560.4] Yeah, if you hire great engineers, they'll figure out how to do it. And especially if you empower them to do it.
[1560.4-1565.2] This is something I actually talk a lot about with you know with Lake CTOs and kind of all sorts of
[1565.2-1570.7] companies. My advice generally is don't try to optimize. Don't try to cost cut at the beginning.
[1571.3-1576.0] Start by just giving engineers as many tokens as possible. And now you're starting to see companies like
[1576.0-1580.5] you know, at an anthropic we have you know everyone can use a lot of tokens. We're starting to see this come up as
[1580.5-1586.7] like a perk at some companies where if you join you get unlimited tokens. This is a thing I very much encourage because
[1588.0-1595.1] it makes people free to try these ideas that would have been too crazy. And then if there's an idea that works
[1595.6-1600.3] then you can figure out how to scale it. And that's the point to kind of optimize and to cost cut figure out like,
[1600.3-1604.3] you know, maybe you can do it with high cool or with sauna instead of all this or whatever. But at the
[1604.3-1609.4] beginning you just want to throw a lot of tokens at it and see if they do works and give engineers the freedom to do that.
[1609.4-1616.9] So advice is just be loose with your tokens with the cost on using these models. 人物 here in this maybe like,
[1616.9-1622.0] of course, he works at anthropic. You want us to use as many tokens as possible. But what you're saying here is
[1622.8-1627.2] most interesting innovative ideas will come out of someone just kind of taking it to the max and seeing what's possible.
[1628.0-1632.0] Yeah, and I think the reality is like at small scale like you know you're not going to get like a
[1632.0-1637.6] giant bill or anything like this. Like if it's an individual engineering experimenting, the token costs
[1637.6-1643.2] is still probably relatively low relative to their salary or other costs of running the business.
[1644.4-1649.7] So it's actually like not not a huge cost. As the things scales up, so like let's say, you know, the bill
[1649.7-1654.3] something awesome and then it takes a huge amount of tokens and then the cost becomes pretty big. That's the point
[1654.3-1658.7] out which you want to optimize it. But don't don't do that too early. Have you seen companies where their
[1658.7-1664.0] token cost is higher than their salary? Is that a trend you think are going to find them and see?
[1664.4-1668.7] You know, at anthropic we're starting to see some engineers that are spending like hundreds of thousands of
[1668.7-1675.4] a month in tokens. So we're starting to see this a little bit. There's some companies that are we're starting to see some
[1675.6-1683.1] or things. Yeah. Going back to coding. Do you mess writing code? Is this something you're kind of
[1683.1-1688.1] sad about that there's no longer a thing you'll do as a self-ranger? It's funny for me, you know like when
[1688.1-1694.7] when I learned engineering for me, it was very practical. I've learned engineering so I could build stuff.
[1696.0-1701.9] And for me, I was a self-talk, you know like I studied economics in school but I didn't study CS.
[1702.0-1706.0] But I taught myself engineering kind of early on I was programming in like middle school.
[1706.7-1711.1] And from the very beginning it was very practical. So I actually like I've learned to code so that I can
[1711.1-1715.8] cheat on a math test. It was like the first thing we had these like graphing calculators and the you know
[1715.8-1724.0] just program data into 383. 383 plus yeah yeah exactly. Plus yeah it's like I program the answer is in and then
[1724.8-1729.0] the next like math test whatever like the next year they it was just like too hard like I couldn't program all the
[1729.1-1732.4] answers because I didn't know what the questions were and so I had to write like a little solver
[1732.4-1737.8] so that it was a program that would just like solve these like you know these algebra questions or whatever
[1738.5-1742.8] and then after you're out you can get a little cable you can give the program to the rest of the class and then the whole
[1742.8-1748.8] class gets a but then we all got caught in the teacher told us to knock it off. But from the very beginning it's it's always just been
[1748.8-1755.0] very practical for me. Where programming is a way to build the thing it's not the end and it's so
[1755.4-1761.9] at some point I personally fell into the rapid hole of kind of like the beauty of programming
[1762.6-1767.8] so like I wrote a book about TypeScript. I sort of the actually at the time it was the world
[1767.8-1773.0] to biggest TypeScript being up just because I fell in love with the language itself and I kind of got
[1773.0-1779.4] in deep into like functional programming and all the stuff. I think a lot of coders they get distracted by this
[1780.2-1786.6] for me it was always sort of there is a beauty to programming and especially to functional programming
[1786.6-1792.1] there's a beauty to Type Systems. There's a certain kind of like this like buzz that you get like when you
[1792.1-1798.6] solve like a really really complicated math problem it's kind of similar when you can balance the types or
[1798.6-1802.6] you know the program is just like really.
[1800.0-1806.5] beautiful, but it's really not the end of it. I think for me coding is very much a tool and it's a way to do things.
[1807.5-1812.0] That said, not everyone fills this way. So for example, you know, like there's one engineer on the team,
[1812.0-1820.0] Lena who, you know, was still writing C++ on the weekends by hand, because, you know, for her, she just really enjoys writing C++ by hand.
[1820.0-1829.5] And so everyone is different. And I think even as this field changes, even as everything changes, there's always space to do this. There's always space to enjoy the art.
[1830.0-1834.0] And to do things by hand, if you want.
[1834.0-1840.0] Do you worry about your skills atrapping as an engineer? Is that something you can worry about or is it just like, you know,
[1840.0-1841.0] this is just how it's going to go.
[1841.0-1845.0] I think it's just the way that it happens. I don't worry about it too much personally.
[1845.0-1853.0] I think for me, like programming is on the continuum and, you know, like way back in the day, you know, software actually is like relatively new, right?
[1853.0-1859.0] Like if you look at the way programs are written today, like using software that's running on a virtual machine or something,
[1859.0-1863.0] this has been the way that we've been writing programs since probably the 1960s.
[1863.0-1866.0] So, you know, it's been, you know, like 60 years or something like that.
[1866.0-1872.0] Before that it was punch cards, before that is, which is, before that it was hardware, and before that it was just, you know, like, whatever you pen and paper.
[1872.0-1876.0] It was like a room full of people that were doing math on paper.
[1876.0-1879.0] And so, you know, programming has always changed in this way.
[1879.0-1885.0] In some way, you still want to understand the layer under the layer, because it helps you be a better engineer.
[1885.0-1887.0] And I think this will be the case maybe for the next year or so.
[1887.0-1895.0] But I think pretty soon, it just won't really matter. It is just going to be kind of like the assembly code running under the program or something like this.
[1895.0-1902.0] I don't know, motion of level, you know, I feel like I've always had to learn new things.
[1902.0-1910.0] And as a programmer, it's actually not, it doesn't feel that new, because there's always new frameworks, there's always new languages, it's just something that work way comfortable within the field.
[1910.0-1913.0] But at the same time, I, you know, this isn't true for everyone.
[1913.0-1921.0] And I think for some people, they're going to feel a greater sense of, I don't know, maybe like loss or nostalgia or after fear or something like this.
[1921.0-1927.0] And I don't know if you saw this, but Elon was saying that why isn't the, I just writing binary straight to binary.
[1927.0-1932.0] Because what's the point of all this, you know, programming the abstraction in the end.
[1932.0-1936.0] Yeah, it's a good question. I mean, totally can do that if you wanted to.
[1936.0-1937.0] Oh, man.
[1937.0-1942.0] So what I'm hearing here is in terms, there's always a question, should I learn to code, should people in school or in to code?
[1942.0-1947.0] What I heard from you is their take is in that like a year to you don't really need to.
[1947.0-1957.0] My take is, I think for people that are using, that are using quad code that are using agents to code today, you still have to understand the layer under.
[1957.0-1959.0] But yeah, in a year to a song and a matter.
[1959.0-1965.0] I was thinking about, what is the right, like historical analog for this?
[1966.0-1974.0] Because like somehow we have to situate this thing in history and kind of figure out when how we go through some more transitions, what's the right kind of mental model for this.
[1974.0-1978.0] I think the thing that's come closest for me is the printing press.
[1978.0-1985.0] And so, you know, if you look at Europe and, you know, like in the mid, the mid, the mid 1400s.
[1985.0-1987.0] Literacy was actually very low.
[1987.0-1993.0] There was sub 1% of the population. It was scribes that, you know, they were the ones that did all the writing.
[1993.0-1997.0] They were employed by like words and kings that often were not literate themselves.
[1997.0-2002.0] And so, you know, it was their job of this very tiny percent of the population to do this.
[2002.0-2006.0] And at some point, you know, Gutenberg and the printing press came along.
[2006.0-2017.0] And there was this crazy stat that in the 50 years after the printing press was built, there was more printed material created, and in the 1000 years before.
[2018.0-2022.0] And so, the volume of printed material just went way up.
[2022.0-2026.0] The cost went way down, it went down something like 100x over the next 50 years.
[2026.0-2032.0] And if you look at literacy, you know, it actually took a while because learning to read on writers, you know, it's quite hard.
[2032.0-2035.0] It takes education system. It takes free time.
[2035.0-2040.0] It takes like not having to work on a farm all day, so that you actually have time for education and things like this.
[2040.0-2044.0] But over the next 200 years it went up to like 70% globally.
[2044.0-2052.0] So I think this is the kind of thing that we might see is a similar kind of transition.
[2052.0-2059.0] And there was actually this interesting historical document where there was an interview with some like scribe in the 1400s.
[2059.0-2062.0] About like how do you feel about the printing press?
[2062.0-2068.0] And they were actually very excited because they were actually the thing that I don't like doing this copying between books.
[2068.0-2072.0] The thing that I do like doing is drawing the art and books and then doing the book binding.
[2072.0-2074.0] And I'm really glad that now my time is freed up.
[2074.0-2080.0] And it's interesting, like as an engineer, I sort of felt like a peril with us.
[2080.0-2085.0] Like this is sort of how I feel where I don't have to do the tedious work anymore of coding.
[2085.0-2087.0] Because this has always been sort of the detail of it.
[2087.0-2094.0] It's always been the tedious part of it and kind of like messing with a kid and kind of using all these different tools that those not the fun part.
[2094.0-2097.0] The fun part is figuring out what to build and kind of coming up with us.
[2097.0-2099.0] It's talking to users.
[2099.0-2100.0] It's thinking about these big systems.
[2100.0-2102.0] It's thinking about the future.
[2102.0-2106.0] It's collaborating with other people on the team and that's what I get to do more of now.
[2106.0-2111.0] And what's amazing is that the tool you're building allows anybody to do this.
[2111.0-2115.0] 人物 that have no technical experience can do exactly what you're describing.
[2115.0-2120.0] Like I've been doing a bunch of random little projects and it's just like any time you get stuck.
[2120.0-2123.0] Just like help me figure this out and you got on block.
[2123.0-2127.0] Like I used to, yeah, I was an engineer for early in my career for 10 years.
[2127.0-2133.0] And I just remember spending so much time on like libraries and dependencies and things and just like, oh, I got what do I do.
[2133.0-2138.0] And then looking at stack overflow and now it's just like help me figure this out and there's step by step on 234.
[2138.0-2139.0] Okay, we got this.
[2139.0-2140.0] Yeah, exactly.
[2140.0-2142.0] I was talking to an engineer earlier today.
[2142.0-2147.0] They're like they're writing some service and go and you know, it's been like a month already and they built up the service.
[2147.0-2149.0] Like it's working quite well.
[2149.0-2153.0] And then I was like, okay, it's like, how do you feel writing and he was like, you know, like I still don't really know go.
[2153.0-2154.0] But.
[2154.0-2157.0] And I think we're going to start to see more and more of this.
[2157.0-2162.0] It's like if you know that it works correctly and efficiently, then you don't have to know all the details.
[2162.0-2167.0] Clearly, the life of a software engineer has changed dramatically.
[2167.0-2172.0] It's like a whole new job now as of the past year or two.
[2172.0-2177.0] What do you think is the next role that will be most impacted by AI within either within tech like, you know,
[2177.0-2181.0] product managers, designers, or even outside check, just like, what do you think?
[2181.0-2183.0] What do you think AI is going next?
[2183.0-2186.0] I think this is going to be a lot of the roles that are adjacent to engineering.
[2186.0-2188.0] So yeah, it could be like product managers.
[2188.0-2191.0] It could be designed, could be data science.
[2191.0-2198.0] It is going to expand to pretty much any kind of work that you can do on a computer because the model is just going to get better and better at this.
[2198.0-2203.0] And you know, like this is the core product is kind of the first way to get at this.
[2203.0-2204.0] But it's just the first one.
[2204.0-2212.0] And it's the thing that I think brings AI to a agent, a AI to people that haven't really used it before.
[2212.0-2216.0] And people are starting to just to get a sense of it for the first time.
[2216.0-2221.0] When they think back to engineering a year ago, no one really knew what an agent was, no one really used it.
[2221.0-2224.0] But nowadays it's just the way that, you know, we do our work.
[2224.0-2233.0] And then when I look at non-technical work today, so, you know, like, you know, like, you know, or maybe semi-technical, like product work and, you know, like data science and things like this.
[2233.0-2237.0] When you look at the kinds of AI that people are using, it's always these conversational AI.
[2237.0-2238.0] It's like a chatbot or whatever.
[2238.0-2241.0] But no one really has used an agent before.
[2241.0-2245.0] And this word agent just gets thrown around all the time and it's just like so misused.
[2245.0-2246.0] It's like a vast, all-meaning.
[2246.0-2251.0] But agent actually has like a very specific technical meaning, which is it's a AI.
[2251.0-2254.0] It's an LLM that's able to use tools.
[2254.0-2256.0] So it doesn't just talk.
[2256.0-2259.0] It can actually act and it can interact with your system.
[2259.0-2263.0] And, you know, this means like it can use your Google Docs and it can, it can send email.
[2263.0-2266.0] It can run commands on your computer until all this kind of stuff.
[2266.0-2272.0] So I think like any kind of job where you do use computer tools in this way, I think this is going to be next.
[2272.0-2278.0] This is something we have to kind of figure out as a society, this is something we have to figure out as an industry.
[2278.0-2285.0] And I think for me also, this is one of the reasons it feels very important in urgent to do this work at Anthropic.
[2285.0-2288.0] Because I think we take this very, very seriously.
[2288.0-2293.0] And so now we have economists, we have policy folks, we have social impact folks.
[2293.0-2295.0] This is something we just want to talk about a lot.
[2295.0-2299.0] So as a society we can kind of figure out what to do because it shouldn't be up to us.
[2299.0-2303.0] So the big question, which is you're kind of alluding to is jobs and job loss and things like that.
[2303.0-2308.0] There's this concept of Jevon's paradox of just as we can do more, we hire more.
[2308.0-2311.0] And it's not actually as scary as it looks.
[2311.0-2321.0] What did you experience so far, I guess, with AI becoming a big part of the engineering job, just are you hiring more than if you didn't have AI and just thoughts on jobs?
[2321.0-2324.0] Yeah, I mean, for our timber we're hiring.
[2324.0-2326.0] So quad-coating is hiring.
[2326.0-2330.0] If you're interested, just check out the job space on Anthropic.
[2330.0-2335.0] Personally, it's, you know, all this stuff has just made me enjoy my work more.
[2335.0-2340.0] I have never enjoyed coding as much as I do today because I don't have to deal with other minutia.
[2340.0-2343.0] So for me personally, it's been quite exciting.
[2343.0-2350.0] This is something that we hear from a lot of customers where they love the tool they love quad-coad because it just makes coding delightful again.
[2350.0-2353.0] And that's just, that's just so fun for them.
[2353.0-2356.0] But it's hard to know where this thing is going to go.
[2356.0-2360.0] And again, I just, like, I have to reach for these historical analogs.
[2360.0-2368.0] And I think the printing press is just such a good one because what happened is this technology that was locked away to small set of people,
[2368.0-2372.0] like knowing how to read and write, became accessible to everyone.
[2372.0-2374.0] It was just inherently democratizing.
[2374.0-2376.0] Everyone started to be able to do this.
[2376.0-2382.0] And if that wasn't the case, then something like the Renaissance just could never have happened.
[2382.0-2385.0] Because a lot of the Renaissance it was about like knowledge spreading.
[2385.0-2388.0] It was about like written records that people used to communicate.
[2388.0-2391.0] You know, because there were no phones or anything like this.
[2391.0-2394.0] There's no internet at the time.
[2394.0-2397.0] So it's about like, what does this enable next?
[2397.0-2400.0] And I think that's the very optimistic version.
[2400.0-2404.1] it for me and that's the part that I'm really excited about. It's just unimaginable. You know,
[2404.1-2408.4] like we couldn't be talking today if the printing press had been invented like our microphone
[2408.4-2412.0] to wouldn't exist. None of the things around us would exist. It just wouldn't be possible to
[2412.0-2417.5] coordinate such a large group of people if that wasn't the case. And so I imagine a world, you know,
[2417.5-2422.2] a few years in the future where everyone is able to program and what is that unlock anyone can just
[2422.2-2427.9] build software anytime. And I have no idea. It's just the same way that, you know, in the 1400s, no one
[2427.9-2432.3] could have protected this. I think it's the same way. But I do think in the meantime it's
[2432.3-2438.6] going to be very disruptive and it's going to be painful for a lot of people. And again, as a society,
[2438.6-2441.9] this is a conversation that we have to have and this is the thing that we have to figure out together.
[2442.5-2451.0] So for folks hearing this, that want to succeed and, you know, make it in this crazy turmoil we're entering any
[2451.0-2455.0] advice. There's a, you know, play with AI tools, get really proficient at the latest stuff, is there anything else
[2455.0-2459.7] that you recommend to help people stay ahead? Yeah, I think that's pretty much it.
[2460.3-2465.1] Experiment with the tools, get to know them, don't be scared of them. Just, you know, dive in, try
[2465.1-2470.9] them, be on the bleeding edge, be on the frontier. Maybe the second piece of advice is try to be a
[2470.9-2477.2] generalist more than you have in the past. For example, in school, a lot of people that study CS, they
[2477.2-2483.4] learn to code and they don't really learn much else. Maybe they learn a little bit of systems architecture
[2483.4-2487.8] or something like this. But some of the most effective engineers that I work with every day and some
[2487.8-2492.6] of the most effective, you know, like product managers and so on, they cross over disciplines. So on the
[2492.6-2497.6] quad code team, everyone codes, you know, our product manager codes or engineering manager codes or designer
[2497.6-2504.3] codes are finance guy codes or data scientists codes, like everyone on the team codes. And then if I look at
[2504.3-2509.7] particular engineers, people often cross different disciplines. So some of the strongest engineers are
[2509.8-2515.1] hybrid product and infrastructure engineers or product engineers with really great design sense and they're
[2515.1-2520.3] able to do design also or an engineer that has a really good sense of the business and can use that to
[2520.3-2527.0] figure out what to do next or an engineer that also loves talking to users and can just really channel what
[2527.0-2532.6] what users want to figure out what's next. So I think a lot of the people that will be rewarded the
[2532.6-2538.2] most over the next few years, there won't just be AI native and they don't just know how to use these tools
[2538.2-2544.4] really well, but also their curious and their general lists and they cross over multiple disciplines and
[2544.4-2548.6] can think about the broader problem they're solving rather than just the engineering part of it.
[2549.2-2553.2] You find these three separate disciplines still useful as a way to think about the team,
[2553.2-2559.1] their engineering design, product management, you find like those even though they are now coding and
[2559.1-2564.2] contributing to thinking about what to build. You feel like those are three roles that will persist
[2564.2-2568.6] long term at least at this point. I think in the short time it'll persist but one thing that we're starting
[2568.6-2573.6] to see is there's maybe a 50% overlap in these roles where a lot of people are actually just doing the same
[2573.6-2579.4] thing and some people have specialties. For example, I code a little bit more versus cat RPM does a little
[2579.4-2589.1] bit more you know coordination or planning or forecasting or things like this. I do think that there is a
[2589.1-2593.4] future where I think by the end of the year what we're going to start to see is these start to get
[2593.4-2599.3] even more clear. Where in I think in some places that title software engineer is going to start to go away
[2599.9-2603.9] and it's just going to be replaced by builder or maybe it's just everyone's going to be a product manager and
[2603.9-2609.8] everyone codes or something like this. Who says hiring has to be fair. Every founder and hiring manager I've
[2609.8-2615.9] been speaking with these days is feeling the same pressure. Higher the best people as fast as possible,
[2615.9-2623.0] but recruiting is time consuming. Alignment is hard and competition for great talent keeps getting tighter.
[2623.0-2629.8] That's why teams like 11 labs, brecks, replete, deal and 5000 other organizations use
[2629.8-2635.9] met of you. The AI company giving high performance teams a real unfair advantage in hiring. They give you a
[2635.9-2642.0] suite of AI agents that behave like recruiting coworkers. They find candidates where you based on your exact
[2642.0-2648.1] criteria. Take interview notes automatically. Gather insights across your hiring process and help you
[2648.1-2654.3] identify the best candidates in your pipeline. AI handles the recruiting toil and gives you a real
[2654.3-2660.8] source of truth. That means our safe for hire and a team focused on what matters most, winning the right
[2660.8-2668.1] candidates. Don't let your competitors out hire you. Met of you customers close roles 30% faster. Try
[2668.1-2674.7] met of you today for free and get an extra month of sourcing at met of you. AI slash Lenny. That's
[2674.7-2681.4] META view dot AI slash Lenny. You talked about how you're enjoying coding more. Actually did this
[2681.4-2685.2] little informal survey and Twitter. I don't know if you saw this where I just asked and did three different
[2685.2-2691.0] polls. Ask engineers. Are you enjoying your job more or less since adopting AI tools? And then I did a
[2691.0-2697.5] separate one for PMs and one for designers. And both engineers and PMs, 70% of people said they're
[2697.5-2703.9] enjoying their job more. And about 10% said they're enjoying their job less. Designers, interestingly,
[2704.5-2710.8] only 55% said they're enjoying their job more. And 20% said they're enjoying their job less. That was
[2710.8-2716.5] really interesting. That's super interesting. I'd love to talk to these people. Both in the more bucket
[2716.5-2721.5] and the less bucket. Just understand, did you get to follow up with any of them? A few people replied and
[2721.5-2725.3] were actually doing a follow up poll that will link to the show notes of going deeper into some of
[2725.3-2730.9] the stuff. But a lot of, there's like the factors that make it more fun and less fun. The designers,
[2730.9-2734.2] they didn't share a lot, actually. They've just like the people that are actually asked. Just like,
[2734.2-2737.4] why are you enjoying your job less? And in here, lots. I'm curious what's going on there.
[2737.4-2744.5] Yeah, I'm seeing this a little bit with, I don't think everyone is fairly technical. This is something that
[2744.5-2750.6] we screen for when people join. There's a lot of technical interviews that people go through even for
[2750.6-2759.0] non-technical functions. And our designers were actually code. So I think for them, this is something
[2759.0-2765.6] that they have enjoyed from what I've seen because now instead of bugging engineers, they can just go in
[2765.6-2770.2] and code. And even some designers that didn't code before have just started to do it. And for them,
[2770.2-2774.7] it's great because they can unblock themselves. But I'd be really interested just to hear more people's
[2774.7-2779.3] experiences because I bet it's not for my thought. Yeah, so maybe if you're listening to this,
[2779.3-2782.7] leave a comment if you're finding your job's less fun and you're enjoying your job less because
[2782.7-2788.7] what you're saying and what I'm hearing from most people, 70% of PM's engineers are loving their job more.
[2788.7-2794.7] That's like if you're not on that bucket, you could something's going on. Yeah, yeah. We do see that people
[2794.7-2799.7] use also different tools. So for example, our designers, they use the quad desktop app a lot more to
[2799.7-2805.2] do their coding. So you just download the desktop app. There's a code tab. It's right next to cowork.
[2805.2-2808.5] And it's actually the same as that quad code. So it's like the same agent and everything. We've
[2808.5-2813.5] had this for many, many months. And so you can use this to code in a way that you don't have to
[2813.5-2819.0] open a bunch of terminals. But you still get the power of quad code and the biggest thing is you can just
[2819.0-2826.0] run as many quad sessions in parallel as you want. We call this multi-quoting. So it's a little more
[2826.0-2831.6] native. I think for folks that are not engineers. And really, this is back to bringing the product to where
[2831.6-2835.4] the people are. You don't want to make people use a different workflow. You don't want to make them go
[2835.4-2839.3] out of their way to earn a new thing. It's whatever people are doing if you can make that a little bit
[2839.3-2845.0] easier. Then that's just going to be a much better product that people enjoy more. And this is just this
[2845.0-2849.5] principle of wait and demand, which I think is just the single most important principle in product.
[2849.5-2853.9] Can you talk about that actually? Because I was going to go there explain what this principle is and
[2853.9-2860.6] and just what happens when you unlock this lean demand. Waiting demand is this idea that if you build a
[2860.6-2867.0] product in a way that can be hacked or can be misused by people in a way it wasn't really designed for
[2867.0-2873.8] to do something that they want to do. Then this helps you as the product builder learn where to take the
[2873.8-2881.0] product next. So in example, this is Facebook Marketplace. So the manager for the team Fiona,
[2881.0-2887.4] she was actually the founding manager for the marketplace team and she talks about this a lot. Facebook Marketplace
[2887.4-2893.8] started based on the observation back in this must have been like 20 or something like this. That
[2893.8-2899.4] 40% of posts in Facebook groups are buying and selling stuff. So this is crazy. It's like people are
[2899.4-2903.7] abusing the Facebook groups product to buy and sell. And it's not a beauty and a security sense.
[2903.7-2907.8] It's a beauty and that no one designed the product for this. But they're figuring it out because it's
[2907.8-2913.1] just so useful for this. So it was pretty obvious if you build a better product to let people buy and sell
[2913.2-2917.5] they're going to like it. And it was just very obvious that Marketplace would be a hit from this.
[2917.5-2922.6] So the first thing was buy in cell groups, so kind of special purpose groups to let people do that and the
[2922.6-2929.5] second product was Marketplace. Facebook dating, I think, started in a pretty similar place. And I think
[2929.5-2934.3] that the observation was if you look at people looking, if you look at profile views, so people look at
[2934.3-2939.3] each other's profiles on Facebook. 60% of profiles were people that are not friends with each other that are
[2939.3-2945.9] opposite gender. And so this is kind of like traditional dating setup. 人物 are just creeping on
[2945.9-2953.2] each other. So maybe if you can build a product for this, it might work. And so this idea of letting
[2953.2-2959.8] demand I think is just so powerful. And for example, this is also where cowork came from. We saw that
[2959.8-2965.5] for the last six months or so, a lot of people using quadcode were not using it to code. There was someone
[2965.5-2969.1] on Twitter that was using it to grow tomato plants. There was someone else using it to analyze their
[2969.1-2977.2] genome. Someone was using it to recover photos from a corrupted hard drive. There was someone that was
[2977.2-2985.0] using it for, I think like they were using it to analyze an MRI. So there's just all these different
[2985.0-2990.1] use cases that are not technical at all. And it was just really obvious, like people are jumping through
[2990.2-2994.8] hoops to use a terminal to do this thing. Maybe we should just build a product for them.
[2995.4-3000.6] And we saw this actually pretty early. Back in maybe May of last year, Emma Burw.
[3000.0-3002.5] walking to the office in our data scientist, Brendan,
[3002.5-3005.5] was had a quadcode on his computer.
[3005.5-3007.1] He just had a terminal up.
[3007.1-3009.4] And I was like, I was shocked.
[3009.4-3010.9] I was like, Brendan, what are you doing?
[3010.9-3014.2] Like, you figured out how to open the terminal, which is,
[3014.2-3015.5] it's a very engineering product.
[3015.5-3017.3] Even a lot of engineers don't want to use a terminal.
[3017.3-3022.6] It's just like the lowest level way to do your work.
[3022.6-3026.3] This really, really, kind of in the weeds of the computer.
[3026.3-3027.8] And so he figured out how to use the terminal.
[3027.8-3029.0] He downloaded Node.js.
[3029.0-3030.6] He downloaded quadcode.
[3030.6-3032.6] And he was doing SQL analysis in the terminal.
[3032.6-3033.4] It was crazy.
[3033.4-3036.4] And then next week, all the data scientists were doing the same thing.
[3036.4-3038.9] So when you see people abusing the product in this way,
[3038.9-3041.4] using it in a way that it wasn't designed in order to do something
[3041.4-3044.8] that is useful for them, it's just such a strong indicator
[3044.8-3047.0] that you should just build a product.
[3047.0-3048.6] And people are going to like that.
[3048.6-3050.9] Is something that's special purpose for that?
[3050.9-3053.4] I think now there's also this kind of interesting second dimension
[3053.4-3054.0] to wait in demand.
[3054.0-3055.4] This is sort of the traditional framing
[3055.4-3057.4] is look at where people are doing.
[3057.4-3060.0] Make that a little bit easier and power them.
[3060.0-3062.7] The modern framing that I've been seeing in the last six months
[3062.7-3063.6] is a little bit different.
[3063.6-3067.8] And it's look at what the model is trying to do
[3067.8-3070.8] and make that a little bit easier.
[3070.8-3072.6] And so when we first started building quadcode,
[3072.6-3076.2] I think a lot of the way that people approached designing things
[3076.2-3079.4] with LMS is they kind of put the model in a box.
[3079.4-3081.4] And there are here's this application that I want to build.
[3081.4-3082.4] Here's the thing that I wanted to do.
[3082.4-3084.5] The model you're going to do this one component of it.
[3084.5-3086.3] Here's the way that you're going to interact with these tools
[3086.3-3088.1] and APIs and whatever.
[3088.1-3089.6] And for quadcode we inverted that.
[3089.6-3091.4] We said the product is the model.
[3091.4-3092.3] We want to expose it.
[3092.3-3094.3] We want to put the minimal scaffolding around it,
[3094.3-3096.1] give it the minimal set of tools.
[3096.1-3097.1] So you can do the things.
[3097.1-3098.2] They can decide which tools to run.
[3098.2-3100.2] They can decide in what order to run them in.
[3100.2-3101.5] And so on.
[3101.5-3103.6] And I think a lot of this was just based on kind of
[3103.6-3105.8] latent demand of what the model wanted to do.
[3105.8-3108.8] And so in research we call this being on distribution.
[3108.8-3110.4] You want to see what the model is trying to do.
[3110.4-3113.6] In product terms, latent demand is just the same exact concepts.
[3113.6-3115.4] But a plot to the model.
[3115.4-3117.8] You talked about co-work, something that I saw you talk about when
[3117.8-3121.6] you launched that initially is you've your team built that in 10 days.
[3121.6-3122.4] That's insane.
[3122.4-3123.4] Yeah.
[3123.4-3123.6] I think it came out.
[3123.6-3127.1] I think it was like used by millions of people pretty quickly.
[3127.1-3129.7] Something like that being built in 10 days.
[3129.7-3132.2] Anything there, any stories there other than just it was just,
[3132.2-3133.3] you know, we used to thought it to build it.
[3133.3-3134.3] That's it.
[3134.3-3135.3] Yeah.
[3135.3-3136.3] It's funny.
[3136.3-3139.4] Quadcode, like I said, when we were we said it was not immediately a hit,
[3139.4-3140.4] it became a hit over time.
[3140.4-3141.7] And there was a few inflection points.
[3141.7-3145.4] The one was, you know, like, open four, it just really, really
[3145.4-3148.5] inflected and then in November it inflected and it just keeps inflecting.
[3148.5-3152.2] The growth just keeps getting steeper and steeper and steeper every day.
[3152.2-3154.7] But, you know, for the first few months, it wasn't a hit.
[3154.7-3155.7] 人物 used it.
[3155.7-3157.5] But a lot of people couldn't figure out how to use it.
[3157.5-3158.8] They didn't know what it was for.
[3158.8-3161.0] The model still like wasn't very good.
[3161.0-3164.2] Co-work when we released it, it was just immediately a hit.
[3164.2-3166.7] Much more so than Quadcode was early on.
[3166.7-3171.6] I think a lot of the credit honestly just goes to like Felix and Sam and the Jenny and
[3171.6-3172.6] the team that built this.
[3172.6-3175.3] He's just an incredibly strong team.
[3175.3-3179.6] And again, the place core came from is just the sweetened and the like we saw people using Quadcode
[3179.6-3180.9] for these non-technical things.
[3180.9-3182.6] And we were trying to figure out what do we do?
[3182.6-3186.9] And so for a few months the team was exploring, they were trying all sorts of different options.
[3186.9-3191.8] And in the end, someone was just like, okay, what if we just take Quadcode and put it in the
[3191.8-3193.4] desktop app?
[3193.4-3196.1] And that's essentially the thing that worked.
[3196.1-3200.0] And so over 10 days, they just completely used Quadcode to build it.
[3200.5-3204.6] You know, Core Work is actually there's this very sophisticated security system that's built
[3204.6-3205.6] in.
[3205.6-3209.0] And essentially these guard rails to make sure that the model kind of does the right thing.
[3209.0-3211.0] It doesn't go off the rails.
[3211.0-3213.9] So for example, we ship an entire virtual machine with it.
[3213.9-3215.9] And Quadcode just wrote all of this code.
[3215.9-3219.3] So we just had to think about, how do we make this a little bit safer, a little more self-guided
[3219.3-3222.0] for people that are not engineers.
[3222.0-3224.4] It was fully implemented with Quadcode.
[3224.4-3225.4] Took about 10 days.
[3225.4-3227.0] We launched it early.
[3227.0-3228.0] You know, it was still pretty rough.
[3228.0-3230.3] And it's still pretty rough around the edges.
[3230.3-3235.0] But this is kind of the way that we learn both on the product side and on the safety side is,
[3235.0-3239.8] we have to release things a little bit earlier than we think, so that we can get the feedback.
[3239.8-3241.7] So that we can talk to users.
[3241.7-3243.3] We can understand what people want.
[3243.3-3245.3] And that will shape where the product goes in the future.
[3245.3-3247.9] Yeah, I think that point is so interesting.
[3247.9-3250.2] And so unique, there's always been this idea.
[3250.2-3253.7] Really, certainly learn from users, get feedback, iterate.
[3253.7-3258.8] The fact that it's hard to even know what the AI is capable of and how people will try
[3258.8-3263.8] to use it is like, is a unique reason to start releasing things early.
[3263.8-3267.6] That'll help you as you exactly describe this idea of what is a latent demand and this thing
[3267.6-3268.6] that we didn't really know.
[3268.6-3270.6] Let's put it out there and see if people do with it.
[3270.6-3271.6] Yeah.
[3271.6-3274.1] And in front of the safety of the other dimension of that is safety.
[3274.1-3278.7] Because when you think about model safety, there's a bunch of different ways to study it.
[3278.7-3282.6] Sort of the lowest level is alignment and mechanistic interpretability.
[3282.6-3286.4] So this is when we train the model, we want to make sure that safe.
[3286.4-3291.6] We, at this point, have like pretty sophisticated technology to understand what's happening in the neurons,
[3291.6-3292.6] to trace it.
[3292.6-3297.6] And so for example, like if there's a neuron related to deception, we're starting to get to the point
[3297.6-3300.8] where we can monitor it and understand that it's activating.
[3300.8-3304.3] And so this is just the assignment, this is mechanistic interpretability, it's like the lowest
[3304.3-3305.3] layer.
[3305.3-3307.4] The second layer is Evels.
[3307.4-3308.9] And this is essentially a laboratory setting.
[3308.9-3311.0] The model is in a petri dish and you study it.
[3311.0-3314.9] And you put in this synthetic situation and just say, okay, like model, what do you do?
[3314.9-3315.9] And are you doing the right thing?
[3315.9-3316.9] Is it aligned?
[3316.9-3317.9] Does it safe?
[3317.9-3322.3] And then the third layer is seeing how the model behaves in the wild.
[3322.3-3327.4] And as the model gets more sophisticated, this becomes so important because it might look very
[3327.4-3330.6] go on these first two layers, but not create on the third one.
[3330.6-3335.5] We release Cloud Code really early because we wanted to study safety.
[3335.5-3339.5] And we actually use it within anthropic for, I think, four or five months or something before
[3339.5-3343.9] we released it because we weren't really sure, like this is the first agent that, you know,
[3343.9-3347.2] the first big agent that I think folks had released at that point.
[3347.2-3351.8] It was definitely the first coding agent that became brought we used.
[3351.8-3353.4] And so we weren't sure if it was safe.
[3353.4-3357.3] And so we actually had to study it internally for a long time before we felt good about that.
[3357.3-3360.0] And even since, you know, there's a lot that we've learned about alignment, there's a lot
[3360.0-3363.5] that we've learned about safety that we've been able to put back into the model back into
[3363.5-3364.5] the product.
[3364.5-3367.2] And for Core Work, it's pretty similar.
[3367.2-3368.3] The model's in this new setting.
[3368.3-3371.2] It's, you know, doing these tasks that are not engineering tasks.
[3371.2-3373.2] It's an agent that's acting on your behalf.
[3373.2-3374.2] He looks good on alignment.
[3374.2-3375.2] It looks good on e-vails.
[3375.2-3376.7] We try to enter a new e-looks good.
[3376.7-3377.7] We try to do it with a few customers.
[3377.7-3379.2] It looks good.
[3379.2-3381.6] Now we have to make sure it's safe in the real world.
[3381.6-3383.0] And so that's why we released a little early.
[3383.0-3384.6] That's why we call it a research preview.
[3384.6-3387.4] But yeah, it's just, it's constantly improving.
[3387.4-3391.8] And this is really the only way to make sure that over the long term the model's aligned and
[3391.8-3393.1] it's doing the right things.
[3393.5-3398.6] It's such a wild space that you work in where there's this insane competition and pace at
[3398.6-3399.6] the same time.
[3399.6-3404.8] There's this fear that if you get the, you know, the God can escape and cause damage.
[3404.8-3408.2] And just finding that balance must be so challenging.
[3408.2-3409.9] What I'm hearing is there's kind of these three layers.
[3409.9-3412.1] And I know there's like, this could be a whole podcast conversation.
[3412.1-3414.6] It's how you all think about the safety piece.
[3414.6-3417.2] But just what I'm hearing is there's these three layers you work with.
[3417.2-3420.5] There's kind of like observing the model thinking and operating.
[3420.5-3424.8] There's eat tests, evils that tell you is doing that things and then releasing it early.
[3424.8-3427.0] I haven't actually heard a ton about that first piece.
[3427.0-3428.6] That is so cool.
[3428.6-3433.9] So you guys can, there's an observability tool that can let you peek inside the models brain and
[3433.9-3435.8] see how it's thinking and where it's heading.
[3435.8-3441.6] Yeah, you should at some point have Chris Ola on the podcast because he, he's the industry expert on
[3441.6-3442.6] this.
[3442.6-3446.1] He invented this field of, we call it mechanistic interpretability.
[3446.1-3450.4] And the idea is, you know, like, at its core, like, what is your brain?
[3450.4-3451.4] Like, what is it?
[3451.4-3453.6] It's like, it's a bunch of neurons that are connected.
[3453.6-3458.2] And so what you can do is like, in a human brain or animal brain, you can study it at this kind
[3458.2-3459.2] of mechanistic level.
[3459.2-3461.1] It's understand what the neurons are doing.
[3461.1-3465.1] It turns out surprisingly a lot of this does translate to models also.
[3465.1-3469.3] So model neurons are not the same as animal neurons, but they behave similarly in a lot
[3469.3-3470.3] of ways.
[3470.3-3474.5] And so we've been able to learn just a ton about the way these neurons work about, you know,
[3474.5-3480.0] this layer or this neuron maps to this concept, how particular concepts are encoded,
[3480.0-3482.6] how the model is planning, how it thinks ahead.
[3482.6-3487.0] You know, like, a long time ago, we weren't sure if the model is just predicting the next token
[3487.0-3489.8] or is doing something a little bit deeper.
[3489.8-3492.8] Now I think there's actually quite strong evidence that it is doing something a little bit
[3492.8-3493.8] deeper.
[3493.8-3499.1] And then the structures that we do this are prehesivisticated now, where, as the models get bigger,
[3499.1-3502.8] it's not just like a single neuron that corresponds to a concept, a single neuron might
[3502.8-3504.2] correspond to a dozen concepts.
[3504.5-3508.3] And if it's activated together with other neurons, this is called superposition.
[3508.3-3512.5] And together it represents this more sophisticated concept.
[3512.5-3515.0] And it is just something we're learning about all the time.
[3515.0-3522.0] You know, for anthropic as we think about the way this space evolves, doing this in a way that is safe
[3522.0-3525.4] and good for the world is just, this is the reason that we exist.
[3525.4-3527.9] And this is the reason that everyone is at anthropic.
[3527.9-3530.5] Everyone that is here, this is the reason why they're here.
[3530.6-3532.9] So a lot of this work, we actually open source.
[3532.9-3534.4] We publish it a lot.
[3534.4-3539.2] And you know, we publish very freely to talk about this just so we can inspire other labs that are
[3539.2-3543.2] working on similar things to do it in a way that's safe.
[3543.2-3545.4] And this is something that we've been doing for Cloud Code also.
[3545.4-3549.0] We call this the Race to the Top internally.
[3549.0-3553.5] And so for Cloud Code, for example, we released an open source sandbox.
[3553.5-3554.5] And this is a sandbox.
[3554.5-3556.8] They can run the agent in.
[3556.8-3560.9] And it just makes sure that there are certain boundaries and it can't access like everything on your system.
[3560.9-3565.3] And we made that open source and it actually works with any agent, not just Cloud Code.
[3565.3-3569.1] Because we wanted to make it really easy for others to do the same thing.
[3569.1-3571.8] So this is just the same principle of Race to the Top.
[3571.8-3574.2] We want to make sure this thing goes well.
[3574.2-3577.8] And this is just the, this is the we work that we have incredible.
[3577.8-3578.4] Okay.
[3578.4-3580.0] I definitely want to spend more time on that.
[3580.0-3582.0] I will follow up with this suggestion.
[3582.0-3587.0] Something else that I've been noticing in the in the field across engineers,
[3587.0-3594.9] product managers, others that work with agents is there's this kind of anxiety people feel when their agents aren't working.
[3594.9-3596.8] There's a sense that like, oh, man,
[3596.8-3599.9] uh, need to ask a question and answer or it's like blocked on something.
[3600.0-3603.8] or I just like, I'm like, there's all this productivity I'm losing.
[3603.8-3606.0] I like, I need to wake up and get it going again.
[3606.0-3608.4] Is that something you feel that something your team feels?
[3608.4-3611.6] Do you feel like this is a problem you need to track and think about?
[3611.6-3613.2] I always have a bunch of agents running.
[3613.2-3615.6] So I got the moment I have five agents running.
[3615.6-3619.6] At any moment, like, I wake up and I start up on an agents.
[3619.6-3623.3] The first thing I did when I woke up is like, oh man, I want everyone to check this thing.
[3623.3-3629.6] So I hope that my phone, quad iOS app, code tab, like agent do, do, blah blah blah.
[3629.6-3632.6] Because I wrote some code yesterday and I was like, wait, did I do this right?
[3632.6-3634.6] I was like, kind of double guessing something.
[3634.6-3636.0] And it was correct.
[3636.0-3638.6] But it's just like so easy to do this.
[3638.6-3639.4] So I don't know.
[3639.4-3641.8] There is this little bit of anxiety, maybe.
[3641.8-3645.6] I personally haven't really felt it just because I have agents running all the time.
[3645.6-3648.4] And I'm also just like not locked into a terminal anymore.
[3648.4-3653.7] Maybe a third of my code now is in the terminal, but also a third is using the desktop app.
[3653.7-3657.6] And then a third is the iOS app, which is just so surprising.
[3657.6-3662.7] Because I did not think that this would be the way that I code in even in 2026.
[3662.7-3668.6] I love this is described as coding still, which is just talking to the cloud code to code for you, essentially.
[3668.6-3671.4] And it's interesting that this is not like this is now coding.
[3671.4-3675.8] Coding now is describing what you want, not writing actual code.
[3675.8-3683.0] I kind of wonder if the people that used to code using punch cards or whatever, if you show them software, what they would have said.
[3683.0-3691.1] I remember reading something, this was maybe like very early versions of like ACM, like magazine or something.
[3691.1-3693.6] Where people were saying, no, it's not the same thing.
[3693.6-3695.5] This isn't really coding.
[3695.5-3697.2] They call it a programming.
[3697.2-3699.7] I think coding is kind of a new word.
[3699.7-3700.9] But I kind of think about those.
[3700.9-3706.4] Back in the, my family, some of the Soviet Union, I was born in Ukraine.
[3706.4-3710.4] My grandpa was actually one of the first programmers in the Soviet Union.
[3710.4-3712.8] He programmed using punch cards.
[3712.8-3717.8] And you know, like he told my mom growing up told these stories of like,
[3717.8-3721.4] or she told these stories, when she was growing up, he would bring these punch cards home.
[3721.4-3724.6] And there's these like big stacks of punch cards.
[3724.6-3726.7] And for her, she would like draw all of them with crayons.
[3726.7-3728.6] And that was a curcheltered memory.
[3728.6-3730.4] But for him, that was like his experience of programming.
[3730.4-3733.4] And he actually never saw the software transition.
[3733.4-3735.1] But at some point, it did transition to software.
[3735.1-3738.1] And I think there's probably this older generation of programmers.
[3738.1-3740.1] That just didn't take software very seriously.
[3740.1-3743.0] And they would have been like, well, you know, it's not really coding.
[3743.0-3746.2] But I think this is a field that just has always been changing in this way.
[3747.0-3749.4] I don't think you know this, but I was born in Ukraine also.
[3750.6-3751.4] Oh, I don't know.
[3751.4-3752.0] Yeah, yes.
[3752.0-3752.7] We're done.
[3752.7-3753.8] I'm from Odessa.
[3754.4-3755.0] Oh, me too.
[3756.2-3756.8] He's one.
[3756.8-3758.0] Yeah, that's crazy.
[3759.2-3760.6] Wow, incredible.
[3760.6-3761.6] What a moment.
[3761.6-3763.3] Maybe we're related in some small way.
[3764.3-3767.0] What year did your, did you leave in your family leave?
[3768.7-3769.8] We can in 95.
[3770.5-3770.8] Okay.
[3770.8-3772.3] We left in 88 little earlier.
[3773.8-3776.2] What are different life that would have been to not leave?
[3777.2-3779.7] Yeah, I just, I feel, I feel so lucky every day.
[3779.7-3781.4] But uh, get to go up here.
[3782.2-3784.5] Yeah, my family anytime there's like a toaster or meal.
[3784.5-3785.8] They're just like, to America.
[3787.0-3789.4] No, it's like, okay, enough about that.
[3789.4-3790.0] But you get it.
[3790.0-3791.9] You know, once you start really thinking about what life could have been.
[3792.7-3793.5] Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah.
[3793.5-3795.4] We do the same post, but it's still vodka.
[3796.1-3797.3] And it's still vodka.
[3799.3-3800.1] Oh, man.
[3800.1-3801.9] Okay, let me ask you a couple more things here.
[3802.3-3806.6] You shared some really cool tips for how to get the most out of AI.
[3806.6-3809.2] Had a build on AI, had a build great products on AI.
[3809.2-3814.0] One tip you shared is give your team as many tokens as they want, just like let them experiment.
[3814.0-3818.6] You also shared just advice generally of just build towards the model or the model is going.
[3818.6-3819.8] Not to where it is today.
[3819.8-3822.3] What other advice do you have for folks that are trying to build AI products?
[3823.0-3824.1] I probably share a few more things.
[3824.1-3826.4] So one is don't try to box the model in.
[3827.6-3832.4] I think a lot of people who's instinct when they build on the model is they try to make it behave a very
[3832.4-3833.2] particular way.
[3833.6-3836.0] They're like, you know, this is a component of a bigger system.
[3836.0-3840.0] I think some examples of this are people layering like very strict workflows on the model.
[3840.0-3843.7] For example, you know, to say like you must do step one, then step two, then step three.
[3843.7-3845.8] And you have this like very fancy orchestrator doing this.
[3846.2-3848.0] But actually, almost always you get better results.
[3848.0-3851.0] If you just give the model tools, you give it a goal and you let it figure it out.
[3851.5-3855.4] I think a year ago you actually needed a lot of the scaffolding, but nowadays you don't really need it.
[3856.0-3861.4] So, you know, I don't know what to call this principle, but it's like, you know, like asks not what the model can do for you.
[3861.8-3863.1] Maybe it's something like this.
[3863.5-3866.4] Just think about how do you give the model the tools to do things?
[3866.4-3867.6] Don't try to over-curate it.
[3867.6-3868.9] Don't try to put it into a box.
[3869.4-3871.4] Don't try to give it a bunch of context up front.
[3871.4-3874.2] Give it a tool so that it can get the context it needs.
[3874.2-3875.4] You're just going to get better results.
[3877.5-3884.9] Think a second one is maybe actually like a more even more general version of this principle is just the bitter lesson.
[3886.2-3891.2] And actually for the quote, Koti, we have a, you know, hopefully, hopefully listeners have read this,
[3891.2-3893.8] but we're just not having to have this blog post maybe 10 years ago.
[3893.8-3894.8] Called the bitter lesson.
[3895.8-3897.4] And it's actually a really simple idea.
[3897.4-3901.6] His idea was that the more general model will always outperform the more specific model.
[3902.2-3905.8] And I think for him he was talking about self-driving cars and other domains like this.
[3906.5-3909.7] But actually there's just so many core areas to the bitter lesson.
[3910.5-3914.2] And for me the biggest one is just always bet on the more general model.
[3915.2-3918.6] And over the long term, like don't try to use tiny models for stuff.
[3918.6-3919.8] Don't try to like fine tune.
[3919.8-3921.2] Don't try to do any of this stuff.
[3921.2-3922.4] There's like some applications.
[3922.4-3923.9] You know, there's some reasons to do this.
[3924.3-3927.1] But almost always try to bet on the more general model if you can.
[3927.1-3928.4] If you have that flexibility.
[3929.8-3934.9] And so these workflows are essentially a way that, you know, it's not, it's not a general model.
[3934.9-3936.6] It's putting the scaffolding around it.
[3936.6-3940.6] And in general, what we see is maybe scaffolding can improve performance maybe 10-20%.
[3940.6-3941.4] Something like this.
[3942.2-3945.4] But often these gains just get wiped out with the next model.
[3946.2-3949.0] So it's almost better to just wait for the next one.
[3950.2-3952.6] And I think maybe this is a final principle and something that
[3952.6-3955.4] Cloud Code, I think, got right in hindsight.
[3955.8-3960.2] From the very beginning we bet on building for the model six months from now.
[3961.3-3962.5] Not for the model of today.
[3962.6-3969.4] And for the very early versions of the product, they just wrote so little of my code because I didn't trust it.
[3969.8-3976.5] Because you know, it was like Sonnet 3.5, then it was like 3.6 or 3.5 new, whatever, whatever, whatever,
[3976.5-3977.1] maybe we give it.
[3978.2-3980.0] These models just weren't very good at coding yet.
[3980.0-3982.3] They were getting there, but it was still pretty early.
[3983.0-3988.5] So back then the model did, you used to get for me, it automated some things.
[3988.5-3990.6] But it really wasn't doing a huge amount of my coding.
[3991.4-3994.4] And so the bet with Cloud Code was at some point the model gets good enough
[3995.3-3997.3] that it can just write a lot of the code.
[3997.6-4000.6] And this is a thing that we first started seeing with Opus 4 and Sonnet 4.
[4000.6-4005.6] And Opus 4 was our first AESL3 class model that we really speck in May.
[4006.3-4010.9] And we just saw this in Function because everyone started to use Cloud Code for the first time.
[4010.9-4013.7] And that was kind of when we were going through really went exponential.
[4013.7-4015.8] Like I said, it's kind of, it's stayed there.
[4016.4-4019.9] So I think this is something, this is a advice that I actually give to a lot of folks.
[4020.2-4024.2] Especially people building startups, it's going to be uncomfortable because your product market
[4024.2-4025.9] will be very good for the first six months.
[4026.6-4031.3] But if you build for the model six months out, when that model comes out,
[4031.3-4035.2] you're just going to hit the ground running and the product is going to click and start to work.
[4035.8-4040.1] And when you say build for the model six months out, what is, what is it that you think people can
[4040.1-4042.6] assume will happen? Is it just generally, it will get better?
[4043.0-4046.7] At things, is it just like, okay, it's like almost good enough.
[4046.7-4050.2] And that's a sign that it'll probably get better at that thing. Is there any advice there?
[4050.6-4055.0] I think that's a good way to do it. Like, obviously within AI Lab, we get to see the specific ways that
[4055.0-4060.4] it gets better. So it's a little unfair. But we also, we try to talk about this.
[4061.0-4064.5] So, you know, like one of the ways that it's going to get better is it's going to get better and better
[4064.5-4068.2] using tools and using computers. This is a better would make.
[4069.4-4073.4] Another one is it's going to get better and better for running for long periods of time.
[4074.4-4077.1] And this is a place that you know, like there's also some studies about those. But if you just
[4077.1-4083.2] trace that trajectory or, you know, maybe even like for my own experience, when I used Sonic 3.5 back,
[4083.2-4089.7] you know, a year ago, it could run for baby 15 or 30 seconds. Or for, for a start of going off the rails.
[4089.7-4093.0] And you just really had to hold it's hand through any kind of complicated task.
[4093.6-4100.3] But nowadays with Opus 4.6, you know, on average it'll run maybe 10 30 20 30 minutes, unattended. And
[4100.5-4103.7] I'll just like start another quad and have a do something else. And, you know, like I said,
[4103.7-4108.9] it always have a bunch of quad running. And they can also run for hours or even days at a time.
[4108.9-4112.6] I think there are some examples where they ran for many weeks. And so I think over time,
[4112.6-4117.0] this is going to become more and more normal where the models are running for a very, very long period of time.
[4117.0-4119.1] And you don't have to sit there and maybe set them anymore.
[4119.5-4124.3] So you just talked about tips for building AI products and he tips for someone just using
[4124.3-4128.8] cloud code for say for the first time or just someone to ready using cloud code that wants to get better.
[4128.9-4131.0] Where are like a couple of prototypes that you could share?
[4131.0-4136.2] I will give you caveat, which is there's no one right way to use cloud code. So I can share some tips.
[4136.2-4141.0] But honestly, this is a dev tool, developers are all different. Developers have different preferences.
[4141.0-4145.6] They have different environments. So there's just so many ways to use these tools. There's no one right way.
[4146.3-4152.1] You sort of have to find your own path. Luckily, you can ask cloud code. It's able to make recommendations.
[4152.1-4155.7] They can edit your settings. They kind of know about itself. So it can help you can help with that.
[4156.6-4160.9] A few tips that generally I find pretty useful. So number one is just use the most capable model.
[4161.6-4165.2] Currently, that's open 4.6. I have maximum effort enabled always.
[4166.0-4170.7] The thing that happens is sometimes people try to use a less expensive model like Sonic or something like this.
[4171.1-4174.6] But because it's less intelligent, it actually takes more tokens than to do the same task.
[4175.4-4179.0] And so it's actually not obvious that it's cheaper if you use a less expensive model.
[4179.5-4185.3] Often it's actually cheaper in less token intensive if you use the most capable model because it can just do the same thing much faster.
[4185.3-4190.6] With less correction, less handholding on its own. So the first tip is just use the best model.
[4191.8-4198.0] The second one is use plan mode. I start almost all of my tasks in plan mode, maybe like 80%.
[4198.6-4200.0] And plan mode is actually really...
[4200.0-4204.9] simple, all it is is we inject one sentence into the model's prompt to say,
[4204.9-4206.0] please don't write any code yet.
[4206.0-4209.4] And so there's actually nothing fancy going on.
[4209.4-4211.5] It's just a simplest thing.
[4211.5-4214.8] And so for people that are in the terminal, it's just shift tab twice and that gets you
[4214.8-4216.3] into plan mode.
[4216.3-4218.6] For people in the desktop app, there's a little button on web.
[4218.6-4220.9] There's a little button is coming pretty simple.
[4220.9-4225.2] And we just want you to for the swack integration too.
[4225.2-4227.3] So plan mode is the second one.
[4227.3-4231.7] And essentially the model would just go back and forth with you once the plan looks good,
[4231.7-4233.3] then you let the model execute.
[4233.3-4235.0] I auto accept edits after that.
[4235.0-4237.4] Because if the plan looks good, it's just going to one shot it.
[4237.4-4242.3] It'll get right the first time almost every time with the open score point six.
[4242.3-4245.2] And then maybe the third tip is just play around with different interfaces.
[4245.2-4248.6] I think a lot of people when they think about quadcode, they think about a terminal.
[4248.6-4253.2] And of course, we support every terminal, we support Mac, Windows, whatever terminal you might use
[4253.2-4255.1] it works perfectly.
[4255.1-4258.3] But we actually support a lot of other form factors too.
[4258.3-4259.8] We have iOS and Android apps.
[4259.8-4261.4] We have a desktop app.
[4261.4-4263.1] There's the swack integration.
[4263.1-4265.0] There's all sorts of things that we support.
[4265.0-4266.3] So I would just like play around with these.
[4266.3-4268.1] And again, it's like every engineer is different.
[4268.1-4269.9] Everyone that's building is different.
[4269.9-4272.3] Just find the thing that feels right to you and use that.
[4272.3-4273.6] You don't have to use a terminal.
[4273.6-4275.6] It's the same quad agent running everywhere.
[4275.6-4276.6] Amazing.
[4276.6-4280.5] Okay, just a couple more questions to round things out.
[4280.5-4282.3] What's your take on code X?
[4282.3-4284.0] How do you feel about that product?
[4284.0-4288.7] How do you feel about where they're going and just competing in this very competitive space
[4288.7-4290.0] in coding agents?
[4290.0-4293.2] Yeah, I actually haven't really used it.
[4293.2-4296.7] But I think I did use it maybe when it came out.
[4296.7-4298.0] It looked a lot like quadcode to me.
[4298.0-4300.1] So those kind of flattering.
[4300.1-4304.4] It's I think it's actually good to have more competition because people should get to choose.
[4304.4-4309.3] And hopefully it forces all of us to do a even better job.
[4309.3-4312.9] I'm going to say for our team though, we're just focused on solving the problems that users
[4312.9-4314.4] have.
[4314.4-4317.7] So for us, we don't spend a lot of time looking and competing products.
[4317.7-4319.5] We don't really try the other products.
[4319.5-4321.5] You want to be aware of them.
[4321.5-4323.3] You want to know they exist.
[4323.3-4325.4] But for me, I love talking to users.
[4325.4-4327.5] I love making the product better.
[4327.5-4330.4] I love just acting on feedback.
[4330.4-4333.8] So it's really just about building a good product.
[4333.8-4334.8] Maybe a last question.
[4334.8-4337.6] So I talked to a Ben Man, co-founder of anthropic.
[4337.8-4341.4] What's the talk you've had about just suggestions which I've integrated throughout our chat?
[4341.4-4346.1] One question you had for you is, what's your plan post, EGI?
[4346.1-4348.6] What are you thinking you're going to be doing with your like like once we hit AGI?
[4348.6-4350.0] Whatever that means.
[4350.0-4354.8] So before I joined inthropic, I was actually living in rural Japan.
[4354.8-4358.0] And it was like a totally different lifestyle.
[4358.0-4359.8] I was like the only engineer in the town.
[4359.8-4362.0] I was the only English speaker in the town.
[4362.0-4363.4] It was just like a totally different vibe.
[4363.4-4367.5] Like a couple of times a week, I would like bike to the farmers market.
[4367.5-4371.2] And you like bike by like race, patty, isn't stuff.
[4371.2-4375.4] You just like a totally different speed than it just complete opposite of San Francisco.
[4375.4-4380.9] One of the things that I really liked is a way that we got to know our neighbors and we built friendships
[4380.9-4383.4] by trading like pickles.
[4383.4-4389.2] So in the town where we lived, it was actually like everyone made like me so everyone made the goals.
[4389.2-4392.1] And so I actually got like decently good at making me so.
[4392.1-4397.2] And I made a bunch of batches and this is something that I still make.
[4398.2-4401.8] Measles, this interesting thing where it teaches you to think on these a long time skills that's
[4401.8-4403.4] just very different than engineering.
[4403.4-4407.4] Because like a batch of white me so it takes like at least three months to make.
[4407.4-4410.4] And I read me so it's like you know two, three, four years.
[4410.4-4411.6] You have to be very patient.
[4411.6-4413.8] It kind of makes it up and then you just like let it set.
[4413.8-4415.6] You have to be very, very patient.
[4415.6-4419.8] So the thing that I love about is just thinking in these long time skills.
[4419.8-4425.3] And yeah, I think post-AGI or if I wasn't an philanthropic, I'd probably be making me so.
[4425.7-4428.0] I love this answer.
[4428.0-4431.2] Ben asked me to ask you about what's the deal with you and me so.
[4431.2-4433.9] And so I love that you answer.
[4433.9-4435.4] Okay.
[4435.4-4440.9] So the future, the future might be just going deep into me so getting it really good at getting making me so.
[4442.3-4442.9] Amazing.
[4444.2-4445.2] Boris, this was in Karabla.
[4445.2-4447.6] I feel like we're brothers now from Ukraine.
[4448.6-4452.6] Before we get to a very exciting ladyground, is there anything else that you wanted to share?
[4452.6-4454.8] Is there anything you want to leave listeners with?
[4454.8-4457.7] Anything you want to double down on?
[4458.2-4458.7] Yeah.
[4458.7-4463.6] I think I would just like to underscore, you know, like for philanthropic since the beginning,
[4463.6-4468.0] this idea of like starting at coding, then getting to two use, then getting to computer use,
[4468.0-4469.7] has just been the way that we think about things.
[4470.3-4475.2] And this is the way that we know the models are going to develop or the way that we want to build our models.
[4475.2-4480.0] And it's also the way that we get to learn about safety, study it, and improve it the most.
[4480.7-4486.6] So everything that's happening right now around just like quadcode becoming this huge,
[4486.6-4488.0] multi-billion-dollar business.
[4488.6-4492.6] And now all my friends use quadcode and they just text me about it all the time.
[4493.5-4495.4] So just like this thing getting kind of big.
[4495.4-4500.0] In some ways it's a total surprise because this isn't kind of the,
[4500.4-4501.9] we didn't know that it would be this product.
[4501.9-4504.2] We didn't know that it would start in a terminal or anything like this.
[4504.8-4509.5] But in some ways it's just totally unsurprising because this has been our belief as a company for
[4509.6-4512.5] a long time. At the same time it just feels still very early.
[4513.3-4517.0] Like most of the world still does not use quadcode, most of the world still does not use AI.
[4517.7-4521.0] So it just feels like this is 1% done and there's so much more to go.
[4521.8-4523.7] Yeah man, that's insane to think.
[4523.7-4527.0] Seeing the numbers that are coming out, you guys just raised the bazillion dollars.
[4527.8-4531.6] I think quadcode alone is making $2 billion revenue.
[4531.6-4536.0] You think anthropic, you think the number you guys put out, you're making 15 billion in revenue.
[4536.1-4541.3] It's insane to just think this is how early it still is and just the numbers we're seeing.
[4542.1-4543.8] Yeah, yeah, yeah. It's crazy.
[4543.8-4547.8] And I mean like the way that quadcode has got growing is honestly just the users.
[4547.8-4550.7] Like we so many people use it, they're so passionate about it.
[4550.7-4554.7] They fall in love with the product and then they tell us about stuff that doesn't work, stuff that they want.
[4555.3-4559.0] And so like the only reason that it keeps improving is because everyone is using it.
[4559.0-4561.7] Everyone is talking about it, everyone keeps getting feedback.
[4561.7-4563.6] And this is just the single most important thing.
[4563.6-4569.0] And for me, this is the way that I love to spend my days just talking to users and making a better for them.
[4569.7-4570.6] And making me so.
[4571.7-4574.3] And making me so, the me so is not super involved.
[4574.3-4575.7] They just, you just gotta wait.
[4577.7-4582.2] Well Boris with that, we've reached our very exciting, like in-ground, I've got five questions for you.
[4582.2-4583.8] Are you ready? Let's do it.
[4584.7-4589.3] First question, what are two or three books that you find yourself recommending most to other people?
[4589.3-4590.3] I am a big reader.
[4591.3-4592.6] I would start with a technical book.
[4592.6-4595.0] One is it is functional programming in school.
[4595.6-4598.0] This is the single best technical book I've ever read.
[4598.6-4601.2] It's very weird because you're probably not going to use school.
[4601.2-4603.3] And I don't know how much this matters in the future now.
[4603.8-4607.4] But there's this just elegance to functional programming and thinking in types.
[4607.9-4611.3] This is just the way that I code and the way that I can't stop thinking about coding.
[4611.3-4613.7] So you could think of it as a historical artifact.
[4613.7-4614.7] You could think of it as a satellite.
[4614.7-4615.6] That will level you on.
[4616.1-4616.9] I love this.
[4616.9-4618.5] Ah, never before mentioned book.
[4618.5-4619.1] My favorite.
[4619.7-4620.7] Amazing. Amazing.
[4621.4-4624.4] Okay. Second one is Excel orondo by Strauss.
[4624.4-4628.6] This is probably, you know, like my, my big genre is sci-fi.
[4629.3-4630.6] Probably sci-fi and fiction.
[4631.4-4633.1] Excel orondo is just this incredible book.
[4633.1-4636.8] And it's just so fast-paced that pace gets faster and faster and faster.
[4636.8-4641.3] And I just feel like it captures the essence of this moment that we're in more than any other book that
[4641.3-4643.0] I've read. Just the speed of it.
[4643.6-4646.6] And it starts as a lift off is starting to happen.
[4646.6-4648.6] And you know, starting to approach the singularity.
[4649.1-4653.3] And it ends with like this like collective lobster consciousness, orbiting Jupiter.
[4654.3-4657.5] And you know, this happens over like this panel of few decades or something.
[4657.9-4660.5] So the the pace is just incredible. I really love it.
[4661.4-4664.6] Maybe I'll do one more book. The wandering earth.
[4665.6-4667.3] Wondering earth by Seetion Lu.
[4668.2-4670.2] So he's the guy that did three body problems.
[4671.0-4672.3] I think a lot of people know for that.
[4672.3-4676.5] Actually, I think three body problems awesome, but I actually like to short stories even more.
[4676.5-4678.7] So wandering earth is one of the short story collections.
[4679.2-4681.1] You just have some really, really amazing stories.
[4681.5-4685.4] And it's also just quite interesting to see a Chinese sci-fi.
[4685.8-4689.5] Because it has a very different perspective than Western sci-fi and kind of the way that
[4690.2-4694.9] I'm at least he has a writer thinks about it. So it's just really, really interesting to read and just beautifully written.
[4695.4-4699.1] It's so interesting how sci-fi is prepared us to think about where things are going.
[4699.7-4704.0] Just like it creates these momentum models of like, okay, I see I've read about this sort of world.
[4704.6-4707.8] Yeah, I think for me this is like the reason that I joined in the topic actually.
[4708.2-4712.1] Because like I said, I was living in this rural place.
[4712.1-4716.1] I was thinking these long timeskills because everything is just so slow out there.
[4716.1-4717.3] At least compared to us half.
[4718.0-4720.5] And just like all the things that you do are based around the seasons.
[4720.5-4723.0] And it's based around this food that takes many, many months.
[4723.2-4725.6] That's the way that kind of social events are organized.
[4725.6-4727.6] That's the way you kind of organize your time.
[4728.2-4731.3] You go to the farmers market and it's like it's persimmon season.
[4731.3-4734.2] And you know that because there's like 20% inventors.
[4734.2-4736.8] And then the next week the season is done and then it's like grapes.
[4736.8-4738.2] You kind of see this.
[4738.2-4739.9] So it's like these kind of long time scales.
[4740.2-4742.1] And those are also reading a bunch of sci-fi at the time.
[4742.6-4746.2] And just like being in this moment I was like, you know, just thinking about these long time scales.
[4746.7-4748.1] I know how this thing can go.
[4748.1-4751.4] And I just I felt like I had to contribute to it going a little bit better.
[4751.9-4755.8] And that's actually why I ended up at Anton Ben Manos was a big part of that too.
[4756.9-4761.6] I feel like I want to do a whole podcast just talking about your timeage pan and the journey of Boris.
[4762.6-4766.6] Through Japan to Anthropics but we'll keep it short.
[4767.0-4769.1] I'll quickly recommend a sci-fi book to you if you haven't read it.
[4769.1-4770.4] Have you read Fire upon the Deep?
[4772.3-4773.5] This is Vinge, right?
[4773.5-4773.8] Yeah.
[4773.8-4774.0] Yeah.
[4774.6-4775.2] Okay.
[4775.2-4778.9] That one's like it's like so interesting from an AI, AI perspective.
[4779.7-4783.1] So a few people have read that so I've been able to do that myself.
[4783.5-4783.8] Yeah.
[4783.8-4785.4] It's like I really want to do that.
[4786.1-4786.7] Yeah, yeah, yeah, yeah, yeah.
[4786.7-4788.6] I've like a deepness in this guy also.
[4788.6-4790.2] I think it was purchased a sequel later.
[4790.2-4791.0] Yeah.
[4791.0-4791.4] Yeah, yeah, yeah, yeah.
[4791.4-4791.9] I think so.
[4791.9-4792.2] Yeah.
[4792.2-4794.6] It's very long and like complex to get into but so good.
[4794.6-4796.3] Okay, we'll keep going through a lighting round.
[4796.9-4799.0] The other favorite recent movie or TV show, really enjoyed.
[4799.7-4800.0] So...
[4800.0-4802.2] I actually don't really watch TV or movies.
[4802.2-4804.3] I just don't really have time these days.
[4804.3-4807.0] I did watch, I'm gonna bring up another session
[4807.0-4809.2] a little bit of the three body problem series on Netflix.
[4809.2-4812.0] I really loved, I thought those like a great rendition
[4812.0-4813.0] of the book series.
[4813.0-4815.2] So the common pattern across AI leaders
[4815.2-4816.8] is no time to watch TV or movies
[4816.8-4819.6] which I completely understand.
[4819.6-4821.6] Is there a favorite product you recently discovered
[4821.6-4823.0] that you really love?
[4823.0-4824.6] I'm gonna like, chill a little bit and just say,
[4824.6-4827.6] cowork, because this is what you do.
[4827.6-4830.6] Really the one product that's been pretty life-changing for me.
[4830.6-4832.9] Just because I have a running all the time
[4832.9-4834.7] and the Chrome integration in particular
[4834.7-4836.4] is just really excellent.
[4836.4-4839.1] So it's been like, you paid a traffic line for me.
[4839.1-4841.7] It can't sold a couple of subscriptions for me.
[4841.7-4843.2] Just like the amount of tedious work,
[4843.2-4845.1] it gets out of the way is awesome.
[4845.1-4846.4] I also don't know if it's a product,
[4846.4-4849.4] but maybe I'll also have another podcast that I really love.
[4849.4-4853.0] Obviously besides money is the way.
[4853.0-4857.6] Yeah, it's the acquired podcast that I've been in David.
[4857.6-4860.0] It's just like super awesome.
[4860.0-4862.4] I feel like the way that they get into business history
[4862.4-4865.0] and bring it alive is really, really good.
[4865.0-4867.0] And I would start with an Nintendo episode
[4867.0-4869.0] if you haven't listened to it.
[4869.0-4870.3] Great tip.
[4870.3-4871.7] With co-work, just so people understand,
[4871.7-4873.5] if they haven't tried this, like basically
[4873.5-4876.1] you type something you want to get done
[4876.1-4879.4] and it can launch Chrome and just do things for you.
[4879.4-4882.8] I saw one of the someone went on Pat Leave from anthropic
[4882.8-4885.5] and you had to fill out these medical forms for him.
[4885.5-4886.8] These really annoying PDFs
[4886.8-4888.8] or it just loads up at the browser and logs in,
[4888.8-4890.2] fills about some bits of them.
[4890.2-4891.4] Yeah, exactly exactly.
[4891.4-4892.8] And it actually just kind of works.
[4892.8-4894.4] Like we tried this experiment like a year ago
[4894.4-4896.2] and it didn't really work as the model wasn't ready,
[4896.2-4898.1] but now it actually just works.
[4898.1-4899.2] And it's amazing.
[4899.2-4901.3] I think a lot of people just don't really understand
[4901.3-4904.9] what this is because they haven't used agent before
[4904.9-4907.1] and it just feels very, very similar to me
[4907.1-4909.2] to the quadcode a year ago.
[4909.2-4911.0] But like I said, it's just growing much faster
[4911.0-4912.7] than quadcode did in the early days.
[4912.7-4915.6] So I think it's starting to break through a bit.
[4915.6-4917.3] And there's also this Chrome extension that you mentioned
[4917.3-4918.9] that you could just leave stand alone.
[4918.9-4921.2] That sits in Chrome and you could just talk to cloud,
[4921.2-4924.7] looking at your screen, at your browser
[4924.7-4926.1] and have it do stuff, have it tell you about
[4926.1-4927.2] what you're looking at, summarise,
[4927.2-4928.7] which you're looking at, things like that.
[4928.7-4929.7] Exactly, exactly.
[4929.7-4931.6] For people that are just learning to use code,
[4931.6-4934.3] the thing I recommend is so you download the quad desktop app,
[4934.3-4937.5] you go to the code tab, it's right next to the code tab.
[4937.5-4940.2] The thing that I recommend doing is start by having it
[4940.2-4942.5] use a tool, so like clean up your desktop
[4942.5-4944.3] or like summarize or email or something like this,
[4944.3-4946.5] or like respond to the top three emails.
[4946.5-4949.4] Like it actually just responds to emails from me now too.
[4949.4-4951.7] The second thing is connect tools.
[4951.7-4953.3] So like if you connect like, if you say,
[4953.3-4955.7] look at my top emails and then send some back messages
[4955.7-4957.9] or like put them in a spreadsheet or something.
[4957.9-4960.3] Or for example, like I use it for all my project management.
[4960.3-4962.6] So we have a single spreadsheet for the whole team.
[4962.6-4964.4] There's like a row per engineer every week, everyone
[4964.4-4966.5] fills out a status and every Monday,
[4966.5-4968.8] code just goes through and it messages every engine
[4968.8-4970.9] or on Slack that hasn't filled out their status.
[4970.9-4972.5] And so I don't have to do this anymore.
[4972.5-4975.2] And this is just one problem to do everything.
[4975.2-4978.3] And then the third thing is just run a bunch of quads in parallel.
[4978.3-4979.0] So it can cowork.
[4979.0-4981.1] You can have as many tasks running as you want.
[4981.1-4982.2] So it's like start one task.
[4982.2-4984.2] You know, I have this project management thing running.
[4984.2-4985.2] Then I'll have to do something else.
[4985.2-4986.0] Then something else.
[4986.0-4987.3] And then I'll kick these off.
[4987.3-4989.8] And then I just go get a coffee while it runs.
[4989.8-4993.8] There's a post I like to that shares a bunch of ways people use.
[4993.8-4996.0] What was previously called code or now,
[4996.0-4997.4] just so you could do through code work.
[4997.4-4998.4] Because a lot of this is just like,
[4998.4-5000.4] oh, wow, I hadn't thought I could use it for that.
[5000.4-5001.9] And once you see, like these examples,
[5001.9-5005.0] I think our people need to hear just like, oh, wow,
[5005.0-5006.7] I didn't know I could do that.
[5006.7-5010.2] So I think a lot of this was also, some of this was also inspired by you,
[5010.2-5014.8] honey, you had this post about, it was like 50 non-technical use cases
[5014.8-5016.6] for Quack load or something like this.
[5016.6-5019.4] So we actually, one of our PMs used that as a way to evaluate
[5019.4-5021.6] code before we released it.
[5021.6-5023.3] And I think at the point where we hit work work
[5023.3-5025.2] was able to do like 48 out of the 50th.
[5025.2-5026.7] It's pretty good.
[5026.7-5028.6] Wow, I did not know that.
[5028.6-5030.4] That itself.
[5031.3-5032.5] It's becoming evil.
[5033.6-5034.3] Yeah.
[5034.3-5035.8] How did that go?
[5035.8-5037.4] Amazing.
[5037.4-5041.3] I feel like I'm valuable to the future of, yeah.
[5041.3-5042.9] This is like reverse breaking through.
[5045.3-5046.3] Wow, that is so cool.
[5046.3-5048.3] Wow, okay, I wonder what those last two are.
[5048.3-5050.6] Anyway, okay, two more questions.
[5050.6-5051.9] Do you have a favorite life motto?
[5051.9-5054.7] The often come back to in work or in life?
[5054.7-5055.9] Use common sense.
[5057.0-5059.0] I think a lot of the failures that I see
[5059.0-5060.5] in especially in a work environment
[5060.5-5062.3] is people just failing to use common sense.
[5062.3-5065.0] Like they follow a process without thinking about it.
[5065.0-5066.4] They just do a thing without thinking about it
[5066.4-5068.5] or they're working on a product that's not a good product.
[5068.5-5069.7] They're not a good idea.
[5069.7-5070.8] And they're just following the momentum
[5070.8-5072.1] and not thinking about it.
[5072.1-5074.2] I think the best results that I see are people thinking
[5074.2-5077.9] from first principles and just developing their own common sense.
[5077.9-5081.6] Like if something smells weird, then it's probably not a good idea.
[5081.6-5083.9] So I think this is this in good advice
[5083.9-5087.0] that I give to coworkers more than anything to.
[5087.0-5089.6] And I feel like that alone could be some podcast conversation.
[5089.6-5090.6] What is common sense?
[5090.6-5091.6] How do you build it?
[5091.6-5093.1] But we'll keep this short.
[5093.1-5094.4] Final question.
[5094.4-5097.9] So you've been got more active on Twitter slash X.
[5097.9-5099.8] Here's just Y.
[5099.8-5103.2] And just what's your experience been with Twitter, the world of Twitter,
[5103.2-5107.0] because you get a lot of engagement on Twitter slash X.
[5107.0-5108.6] So for one time, I used Threads X,
[5108.6-5110.1] which was really because I actually helped
[5110.1-5112.5] they build Threads a little bit back in the day.
[5112.5-5113.4] And also just like the design,
[5113.4-5115.5] it's like a very clean product.
[5115.5-5117.3] I just really like that.
[5117.3-5120.1] I started using Threads because actually I was bored.
[5120.1-5121.6] So in December, I was in Euro.
[5121.6-5123.4] I was using Threads.
[5123.4-5126.0] Oh yeah, yeah, yeah, I started using a Twitter because I was bored.
[5126.0-5129.1] So my wife and I were, we were traveling around in Europe
[5129.1-5130.1] for December.
[5130.1-5131.2] We're just kind of no-mitting around.
[5131.2-5134.6] We went to Copenhagen, went to like a few different countries.
[5134.6-5137.1] And for me it was just like a coding vacation.
[5137.1-5140.2] So every day I was coding and that's like my favorite kind of vacation.
[5140.2-5141.9] It's just like cold all day.
[5141.9-5143.6] It's the best.
[5143.6-5146.8] And at some point I just kind of got bored and I ran out of ideas
[5146.8-5148.0] for a few hours.
[5148.0-5149.8] I was like, okay, I would go on a dude next.
[5149.8-5153.0] And so open Twitter and I saw some people tweeting about quadcode
[5153.0-5154.5] and then I just started responding.
[5154.5-5158.0] And then I was like, okay, maybe actually a thing I should do
[5158.0-5161.2] is just like look for people look for bugs that people have.
[5161.2-5163.3] Maybe people have like bugs or kind of feedback they have.
[5163.3-5165.7] And so I kind of introduced myself as for people
[5165.7-5167.6] how to bunch of bugs and feedback.
[5167.6-5169.8] And I think they were kind of surprised by the pace
[5169.8-5173.6] at which we were able to address feedback nowadays.
[5173.6-5175.1] But for me it's just like so normal.
[5175.1-5178.2] Like if someone has a bug like I can probably fix it within a few minutes.
[5178.2-5179.4] Because I just sort of quad.
[5179.4-5181.4] And as long as the description goes go to it
[5181.4-5182.4] or just go and do it.
[5182.4-5185.2] And then I'll all go do something else in the answer the next thing.
[5185.2-5187.4] But I think for a lot of people is pretty surprising.
[5187.4-5188.6] So it was really cool.
[5188.6-5191.1] And yeah, the experience on Twitter has been pretty great.
[5191.1-5193.0] It's been awesome just engaging with people
[5193.0-5198.0] and seeing what people want hearing about bugs, hearing about features.
[5198.0-5200.8] I say complaints in the get up here the other day on Twitter
[5200.8-5202.7] just you're like posting many threads
[5202.7-5205.6] and it was breaking and just like oh man, let's come on here.
[5205.6-5207.4] Yeah, yeah, there was a bug.
[5207.4-5209.2] I hope it's fixed now.
[5209.2-5210.2] Amazing.
[5210.2-5212.6] Oh man, Boris, I could chat with you for hours.
[5212.6-5213.7] All at your co.
[5213.7-5215.2] Thank you so much for doing this.
[5215.2-5217.4] You're wonderful.
[5217.4-5218.7] Work in folks, funny online.
[5218.7-5220.7] How can listeners be useful to you?
[5220.7-5223.7] Yeah, find me on threads or on Twitter.
[5223.7-5225.9] That's the easiest place.
[5225.9-5228.2] And please just tag me on stuff.
[5228.2-5230.0] Send bugs and feature requests.
[5230.0-5230.9] What's missing?
[5230.9-5232.4] What can we do to make the products better?
[5232.4-5234.3] Or what do you want?
[5234.3-5236.5] I love love hearing it.
[5236.5-5237.5] Amazing.
[5237.5-5239.3] Boris, thank you so much for being here.
[5239.3-5240.3] Cool.
[5240.3-5241.3] Thanks, funny.
[5241.3-5242.3] Bye, everyone.
[5242.3-5243.4] Thank you so much for listening.
[5243.4-5246.1] If you found this valuable, you can subscribe to the show on Apple
[5246.1-5250.0] podcasts, Spotify or your favorite podcast app.
[5250.0-5254.7] Also, please consider giving us a rating or a leaving review as that really helps other listeners
[5254.7-5256.1] find the podcast.
[5256.1-5260.5] You can find all past episodes or learn more about the show at Lenny's podcast.com.
[5260.5-5262.6] See you in the next episode.

