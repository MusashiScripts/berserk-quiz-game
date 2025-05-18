import { GutsIcon } from '@/icons/GutsIcon'

export const Title = () => {
  return (
    <h1 id='game-title' className='mt-5 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-row items-center gap-x-2'>
      <GutsIcon className='size-12 rounded-full sm:size-15 md:size-17.5 lg:size-18'/>
       Berserk Quiz 𒉭
    </h1>
  )
}