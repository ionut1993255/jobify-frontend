import type { JobDropdownOption } from 'components/types/interfaces.ts'

export const jobTypes: JobDropdownOption[] = [
  { value: 'Full-Time', label: 'Full-Time' },
  { value: 'Part-Time', label: 'Part-Time' },
]

export const jobSalaries: JobDropdownOption[] = [
  { value: '$50K - $60K', label: '$50K - $60K' },
  { value: '$70K - $80K', label: '$70K - $80K' },
  { value: '$100K - $110K', label: '$100K - $110K' },
  { value: '$110K - $120K', label: '$110K - $120K' },
]

export const jobExperienceLevels: JobDropdownOption[] = [
  { value: 'Junior', label: 'Junior' },
  { value: 'Middle', label: 'Middle' },
  { value: 'Senior', label: 'Senior' },
]
