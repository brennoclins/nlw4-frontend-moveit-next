// import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountdownContex'
import { Countdown } from '../components/Countdown'
import { Profile } from '../components/Profile'

import styles from '../styles/pages/Home.module.css'
import { Sidebar } from '../components/Sidebar'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | move.it</title>
        </Head>

        <Sidebar />

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

//   return {
//     props: {
//       level: Number(level),
//       currentExperience: Number(currentExperience),
//       challengesCompleted: Number(challengesCompleted)
//     }
//   }
// }