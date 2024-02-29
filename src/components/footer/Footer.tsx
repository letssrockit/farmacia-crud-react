import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const footerComponent = (
      <>
        <div className="flex justify-center bg-green-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Farmacia Online | Copyright: Leticia Rocha </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer