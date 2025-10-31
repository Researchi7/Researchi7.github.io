import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  const [hideColorLegend, setHideColorLegend] = useState(false);
  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 1100) {
        setHideColorLegend(true);
      } else {
        setHideColorLegend(false);
      }
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <>
      <a href="https://github.com/martinrepo" target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      <div> <center><h3>My Contributed Repositories on Github</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div><center><h3>My Github Calendar</h3></center></div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend={hideColorLegend}
          // hideMonthLabels
          />
        </div>
      </center>
    </>
  );
};

export async function getStaticProps() {
  const timestamp = new Date().getTime();
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=1`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  
  const casibaseRepoRes = await fetch(
    `https://api.github.com/repos/casibase/casibase`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const serverlessLLMRepoRes = await fetch(
    `https://api.github.com/repos/serverlessllm/serverlessllm`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const muralXGANRepoRes = await fetch(
    `https://api.github.com/repos/mural-inpaint/muralxgan`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  )
  let repos = await repoRes.json();
  const casibaseRepo = await casibaseRepoRes.json();
  const serverlessLLM = await serverlessLLMRepoRes.json();
  const muralXGAN = await muralXGANRepoRes.json();

  // Add the specified repo explicitly
  repos.push(casibaseRepo);
  repos.push(serverlessLLM);
  repos.push(muralXGAN);
  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 30,
  };
}

export default GithubPage;
