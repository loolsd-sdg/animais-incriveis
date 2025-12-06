import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Hand, Baby } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [adultQuantity, setAdultQuantity] = useState(1);
  const [childQuantity, setChildQuantity] = useState(0);
  const adultPrice = 99.99;
  const childPrice = 89.90;
    const additionalPrice = 40.00;
  const [additionalQuantity, setAdditionalQuantity] = useState(0);
  const total = (adultQuantity * adultPrice) + (childQuantity * childPrice) + (additionalQuantity * additionalPrice);
  const totalTickets = adultQuantity + childQuantity;

  const handleWhatsAppClick = () => {
    // Enviar evento de conversão do Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17641891539/xKP0CMPWxr0bENPNp9xB',
        'value': total,
        'currency': 'BRL',
        'transaction_id': Date.now().toString()
      });
    }

    let message = 'Olá! Gostaria de comprar ingressos para o Animais Incríveis:\n\n';
    if (adultQuantity > 0) {
      message += `${adultQuantity} Adulto${adultQuantity > 1 ? 's' : ''} - R$ ${(adultQuantity * adultPrice).toFixed(2)}\n`;
    }
        if (childQuantity > 0) {
      message += `${childQuantity} Criança${childQuantity > 1 ? 's' : ''} - R$ ${(childQuantity * childPrice).toFixed(2)}\n`;
    }
    if (additionalQuantity > 0) {
      message += `${additionalQuantity} Adicional "Aula ambiental e Interação com a Python" - R$ ${(additionalQuantity * additionalPrice).toFixed(2)}\n`;
    }
    message += `\nTotal: R$ ${total.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/5512988035544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const incrementAdult = () => setAdultQuantity(prev => prev + 1);
    const decrementAdult = () => setAdultQuantity(prev => prev > 0 ? prev - 1 : 0);
  const incrementChild = () => setChildQuantity(prev => prev + 1);
  const decrementChild = () => setChildQuantity(prev => prev > 0 ? prev - 1 : 0);

  const incrementAdditional = () => setAdditionalQuantity(prev => prev + 1);
  const decrementAdditional = () => setAdditionalQuantity(prev => prev > 0 ? prev - 1 : 0);

  return (
    <div className="min-h-screen">
      {/* Banner Topo Parceiro */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 py-3 text-center">
        <p className="text-gray-900 font-semibold text-sm md:text-base px-4">
          ⭐ Valores Exclusivos do Parceiro Oficial Visite Campos! ⭐
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-8 md:py-12 lg:py-16">
        <div className="container text-center px-4">
          {/* Logo */}
          <div className="mb-6 md:mb-8">
            <img 
              src="/images/hero-banner.jpg" 
              alt="Animais Incríveis Logo" 
              className="mx-auto max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] w-full h-auto"
            />
          </div>
          
          {/* Content */}
          <Badge className="mb-4 md:mb-6 bg-primary text-primary-foreground px-4 md:px-6 py-2 text-sm md:text-base">
            🐍 Experiência Única com Animais Exóticos
          </Badge>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto px-2">
            Diversão, aventura e muito conhecimento em um só lugar! Venha conhecer espécies raras e exóticas.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center px-2">
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm lg:text-base bg-white/20 backdrop-blur-sm text-white border-white/30">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Campos do Jordão, SP
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm lg:text-base bg-white/20 backdrop-blur-sm text-white border-white/30">
              <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              09:00 às 18:00
            </Badge>
            <Badge variant="secondary" className="px-3 md:px-4 py-2 text-xs md:text-sm lg:text-base bg-white/20 backdrop-blur-sm text-white border-white/30">
              <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              Para Todas as Idades
            </Badge>
          </div>
        </div>
      </section>

      {/* O Que é Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            O Que é o Animais Incríveis? 🤔
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Uma das maiores atrações de animais exóticos do Brasil! Localizado em Capivari - Campos do Jordão/SP, 
            oferecemos experiências únicas de contemplação e educação ambiental com espécies raras 
            e exóticas apresentadas de forma segura e interativa!
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="text-6xl mb-4">🐍</div>
                <h3 className="text-xl font-bold mb-3">Répteis Incríveis</h3>
                <p className="text-muted-foreground">
                  Répteis, anfíbios, aracnídeos e insetos raros. Conheça espécies exóticas de perto!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Experiência Interativa</h3>
                <p className="text-muted-foreground">
                  Contato próximo e seguro com os animais. Uma viagem lúdica pelo mundo animal!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-2xl">
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 bg-primary text-primary-foreground">Ingresso Único</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Acesso Completo à Atração
                </h2>
                <p className="text-muted-foreground text-lg">
                  Acesso ao Animais Incríveis
                </p>
                
                {/* Banner Parceiro Oficial */}
                <div className="mt-6 bg-gradient-to-r from-amber-400 to-yellow-500 p-4 rounded-xl border-2 border-amber-500 shadow-lg">
                  <div className="flex items-center justify-center gap-2 text-gray-900">
                    <span className="text-2xl">⭐</span>
                    <p className="font-bold text-lg md:text-xl">
                      Valores Exclusivos do Parceiro Oficial Visite Campos!
                    </p>
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-8 mb-6">
                {/* Adulto */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b">
                  <div className="flex items-center gap-3">
                    <Users className="text-primary w-6 h-6" />
                    <div>
                      <h3 className="font-bold text-lg">Adulto</h3>
                      <p className="text-primary font-semibold text-xl">R$ {adultPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={decrementAdult}
                      className="h-10 w-10"
                    >
                      -
                    </Button>
                    <span className="text-2xl font-bold w-12 text-center">{adultQuantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={incrementAdult}
                      className="h-10 w-10"
                    >
                      +
                    </Button>
                  </div>
                </div>

                                {/* Criança */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b">
                  <div className="flex items-center gap-3">
                    <Baby className="text-primary w-6 h-6" />
                    <div>
                      <h3 className="font-bold text-lg">Criança</h3>
                      <p className="text-primary font-semibold text-xl">R$ {childPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={decrementChild}
                      className="h-10 w-10"
                    >
                      -
                    </Button>
                    <span className="text-2xl font-bold w-12 text-center">{childQuantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={incrementChild}
                      className="h-10 w-10"
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Adicional */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Hand className="text-primary w-6 h-6" />
                    <div>
                      <h3 className="font-bold text-lg">Adicional: Aula ambiental e Interação com a Python</h3>
                      <p className="text-primary font-semibold text-xl">R$ {additionalPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={decrementAdditional}
                      className="h-10 w-10"
                    >
                      -
                    </Button>
                    <span className="text-2xl font-bold w-12 text-center">{additionalQuantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={incrementAdditional}
                      className="h-10 w-10"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total ({totalTickets} ingresso{totalTickets !== 1 ? 's' : ''})</span>
                  <div className="text-4xl font-bold">R$ {total.toFixed(2)}</div>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                disabled={totalTickets === 0}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 rounded-lg font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                💬 {totalTickets === 0 ? 'Selecione pelo menos 1 ingresso' : 'Comprar pelo WhatsApp'}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Clique no botão acima para finalizar sua compra via WhatsApp
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* O Que Está Incluído */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ✨ O Que Está Incluído no Seu Ingresso
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Acesso completo a todas estas experiências incríveis!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🐍</div>
                <h3 className="font-bold text-lg mb-2">Atração Completa</h3>
                <p className="text-sm text-muted-foreground">
                  Explore a atração com dezenas de espécies raras e exóticas
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🦎</div>
                <h3 className="font-bold text-lg mb-2">Répteis Exóticos</h3>
                <p className="text-sm text-muted-foreground">
                  Veja lagartos, iguanas e outros répteis incríveis de perto
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🤚</div>
                <h3 className="font-bold text-lg mb-2">Contato Supervisionado</h3>
                <p className="text-sm text-muted-foreground">
                  Interação segura com animais selecionados sob supervisão
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🕷️</div>
                <h3 className="font-bold text-lg mb-2">Aracnídeos</h3>
                <p className="text-sm text-muted-foreground">
                  Conheça aranhas e escorpiões em ambientes controlados
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🐸</div>
                <h3 className="font-bold text-lg mb-2">Anfíbios</h3>
                <p className="text-sm text-muted-foreground">
                  Descubra sapos, rãs e salamandras de várias regiões
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🐛</div>
                <h3 className="font-bold text-lg mb-2">Insetos</h3>
                <p className="text-sm text-muted-foreground">
                  Observe insetos raros e fascinantes de todo o mundo
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🐢</div>
                <h3 className="font-bold text-lg mb-2">Anfíbios</h3>
                <p className="text-sm text-muted-foreground">
                  Veja tartarugas e jabutis de diferentes espécies
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">🦂</div>
                <h3 className="font-bold text-lg mb-2">Insetos</h3>
                <p className="text-sm text-muted-foreground">
                  Conheça escorpiões e outros artrópodes raros
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl mb-3">😊</div>
                <h3 className="font-bold text-lg mb-2">Para Todas Idades</h3>
                <p className="text-sm text-muted-foreground">
                  Atividades adequadas para crianças e adultos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            📷 Galeria de Fotos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/images/gallery-python.jpg" alt="Píton verde arbórea" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/images/gallery-rattlesnake.jpg" alt="Cascavel diamante ocidental" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/images/gallery-monitor.jpg" alt="Lagarto monitor asiático" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/images/gallery-lizard.jpg" alt="Dragão barbudo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Escolher */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Por Que Escolher o Animais Incríveis? 💫
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-bold mb-3">Para Toda Família</h3>
                <p className="text-muted-foreground">
                  Atividades que encantam crianças e adultos. Diversão garantida para todas as idades!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-3">Memórias Inesquecíveis</h3>
                <p className="text-muted-foreground">
                  Experiência única e educativa que ficará marcada para sempre. Fotos incríveis garantidas!
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">Único na Região</h3>
                <p className="text-muted-foreground">
                  Uma das maiores atrações de animais exóticos do Brasil! Experiência exclusiva em Campos do Jordão.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            📍 Informações Importantes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <MapPin className="text-primary" />
                  Localização
                </h3>
                <p className="text-muted-foreground">
                  Avenida Emílio Ribas, 644 - Capivari<br />
                  Campos do Jordão - SP
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Clock className="text-primary" />
                  Horário de Funcionamento
                </h3>
                <p className="text-muted-foreground">
                  Quarta a Segunda<br />
                  09:00 às 18:00<br />
                  <span className="text-destructive font-semibold">Fechado nas terças-feiras</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t">
        <div className="container text-center">
          <p className="text-muted-foreground mb-2">
            © 2025 Visite Campos. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground mb-2">
            CNPJ: 52.722.772/0001-30
          </p>
          <a href="/privacy-policy" className="text-sm text-primary hover:underline">
            Política de Privacidade
          </a>
        </div>
      </footer>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground p-4 shadow-2xl md:hidden z-50">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm">🎟️ {totalTickets}x</span>
            <span className="text-xl md:text-2xl font-bold">R$ {total.toFixed(2)}</span>
          </div>
          <Button 
            onClick={handleWhatsAppClick}
            disabled={totalTickets === 0}
            variant="secondary"
            className="font-semibold text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            💬 {totalTickets === 0 ? 'Selecione' : 'Comprar'}
          </Button>
        </div>
      </div>
      
      {/* Spacer for fixed bottom bar */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
}
