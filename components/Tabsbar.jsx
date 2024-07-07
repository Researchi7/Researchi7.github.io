import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="resume.html" path="/resume" />
      <Tab icon="/cpp_icon.svg" filename="contact.cpp" path="/contact" />
      <Tab icon="/py_icon.svg" filename="posts.py" path="/projects" />
      <Tab icon="/go_icon.svg" filename="articals.go" path="/papers" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};

export default Tabsbar;
