import Navbar from '@/components/Navbar'
import Cta from '@/components/home/Cta'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Cta />
    </>
  )
}

export default layout