import { ReactNode } from "react"
import Image from 'next/image'
import styles from './appbar.module.css'

interface IAppBarProps {
    logo?: string,
    title: string,
    actions?: ReactNode,
}

const AppBar = ({logo, title, actions}: IAppBarProps) => {
    return (
        <header className={styles.appbar}>
            <div>
                { logo && <Image alt='' src={logo} width={40} height={40} className="rounded-full" /> }
                <span>{title}</span>
            </div>
            <div>{ actions }</div>
        </header>
    )
}

export default AppBar