import React from 'react'
import axios from 'axios';
import Link from 'next/link';
const Projects = () => {

    let dataarr = [
        {
          name: "eval-portfolio",
          forks_count: 0,
          language: "CSS",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/eval-portfolio",
          star: 2,
          deployed: "",
        },
        {
          name: "hoja----deploy",
          forks_count: 0,
          language: "CSS",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/hoja----deploy",
          star: 2,
          deployed: "",
        },
        {
          name: "vercel-deploy",
          forks_count: 0,
          language: "Java Script",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/vercel-deploy",
          star: 2,
          deployed: "",
        },
        {
          name: "depyloynext",
          forks_count: 0,
          language: "CSS",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/depyloynext",
          star: 2,
          deployed: "",
        },
        {
          name: "filthy-range-8205",
          forks_count: 2,
          language: "Java Script",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/filthy-range-8205",
          star: 2,
          deployed: "",
        },
        {
          name: "abject-history-7359-backend",
          forks_count: 1,
          language: "Java Script",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/abject-history-7359-backend",
          star: 2,
          deployed: "",
        },
        {
          name: "HANUMAT-SHARAN",
          forks_count: 0,
          language: "CSS",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/HANUMAT-SHARAN",
          star: 2,
          deployed: "",
        },
        {
          name: "HANUMAT-SHARAN.github.io",
          forks_count: 0,
          language: "Html",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/HANUMAT-SHARAN.github.io",
          star: 2,
          deployed: "",
        },
        {
          name: "ga-todo-app",
          forks_count: 0,
          language: "Javacript",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/ga-todo-app",
          star: 2,
          deployed: "",
        },
        {
          name: "nextjs-hanumat",
          forks_count: 0,
          language: "CSS",
          url: "https://api.github.com/repos/HANUMAT-SHARAN/nextjs-hanumat",
          star: 2,
          deployed: "",
        },
      ];


    //  const getData = async () => {
    //   try {
    //       console.log(1);
    //     let data = await axios.get(
    //       `https://api.github.com/search/repositories?q=user:hanumat-sharan+fork:true&sort=updated&per_page=10&type=Repositories`
    //     );
    //     console.log(data)

    //   } catch (error) {
    //       console.log(error)
    //   }
    // };
    // console.log(1,"d")
    // React.useEffect(() => {
    //   getData();
    // }, []);
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div >
        {dataarr.map((el)=><div style={{borderRadius:"16px",border:"1px solid green"}} key={Math.random()}>
            <h3>{el.name}</h3>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <Link href={el.url}><h3>url</h3></Link>
                <Link href={el.deployed}><h3>Deployed</h3></Link>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <h3>star count:{el.star}</h3>
                <h3>star count:{el.forks_count}</h3>
                <h3>star count:{el.language}</h3>
            </div>
        </div>)}
      </div>
    </div>
  )
}

export default Projects
