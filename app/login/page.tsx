import { Navbar } from "@/components/navbar"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/30">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <LoginForm />
      </main>
    </div>
  )
}
