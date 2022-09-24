import React, {useState, useEffect} from 'react'
import { CgOptions } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import ModalEditForm from './ModalEditForm.js';
import jobJSON from '../utils/jobs.json'

function Jobs() {

    const [jobs, setJobs] = useState([]);

    const [modalOn, setModalOn] = useState(false);
    const [choice, setChoice] = useState(false);

    
  

    const clicked = () => {
      setModalOn(true)
    }

    const getJobs =  () => {
        setJobs(jobJSON);
      }
    
      useEffect(() => {
        getJobs();
      }, []);

  return (
    <div className='p-6 bg-gray-900 rounded-lg'>
        <div className="flex justify-between items-center pb-4">
            <h2 className='text-xl font-semibold leading-loose text-white'>Board</h2>
            <button className='flex py-2 px-3 rounded-lg border border-gray-700 gap-x-2.5'>
                <CgOptions className='text-white'/>
                <span className='text-sm text-white'>Filter Jobs</span>
            </button>

        </div>
        <table className="w-full">
            <thead>
                <tr className='text-sm font-semibold text-white text-center'>
                    <th><input type="checkbox" className="default:ring-2 ..." /></th>
                    <th className='py-4 border-b border-gray-700'>Notification #</th>
                    <th className='py-4 border-b border-gray-700'>Location</th>
                    <th className='py-4 border-b border-gray-700'>Type</th>
                    <th className='py-4 border-b border-gray-700'>Task Status</th>
                    <th className='py-4 border-b border-gray-700'>Planned End Date</th>
                    <th className='py-4 border-b border-gray-700'>Assigned Contractor</th>
                    <th className='py-4 border-b border-gray-700'>Contractor Status</th>
                    <th className='py-4 border-b border-gray-700'>Delete</th>
                </tr>
            </thead>
            <tbody className='text-center'>
            {jobs.map(job => {
    
                return (
                    <tr className='text-sm text-gray-500'>
                    <td className="py-4"><input type="checkbox" className="default:ring-2 ..." /></td>
                    <td 
                        className="py-4 font-semibold underline cursor-pointer" 
                        onClick={clicked}
                        >302417548</td>
                    <td className="py-4">DS,BAYSWTR,Drake,ST,102</td>
                    <td className="py-4">SN3</td>
                    <td className="py-4">In Progress</td>
                    <td className="py-4">2020-12-18</td>
                    <td className="py-4">MK1</td>
                    <td className="py-4">In Progress</td>
                    <td className="py-4 pl-6"><FaTrash /></td>
                </tr>
                );
                })}

                
            </tbody>
        </table>
        {choice &&
      <div className="flex justify-center">
        <div className="flex  justify-center w-1/3 bg-red-400 m-4 p-6 text-lg text-white "> You have been bitten !!!</div>
        </div>
      }
        {modalOn && < ModalEditForm setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  )
}

export default Jobs