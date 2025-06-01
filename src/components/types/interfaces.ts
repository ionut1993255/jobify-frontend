export interface NavLink {
  id: number
  label: string
  to: string
}

export interface Job {
  title: string
  type: string
  description: string
  location: string
  postedDate: string
  active: boolean
  experienceLevel: string
  salary: string
  companyName: string
  companyDescription: string
  companyContactEmail: string
  companyContactPhone: string
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
