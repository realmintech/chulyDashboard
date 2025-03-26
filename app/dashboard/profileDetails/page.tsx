import ProfileHeader from '@/components/ProfileHeader'
import ProfileOverview from '@/components/ProfileOverview'
import React from 'react'

const page = () => {
  return (
    <>
     <section>
        <ProfileHeader />
     </section>
     <ProfileOverview />
    
    </>
  )
}

export default page