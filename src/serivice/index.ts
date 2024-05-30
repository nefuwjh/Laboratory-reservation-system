import { laboratorys } from '@/data'
import type { Laboratory } from '@/type'

export const addService = async (addMessage: Laboratory) => {
  const { week, day, section } = addMessage
  if (
    laboratorys
      .filter((item) => item.week === week)
      .filter((item) => item.day === day)
      .filter((item) => item.section === section)
  ) {
    console.log('错误')
  } else {
    laboratorys.push(JSON.parse(JSON.stringify(addMessage)))
  }
  console.log('Laboratory', laboratorys)
}
