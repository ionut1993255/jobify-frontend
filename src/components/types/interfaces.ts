export interface NavLink {
  id: number
  label: string
  to: string
}

interface Company {
  id: string
  name: string
  description: string
  contactEmail: string
  contactPhone: string
}

export interface Job {
  id: string
  title: string
  type: string
  description: string
  location: string
  postedDate: string
  active: boolean
  experienceLevel: string
  salary: string
  company: Company
}

export interface JobDropdownOption {
  value: string
  label: string
}

export interface ContactForm {
  firstName: string
  lastName: string
  messageText: string
  email: string
  phoneNumber: string
}
