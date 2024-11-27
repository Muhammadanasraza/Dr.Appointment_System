'use server'

import { revalidatePath } from 'next/cache'

export async function acceptRequest(requestId) {
  // TODO: Implement the logic to accept the request in your database
  console.log(`Accepting request ${requestId}`)
  revalidatePath('/requests')
  return { success: true, message: 'Request accepted successfully' }
}

export async function rejectRequest(requestId) {
  // TODO: Implement the logic to reject the request in your database
  console.log(`Rejecting request ${requestId}`)
  revalidatePath('/requests')
  return { success: true, message: 'Request rejected successfully' }
}

