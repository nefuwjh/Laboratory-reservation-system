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
  teacherName: string
  name?: string //实验课名
  week?: string //周次
  day?: string //星期
  section?: string //节
  clas?: string //教室
}
