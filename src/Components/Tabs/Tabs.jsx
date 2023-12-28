
import { useState } from "react"
import style from "../Tabs/Tabs.module.css"

const demoTabs = [
    { tab: "TAB 1", content: "Hola Soy Brian" },
    { tab: "TAB 2", content: "Seré el mejor Programador de Paraguay" },
    { tab: "TAB 3", content: "Para luego ser el mejor Programador del mundo" }
]


const Tabs = ( tabList ) => {
    const [selected, setSelected] = useState(null)

    tabList = demoTabs

    return (
        <>
            <div className={style.tabNav}>
                {
                    tabList.map((item, idx) => {
                        return (
                            <button
                                key={idx}
                                className={ selected== idx? style.btnSelected :style.btn}
                                onClick={() => setSelected(idx)}
                            >
                                {item.tab}
                            </button>
                        )
                    })
                }

            </div>

            <div className={style.content}>
                {tabList[selected]?.content}
            </div>
        </>
    )
}

export default Tabs