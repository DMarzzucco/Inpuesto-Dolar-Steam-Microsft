import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faMicrosoft } from "@/assets"
import { MenuProps } from "@/ts";
import Link from "next/link";
import React from "react"


export default class UiComps {

    Menunav: React.FC = () => {
        return (
            <div className='flex flex-col justify-start items-start'>
                <this.LinkNav logo={faSteam} title='Steam' path={'/Steam'} />
                <this.LinkNav logo={faMicrosoft} title='Microsoft' path={'/Microsoft'} />
            </div>
        )
    }


    LinkNav: React.FC<MenuProps> = ({ path, title, logo }) => {
        return (
            <Link href={path} className=' w-200 flex flex-row justify-start items-center p-2 border rounded-xl my-1 hover:bg-slate-300 hover:text-slate-900'>
                <FontAwesomeIcon icon={logo} />
                <p className='mx-2'>{title}</p>
            </Link>
        )
    }
    
}