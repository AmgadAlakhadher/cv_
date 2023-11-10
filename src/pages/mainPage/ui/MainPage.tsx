import { useTranslation } from 'react-i18next'
import { MsgBox } from 'shared/ui/MsgBox'
import { About } from 'widgets/About/ui/About'
import { Contact } from 'widgets/Contact'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'
import { HeroSection } from 'widgets/HeroSection'
import { ProjectsWidgets } from 'widgets/Projects'

const MainPage = () => {
  const [t] = useTranslation();
  const checkMsgBox = localStorage.getItem("checkMsgBox");
  const handleCheckMsgBox = ()=> {
    localStorage.setItem("checkMsgBox", "true");
  }
  return (
    <>
      {
        Boolean(checkMsgBox)?
          <></>
        : 
          <MsgBox 
            title={t('note')}
            msg={t('note_msg')}
            onClick={handleCheckMsgBox}
          />
      }
      <Header />
      <HeroSection />
      <About />
      <ProjectsWidgets />
      <Contact />
      <Footer />
    </>
  )
}

export default MainPage
