import ButtonLogin from '@/components/ButtonLogin';
import FAQListItem from '@/components/FAQListItem';
import Image from 'next/image';
import productDemo from '@/public/assets/productDemo.jpeg';

export default function Home() {
  const isLoggedIn = true;
  const name = 'Jeff';

  const priceingFeaturesList = [
    'Collect customer feedback',
    'Unlimited boards',
    'Admin dashboard',
    '24/7 support',
  ];
  return (
    <main>
      {/* HEADER */}
      <section className='bg-base-200'>
        <div className='max-w-5xl mx-auto flex justify-between items-center px-8 py-2'>
          <div className='font-bold'>ZagzookCodeSaas</div>
          <div className='space-x-4 max-md:hidden'>
            <a className='link link-hover' href='#pricing'>
              Pricing
            </a>
            <a className='link link-hover' href='#faq'>
              FAQ
            </a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      {/* HERO */}
      <section className='px-8 text-center lg:text-left py-32 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start'>
        <Image
          src={productDemo}
          className='w-96 rounded-xl'
          alt='product demo'
        />
        <div>
          <h1 className='text-4xl lg:text-5xl font-extrabold mb-6 uppercase'>
            Collect customer feedback to build better products
          </h1>
          <div className='opacity-90 mb-10'>
            Create a feedback board in minutes, prioritize features, and build
            product your customers will love.
          </div>
          <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
        </div>
      </section>

      {/* PRICING */}
      <section className='bg-base-200' id='pricing'>
        <div className='px-8 py-32 max-w-3xl mx-auto'>
          <p className='text-sm uppercase font-medium text-center text-primary mb-4'>
            Pricing
          </p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>
            A pricing that adapts to your needs
          </h2>
          {/* PRICE CARD */}
          <div className='p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6'>
            <div className='flex gap-2 items-baseline'>
              <div className='text-4xl font-black'>$19</div>
              <div className='uppercase text-sm font-medium opacity-60'>
                /month
              </div>
            </div>
            <ul className='space-y-2 mt-8'>
              {priceingFeaturesList.map((feature, index) => (
                <li key={index} className='flex gap-2 items-center'>
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
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLogin
              isLoggedIn={isLoggedIn}
              name={name}
              extraStyle='w-full'
            />
          </div>

          {/* something goes here */}
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-base-200' id='faq'>
        <div className='px-8 py-32 max-w-3xl mx-auto'>
          <p className='text-sm uppercase font-medium text-center text-primary mb-4'>
            FAQ
          </p>
          <h2 className='text-3xl lg:text-4xl font-extrabold mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <ul className='max-w-lg mx-auto space-y-6'>
            {[
              {
                question: 'What do I get exactly?',
                answer: 'Loreum Ipseum',
              },
              {
                question: 'Can I get a refund?',
                answer: 'Loreum Ipseum',
              },
              {
                question: 'I have another question',
                answer: 'Loreum Ipseum',
              },
            ].map((qa) => (
              <FAQListItem question={qa.question} answer={qa.answer} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
