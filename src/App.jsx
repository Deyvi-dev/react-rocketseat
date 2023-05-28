import { Post } from "./Post";
import { Header } from "./components/Header";
import './global.css'
  
export function App() {
  return (
    <div>
    <Header />
    <Post author="Deyvi dev" 
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque quo, suscipit mollitia optio corrupti! Molestias delectus, incidunt, ea cumque beatae omnis odit a dolorem odio totam quas fugit nesciunt?" 
    />
  <Post author="hidden" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic explicabo eius facilis ipsa quae magni vitae, voluptatibus quod officia, dolorem cupiditate, sapiente nemo officiis corporis nihil! Cum, ratione porro? Illo."/>
    </div>
  )
}