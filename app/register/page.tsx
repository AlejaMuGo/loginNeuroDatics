import { Navbar } from "@/components/navbar"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="flex items-center justify-center px-4 py-16">
        <RegisterForm />
      </main>
    </div>
  )
}
