import styles from './custom_button.module.css'

interface ICustomButtonProps {
    label: string,
    handleOnClick: Function,
    disabled?: boolean
    style?: Object,
}

const CustomButton = ({label, handleOnClick, disabled = false, style}: ICustomButtonProps) => {
    return(
        <button
            className={styles.btn}
            disabled={disabled}
            onClick={(e) => handleOnClick(e) }
            style={ style ?? {}}
        >
            {label}
        </button>
    )
}

export default CustomButton