import React from 'react';
import MemberData from ".././Member/MemberData.js";
import Member from '.././Member/Member.js';
import "./Team.css";

const Team = () => {
  return (
    <div className='team'>
      <h4 className='ex'>Explore our Blogs</h4>
        <h2 id="agents">Latest Blogs</h2>
        <div className="team-opt">
         { MemberData.map((val)=>{
              return (<div className="card-hook">
                <Member imgsrc={val.img} time={val.time} title={val.title} name={val.name} post={val.post} date={val.date}/>
                </div>)
            }
          )}
         </div>
    </div>
  )
}

export default Team