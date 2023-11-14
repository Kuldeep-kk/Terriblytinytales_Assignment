import Navbar from "@/app/Components/Navbar/Navbar";
import Profile from "@/app/Components/Profile/Profile";
import PageWrapper from "@/app/PageWrapper";

export default function Home() {
  return (
    <div>
        <PageWrapper>
      <Navbar/>
      <Profile/>
            <footer className={`text-blue-400 my-3 lg:absolute bottom-5 w-full flex justify-center`}>
                <p>&copy; {new Date().getFullYear()} Developed by <a href={"https://kk-pf.netlify.app/"} target={"_blank"} className={`text-yellow-500 font-semibold`}>Kuldeep Kushwaha</a>.</p>
            </footer>
        </PageWrapper>


    </div>
  )
}
