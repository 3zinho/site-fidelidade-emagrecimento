"use client"

import { useState, useEffect, useRef } from 'react'
import { ShoppingCart, Menu, X, Star, Shield, Zap, Headphones, MessageCircle, Globe, ChevronDown } from 'lucide-react'

// Traduções
const translations = {
  pt: {
    brand: "FidelityPro",
    nav: {
      home: "Início",
      plans: "Planos",
      benefits: "Benefícios", 
      testimonials: "Depoimentos",
      faq: "FAQ",
      cart: "Carrinho"
    },
    hero: {
      title: "Teste de Fidelidade Profissional",
      subtitle: "Planos personalizados de teste de fidelidade com acompanhamento profissional e resultados garantidos",
      cta: "Ver Planos"
    },
    plans: {
      title: "Escolha Seu Plano",
      subtitle: "Planos flexíveis para seu teste de fidelidade",
      basic: {
        name: "Básico",
        price: "R$ 97",
        period: "/mês",
        features: [
          "Teste de fidelidade básico",
          "Suporte via WhatsApp",
          "Relatório detalhado",
          "Acompanhamento semanal"
        ],
        button: "Assinar Básico"
      },
      pro: {
        name: "Pro",
        price: "R$ 197", 
        period: "/mês",
        popular: "Mais Popular",
        features: [
          "Tudo do plano Básico",
          "Teste avançado de fidelidade",
          "Consultas mensais",
          "Grupo VIP no Telegram",
          "Análise comportamental"
        ],
        button: "Assinar Pro"
      },
      premium: {
        name: "Premium",
        price: "R$ 297",
        period: "/mês", 
        features: [
          "Tudo do plano Pro",
          "Acompanhamento diário",
          "Consultas semanais",
          "Teste completo de fidelidade",
          "Suporte 24/7",
          "Garantia de resultado"
        ],
        button: "Assinar Premium"
      }
    },
    benefits: {
      title: "Por Que Escolher a FidelityPro?",
      security: {
        title: "Segurança",
        description: "Métodos comprovados e discretos com total confidencialidade"
      },
      speed: {
        title: "Rapidez",
        description: "Resultados precisos em apenas 15 dias com nosso método exclusivo"
      },
      support: {
        title: "Suporte",
        description: "Equipe especializada disponível para te ajudar em todo processo"
      }
    },
    testimonials: {
      title: "O Que Nossos Clientes Dizem",
      client1: {
        name: "Maria Silva",
        text: "Descobri a verdade em 2 semanas! O acompanhamento é incrível e os resultados são precisos.",
        rating: 5
      },
      client2: {
        name: "João Santos", 
        text: "Método revolucionário! Nunca pensei que seria tão fácil descobrir a verdade de forma discreta.",
        rating: 5
      },
      client3: {
        name: "Ana Costa",
        text: "Suporte excepcional e teste personalizado. Recomendo para todos!",
        rating: 5
      }
    },
    faq: {
      title: "Perguntas Frequentes",
      q1: {
        question: "Como funciona o teste de fidelidade?",
        answer: "Você terá acesso direto aos nossos profissionais via WhatsApp e consultas agendadas conforme seu plano."
      },
      q2: {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas adicionais."
      },
      q3: {
        question: "Os resultados são garantidos?",
        answer: "Sim! Seguindo nosso método corretamente, garantimos resultados em até 30 dias ou seu dinheiro de volta."
      },
      q4: {
        question: "O teste é discreto?",
        answer: "Sim! Nossos métodos são totalmente discretos e confidenciais, garantindo sua privacidade."
      }
    },
    cart: {
      title: "Seu Carrinho",
      empty: "Carrinho vazio",
      total: "Total:",
      checkout: "Finalizar Compra",
      remove: "Remover"
    },
    footer: {
      rights: "© 2024 FidelityPro. Todos os direitos reservados."
    }
  },
  en: {
    brand: "FidelityPro",
    nav: {
      home: "Home",
      plans: "Plans", 
      benefits: "Benefits",
      testimonials: "Testimonials",
      faq: "FAQ",
      cart: "Cart"
    },
    hero: {
      title: "Professional Fidelity Test",
      subtitle: "Personalized fidelity test plans with professional guidance and guaranteed results",
      cta: "View Plans"
    },
    plans: {
      title: "Choose Your Plan",
      subtitle: "Flexible plans for your fidelity test",
      basic: {
        name: "Basic",
        price: "$29",
        period: "/month",
        features: [
          "Basic fidelity test",
          "WhatsApp support",
          "Detailed report", 
          "Weekly follow-up"
        ],
        button: "Subscribe Basic"
      },
      pro: {
        name: "Pro",
        price: "$59",
        period: "/month",
        popular: "Most Popular",
        features: [
          "Everything in Basic",
          "Advanced fidelity test",
          "Monthly consultations",
          "VIP Telegram group",
          "Behavioral analysis"
        ],
        button: "Subscribe Pro"
      },
      premium: {
        name: "Premium", 
        price: "$89",
        period: "/month",
        features: [
          "Everything in Pro",
          "Daily monitoring",
          "Weekly consultations",
          "Complete fidelity test",
          "24/7 support",
          "Result guarantee"
        ],
        button: "Subscribe Premium"
      }
    },
    benefits: {
      title: "Why Choose FidelityPro?",
      security: {
        title: "Security",
        description: "Proven and discreet methods with total confidentiality"
      },
      speed: {
        title: "Speed",
        description: "Accurate results in just 15 days with our exclusive method"
      },
      support: {
        title: "Support", 
        description: "Specialized team available to help you throughout the process"
      }
    },
    testimonials: {
      title: "What Our Clients Say",
      client1: {
        name: "Maria Silva",
        text: "Discovered the truth in 2 weeks! The follow-up is incredible and the results are accurate.",
        rating: 5
      },
      client2: {
        name: "João Santos",
        text: "Revolutionary method! Never thought it would be so easy to discover the truth discreetly.",
        rating: 5
      },
      client3: {
        name: "Ana Costa", 
        text: "Exceptional support and personalized test. I recommend it to everyone!",
        rating: 5
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      q1: {
        question: "How does the fidelity test work?",
        answer: "You'll have direct access to our professionals via WhatsApp and scheduled consultations according to your plan."
      },
      q2: {
        question: "Can I cancel anytime?",
        answer: "Yes, you can cancel your subscription at any time without additional fees."
      },
      q3: {
        question: "Are results guaranteed?",
        answer: "Yes! Following our method correctly, we guarantee results within 30 days or your money back."
      },
      q4: {
        question: "Is the test discreet?",
        answer: "Yes! Our methods are completely discreet and confidential, ensuring your privacy."
      }
    },
    cart: {
      title: "Your Cart",
      empty: "Empty cart",
      total: "Total:",
      checkout: "Checkout",
      remove: "Remove"
    },
    footer: {
      rights: "© 2024 FidelityPro. All rights reserved."
    }
  }
}

interface CartItem {
  id: string
  name: string
  price: number
  plan: string
}

export default function FidelityPage() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const idCounterRef = useRef(0)

  const t = translations[language]

  // Evitar problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  // Animação de fade in - apenas no cliente
  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [mounted])

  const generateId = () => {
    idCounterRef.current += 1
    return `item-${idCounterRef.current}`
  }

  const addToCart = (planType: 'basic' | 'pro' | 'premium') => {
    const plans = {
      basic: { name: t.plans.basic.name, price: language === 'pt' ? 97 : 29 },
      pro: { name: t.plans.pro.name, price: language === 'pt' ? 197 : 59 },
      premium: { name: t.plans.premium.name, price: language === 'pt' ? 297 : 89 }
    }

    const plan = plans[planType]
    const newItem: CartItem = {
      id: generateId(),
      name: plan.name,
      price: plan.price,
      plan: planType
    }

    setCartItems(prev => [...prev, newItem])
    setIsCartOpen(true)
  }

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const handleCheckout = () => {
    // Redirecionar para gateway de pagamento
    if (typeof window !== 'undefined') {
      window.open('https://pay.hotmart.com/exemplo-checkout', '_blank')
    }
  }

  // Loading state para evitar hidratação
  if (!mounted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-red-900/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-xl font-bold text-white">{t.brand}</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-400 transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('plans')} className="hover:text-red-400 transition-colors">
                {t.nav.plans}
              </button>
              <button onClick={() => scrollToSection('benefits')} className="hover:text-red-400 transition-colors">
                {t.nav.benefits}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-red-400 transition-colors">
                {t.nav.testimonials}
              </button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-red-400 transition-colors">
                {t.nav.faq}
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative hover:text-red-400 transition-colors flex items-center space-x-1"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{t.nav.cart}</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                className="flex items-center space-x-1 hover:text-red-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-red-900/20 pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-red-400 transition-colors">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('plans')} className="text-left hover:text-red-400 transition-colors">
                  {t.nav.plans}
                </button>
                <button onClick={() => scrollToSection('benefits')} className="text-left hover:text-red-400 transition-colors">
                  {t.nav.benefits}
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-red-400 transition-colors">
                  {t.nav.testimonials}
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-left hover:text-red-400 transition-colors">
                  {t.nav.faq}
                </button>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="text-left hover:text-red-400 transition-colors flex items-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{t.nav.cart}</span>
                  {cartItems.length > 0 && (
                    <span className="bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                  className="text-left hover:text-red-400 transition-colors flex items-center space-x-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-black via-red-950/20 to-black mb-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <button
              onClick={() => scrollToSection('plans')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-32 bg-gradient-to-b from-black to-red-950/10 mb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.plans.title}</h2>
            <p className="text-xl text-gray-400">{t.plans.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 fade-in hover:scale-105 transition-all duration-300 hover:border-red-600/50">
              <h3 className="text-2xl font-bold mb-4">{t.plans.basic.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-400">{t.plans.basic.price}</span>
                <span className="text-gray-400">{t.plans.basic.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.plans.basic.features.map((feature, index) => (
                  <li key={`basic-${index}`} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => addToCart('basic')}
                className="w-full bg-gray-800 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {t.plans.basic.button}
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-b from-red-900/20 to-gray-900/50 border-2 border-red-600 rounded-xl p-8 fade-in hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {t.plans.pro.popular}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.plans.pro.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-400">{t.plans.pro.price}</span>
                <span className="text-gray-400">{t.plans.pro.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.plans.pro.features.map((feature, index) => (
                  <li key={`pro-${index}`} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => addToCart('pro')}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {t.plans.pro.button}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 fade-in hover:scale-105 transition-all duration-300 hover:border-red-600/50">
              <h3 className="text-2xl font-bold mb-4">{t.plans.premium.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-red-400">{t.plans.premium.price}</span>
                <span className="text-gray-400">{t.plans.premium.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.plans.premium.features.map((feature, index) => (
                  <li key={`premium-${index}`} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => addToCart('premium')}
                className="w-full bg-gray-800 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {t.plans.premium.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 bg-gradient-to-b from-red-950/10 to-black mb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.benefits.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.benefits.security.title}</h3>
              <p className="text-gray-400">{t.benefits.security.description}</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.benefits.speed.title}</h3>
              <p className="text-gray-400">{t.benefits.speed.description}</p>
            </div>

            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.benefits.support.title}</h3>
              <p className="text-gray-400">{t.benefits.support.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gradient-to-b from-black to-red-950/10 mb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in">
              <div className="flex mb-4">
                {[...Array(t.testimonials.client1.rating)].map((_, i) => (
                  <Star key={`client1-star-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{t.testimonials.client1.text}"</p>
              <p className="font-semibold text-red-400">- {t.testimonials.client1.name}</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in">
              <div className="flex mb-4">
                {[...Array(t.testimonials.client2.rating)].map((_, i) => (
                  <Star key={`client2-star-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{t.testimonials.client2.text}"</p>
              <p className="font-semibold text-red-400">- {t.testimonials.client2.name}</p>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 fade-in">
              <div className="flex mb-4">
                {[...Array(t.testimonials.client3.rating)].map((_, i) => (
                  <Star key={`client3-star-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"{t.testimonials.client3.text}"</p>
              <p className="font-semibold text-red-400">- {t.testimonials.client3.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-gradient-to-b from-red-950/10 to-black mb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.faq.title}</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-gray-900/50 border border-gray-800 rounded-lg fade-in">
              <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                <span className="font-semibold">{t.faq.q1.question}</span>
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                {t.faq.q1.answer}
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg fade-in">
              <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                <span className="font-semibold">{t.faq.q2.question}</span>
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                {t.faq.q2.answer}
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg fade-in">
              <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                <span className="font-semibold">{t.faq.q3.question}</span>
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                {t.faq.q3.answer}
              </div>
            </details>

            <details className="bg-gray-900/50 border border-gray-800 rounded-lg fade-in">
              <summary className="p-6 cursor-pointer hover:bg-gray-800/50 transition-colors flex items-center justify-between">
                <span className="font-semibold">{t.faq.q4.question}</span>
                <ChevronDown className="w-5 h-5" />
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                {t.faq.q4.answer}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">{t.footer.rights}</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">{t.cart.title}</h3>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-center py-8">{t.cart.empty}</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-red-400">
                          {language === 'pt' ? 'R$' : '$'} {item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        {t.cart.remove}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">{t.cart.total}</span>
                    <span className="text-xl font-bold text-red-400">
                      {language === 'pt' ? 'R$' : '$'} {getTotalPrice()}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    {t.cart.checkout}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-fadeIn {
          opacity: 1;
          transform: translateY(0);
        }

        details summary::-webkit-details-marker {
          display: none;
        }
        
        details[open] summary svg {
          transform: rotate(180deg);
        }
        
        details summary svg {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  )
}