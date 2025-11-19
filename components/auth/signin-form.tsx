'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, LogIn } from 'lucide-react'

export function SigninForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const userData = {
        id: Date.now(),
        email: formData.email,
        fullName: 'John Doe',
        userType: 'jobseeker',
        createdAt: new Date().toISOString()
      }

      localStorage.setItem('user', JSON.stringify(userData))

      router.push('/dashboard/jobs')
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 size-5 text-muted-foreground" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-foreground">Password</label>
          <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80">
            Forgot?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 size-5 text-muted-foreground" />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        {errors.password && <p className="text-destructive text-sm mt-1">{errors.password}</p>}
      </div>

      {/* Remember Me */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={formData.rememberMe}
          onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
          className="w-4 h-4 accent-primary rounded"
        />
        <span className="text-sm text-foreground">Remember me</span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="size-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Signing in...
          </>
        ) : (
          <>
            <LogIn size={18} />
            Sign In
          </>
        )}
      </button>

      {/* Social signin */}
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">
        <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition font-medium text-sm">
          Google
        </button>
        <button type="button" className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition font-medium text-sm">
          GitHub
        </button>
      </div>
    </form>
  )
}
