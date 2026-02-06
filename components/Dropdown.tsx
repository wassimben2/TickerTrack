'use client';
import {useRouter} from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from 'lucide-react';
import Navitems from './Navitems';

const Dropdown = () => {
    const router =useRouter(); // used to naviguate through the pages when we click on the dropdown menu items
    const handleSignOut = async() => {
        router.push("/sign-in")
    }
    const dummyuser ={name:"Jhon Pork", email:"john.pork@example.com"} // this is just a dummy user to test the dropdown menu and the avatar component that is shown 
  return (
    
      <DropdownMenu>
  <DropdownMenuTrigger asChild>
   <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
    <Avatar className="h-8 w-8">
  <AvatarImage src="https://i.pinimg.com/736x/2f/f2/0f/2ff20f4bf315cefc13c149169705c3c9.jpg" />{/*this is basically ehre we put our image if we have one , lese we do the next line  */}
  <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold"> {/*basically using the shadcn pre-built componenet to make the image appear here as the first name of our dummy tester for instance */}
    {dummyuser.name[0]}
  </AvatarFallback>
</Avatar>

   </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56 p-4  bg-gray-800 text-gray-100">
    <DropdownMenuLabel className=""><div className="flex flex-col">
  <p className="text-sm font-medium leading-none pb-1">{dummyuser.name}</p>
  <p className="text-xs leading-none text-muted-foreground">{dummyuser.email}</p>
</div>
</DropdownMenuLabel>
  <DropdownMenuSeparator className="my-2 border-gray-500" />

   <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
    <LogOut className="mr-2 h-4 w-4 block sm:hidden" />
    Logout
  </DropdownMenuItem>
  <DropdownMenuSeparator className="block sm:hidden  border-gray-500" />
  <nav className="block sm:hidden">
   <Navitems />
  </nav>
  </DropdownMenuContent>
</DropdownMenu>
    
  )
}

export default Dropdown
