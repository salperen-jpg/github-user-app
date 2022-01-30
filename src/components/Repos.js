import React from 'react';
import { useGlobalContext } from '../context/context';
// name - download -eye
import {
  MdOutlineDriveFileRenameOutline,
  MdDownload,
  MdRemoveRedEye,
  MdOutlineStarPurple500,
} from 'react-icons/md';
// fork
import { BiGitRepoForked } from 'react-icons/bi';
import '../Styles/Repos.scss';

const Repos = () => {
  const { gitRepos } = useGlobalContext();

  return (
    <article className='repos'>
      <div className='repos-center'>
        <h3>Repositories</h3>
        <div className='underline'></div>
        {gitRepos.slice(0, 20).map((repo) => {
          const {
            id,
            name,
            visibility,
            html_url: repo_url,
            watchers,
            forks,
            stargazers_count: stars,
          } = repo;
          return (
            <article className='repo' key={id}>
              <div className='repo-left'>
                <p className='name'>
                  <span>
                    <MdOutlineDriveFileRenameOutline className='repo-icon' />
                  </span>
                  <span className='repo-name'>{name}</span>
                  <span
                    className={
                      visibility === 'public'
                        ? 'visibility public'
                        : 'visibility private'
                    }
                  >
                    {visibility}
                  </span>
                </p>
                <div className='information'>
                  <p className='public_icon'>
                    <span>
                      <MdRemoveRedEye className='repo-icon'></MdRemoveRedEye>
                    </span>
                    <span className='value'>{watchers}</span>
                  </p>
                  <p className='public_icon'>
                    <span>
                      <MdOutlineStarPurple500 className='repo-icon'></MdOutlineStarPurple500>
                    </span>
                    <span className='value'>{stars}</span>
                  </p>
                  <p className='public_icon'>
                    <span>
                      <BiGitRepoForked className='repo-icon'></BiGitRepoForked>
                    </span>
                    <span className='value'>{forks}</span>
                  </p>
                </div>
              </div>
              <div className='repo-right'>
                <a href={repo_url}>
                  <MdDownload className='repo-icon'></MdDownload>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default Repos;
