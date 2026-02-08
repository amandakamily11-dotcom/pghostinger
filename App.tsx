
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Users, 
  ShoppingBag,
  Clock,
  AlertTriangle,
  Gift,
  Timer,
  ShieldCheck,
  Shield,
  Frown,
  AlertCircle,
  ChefHat,
  Check
} from 'lucide-react';

// --- Types & Data ---

const womenNames = [
  "Ana Silva", "Maria Oliveira", "Beatriz Costa", "Fernanda Santos", 
  "Juliana Souza", "Camila Lima", "Patrícia Rocha", "Larissa Ferreira",
  "Renata Almeida", "Amanda Pereira", "Luciana Barbosa", "Cláudia Mendes",
  "Talita Ribeiro", "Bruna Carvalho", "Letícia Gomes", "Vanessa Martins"
];

const cities = [
  "Natal, RN", "Fortaleza, CE", "Recife, PE", "Salvador, BA", 
  "São Paulo, SP", "Rio de Janeiro, RJ", "Belo Horizonte, MG", 
  "Curitiba, PR", "Porto Alegre, RS", "Goiânia, GO", "João Pessoa, PB"
];

// --- Components ---

const SaleNotification = () => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", city: "", time: 0 });

  useEffect(() => {
    const showNotification = () => {
      const randomName = womenNames[Math.floor(Math.random() * womenNames.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomTime = Math.floor(Math.random() * 55) + 2; // entre 2 e 57 min
      
      setData({ name: randomName, city: randomCity, time: randomTime });
      setVisible(true);

      // Esconde após 6 segundos
      setTimeout(() => {
        setVisible(false);
      }, 6000);
    };

    // Primeira aparição após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);
    
    // Ciclo repetitivo a cada 18 segundos
    const interval = setInterval(showNotification, 18000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white border-2 border-[#3498db]/30 rounded-xl shadow-xl p-2.5 flex items-center gap-3 min-w-[260px] max-w-[90vw]">
        <div className="bg-[#2ecc71] rounded-full p-1 flex-shrink-0">
          <Check className="w-3 h-3 text-white stroke-[3px]" />
        </div>
        <div className="flex flex-col text-left">
          <p className="text-[12px] text-slate-700 leading-tight">
            <span className="font-bold text-slate-900">{data.name}</span> de {data.city}
          </p>
          <p className="text-[12px] text-slate-700 leading-tight">
            acabou de realizar uma compra
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            há {data.time} minutos
          </p>
        </div>
      </div>
    </div>
  );
};

const Button = ({ children, className = "", onClick }: { children?: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full py-5 px-6 rounded-full font-bold text-white bg-[#12a74d] hover:bg-[#0f8e41] transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2 text-xl tracking-wide ${className}`}
  >
    {children}
  </button>
);

const SectionTitle = ({ children, subtitle, description, className = "" }: { children?: React.ReactNode, subtitle?: string, description?: string, className?: string }) => (
  <div className={`text-center mb-8 px-4 ${className}`}>
    {subtitle && <p className="text-[#8d6e63] font-bold text-xs tracking-widest uppercase mb-2">{subtitle}</p>}
    <h2 className="text-3xl font-bold text-[#1a202c] leading-tight">{children}</h2>
    {description && <p className="text-slate-500 font-medium text-base leading-relaxed mt-4 max-w-sm mx-auto">{description}</p>}
  </div>
);

const App: React.FC = () => {
  const checkoutUrl = "https://checkout.payt.com.br/256746d11f6954aabd1092266578be0d";

  const handleCheckout = () => {
    window.location.href = checkoutUrl;
  };

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Imagens
  const cakeImageUrl = "https://i.ibb.co/XfQdfY4K/9900975.jpg";
  const ebookMockupUrl = "https://i.ibb.co/RGXkDRH9/Receitas-de-Bolo-Saudavel.png";
  const testimonialsImageUrl = "https://i.ibb.co/1tBVFW6T/5186451882606529536.jpg";
  const bonusCookiesImageUrl = "https://i.ibb.co/Hpgd0VsZ/1ff0121384ba2e839dcf17c02739fff2-1.jpg";
  const authorImageUrl = "https://i.ibb.co/HT0Jc8yQ/Design-sem-nome-9.png"; 

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      
      <SaleNotification />

      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-12 pb-16 overflow-hidden flex flex-col items-center">
        <div className="max-w-md mx-auto w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-green text-[#388e3c] text-[10px] font-bold uppercase tracking-wider mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
            Sem Glúten • Sem Açúcar • Sem Lactose
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1a202c] mb-6 text-center">
            Finalmente, você pode <span className="text-brand-green italic leading-tight">comer bolo fofinho</span> sem medo e sem culpa
          </h1>
          
          <p className="text-slate-600 text-lg mb-8 leading-relaxed text-center">
            Receitas simples, com ingredientes que você já tem em casa. Ficam <span className="font-bold text-slate-800">molhadinhas e deliciosas de verdade.</span>
          </p>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 w-[95%] mb-8">
            <img 
              src={cakeImageUrl} 
              alt="Bolo fofinho e saudável" 
              loading="eager"
              className="w-full h-auto contrast-[1.02] brightness-[1.02] block"
            />
            
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 border border-slate-100/50 max-w-max">
              <div className="bg-[#f1f8f1] p-1.5 rounded-lg">
                <div className="bg-brand-green/10 p-1.5 rounded-lg">
                  <Users className="w-4 h-4 text-brand-green" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider leading-none mb-0.5">Mais de</p>
                <p className="text-lg font-black text-brand-green leading-none">4.000+</p>
                <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-0.5">pessoas felizes</p>
              </div>
            </div>
          </div>
          
          <Button onClick={handleCheckout} className="mb-6">
            BAIXAR CÓPIA
          </Button>
          
          <div className="flex items-center justify-center gap-4 text-xs text-slate-400 mb-10">
            <span className="flex items-center gap-1 text-nowrap text-xs">✓ Acesso imediato</span>
            <span className="flex items-center gap-1 text-nowrap text-xs">✓ Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* 2. PAIN POINTS */}
      <section className="bg-cream py-16 px-6 font-poppins">
        <div className="max-w-md mx-auto">
          <SectionTitle 
            description="Muitas pessoas sofrem em silêncio sem saber que a alimentação é a causa."
          >
            Você já sentiu isso?
          </SectionTitle>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { 
                icon: <AlertTriangle className="w-6 h-6 text-white drop-shadow-md" />, 
                title: "Estômago alto e inchado", 
                text: "Depois de comer bolo tradicional.",
                gradient: "from-orange-400 to-red-500",
                shadowColor: "rgba(249,115,22,0.4)"
              },
              { 
                icon: <Frown className="w-6 h-6 text-white drop-shadow-md" />, 
                title: "Desconforto intestinal", 
                text: "e sensação de peso constante",
                gradient: "from-rose-400 to-pink-600",
                shadowColor: "rgba(225,29,72,0.4)"
              },
              { 
                icon: <AlertCircle className="w-6 h-6 text-white drop-shadow-md" />, 
                title: "Medo de comer doces", 
                text: "e ganhar peso imediatamente",
                gradient: "from-amber-400 to-orange-600",
                shadowColor: "rgba(217,119,6,0.4)"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3 group transition-all duration-300 active:scale-[0.98]">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 scale-110 bg-gradient-to-br ${item.gradient}`}
                  style={{ boxShadow: `0 8px 20px -4px ${item.shadowColor}` }}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800 tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION INTRO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <SectionTitle 
            subtitle="A Liberdade no seu Prato" 
            className="font-poppins"
          >
            <span className="font-bold">E-book Bolos Irresistíveis</span>
          </SectionTitle>
          
          <div className="relative mb-8 flex justify-center">
            <div className="relative w-full max-w-[320px]">
              <img 
                src={ebookMockupUrl} 
                alt="Mockup do Ebook" 
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-slate-600 leading-relaxed text-center italic">
              "Nunca mais coma um bolo seco ou sem sabor. Nossas técnicas garantem maciez absoluta sem usar uma grama de glúten ou açúcar refinado."
            </p>
            
            <div className="pt-6 grid grid-cols-1 gap-3">
              {[
                { icon: <Clock className="text-brand-green w-5 h-5" />, text: "Preparo prático e rápido" },
                { icon: <ShoppingBag className="text-brand-green w-5 h-5" />, text: "Ingredientes que cabem no bolso" },
                { icon: <CheckCircle2 className="text-brand-green w-5 h-5" />, text: "Receitas testadas 10x cada" }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-soft-green/40 p-3 rounded-xl">
                  {benefit.icon}
                  <span className="text-sm font-semibold text-slate-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-md mx-auto">
          <SectionTitle 
            subtitle="Veja nossos comentários" 
            className="font-poppins"
          >
            <span className="font-bold uppercase tracking-tight">CLIENTES SATISFEITAS</span>
          </SectionTitle>
          
          <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <img 
              src={testimonialsImageUrl} 
              alt="Comentários de clientes" 
              className="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* 4.5. EXCLUSIVE BONUS SECTION */}
      <section className="py-16 px-6 bg-[#fffcf9]">
        <div className="max-w-md mx-auto">
          <div className="bg-[#fef3e2] rounded-[2.5rem] border border-[#f3e3cc] p-6 shadow-sm overflow-hidden relative text-left">
            <div className="flex flex-col gap-6">
              <div className="flex">
                <div className="bg-[#e67e22] text-white text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-sm uppercase tracking-wide">
                  <Gift className="w-3 h-3" /> Bônus Exclusivo
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#4e342e] leading-tight font-poppins">
                  Receitas Secretas de Roscas e Biscoitos
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Além dos bolos, você vai receber um bônus especial com receitas exclusivas de roscas e biscoitos — também sem glúten, sem açúcar e sem lactose.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                  Perfeitas para o café da tarde ou para presentear alguém especial. 🍪
                </p>
              </div>
              <div className="flex">
                <div className="bg-[#fee2e2] text-[#ef4444] text-[11px] font-bold py-2 px-4 rounded-xl flex items-center gap-2 border border-[#fecaca]">
                  <Timer className="w-3.5 h-3.5" /> Disponível apenas por tempo limitado
                </div>
              </div>
              <div className="relative mt-2">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-square border-4 border-white">
                  <img 
                    src={bonusCookiesImageUrl} 
                    alt="Cookies deliciosos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-[#e67e22] text-white text-xs font-black py-2 px-5 rounded-2xl shadow-xl uppercase tracking-widest transform rotate-3 scale-110">
                  Grátis
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.8. ABOUT THE AUTHOR SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-50 flex flex-col items-center text-center">
            
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-[6px] border-white shadow-xl">
                <img 
                  src={authorImageUrl} 
                  alt="Luana Borges" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <ChefHat className="w-5 h-5 text-[#e77e58]" />
              <span className="text-[#e77e58] font-bold text-sm tracking-wide uppercase">Sobre a Autora</span>
            </div>

            <p className="text-[#1a202c] text-[1.3rem] font-medium italic leading-relaxed mb-10 font-poppins px-2">
              "A intolerância ao glúten me ensinou que restrição não precisa ser sinônimo de comida sem graça. Transformei minha cozinha em um laboratório de sabores."
            </p>

            <div className="space-y-1">
              <h4 className="text-2xl font-black text-[#1a202c] font-poppins">Luana Borges</h4>
              <p className="text-slate-400 text-sm font-medium">Especialista em Confeitaria Inclusiva</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION (CHECKOUT) */}
      <section id="oferta" className="pt-8 pb-8 px-6 bg-white text-center">
        <div className="max-w-md mx-auto relative">
          
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-50 relative pt-16">
            
            {/* Top Badge flutuante */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#e77e58] text-white px-8 py-3 rounded-full shadow-lg z-20 whitespace-nowrap">
              <span className="text-sm font-bold uppercase tracking-wider">Oferta por tempo limitado</span>
            </div>

            <h2 className="text-[2.2rem] font-black text-[#1a202c] leading-tight mb-4 font-poppins">
              Tudo isso por apenas
            </h2>
            
            <div className="mb-6">
              <p className="text-slate-400 line-through text-xl mb-1 font-medium">R$ 97,00</p>
              <div className="flex items-start justify-center text-[#e77e58]">
                <span className="text-4xl font-bold mt-2">R$</span>
                <span className="text-8xl font-black leading-none tracking-tighter">10</span>
                <span className="text-4xl font-bold mt-2">,00</span>
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-10 font-medium">
              Pagamento único • Acesso vitalício • Entrega imediata
            </p>
            
            <Button onClick={handleCheckout} className="!bg-[#12a74d] hover:!bg-[#0f8e41] py-6 text-[1.4rem] uppercase">
              COMPRAR AGORA
            </Button>
            
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-400 text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Ambiente 100% seguro</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. GUARANTEE SECTION */}
      <section className="pb-24 px-6 bg-white text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          
          <h3 className="text-2xl font-bold text-[#1a202c] mb-4 font-poppins">
            Garantia de 7 Dias
          </h3>
          
          <p className="text-slate-500 text-base leading-relaxed px-4">
            Se você não amar as receitas, devolvemos 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </section>

      {/* FOOTER - NOVO LAYOUT CONFORME IMAGEM 2 */}
      <footer className="py-16 px-6 bg-[#0a111a] text-[#7b8191] text-center font-poppins">
        <div className="max-w-md mx-auto flex flex-col items-center space-y-10">
          
          {/* Top Links */}
          <div className="flex justify-between w-full max-w-[320px] text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>

          {/* Facebook Disclaimer */}
          <p className="text-[10px] leading-relaxed opacity-80 px-4">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>

          {/* Copyright */}
          <p className="text-[10px] font-medium tracking-wide">
            © 2025 Bolos Saudáveis. Todos os direitos reservados.
          </p>
          
        </div>
      </footer>

    </div>
  );
};

export default App;
