import ButtonLogin from '@/components/ButtonLogin';

export default function Home() {
  const isLoggedIn = true;
  const name = 'Jeff';
  return (
    <main>
      {/* HEADER */}
      <section className='bg-base-200'>
        <div className='max-w-3xl mx-auto flex justify-between items-center px-8 py-2'>
          <div className='font-bold'>ZagzookCodeSaas</div>
          <div className='space-x-4 max-md:hidden'>
            <a className='link link-hover'>Pricing</a>
            <a className='link link-hover'>FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className='px-8 text-center py-32 max-w-3xl mx-auto'>
        <h1 className='text-4xl lg:text-5xl font-extrabold mb-6 uppercase'>
          Collect customer feedback to build better products
        </h1>
        <div className='opacity-90 mb-10'>
          Create a feedback board in minutes, prioritize features, and build
          product your customers will love.
        </div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>

      {/* PRICING */}
      <section className='bg-base-200 py-32'>
        <div className='px-8 py-32 max-w-3xl mx-auto'>
          <p className='text-sm uppercase font-medium text-center text-primary mb-4'>
            Pricing
          </p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>
            A pricing that adapts to your needs
          </h2>
          {/* CARD */}
          <div className='p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6'>
            <div className='flex gap-2 items-baseline'>
              <div className='text-4xl font-black'>$19</div>
              <div className='uppercase text-sm font-medium opacity-60'>
                /month
              </div>
            </div>
            <ul className='space-y-2 mt-8'>
              <li className='flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-green-600 size-4'>
                  <path
                    fillRule='evenodd'
                    d='m4.5 12.75 6 6 9-13.5'
                    clipRule={'evenodd'}
                  />
                </svg>
                Collect customer feedback
              </li>
              <li className='flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-green-600 size-4'>
                  <path
                    fillRule='evenodd'
                    d='m4.5 12.75 6 6 9-13.5'
                    clipRule={'evenodd'}
                  />
                </svg>
                Unlimited boards
              </li>
              <li className='flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-green-600 size-4'>
                  <path
                    fillRule='evenodd'
                    d='m4.5 12.75 6 6 9-13.5'
                    clipRule={'evenodd'}
                  />
                </svg>
                Admin dashboard
              </li>
              <li className='flex gap-2 items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='text-green-600 size-4'>
                  <path
                    fillRule='evenodd'
                    d='m4.5 12.75 6 6 9-13.5'
                    clipRule={'evenodd'}
                  />
                </svg>
                24/7 support
              </li>
            </ul>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>

          {/* something goes here */}
        </div>
      </section>
    </main>
  );
}
