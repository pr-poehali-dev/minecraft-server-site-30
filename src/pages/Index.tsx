import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const donatPackages = [
  {
    name: "Игрок",
    price: "Бесплатно",
    color: "bg-gray-700",
    features: [
      "Базовый доступ к серверу",
      "Стандартные команды",
      "Доступ к общему чату",
      "Базовые регионы"
    ]
  },
  {
    name: "VIP",
    price: "299₽",
    color: "bg-emerald-600",
    popular: true,
    features: [
      "Цветной ник в чате",
      "Приватные регионы (5 шт)",
      "Доступ к /fly",
      "Кастомные скины",
      "Приоритет в очереди",
      "+50% к опыту"
    ]
  },
  {
    name: "Premium",
    price: "599₽",
    color: "bg-blue-600",
    features: [
      "Все из VIP +",
      "Приватные регионы (15 шт)",
      "Доступ к /back",
      "Кастомные частицы",
      "Уникальный префикс",
      "+100% к опыту",
      "Доступ к редким ресурсам"
    ]
  },
  {
    name: "Legend",
    price: "999₽",
    color: "bg-amber-600",
    features: [
      "Все из Premium +",
      "Неограниченные регионы",
      "Доступ к /god",
      "Эксклюзивные команды",
      "Кастомные эффекты",
      "+200% к опыту",
      "Личный варп",
      "Приоритетная поддержка"
    ]
  }
];

const serverFeatures = [
  {
    icon: "Blocks",
    title: "Кастомный контент",
    description: "Уникальные предметы, мобы и структуры"
  },
  {
    icon: "Zap",
    title: "Продвинутые плагины",
    description: "Более 50 авторских плагинов для улучшенного геймплея"
  },
  {
    icon: "Shield",
    title: "Защита территорий",
    description: "Надежная система защиты ваших построек"
  },
  {
    icon: "Users",
    title: "Активное комьюнити",
    description: "Дружелюбное сообщество игроков"
  },
  {
    icon: "Trophy",
    title: "Система достижений",
    description: "Уникальные награды и челленджи"
  },
  {
    icon: "Sword",
    title: "PvP арены",
    description: "Эпичные сражения на специальных аренах"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Icon name="Box" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">MineCraft Server</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Особенности
            </a>
            <a href="#donate" className="text-muted-foreground hover:text-foreground transition-colors">
              Донат
            </a>
          </nav>
          <Button size="sm">
            <Icon name="Play" size={16} className="mr-2" />
            Играть
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <Badge variant="secondary" className="mb-4">
              <Icon name="Wifi" size={14} className="mr-2" />
              Онлайн: 247 игроков
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Добро пожаловать на
              <span className="text-primary block mt-2">Epic Minecraft Server</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Модифицированный сервер с кастомным контентом, уникальными плагинами и активным комьюнити
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Copy" size={20} className="mr-2" />
                Скопировать IP
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Discord
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1.20.1</div>
                <div className="text-sm text-muted-foreground">Версия</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Онлайн</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Игроков</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Особенности сервера</h2>
            <p className="text-muted-foreground text-lg">Всё, что делает наш сервер уникальным</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serverFeatures.map((feature, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Донат привилегии</h2>
            <p className="text-muted-foreground text-lg">Поддержи сервер и получи уникальные возможности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donatPackages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    ПОПУЛЯРНОЕ
                  </div>
                )}
                <CardHeader>
                  <div className={`w-full h-2 ${pkg.color} rounded-t-lg -mt-6 -mx-6 mb-4`} />
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6" 
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    {pkg.price === "Бесплатно" ? "Начать играть" : "Купить"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Icon name="Box" size={14} className="text-primary-foreground" />
              </div>
              <span className="font-bold">MineCraft Server</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Epic Minecraft Server. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
