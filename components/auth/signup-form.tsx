'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Lock, User, CheckCircle } from 'lucide-react'

export function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'jobseeker'
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreed) {
      newErrors.terms = 'You must agree to the terms'
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
      localStorage.setItem('user', JSON.stringify({
        id: Date.now(),
        fullName: formData.fullName,
        email: formData.email,
        userType: formData.userType,
        createdAt: new Date().toISOString()
      }))

      router.push(formData.userType === 'jobseeker' ? '/dashboard/jobs' : '/dashboard/employer')
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* User Type Selection */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${
          formData.userType === 'jobseeker'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}>
          <input
            type="radio"
            name="userType"
            value="jobseeker"
            checked={formData.userType === 'jobseeker'}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
            className="sr-only"
          />
          <div className="text-center">
            <p className="font-bold text-sm">Job Seeker</p>
            <p className="text-xs text-muted-foreground mt-1">Find jobs & gigs</p>
          </div>
        </label>

        <label className={`p-4 border-2 rounded-lg cursor-pointer transition ${
          formData.userType === 'employer'
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}>
          <input
            type="radio"
            name="userType"
            value="employer"
            checked={formData.userType === 'employer'}
            onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
            className="sr-only"
          />
          <div className="text-center">
            <p className="font-bold text-sm">Employer</p>
            <p className="text-xs text-muted-foreground mt-1">Post jobs</p>
          </div>
        </label>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-3 size-5 text-muted-foreground" />
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
      </div>

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
        <label className="block text-sm font-medium text-foreground mb-2">Password</label>
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

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 size-5 text-muted-foreground" />
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            placeholder="••••••••"
            className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        {errors.confirmPassword && <p className="text-destructive text-sm mt-1">{errors.confirmPassword}</p>}
      </div>

      {/* Terms Agreement */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 w-4 h-4 accent-primary"
        />
        <span className="text-sm text-muted-foreground">
          I agree to the{' '}
          <Link href="/terms" className="text-primary hover:text-primary/80">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-primary hover:text-primary/80">
            Privacy Policy
          </Link>
        </span>
      </label>
      {errors.terms && <p className="text-destructive text-sm">{errors.terms}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <div className="size-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Creating account...
          </>
        ) : (
          <>
            <CheckCircle size={18} />
            Create Account
          </>
        )}
      </button>

      {/* Social signup */}
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
