import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, path, setLoading }) => {
  const router = useRouter();
  const handleTabClick = async () => {
    setLoading(true);
    await router.push(path);
    setLoading(false);
  };

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
        onClick={handleTabClick} 
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
