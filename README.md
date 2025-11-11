# Akiba AI

**Akiba AI** is a smart food waste reduction platform designed for Kenyan restaurants and food vendors. It uses AI-powered predictions and real-time weather data to optimize food inventory and preparation, reducing waste while maximizing profits.

## 🌟 Features

- **AI-Powered Food Predictions**: Smart forecasting for food demand based on historical data and patterns
- **Weather Integration**: Real-time weather data from OpenWeather API to adjust predictions
- **Offline Mode**: Full functionality even without internet connectivity
- **Intasend Payments**: Integrated mobile and card payment support (M-Pesa, Airtel Money, Cards)
- **Analytics Dashboard**: Track savings, waste reduction, and business performance
- **Multi-language Support**: Available in English and Swahili
- **Secure & Reliable**: Built with enterprise-grade security and data protection

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn-ui
- **State Management**: TanStack Query, React Context
- **Routing**: React Router v6
- **Backend**: Lovable Cloud (Supabase)
- **AI**: Lovable AI
- **APIs**: OpenWeather API, Intasend API

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- OpenWeather API key ([get one here](https://openweathermap.org/api))
- Intasend API credentials ([sign up here](https://intasend.com/))

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
VITE_INTASEND_PUBLIC_KEY=your_intasend_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Usage

### For Restaurants & Food Vendors

1. **Dashboard**: View AI predictions for daily food demand
2. **Weather Insights**: See how weather affects customer preferences
3. **Inventory Management**: Track stock levels and receive alerts
4. **Analytics**: Monitor waste reduction and cost savings
5. **Payments**: Accept payments through Intasend (M-Pesa, Cards)

### Language Toggle

- Switch between English and Swahili using the language selector in the top-left corner

### Offline Mode

- The app automatically detects connectivity and switches to offline mode
- All core features remain functional without internet access

## 🌐 Deployment

Deploy your app using Lovable:

1. Click the **Publish** button in the Lovable editor (top right)
2. Your app will be live at `yoursite.lovable.app`
3. Connect a custom domain in Project > Settings > Domains

For more details, visit [Lovable Deployment Docs](https://docs.lovable.dev/)

## 🔧 API Integration

### OpenWeather API
Used for real-time weather data and forecasting. [Documentation](https://openweathermap.org/api)

### Intasend API
Handles mobile money and card payments. [Documentation](https://developers.intasend.com/)

### Lovable AI
Powers intelligent food demand predictions. [Documentation](https://docs.lovable.dev/features/ai)

## 📊 Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn-ui components
│   ├── Hero.tsx
│   ├── Dashboard.tsx
│   ├── Features.tsx
│   └── ...
├── contexts/         # React contexts (Language, etc.)
├── hooks/            # Custom React hooks
├── pages/            # Page components
├── lib/              # Utility functions
└── main.tsx          # App entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is built on [Lovable](https://lovable.dev).

## 🆘 Support

- **Lovable Docs**: [docs.lovable.dev](https://docs.lovable.dev)
- **Lovable Community**: [Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- **Project URL**: https://lovable.dev/projects/56c8fe93-8493-439a-b216-bf3728752a56

## 🌍 Made for Kenya

Akiba AI is specifically designed for the Kenyan market, with support for:
- Local payment methods (M-Pesa, Airtel Money)
- Swahili language
- Regional weather patterns
- Popular Kenyan cuisine

---

**Akiba AI** - Reducing food waste, one prediction at a time. 🌱
