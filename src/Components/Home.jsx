import PopularSection from "./Card/PopularSection"
import SearchCard from "./Card/SearchCard"
import TrendingSection from "./Card/TrendingSection"
import UpcommingSection from "./Card/UpcommingSection"
import { useState} from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
const [search, setSearch] = useState('');
const [result, setResult] = useState([]);
const handleSearch = ()=>{
  if(!search.trim()) return;
    navigate(`/search?query=${encodeURIComponent(search)}`);
  }
return (
  <div className='max-w-screen min-h-screen lg:py-12 mb-10 flex flex-col gap-10'>
    <SearchCard search={search} setSearch={setSearch} result={result} setResult={setResult} handleSearch={handleSearch}/>
    <TrendingSection/>
    <PopularSection/>
    <UpcommingSection/>
  </div>

  )
}

export default Home