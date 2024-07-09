import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="resume.html" path="/resume" />
      <Tab icon="/py_icon.svg" filename="posts.py" path="/projects" />
      <Tab icon="/go_icon.svg" filename="articals.go" path="/papers" />
      <Tab icon="/cpp_icon.svg" filename="contact.cpp" path="/contact" />
      <Tab icon="/git_icon.svg" filename="github.git" path="/github" />
      <Tab icon="/markdown_icon.svg" filename="readme.md" path="/aboutMe" />
    </div>
  );
};

export default Tabsbar;
