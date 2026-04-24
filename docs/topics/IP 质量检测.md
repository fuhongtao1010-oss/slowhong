# IP 质量检测

## 概念定义

IP 质量指代理或 VPS 出口 IP 在主流平台（AI 服务、流媒体、Cloudflare 等）眼里的可信程度。高质量 IP 能正常访问这些服务，低质量 IP 会触发验证、风控甚至直接封禁。

## 核心判断维度

### 1. IP 类型
- **住宅 IP**（Residential）：来自家庭宽带，平台视为普通用户，质量好
- **数据中心 IP**（Datacenter）：来自云服务商（AWS/Linode/Vultr/Hetzner），容易被识别，风险高

判断方法：查 ASN，AS 开头 + 运营商名（如 AT&T/Comcast）= 住宅 IP；云服务商 = 数据中心 IP

### 2. 欺诈/风险评分
- **scamalytics** 给出 0-100 风险分
- 0-10：安全；11-50：注意；51-85：高风险；85+：基本废了

### 3. 黑名单记录
- 是否出现在垃圾邮件、爬虫、DDoS 黑名单中
- cleanip.io 可查

### 4. 地理匹配
- IP 声明的位置 vs 实际位置是否一致
- 与用户行为是否匹配

## 工具地图

| 类别 | 工具 | 看什么 |
|------|------|--------|
| 综合评分 | ippure.com, iplark.com, meowvps.com | 多维度综合 |
| 风险评分 | scamalytics.com, ip2location.com, cleanip.io | 历史风险 |
| 信息查询 | ipinfo.io, ip111.cn | ASN/地理/多视角 |

## 关键原则

1. **住宅 IP 优先**：需要通过 AI 平台风控时，住宅 IP 质量通常更好
2. **三步验证法**：ipinfo 查类型 → scamalytics 查风险 → safeway/cleanip 做最终验证
3. **警惕 WebRTC 泄露**：部分检测站会通过 WebRTC 暴露真实 IP

## 相关资料

- ../01 来源/社交媒体/20260410-Lonely_MH-IP质量检测工具全攻略.md（来源）
- AI服务访问优化（待补专题）（待补）
- 代理服务配置（待补专题）（待补）
