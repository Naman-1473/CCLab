import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
<section className="bg-white mt-10 flex justify-center ">
    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="#">
          <span className="sr-only">Home</span>
         
        </a>

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to Foodie Cart 🦑
        </h1>
        <SignUp/>
      </div>
    </main>
</section>
  )
}