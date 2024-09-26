import styles from './styles.module.scss';
import socialMediaLinks from '../../lib/data';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                {socialMediaLinks.map((item, i) => (
                    <li key={i}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}