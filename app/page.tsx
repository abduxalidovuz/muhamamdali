import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stars from "@/components/Stars"
import Premium from "@/components/Premium"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Page(){
return(
<div className="bg-black min-h-screen text-white">
<Header/>
<Hero/>
<Stars/>
<Premium/>
<Contact/>
<Footer/>
</div>
)
}
