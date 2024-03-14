'use client'

import {useUser} from '@clerk/nextjs'

const Main = () => {

    const {user}=useUser();
    console.log("user is:", user.emailAddresses[0].emailAddress);
    
  return (

    <div className="p-5 w-full h-screen bg-[#f9fafb]">
     <h1 className="text-2xl text-surface-900 font-medium">

        Hi {user?.fullName || user?.emailAddresses[0]?.emailAddress.split('@')[0]} 👋
      </h1>
     </div>
  );
};

export default Main;