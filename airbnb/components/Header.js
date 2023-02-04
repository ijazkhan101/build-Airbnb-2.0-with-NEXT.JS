import Image from 'next/legacy/image'
import { 
SearchIcon,
MenuIcon,
UserCircleIcon,
UsersIcon,
GlobeAltIcon,
} from '@heroicons/react/solid';

function Header(){
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 md:px-5">
            {/*left div*/}
            <div className="relative flex items-center h-10 cursor-pointer my-auto"> 
                <Image src='https://links.papareact.com/qd3' 
                layout='fill'
                objectFit='contain'
                objectPosition='left' />
            </div>

            {/* Mid div*/}
            <div className="flex item-center md:border-1 border-2 rounded-full py-1 
            md:shadow-sm"> 
            <input className="flex-grow pl-3  bg-transparent 
            outline-none text-sm text-gray-600  placeholder-gray-400" type='text' placeholder="Start your Search"/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-600 text-white 
            rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>

            {/* right div*/}
            <div className="flex items-center space-x-4 justify-end"> 
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon  className="h-6 cursor-pointer"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon  className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header;