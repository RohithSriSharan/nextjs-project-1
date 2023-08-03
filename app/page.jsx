'use client'
import Hero from "@components/Hero";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);
    

    return (
        <div>
           
      
        <div className='sm:flex hidden'>
          {session?.user ? (
            <div className='flex gap-3 md:gap-5'>
             
                <Hero/>
              <button type='button' onClick={signOut} className='outline_btn'>
                Sign Out
              </button>
  
            
            </div>
          ) : (
            <div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type='button'
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                   
                  >
                    Sign in
                  </button>
                ))}
            </div>
          )}
        </div>
  
      

            
        </div>
    );
}

export default Home;
