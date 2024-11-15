
import connectDb from "@/lib/connectDb"
import { UserModal } from "@/lib/models/UserModal"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"



async function handlelogin(obj) {
  await connectDb()
  const user = await UserModal.findOne({ email: obj.email })
  if (user) {
    return user;
  } else {
    let newUser = UserModal(obj)
    newUser = await newUser.save();
    return newUser;
  }


};



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        // console.log("Account", account)
        // console.log("Profile", profile)
        let obj = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          picture: profile.picture
        }
        const user = await handlelogin(obj);
        return user // Do different verification for other providers that don't have `email_verified`
      }
    },
  },
})





