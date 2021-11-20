import styles from '../styles/Home.module.scss'
import defaultCardImage from '../public/perfil.png'
import fundImage from '../public/fund.png'
import { Preview, FundContainer, FooterContainer } from '../components'
import MyLauout from '../layout/MyLauout'

export default function Home() {
  return (
    <MyLauout>
          <Preview imageSrc={defaultCardImage}/>
          <FundContainer imageSrc={fundImage}/>
    </MyLauout>
  )
}
