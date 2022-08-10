import React from 'react';
import './TeamMembers.css';
import { teamMembersData } from '../../data/teamMembersData';
import { FaFacebookF,FaTwitter,FaLinkedinIn } from 'react-icons/fa';

const TeamMembers = () => {
  return (
    <div className='teammembers'> 
     <h1>Dedicated Team Members</h1>       
            <div className="teams">
            {teamMembersData.map((team) => (
                <div className="team">                    
                    <img src={team.image} alt="" />
                    <div className="team-text">
                    <div className="socialicons">
                        <span><FaTwitter /></span>
                        <span><FaFacebookF /></span>
                        <span><FaLinkedinIn /></span>
                        </div> 
                    <div className='teamdesc'>
                    <h4>{team.name}</h4>
                    <span>{team.des}</span>
                    </div>
                    </div>
                </div>
            ))}
            </div>
        </div>   
  )
}

export default TeamMembers