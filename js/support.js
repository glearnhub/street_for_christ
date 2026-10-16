// "Support the Kesha" card on the home page: pick an amount, copy the till number.
import { $, $$, toast } from './ui.js'

export function initSupportCard() {
  const card = $('#support-card')
  if (!card) return
  const instruction = $('#support-instruction')
  const till = $('#till-number').textContent.trim()
  const name = $('.till-name', card).textContent.replace(/^Name:\s*/i, '').trim()

  for (const btn of $$('.amount', card)) {
    btn.addEventListener('click', () => {
      for (const other of $$('.amount', card)) other.classList.toggle('selected', other === btn)
      const amount = btn.dataset.amount
      instruction.textContent = amount
        ? `Send KES ${Number(amount).toLocaleString('en-KE')} to Till ${till} (${name}).`
        : `Send any amount you wish to Till ${till} (${name}).`
    })
  }

  $('#copy-till').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(till)
      toast('Till number copied')
    } catch {
      toast(`Till number: ${till}`, 'error')
    }
  })
}
