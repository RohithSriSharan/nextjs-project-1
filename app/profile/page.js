'use client'
import { signOut,useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Hero from '@components/Hero'

const Profile = () => {
  const router = useRouter();
  const {data: session} = useSession();
 
  return (
    <div>
      {session ? (
        <div>
          {session.user.image && (
            <Image
              src={session.user.image}
              alt='user_img'
              width={60}
              height={60}
            />
          )}

          {session && <button onClick={signOut}>Sign Out</button>}
        </div>
      ) : (
        router.push('/')
      )}
    </div>
  )
}

export default Profile