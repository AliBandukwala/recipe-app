import { ReactNode } from "react"
import styles from './card.module.css'

interface ICardProps {
    children?: ReactNode,
    style?: Object,
    img?: string,
    title?: string,
    subtitle?: string,
    action?: ReactNode,
}

const Card = ({children, style, img, title, subtitle, action,}: ICardProps) => {
    return (
        <div style={style ?? {}} className={styles.card}>
            {img && <img alt={''} src={img} width={300} height={200} />}
            {title && <span className='mt-2 text-lg font-semibold'>{title}</span>}
            {subtitle && <span className='mt-2 text-sm'>{subtitle}</span>}
            { children }
            { action }
        </div>
    )
}

export default Card