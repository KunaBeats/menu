import React from "react"
import data from "./data"
import Card from "./Card"

export default function Section() {
    
    const [value, setValue] = React.useState("all")
    const [menuItems, setMenuItems] = React.useState(data)
    
    React.useEffect(() => {
        if(value === "all") {
            setMenuItems(data)
        } else {const filteredItems = data.filter(item => item.type === value)
        setMenuItems(filteredItems)}
        
    }, [value])
    
    const card = menuItems.map(item => {
    return (
      <Card 
      key = {item.id}
      item = {item}
      />
    )
  })
  
    return (
        <div>
            <div className="headline">
                <h1>Our Menu</h1>
            </div>
            <div className="menu-buttons">
                <button onClick={(event) => setValue("all")}>All</button>
                <button onClick={(event) => setValue(event.target.value)} value="breakfast all">Breakfast</button>
                <button onClick={(event) => setValue(event.target.value)} value="dinner all" >Dinner</button>
                <button onClick={(event) => setValue(event.target.value)} value="salads all" >Salads</button>
                <button onClick={(event) => setValue(event.target.value)} value="kids all">For Kids</button>
            </div>
            <div className="line">
            </div>
            {card}
        </div>
        
    )
}