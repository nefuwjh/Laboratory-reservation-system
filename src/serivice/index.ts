import { laboratorys } from '@/data'
import router from '@/router'
import type { Laboratory } from '@/type'

export const addService = async (addMessage: Laboratory) => {
  console.log('addMessage', addMessage)
  const { week, day, section, clas } = addMessage
  if (laboratorys.some((item) => item.week === week)) {
    if (laboratorys.some((item) => item.day === day))
      if (laboratorys.some((item) => item.section === section))
        if (laboratorys.some((item) => item.clas === clas)) {
          console.log('失败')
          ElMessage.error('该实验室已被占用')
        }
  } else {
    laboratorys.push(JSON.parse(JSON.stringify(addMessage)))
    router.push('/main/laboratory/LaboratoryView')
    ElMessage('预约成功')
  }
  console.log('Laboratory', laboratorys)
}
