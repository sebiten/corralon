"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Truck,
  Wrench,
  ShieldCheck,
  Users,
  Building2,
  ShoppingCart,
  Handshake,
  Mail,
  Hammer,
} from "lucide-react";

export default function LosNietosLanding() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo-nietos-bg.png"
            alt="Los Nietos de Carlos Sánchez SRL"
            width={100}
            height={70}
            className="rounded"
          />
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#productos" className="hover:text-orange-600 transition">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-orange-600 transition">
            Sobre Nosotros
          </a>
          <a href="#contacto" className="hover:text-orange-600 transition">
            Contacto
          </a>
          <a
            href="#contacto"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-xl shadow-md transition"
          >
            Quiero un presupuesto
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative flex justify-center items-center text-center py-34 bg-gradient-to-b from-yellow-50 to-white">
        <Image
          src="/logo-nietos-bg.png"
          alt="Los Nietos de Carlos Sánchez SRL"
          width={400}
          height={70}
          className="rounded"
        />
        <div className="flex flex-col w-1/3 mt-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-4 text-black/90"
          >
            Materiales de construcción con historia y calidad
          </motion.h2>
          <p className="max-w-2xl text-neutral-700 mb-8">
            Somos una empresa familiar con más de 30 años en Ledesma, Jujuy,
            ofreciendo materiales de primera, asesoramiento técnico y atención
            personalizada.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-1 py-3 rounded-xl shadow-md">
            Solicitar presupuesto
          </Button>
        </div>
      </section>

      {/* Carrusel automático de marcas */}
      <section className="py-10 bg-white border-t border-b border-neutral-200 overflow-hidden">
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-3xl font-extrabold text-black/90 relative inline-block">
            Trabajamos con las mejores marcas
            <span className="absolute left-0 bottom-[-6px] w-full h-[4px] bg-orange-500 rounded-full"></span>
          </h3>
          <p className="text-neutral-600 mt-3 text-sm">
            Elegimos proveedores que garantizan calidad, durabilidad y
            confianza.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {Array(10)
              .fill("/bosch.jpeg")
              .map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-16 flex justify-center items-center"
                >
                  <img
                    src={src}
                    alt="Bosch"
                    className="h-16 w-auto object-contain transition"
                  />
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-20 px-8 bg-white text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <ShoppingCart className="text-orange-500" size={32} />
          <h3 className="text-3xl font-extrabold text-black relative inline-block">
            Nuestros Productos Estrella
            <span className="absolute left-0 bottom-[-6px] w-full h-[4px] bg-green-600 rounded-full"></span>
          </h3>
        </div>
        <p className="text-neutral-600 mb-12">
          Todo lo que necesitás para construir con confianza y calidad.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              nombre: "Cemento Loma Negra",
              img: "/cemento.jpg",
            },
            {
              nombre: "Ladrillos Comunes",
              img: "/ladrillo.jpg",
            },
            {
              nombre: "Hierro y Varillas",
              img: "/varillas.jpg",
            },
          ].map((p, i) => (
            <Card
              key={i}
              className="overflow-hidden border-neutral-200 hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.nombre}
                className="h-52 w-full object-cover"
              />
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">{p.nombre}</h4>
                <p className="text-neutral-500 text-sm mb-4">
                  Calidad garantizada para tus proyectos.
                </p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              nombre: "Cemento Loma Negra",
              img: "/cemento.jpg",
            },
            {
              nombre: "Ladrillos Comunes",
              img: "/ladrillo.jpg",
            },
            {
              nombre: "Hierro y Varillas",
              img: "/varillas.jpg",
            },
          ].map((p, i) => (
            <Card
              key={i}
              className="overflow-hidden border-neutral-200 hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.nombre}
                className="h-52 w-full object-cover"
              />
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">{p.nombre}</h4>
                <p className="text-neutral-500 text-sm mb-4">
                  Calidad garantizada para tus proyectos.
                </p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <center className="mt-10">
          <a
            href="#contacto"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-xl shadow-md transition"
          >
            Ver catalogo
          </a>
        </center>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-8 bg-yellow-50 text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <Hammer className="text-orange-500" size={32} />
          <h3 className="text-3xl font-extrabold text-black relative inline-block">
            Lo Que Ofrecemos
            <span className="absolute left-0 bottom-[-6px] w-full h-[4px] bg-orange-500 rounded-full"></span>
          </h3>
        </div>
        <p className="text-neutral-600 mb-12">
          Servicios pensados para acompañarte en cada etapa de tu construcción.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Truck,
              title: "Entrega a Domicilio",
              desc: "Llevamos tus materiales directo a tu obra en Ledesma y alrededores.",
            },
            {
              icon: Wrench,
              title: "Asesoramiento Técnico",
              desc: "Te ayudamos a elegir los productos adecuados para tu proyecto.",
            },
            {
              icon: ShieldCheck,
              title: "Calidad Garantizada",
              desc: "Solo trabajamos con marcas de confianza y garantía nacional.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Card
              key={i}
              className="bg-white border-neutral-200 text-center p-6"
            >
              <Icon className="mx-auto mb-4 text-orange-500" size={40} />
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-neutral-600 text-sm">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Confianza */}
      <section className="py-20 px-8 bg-green-50 text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <Handshake className="text-green-600" size={32} />
          <h3 className="text-3xl font-extrabold text-black relative inline-block">
            Nuestra Trayectoria y Compromiso
            <span className="absolute left-0 bottom-[-6px] w-full h-[4px] bg-green-600 rounded-full"></span>
          </h3>
        </div>
        <p className="text-neutral-600 mb-12">
          Más de tres décadas de experiencia nos avalan. Nos comprometemos con
          cada cliente y cada obra.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: "Confianza y Experiencia",
              desc: "Más de 30 años acompañando proyectos en toda la región con calidad y cumplimiento.",
            },
            {
              icon: Users,
              title: "Atención Personalizada",
              desc: "Somos una empresa familiar. Te asesoramos como si tu obra fuera la nuestra.",
            },
            {
              icon: Building2,
              title: "Compromiso en Cada Entrega",
              desc: "Contamos con logística propia y entregas rápidas en Ledesma y alrededores.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <Card
              key={i}
              className="bg-white border border-green-100 shadow-sm text-center p-8 hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">
                <Icon className="text-green-600" size={48} />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-black">
                {title}
              </h4>
              <p className="text-neutral-700 text-sm">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-8 bg-white text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <Mail className="text-green-600" size={32} />
          <h3 className="text-3xl font-extrabold text-black relative inline-block">
            Hablemos de Tu Proyecto
            <span className="absolute left-0 bottom-[-6px] w-full h-[4px] bg-orange-500 rounded-full"></span>
          </h3>
        </div>
        <p className="text-neutral-600 mb-8">
          Consultanos por precios, envíos o asesoramiento. Estamos en Ledesma –
          Jujuy y llegamos a toda la región.
        </p>

        <div className="max-w-md mx-auto text-left bg-yellow-50 p-8 rounded-2xl border border-neutral-200 shadow-sm">
          <h4 className="text-xl font-semibold mb-6 text-center text-black">
            Formulario de Consulta
          </h4>
          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <Input
                placeholder="Tu nombre completo"
                className="bg-white border-neutral-300 text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <Input
                type="email"
                placeholder="tucorreo@email.com"
                className="bg-white border-neutral-300 text-neutral-900"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Mensaje</label>
              <Textarea
                placeholder="Escribí tu consulta..."
                className="bg-white border-neutral-300 text-neutral-900"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Enviar
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-neutral-200 text-center text-neutral-600 text-sm bg-green-50">
        © {new Date().getFullYear()} Los Nietos de Carlos Sánchez SRL · Ledesma
        – Jujuy · Todos los derechos reservados.
      </footer>
    </div>
  );
}
