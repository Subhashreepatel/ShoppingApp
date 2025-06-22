import { BookType, Contact, House, ShoppingCart } from "lucide-react";

function Navbar(){
    return (
    <div className ="flex justify-between bg-cyan-900 h-15 text-2.5 p-3">
            <div className="flex items-center gap-1">
                <ul className = "flex gap-2.5 text-amber-50">
                     <li className="flex hover:text-amber-800"><House className="hover:text-amber-50"/>  Home </li>
                     <li className="flex hover:text-amber-800"><ShoppingCart className="hover:text-amber-50"/>Product</li>
                     <li className="flex hover:text-amber-800"><BookType className="hover:text-amber-50"/>About</li>
                     <li className="flex hover:text-amber-800"><Contact className="hover:text-amber-50"/>Contact Us</li>
                    </ul>
            </div>
            <div className = "flex items-center gap-4 ">
                <button className ="bg-blue-500 text-amber-50 p-1 rounded hover:scale-115 ">Sign up</button>
                <button className ="bg-green-500 text-amber-50 p-1 rounded hover:scale-115">Login</button>
                </div>
    </div>
    )
}


export default Navbar;