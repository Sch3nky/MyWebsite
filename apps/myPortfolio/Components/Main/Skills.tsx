import styles from "@/styles/Components/Main/skills.module.scss"
import { Experience } from "@/types/api";

import { useEffect, useState } from "react";

function Skills({skills}:{skills:Experience[]}) {
  const [filter, changeFilter] = useState<string>("")
  const [filteredItems, changeFilteredItems] = useState<Experience>()
  useEffect(() => {
    if (filter !== ""){
      const category = skills.find((item:any) => item.name === filter)
      if (category){
        changeFilteredItems(category)
      }
    }
  },[filter])

  return (
    <div id="Skills" className={styles.container}>
      <div className={styles.navigation}>
          <button className={styles.headline} onClick={() => changeFilter("")}>
            <h2>
              Zkušenosti
            </h2>
          </button>

          <div className={styles.categories}>
            {
              skills.map((category:Experience, key:number) => 
              <button key={key} onClick={() => changeFilter(category.name)}>
                {category.name}
              </button>
              )
           }
          </div>
        </div>
      <div className={styles.items}>
        {
          filter === ""?
          <>
           {
            skills.map((category:Experience, key:number) => 
              <div key={key} className={styles.category}>
                <h2>
                  {category.name}
                </h2>
                <ul>
                  {category.items.map((item:any, key2:number) => 
                  <li key={key2}>
                    {item}
                  </li>)}
                </ul>
              </div>
            )
           }
          </>
          :
          <>
            {filteredItems &&
              <div  className={styles.category}>
                <h2>
                  {filteredItems.name}
                </h2>
                <ul>
                  {filteredItems.items.map((item:any, key2:number) => 
                  <li key={key2}>
                    {item}
                  </li>)}
                </ul>
              </div>
            }
          </>
        }
      </div>
    </div>
  )
}

export default Skills;