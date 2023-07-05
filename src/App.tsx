import React, {useState} from 'react';
import Menu from "./Menu"
import Content from "./Content"
import Projects from "./Projects"
function App() {
    const [socialMedia, setSocialMedia] = useState<boolean>(false)
    const [projects, setProjects] = useState(false)

    function handleChangeMedia():void{
        setSocialMedia(prevState=>{
            return !prevState
        })
    }
    function handleChangeMail():void{
        setProjects(prevState=>{
            return !prevState
        })
    }
  return (
    <div>
        <Menu changeMedia={handleChangeMedia}  changeMail={handleChangeMail} getMail={projects}/>
        {socialMedia &&
            <div className="social">
                <a className="social-reference" href="https://github.com/sklos06"><img src="./github.png"/><span>Github</span></a>
                <a className="social-reference" href="https://www.linkedin.com/in/szymon-kłos-358518278/"><img src="./linkedln.png"/><span>Linkedln</span></a>
                <a className="social-reference" href="https://www.instagram.com/sklos0620/"><img src="./instagram.png"/><span>Instagram</span></a>
                <a className="social-reference" href="https://www.facebook.com/profile.php?id=100006437774924"><img src="./facebook.png"/><span>Instagram</span></a>
            </div>}
        {projects? <Projects/>:<Content/>}
    </div>
  );
}

export default App;
