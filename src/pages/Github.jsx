import { Activity, ExternalLink, FolderGit2, Star } from 'lucide-react'
import { createElement, useEffect, useMemo, useState } from 'react'

const USERNAME = 'anubxc'
const PROFILE_URL = `https://github.com/${USERNAME}`
const USER_API = `https://api.github.com/users/${USERNAME}`
const REPOS_API = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
const MAX_COMMIT_REPOS = 6
const MAX_VISIBLE_COMMITS = 3

const formatRelativeTime = (date) => {
  if (!date) return 'Just now'

  const now = Date.now()
  const commitTime = new Date(date).getTime()
  const diffInSeconds = Math.max(0, Math.round((now - commitTime) / 1000))

  if (diffInSeconds < 60) return 'Just now'

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const timeUnits = [
    ['year', 60 * 60 * 24 * 365],
    ['month', 60 * 60 * 24 * 30],
    ['week', 60 * 60 * 24 * 7],
    ['day', 60 * 60 * 24],
    ['hour', 60 * 60],
    ['minute', 60],
  ]

  for (const [unit, seconds] of timeUnits) {
    if (diffInSeconds >= seconds) {
      return rtf.format(-Math.floor(diffInSeconds / seconds), unit)
    }
  }

  return 'Just now'
}

const getRepoCommitsApi = (repo) => {
  const repoName = encodeURIComponent(repo.name)
  const author = encodeURIComponent(USERNAME)
  const branch = repo.default_branch ? `&sha=${encodeURIComponent(repo.default_branch)}` : ''

  return `https://api.github.com/repos/${USERNAME}/${repoName}/commits?per_page=1&author=${author}${branch}`
}

async function fetchJson(url) {
  const response = await fetch(url, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('GitHub request failed.')
  }

  return response.json()
}

async function fetchLatestCommits(repos) {
  const candidateRepos = repos
    .filter((repo) => !repo.fork)
    .sort(
      (firstRepo, secondRepo) =>
        new Date(secondRepo.pushed_at || secondRepo.updated_at || 0) -
        new Date(firstRepo.pushed_at || firstRepo.updated_at || 0),
    )
    .slice(0, MAX_COMMIT_REPOS)

  const commitResults = await Promise.all(
    candidateRepos.map(async (repo) => {
      try {
        const commitData = await fetchJson(getRepoCommitsApi(repo))
        const latestCommit = Array.isArray(commitData) ? commitData[0] : null

        if (!latestCommit) return null

        return {
          repo: repo.name,
          message: latestCommit.commit?.message?.split('\n')[0] || 'Recent update',
          date:
            latestCommit.commit?.author?.date ||
            latestCommit.commit?.committer?.date ||
            repo.pushed_at,
          url: latestCommit.html_url || `${repo.html_url}/commits`,
        }
      } catch {
        return null
      }
    }),
  )

  return commitResults
    .filter(Boolean)
    .sort(
      (firstCommit, secondCommit) =>
        new Date(secondCommit.date || 0) - new Date(firstCommit.date || 0),
    )
    .slice(0, MAX_VISIBLE_COMMITS)
}

const StatCard = ({ icon, label, value }) => (
  <article className='rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-orange-700/60 sm:p-5'>
    <div className='flex items-center justify-between gap-4'>
      <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-700/15 text-orange-300'>
        {createElement(icon, { size: 20 })}
      </span>
      <p className='text-right text-2xl font-bold text-neutral-100 sm:text-3xl'>{value}</p>
    </div>
    <p className='mt-4 text-xs font-medium text-neutral-300 sm:text-sm'>{label}</p>
  </article>
)

const Github = () => {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const [commits, setCommits] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    async function fetchGithubData() {
      const errors = []

      try {
        const [userData, reposData] = await Promise.all([
          fetchJson(USER_API),
          fetchJson(REPOS_API),
        ])

        const normalizedRepos = Array.isArray(reposData) ? reposData : []

        if (!active) return

        setUser(userData)
        setRepos(normalizedRepos)

        try {
          const latestCommits = await fetchLatestCommits(normalizedRepos)

          if (!active) return

          setCommits(latestCommits)
        } catch (githubError) {
          errors.push(githubError.message)
        }
      } catch (githubError) {
        errors.push(githubError.message)
      }

      if (active) {
        setError(errors.length ? 'Some GitHub data could not load.' : '')
      }
    }

    fetchGithubData()

    return () => {
      active = false
    }
  }, [])

  const stats = useMemo(() => {
    const starsEarned = repos.reduce(
      (total, repo) => total + (repo.stargazers_count || 0),
      0,
    )
    const liveProjects = repos.filter((repo) => repo.homepage?.trim()).length

    return [
      {
        label: 'Contributions',
        value: 220,
        icon: Activity,
      },
      {
        label: 'Public Repos',
        value: user?.public_repos || repos.length,
        icon: FolderGit2,
      },
      {
        label: 'Stars',
        value: starsEarned,
        icon: Star,
      },
      {
        label: 'Live Projects',
        value: liveProjects,
        icon: ExternalLink,
      },
    ]
  }, [repos, user?.public_repos])

  return (
    <section className='min-h-screen w-full pb-16 pt-24 text-white'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-10'>
          <div>
            <p className='inline-flex items-center rounded-full border border-neutral-700 px-4 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400'>
              GitHub
            </p>
            <h1 className='mt-5 text-3xl font-bold text-neutral-100 sm:text-5xl'>
              Contribution <span className='text-orange-700'>Activity</span>
            </h1>
          </div>
        </div>

        {error && (
          <div className='mb-6 rounded-2xl border border-orange-700/40 bg-orange-950/20 p-4 text-sm text-orange-100'>
            GitHub data could not load.
            <a
              href={PROFILE_URL}
              target='_blank'
              rel='noreferrer'
              className='ml-2 inline-flex font-semibold text-orange-300 underline-offset-4 hover:underline'
            >
              View GitHub Profile
            </a>
          </div>
        )}

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((item) => (
            <StatCard
              key={item.label}
              icon={item.icon}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <article className='mt-6 rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 to-neutral-950/40 p-4 sm:p-6'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <h2 className='text-lg font-semibold text-neutral-100 sm:text-xl'>Latest Commits</h2>
            </div>

            <a
              href={PROFILE_URL}
              target='_blank'
              rel='noreferrer'
              className='inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-200 transition duration-300 hover:border-orange-700/60 hover:bg-neutral-900 sm:w-fit'
            >
              Profile
              <ExternalLink size={15} />
            </a>
          </div>

          <div className='mt-6 space-y-3'>
            {commits.length ? (
              commits.map((commit) => (
                <a
                  key={`${commit.repo}-${commit.url}-${commit.date}`}
                  href={commit.url}
                  target='_blank'
                  rel='noreferrer'
                  className='group block border-b border-neutral-800 py-4 transition duration-300 hover:border-orange-700/60'
                >
                  <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
                    <div>
                      <p className='text-xs font-medium uppercase tracking-[0.16em] text-neutral-500'>
                        {USERNAME}/{commit.repo}
                      </p>
                      <p className='mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-300 sm:text-base'>
                        {commit.message}
                      </p>
                    </div>
                    <span className='shrink-0 text-xs text-neutral-500'>
                      {formatRelativeTime(commit.date)}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <p className='py-4 text-sm text-neutral-400'>
                No recent public commits found.
              </p>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Github
