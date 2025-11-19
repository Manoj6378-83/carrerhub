'use client'

import { useState } from 'react'
import { Mail, MapPin, Briefcase, LinkIcon, Camera, Save } from 'lucide-react'

export function UserProfile({ user }: { user: any }) {
  const [profile, setProfile] = useState({
    fullName: user.fullName,
    email: user.email,
    bio: 'Passionate developer looking for exciting opportunities',
    location: 'San Francisco, CA',
    website: 'https://example.com',
    phoneNumber: '+1 (555) 000-0000',
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    experience: [
      { title: 'Senior Developer', company: 'Tech Corp', duration: '2020 - Present' },
      { title: 'Developer', company: 'StartUp Inc', duration: '2018 - 2020' }
    ]
  })

  const [editing, setEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      setEditing(false)
    }, 1000)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>
        <button
          onClick={() => setEditing(!editing)}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition font-medium"
        >
          {editing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Header */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-4xl font-bold">
              {user.fullName.charAt(0)}
            </div>
            {editing && (
              <button className="absolute bottom-0 right-0 p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition">
                <Camera size={16} />
              </button>
            )}
          </div>
          <div>
            {editing ? (
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="text-3xl font-bold bg-input border border-border rounded-lg px-3 py-2 text-foreground w-full"
              />
            ) : (
              <h2 className="text-3xl font-bold">{profile.fullName}</h2>
            )}
            {editing ? (
              <input
                type="text"
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="text-muted-foreground bg-input border border-border rounded-lg px-3 py-2 w-full mt-2"
              />
            ) : (
              <p className="text-muted-foreground mt-1">{profile.bio}</p>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Mail className="size-5 text-muted-foreground flex-shrink-0" />
            {editing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-foreground"
              />
            ) : (
              <span className="text-foreground">{profile.email}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="size-5 text-muted-foreground flex-shrink-0" />
            {editing ? (
              <input
                type="text"
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-foreground"
              />
            ) : (
              <span className="text-foreground">{profile.location}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="size-5 text-muted-foreground flex-shrink-0" />
            {editing ? (
              <input
                type="tel"
                value={profile.phoneNumber}
                onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-foreground"
              />
            ) : (
              <span className="text-foreground">{profile.phoneNumber}</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <LinkIcon className="size-5 text-muted-foreground flex-shrink-0" />
            {editing ? (
              <input
                type="url"
                value={profile.website}
                onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                className="flex-1 bg-input border border-border rounded-lg px-3 py-2 text-foreground"
              />
            ) : (
              <a href={profile.website} target="_blank" className="text-primary hover:text-primary/80">
                {profile.website}
              </a>
            )}
          </div>
        </div>

        {editing && (
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition font-medium flex items-center gap-2 disabled:opacity-50"
          >
            <Save size={18} />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        )}
      </div>

      {/* Skills */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Skills</h3>
          {editing && <button className="text-primary hover:text-primary/80 font-medium text-sm">+ Add Skill</button>}
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm flex items-center gap-2"
            >
              {skill}
              {editing && <button className="text-primary/50 hover:text-primary">×</button>}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-card border border-border rounded-xl p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Experience</h3>
          {editing && <button className="text-primary hover:text-primary/80 font-medium text-sm">+ Add Experience</button>}
        </div>
        <div className="space-y-4">
          {profile.experience.map((exp, i) => (
            <div key={i} className="p-4 bg-muted/30 border border-border rounded-lg">
              <p className="font-bold text-foreground">{exp.title}</p>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-xs text-muted-foreground mt-1">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
