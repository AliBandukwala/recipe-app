import { ReactNode } from "react"
import Image from 'next/image'
import styles from './appbar.module.css'
import { useRouter } from "next/router"

interface IAppBarProps {
    withLogo?: boolean,
    title: string,
    actions?: ReactNode,
    withBackButton?: boolean,
}

const logoUrl: string = "data:image/jpeg;base64,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"

const AppBar = ({withLogo = true, title, actions, withBackButton = false}: IAppBarProps) => {

    const router = useRouter()

    return (
        <header className={styles.appbar}>
            <div className="flex items-center mr-2" >
                { withBackButton &&
                    <span 
                        style={{marginRight:'12px', fontSize:"26px", fontWeight:700, cursor:'pointer' }}
                        onClick={() => router.back()}
                    >
                        {`<`}
                    </span>
                }
                { withLogo && 
                    <Image 
                        alt='' 
                        onClick={() => router.push('/')}
                        src={logoUrl} 
                        width={40} 
                        height={40} 
                        style={{borderRadius: '35px', marginRight:"12px",  cursor:'pointer'}} 
                    /> 
                }
                <span>{title}</span>
            </div>
            <div className="flex items-center">{ actions }</div>
        </header>
    )
}

export default AppBar