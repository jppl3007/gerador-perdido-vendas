import { GradientButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Shield, Zap, Battery, Radio } from "lucide-react";
import logoGerador from "@/assets/logo-gerador-perdido.png";
import produtoGerador from "@/assets/produto-gerador.png";

const SalesPage = () => {
  const handlePurchase = () => {
    window.open("https://shop260.pay.yampi.com.br/checkout?skipToCheckout=1&tokenReference=TN1DBCDYJ4", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="py-8 text-center">
        <img 
          src={logoGerador} 
          alt="O Gerador Perdido" 
          className="mx-auto h-20 w-auto mb-4"
        />
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white">
            🔥 OFERTA LIMITADA
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Nunca Mais Fique Sem
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Energia!
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            O Gerador Perdido é a solução definitiva para emergências. Rádio, lanterna, carregador solar e muito mais em um só produto!
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <img 
                src={produtoGerador} 
                alt="O Gerador Perdido - Rádio de Emergência" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Tudo que Você Precisa em Emergências
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-lg">Rádio AM/FM com recepção cristalina</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-lg">Lanterna LED super potente</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-lg">Carregador solar integrado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-lg">Manivela para carga manual</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary w-6 h-6" />
                <span className="text-lg">Porta USB para carregar celular</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/20 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energia Ilimitada</h3>
              <p className="text-muted-foreground">
                Painel solar + manivela garantem energia em qualquer situação
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Radio className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comunicação Total</h3>
              <p className="text-muted-foreground">
                Rádio AM/FM para se manter informado em emergências
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">À Prova d'Água</h3>
              <p className="text-muted-foreground">
                Resistente a intempéries, funciona em qualquer clima
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-[var(--shadow-card)]">
          <h2 className="text-3xl font-bold text-center mb-8">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Salvou minha vida durante o apagão! Consegui me comunicar e ter luz por dias."
              </p>
              <p className="font-semibold">- Maria S.</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Produto incrível! Super resistente e funcional. Recomendo muito!"
              </p>
              <p className="font-semibold">- João P.</p>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
            <div className="relative z-10">
              <Badge className="bg-white text-primary mb-4">
                💥 PROMOÇÃO ESPECIAL
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Apenas</h2>
              <div className="text-6xl font-bold mb-2">R$ 47</div>
              <p className="text-xl opacity-90 mb-6">
                Pagamento único • Sem mensalidades
              </p>
              <GradientButton 
                onClick={handlePurchase}
                className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-4 h-auto"
              >
                🛒 COMPRAR AGORA
              </GradientButton>
              <p className="text-sm mt-4 opacity-80">
                ✅ Entrega segura • ✅ Garantia de 30 dias
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"></div>
          </div>
        </div>

        {/* Urgency */}
        <div className="text-center">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-red-800 mb-2">
              ⚠️ ATENÇÃO: Estoque Limitado!
            </h3>
            <p className="text-red-700">
              Devido à alta demanda, restam poucas unidades disponíveis. 
              Garante já o seu antes que acabe!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesPage;