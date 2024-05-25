export interface User {
  id?: number
  name?: string
  account?: string
  password?: string
  office?: string
  birth?: string
  title?: string
  number?: string
  course?: Array<Course>
}
export interface Course {
  name?: string
  teacher?: string
  period?: number
  time?: Array<Time>
}
export interface Time {
  week?: string
  day?: string
  section?: string
  laboratory?: string
}
export interface Laboratory {
  name?: string
  week?: string
  day?: string
  section?: string
}
