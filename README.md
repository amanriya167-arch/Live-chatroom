# 🚀 Achat - Live Chat & Video Calling App

A complete real-time chat and video calling application built with Node.js, React, Socket.IO, and WebRTC.

## ✨ Features

### 🔐 Authentication
- JWT-based authentication
- Google & Facebook OAuth integration
- OTP verification
- Password reset functionality

### 💬 Real-time Communication
- Live chat rooms with voice/video support
- Private messaging
- WebRTC peer-to-peer calls
- Typing indicators
- Message history

### 🏠 Room Management
- Create public/private rooms
- Room categories (casual, music, gaming, etc.)
- Host controls (kick, ban, mute)
- Participant management

### 💰 Monetization
- Virtual wallet system
- Gift store with animations
- Coin purchases via Razorpay
- Transaction history

### 🛡️ Admin Panel
- User management
- Room moderation
- Analytics dashboard
- Content filtering

### 📱 Mobile-Responsive
- Progressive Web App (PWA)
- Mobile-optimized UI
- Touch-friendly controls

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Node.js Server │    │    MongoDB      │
│                 │◄──►│                 │◄──►│                 │
│ • Authentication│    │ • REST APIs     │    │ • User Data     │
│ • Real-time UI  │    │ • Socket.IO     │    │ • Messages      │
│ • WebRTC        │    │ • WebRTC Signal │    │ • Transactions  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │     Redis       │
                       │                 │
                       │ • Sessions      │
                       │ • Cache         │
                       │ • Rate Limiting │
                       └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB 5.0+
- Redis 6.0+
- Docker & Docker Compose (optional)

### 1. Clone Repository
```bash
git clone https://github.com/amanriya167-arch/Live-chatroom.git
cd Live-chatroom
```

### 2. Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 3. Install Dependencies
```bash
# Backend dependencies
npm install

# Frontend dependencies
cd client && npm install && cd ..
```

### 4. Start Services

#### Option A: Local Development
```bash
# Start MongoDB and Redis locally
# Then run:
npm run dev
```

#### Option B: Docker Compose (Recommended)
```bash
docker-compose up -d
```

### 5. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/health

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `5000` |
| `DB_URI` | MongoDB connection string | `mongodb://localhost:27017/achat` |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `JWT_SECRET` | JWT signing secret | Required |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | Optional |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | Optional |
| `FACEBOOK_APP_ID` | Facebook app ID | Optional |
| `FACEBOOK_APP_SECRET` | Facebook app secret | Optional |
| `RZP_KEY_ID` | Razorpay key ID | Optional |
| `RZP_KEY_SECRET` | Razorpay secret | Optional |
| `FIREBASE_PROJECT_ID` | Firebase project ID | Optional |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Optional |

### OAuth Setup

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:5000/api/auth/google/callback` (development)
   - `https://yourdomain.com/api/auth/google/callback` (production)

#### Facebook OAuth
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure OAuth redirect URIs

### Payment Integration (Razorpay)
1. Sign up at [Razorpay](https://razorpay.com/)
2. Get API keys from dashboard
3. Configure webhook endpoints for payment verification

## 📦 Deployment

### Docker Deployment
```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Manual Deployment

#### 1. Build Frontend
```bash
cd client
npm run build
cd ..
```

#### 2. Start Production Server
```bash
NODE_ENV=production npm start
```

### Cloud Deployment

#### Heroku
```bash
# Install Heroku CLI
heroku create your-app-name
heroku addons:create heroku-redis:hobby-dev
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your-secret

# Deploy
git push heroku main
```

#### AWS/DigitalOcean
1. Set up MongoDB Atlas and Redis Cloud
2. Configure environment variables
3. Use PM2 for process management:
```bash
npm install -g pm2
pm2 start server.js --name achat
pm2 startup
pm2 save
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-otp` - OTP verification
- `GET /api/auth/google` - Google OAuth
- `GET /api/auth/facebook` - Facebook OAuth

### Rooms
- `GET /api/rooms/list` - Get room list
- `POST /api/rooms/create` - Create room
- `GET /api/rooms/:id` - Get room details
- `POST /api/rooms/:id/join` - Join room
- `POST /api/rooms/:id/leave` - Leave room

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `POST /api/users/follow` - Follow user
- `POST /api/users/block` - Block user

### Wallet
- `GET /api/wallet/balance` - Get balance
- `POST /api/wallet/purchase` - Purchase coins
- `POST /api/wallet/send-gift` - Send gift
- `GET /api/wallet/transactions` - Transaction history

### Admin
- `GET /api/admin/users` - Manage users
- `GET /api/admin/rooms` - Manage rooms
- `GET /api/admin/analytics` - Analytics data

## 🧪 Testing

```bash
# Run backend tests
npm test

# Run frontend tests
cd client && npm test
```

## 🔒 Security Features

- JWT authentication with refresh tokens
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- Helmet.js security headers
- File upload restrictions
- SQL injection prevention
- XSS protection

## 📊 Monitoring

### Health Checks
- `GET /health` - Application health status
- Database connectivity check
- Redis connectivity check

### Logging
- Morgan HTTP request logging
- Error logging with stack traces
- Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@achat.com
- 💬 Discord: [Join our server](https://discord.gg/achat)
- 📖 Documentation: [docs.achat.com](https://docs.achat.com)

## 🙏 Acknowledgments

- Socket.IO for real-time communication
- WebRTC for peer-to-peer video calls
- React team for the amazing frontend framework
- MongoDB for flexible data storage
- All contributors and testers

---

Made with ❤️ by the Achat Team
