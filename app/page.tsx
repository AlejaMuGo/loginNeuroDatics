import Link from "next/link"
import { Brain, Play } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar activeTab="Inicio" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-2xl border-2 border-foreground bg-background">
              <Brain className="size-10 text-foreground" />
            </div>

            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
              NeuroDatics
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-balance text-muted-foreground">
              Desarrollamos profesional para el análisis de bioseñales en neuromarketing, acción atención, activación emocional y componentes visual mediante electroencefalógrafo, sensor galvánico y eye tracking.
            </p>

            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/demo">Ver demo</Link>
            </Button>

            {/* Video Tutorial Card */}
            <Card className="mx-auto mt-12 max-w-2xl border-0 bg-secondary/50 shadow-lg">
              <CardContent className="p-4">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="flex size-14 items-center justify-center rounded-full bg-background shadow-lg transition-transform hover:scale-105">
                      <Play className="size-6 text-foreground" />
                    </button>
                  </div>
                </div>
              </CardContent>
              <CardHeader className="pt-0">
                <CardTitle className="text-lg">Tutorial de introducción</CardTitle>
                <CardDescription>
                  Aprende cómo crear proyectos, cargar datos de sensores, visualizar métricas de bioseñales y generar reportes profesionales en pocos minutos.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* What is NeuroDatics Section */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-semibold">¿Qué es NeuroDatics?</h2>
            <p className="mx-auto max-w-3xl text-balance text-muted-foreground">
              Una herramienta profesional para el análisis científico de bioseñales. Diseñado para investigadores, especialistas en neuromarketing, profesionales de UX y empresas que buscan entender el comportamiento humano a través de datos neurofisiológicos objetivos.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
