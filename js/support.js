// "Support the Kesha" card on the home page: copy the till number.
import { $, toast } from './ui.js'

export function initSupportCard() {
  const button = $('#copy-till')
  if (!button) return
  const till = $('#till-number').textContent.trim()

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(till)
      toast('Till number copied')
    } catch {
      toast(`Till number: ${till}`, 'error')
    }
  })
}
