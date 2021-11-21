import defaultCardImage from '../public/perfil.png'
import fundImage from '../public/fund.png'
import EducationImage from '../public/meditation.png'
import { Preview, FundContainer, Education } from '../components'
import MyLauout from '../layout/MyLauout'

export default function Home() {
  return (
    <MyLauout>
          <Preview imageSrc={defaultCardImage}/>
          <Education imageSrc={EducationImage}/>
          <FundContainer imageSrc={fundImage}/>
    </MyLauout>
  )
}
