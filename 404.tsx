import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
         {' '}
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
      />
          <div className="inset-0 bg-black opacity-25 absolute">    </div>   {' '}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
               {' '}
        <div className="w-full font-mono flex flex-col items-center relative z-10">
                     {' '}
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You are all alone here          {' '}
          </h1>
                     {' '}
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                            404            {' '}
          </p>
                 {' '}
        </div>
           {' '}
      </div>
    </div>

    // <Container title="404 – Lee Robinson">
    //   <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
    //     <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
    //       404 - Not Found
    //     </h1>
    //     <p className="text-gray-600 dark:text-gray-400 mb-8">
    //       Looks like you've stumbled upon a page that doesn't exist. Don't
    //       worry, we've all been there at some point. Just take a deep breath and
    //       try not to panic.
    //     </p>
    //   </div>
    // </Container>
  );
}
