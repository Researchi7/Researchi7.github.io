import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = ({ setLoading }) => {
  return (
    <div className={styles.tabs}>
      <Tab setLoading={setLoading} icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab setLoading={setLoading} icon="/html_icon.svg" filename="resume.html" path="/resume" />
      <Tab setLoading={setLoading} icon="/py_icon.svg" filename="posts.py" path="/posts" />
      <Tab setLoading={setLoading} icon="/go_icon.svg" filename="articals.go" path="/papers" />
      <Tab setLoading={setLoading} icon="/cpp_icon.svg" filename="contact.cpp" path="/contact" />
      <Tab setLoading={setLoading} icon="/git_icon.svg" filename="github.git" path="/github" />
      <Tab setLoading={setLoading} icon="/markdown_icon.svg" filename="readme.md" path="/aboutMe" />
    </div>
  );
};

export default Tabsbar;
