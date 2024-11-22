// 'use server'

// import { revalidatePath } from 'next/cache'

// export async function handleAccept(doctorId) {
//   try {
//     const response = await fetch(`${process.env.BASE_URL}/api/doctors/${doctorId}/accept`, {
//       method: 'POST',
//     })

//     if (!response.ok) {
//       throw new Error('Failed to accept doctor')
//     }

//     revalidatePath('/admin/requests')
//   } catch (error) {
//     console.error('Error accepting doctor:', error)
//     // Handle error (e.g., show a toast notification)
//   }
// }

// export async function handleReject(doctorId) {
//   try {
//     const response = await fetch(`${process.env.BASE_URL}/api/doctors/${doctorId}/reject`, {
//       method: 'POST',
//     })

//     if (!response.ok) {
//       throw new Error('Failed to reject doctor')
//     }

//     revalidatePath('/admin/requests')
//   } catch (error) {
//     console.error('Error rejecting doctor:', error)
//     // Handle error (e.g., show a toast notification)
//   }
// }

