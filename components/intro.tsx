import Image from 'next/image'
import authorImage from '@/public/images/authors/personal_image.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
      <h1 className='text-3xl font-extrabold'>Hi, I am Abdessamed</h1>
      <p>

        I’m a fifth-year Computer Systems (SIQ) student at École Nationale Supérieure d'Informatique (ESI, ex-INI), Algiers,
        deeply passionate about research, problem-solving, and discovering new ideas. 
        My interests span wireless communication, security, compiler design, and applied AI,
        with a strong focus on optimization techniques.

        </p>
        <p className='mt-3 font-light text-muted-foreground'>
        I am fascinated by philosophy. Understanding and answering life’s 
        fundamental questions has always been one of humanity’s greatest challenges. While religion 
        offers its own explanations, humans have also sought their own responses through reason and 
        inquiry. Exploring the gaps between these perspectives—where logic, belief, and uncertainty 
        meet—is my true passion.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}