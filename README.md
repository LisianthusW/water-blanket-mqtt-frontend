# 睡眠毯数据可视化监控系统

## 📖 项目简介

这是一个基于 Vue3 + Vite + TailwindCSS 构建的睡眠毯传感器数据实时监控和可视化系统。系统能够实时展示 Python 脚本收集的传感器数据，提供历史数据查询、设备状态监控、报警管理等功能。

## ✨ 主要功能

- 🔄 **实时数据监控** - 每 5 秒自动刷新设备状态和传感器数据
- 📊 **数据可视化** - 直观的图表和仪表盘展示数据趋势
- 📈 **历史数据查询** - 支持分页查询和设备筛选的历史数据
- 🚨 **智能报警系统** - 多级别报警管理和实时通知
- 📱 **响应式设计** - 适配桌面端和移动端设备
- 💾 **数据导出** - 支持 CSV 格式的数据导出功能
- ⚡ **高性能** - 基于 Vue3 Composition API 和 Vite 构建

## 🛠️ 技术栈

- **前端框架**: Vue 3.x (Composition API)
- **构建工具**: Vite 6.x
- **样式框架**: TailwindCSS 3.x
- **UI 组件**: Headless UI + Heroicons
- **HTTP 客户端**: Axios
- **类型支持**: TypeScript 5.x
- **日期处理**: date-fns
- **图表库**: Chart.js + Vue-ChartJS

## 📁 项目结构

```
sleep-blanket-dashboard/
├── src/
│   ├── components/          # 可复用组件
│   │   └── AlarmPanel.vue   # 报警面板组件
│   ├── services/            # API服务层
│   │   └── api.ts          # API接口封装
│   ├── views/              # 页面组件
│   │   └── Dashboard.vue    # 主仪表板页面
│   ├── router/             # 路由配置
│   ├── assets/             # 静态资源
│   ├── App.vue             # 根组件
│   └── main.ts             # 应用入口
├── public/                 # 公共资源
├── tailwind.config.js      # TailwindCSS配置
├── postcss.config.js       # PostCSS配置
├── vite.config.ts          # Vite配置
└── package.json            # 项目依赖
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/LisianthusW/water-blanket-mqtt-frontend.git
cd water-blanket-mqtt-frontend

# 安装依赖
npm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 应用将在 http://localhost:3000 启动
```

### 生产构建

```bash
# 标准构建（推荐）
npm run build

# 快速构建（跳过类型检查）
npm run build-fast

# 生产构建（包含完整检查）
npm run build-prod

# 预览构建结果
npm run preview
```

## 🔧 配置说明

### API 配置

在 `src/services/api.ts` 中配置 API 基础地址：

```typescript
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // 修改为实际的API地址
  timeout: 10000,
})
```

### 环境变量

创建 `.env.local` 文件配置环境变量：

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_REFRESH_INTERVAL=5000
```

## 📊 API 接口

系统支持以下 API 接口：

### 基础接口

- `GET /api/health` - 健康检查
- `GET /api/stats` - 系统统计信息
- `GET /api/devices` - 设备列表

### 数据接口

- `GET /api/data/latest` - 最新数据
- `GET /api/data/history` - 历史数据（分页）
- `GET /api/data/realtime` - 实时数据
- `GET /api/statistics` - 数据统计

### 报警接口

- `GET /api/alarms` - 报警记录（分页）

## 🎯 核心组件

### Dashboard 主仪表板

- 系统状态概览卡片
- 实时设备状态监控
- 数据趋势图表展示
- 历史数据表格和分页
- 数据导出功能

### AlarmPanel 报警面板

- 多级别报警展示
- 报警详情模态框
- 报警确认和忽略操作
- 自动刷新机制

## 🔍 功能特性

### 实时监控

- 每 5 秒自动更新实时数据
- 设备连接状态指示
- 传感器数值实时展示
- 异常状态自动标记

### 数据管理

- 支持设备筛选查询
- 分页加载历史数据
- CSV 格式数据导出
- 时间范围查询支持

### 用户界面

- 现代化的 Material Design 风格
- 完全响应式布局设计
- 暗色主题支持
- 无障碍访问优化

## 🧪 测试

```bash
# 运行单元测试
npm run test:unit

# 运行端到端测试
npm run test:e2e

# 代码格式检查
npm run lint

# 自动修复代码格式
npm run format
```

## 📦 部署

### Docker 部署

```bash
# 构建镜像
docker build -t sleep-blanket-dashboard .

# 运行容器
docker run -p 3000:3000 sleep-blanket-dashboard
```

### Nginx 部署

```bash
# 构建项目
npm run build

# 将 dist 目录部署到 Nginx
cp -r dist/* /var/www/html/
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 联系我们

如有问题，请联系项目维护者。