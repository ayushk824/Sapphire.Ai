import { Link, Outlet } from 'react-router-dom'
import './rootlayout.css'
import { ClerkProvider, SignedIn, UserButton } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const Rootlayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className='rootlayout'>
        <header>
            <Link to ="/" className='logo'>
            <img src="/logo.png" alt="" />
            <span>SAPPHIRE.AI</span>
            </Link>
            <div className="user">
            <SignedIn>
            <UserButton />
          </SignedIn>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
    </ClerkProvider>
  );
}

export default Rootlayout