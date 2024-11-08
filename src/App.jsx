import  Header from './component/section/Header'
import Hero from './component/section/Hero'
// import Section from './component/generalcomp/Section'
import Skills from './component/section/Skills'
import './App.css'
import { hero,about,skill,exprience,project,quotes,contectme} from "../src/assets/data"
import About from './component/section/About'
import Projects from './component/section/Projects'
import Experience from './component/section/Experience'
import Quotes from './component/section/Quotes'
import Contectme from './component/section/Contectme'



function App() {
 
  return (
    // <BrowserRouter>
    <>
    
    <Header/>
 <Hero {...hero}/>
 {/* <About {...about}/> */}
 <Skills {...skill}/>
{ exprience.avilable ? <Experience {...exprience}/> : null}
 <Projects {...project}/>
{/* <Quotes {...quotes} /> */}
<Contectme {...contectme} />
    </>
    // </BrowserRouter> 
  )
}

export default App
