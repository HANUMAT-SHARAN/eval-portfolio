import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
/*
avatar_url
: 
"https://avatars.githubusercontent.com/u/112655049?v=4"
bio
: 
null
blog
: 
""
company
: 
"@masai-course "
created_at
: 
"2022-09-01T18:13:16Z"
email
: 
null
events_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/events{/privacy}"
followers
: 
96
followers_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/followers"
following
: 
84
following_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/following{/other_user}"
gists_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/gists{/gist_id}"
gravatar_id
: 
""
hireable
: 
null
html_url
: 
"https://github.com/HANUMAT-SHARAN"
id
: 
112655049
location
: 
null
login
: 
"HANUMAT-SHARAN"
name
: 
"Hanumat Sharan"
node_id
: 
"U_kgDOBrb6yQ"
organizations_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/orgs"
public_gists
: 
0
public_repos
: 
12
received_events_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/received_events"
repos_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/repos"
site_admin
: 
false
starred_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/starred{/owner}{/repo}"
subscriptions_url
: 
"https://api.github.com/users/HANUMAT-SHARAN/subscriptions"
twitter_username
: 
null
type
: 
"User"
updated_at
: 
"2022-12-31T16:23:19Z"
url
: 
"https://api.github.com/users/HANUMAT-SHARAN"
*/
const Profile = () => {
  //   const getData = async () => {
  //     try {
  //         console.log(1);
  //       let data = await axios.get(
  //         `https://api.github.com/users/hanumat-sharan`
  //       );
  //       console.log(data)

  //     } catch (error) {
  //         console.log(error)
  //     }
  //   };
  //   console.log(1,"d")
  //   React.useEffect(() => {
  //     getData();
  //   }, []);

  return (
    <div id="profile">
      <Image
        src="https://avatars.githubusercontent.com/u/112655049?v=4"
        height={100}
        alt="d"
        width={100}
      />
      <h1>Hanumat Sharan</h1>
      <Link href="https://github.com/HANUMAT-SHARAN">
        <h4>@hanumat-sharan</h4>
      </Link>
      <div>
        <h3>Full-stack Developer</h3>
        <h3>JavaScript</h3>
        <h3>NodeJS</h3>
        <h3>ReactJS</h3>
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>HTML</h3>
        <h3>Chakra UI</h3>
      </div>
      <div id="education">
        <h2>Currently Studing At Masai School</h2>
        <h3>12 th Pass Science</h3>
      </div>
      <div>
        <Link href="https://drive.google.com/uc?id=1XQsL2a-Jw_dGKsCm4KvWWunVTALaojUW&export=download">
          <button>Resume</button>
        </Link>
        <Link href="https://github.com/HANUMAT-SHARAN">
          <button>Follow</button>
        </Link>
      </div>
      <div>
        <h1>Tech Stack</h1>
        <h3>Full-stack Developer</h3>
        <h3>JavaScript</h3>
        <h3>NodeJS</h3>
        <h3>ReactJS</h3>
        <h3>HTML</h3>
        <h3>CSS</h3>
        <h3>HTML</h3>
        <h3>Chakra UI</h3>
      </div>
    </div>
  );
};

export default Profile;
