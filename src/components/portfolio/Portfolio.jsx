import React, { useState } from 'react'
import List from './List'
import Items from './Items'
import { projects } from '../../Data'
import './portfolio.css'
import { AnimatePresence } from 'framer-motion'
import shapeOne from '../../assets/shape-1.png'
import Typed from 'typed.js';

const allNavList = ['all',...new Set(projects.map((project)=>project.category))]



const Portfolio = () => {


  const el = React.useRef(null);

    const [projectItems,setMenuItems] = useState(projects)
    const [navList,setCategories] = useState(allNavList)

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
         'Projects',
        ],
        smartBackspace: true,
        typeSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);


    const filterItems= (category) => {
      if(category === 'all'){
        setMenuItems(projects)
        return
      }
      const newProjectItems = projects.filter((item) => item.category === category )
      setMenuItems(newProjectItems)
    }

  return (
   <section className="portfoio section" id='work'>
            <h2 className="section__title text-cs">Projects</h2>
        <p className="section__subtitle">
            My <span><span ref={
                el
                } /></span>
        </p>
        <List list={navList} filterItems={filterItems}/>
        <div className="portfolio__container container grid">

          {/* noticable ...in initial animation */}
          <AnimatePresence initial={false}> 
          <Items  projectItems={projectItems}/>
          </AnimatePresence>
        </div>

        <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
    </div>

    <div className="section__bg-wrapper">
        <span className='bg__title'>Projects</span>
    </div>
   </section>
  )
}

export default Portfolio
