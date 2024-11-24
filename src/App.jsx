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
import { WorkHistory } from './component/section/WorkHistory'
import { ContainerScroll } from './component/ui/container-scroll-animation'
import { IconMessage } from '@tabler/icons-react';


function App() {
 
  return (
    
  
    <>
     
    <Header/>
     <Hero {...hero}/>
 <About {...about}/>
      <Skills {...skill}/>
      <WorkHistory />
     
 <Projects {...project}/>


{/* <Quotes {...quotes} /> */}
<Contectme {...contectme} />
    </>
    
  )
}

export default App
