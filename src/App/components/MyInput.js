import styles from './styles/MyInput.module.css'

const MyInput = (props) =>{
    return (
        <div className={styles.ipBox}>
            <label>{props?.label}:</label>
            <input
                type={props?.type}
                value={props?.value}
                className={[`${styles.ip} ${props?.validator && styles.ipBGError}`]}
                onChange={props?.onChange}
                onBlur={props?.onBlur}
                ref={props?.ref}
            />
        </div>
    )
}

export default MyInput
