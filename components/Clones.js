
const clones=[
    {title:"Instagram",description:"Some text info about it",link:"google.com",image:"",}
]

export default function Clones() {
  return (
    <div>
          <section className="">
              <div className="flex flex-wrap p-12 mx-auto md:flex-nowrap">
                  <a href="">
                      <div className="flex w-full">
                          <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                              <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/images/placeholders/neon-1.jpg" alt="blog"/>
                                  <div className="px-6 py-8">
                                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
                                          <span className="">Entry</span>
                                      </h4>
                                      <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framework locally with purgeCSS, enable the dark mode option, prefferences or className is upt to you.</p>
                                  </div>
                          </div>
                      </div>
                  </a>

              </div>
          </section>
    </div>
  )
}
