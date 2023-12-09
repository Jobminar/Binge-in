import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './mini-home.css';
import grid from '../../assets/images/grid.png';
import Booknow from '../../assets/images/Frame 11.png'

const MiniHome = () => {
    const navigate = useNavigate()
    const [inputValues, setInputValues] = useState({
        date: '',
        numberOfPeople: '',
        hours: '',
        event: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };
    const today = new Date().toISOString().split('T')[0];


    return (
        <div className="mini-home-con">
            <div className="mini-head">
                <h1>MINI<span>THEATER</span></h1>
                <img src={grid} alt='grid' onClick={()=>{navigate('/navbar')}}/>
            </div>
            {/* input section */}
            <div className='input-section'>
                <div className='input-sub'>
                    <p>Check slot availability</p>
                    <input
                        type='date'
                        className='input1'
                        name='date'
                        value={inputValues.date}
                        onChange={handleInputChange}
                        min={today}
                    />
                </div>
                <div className='input-sub'>
                    <p>No of People</p>
                    <input
                        type='number'
                        className='input2'
                        name='numberOfPeople'
                        value={inputValues.numberOfPeople}
                        onChange={handleInputChange}
                    />
                    {parseInt(inputValues.numberOfPeople) > 4 && (
                        <p className='reminder'>Mini contains only 4 persons</p>
                    )}
                </div>
                <div className='input-sub'>
                    <p>Hours</p>
                    <input
                        type='text'
                        
                        name='hours'
                        value={inputValues.hours}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='input-sub'>
                    <p>Event</p>
                    <input
                        type='text'
                        className='input4'
                        name='event'
                        value={inputValues.event}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {/* <div className='result'>
                <h2>Input Values:</h2>
                <p>Date: {inputValues.date}</p>
                <p>No of People: {inputValues.numberOfPeople}</p>
                {parseInt(inputValues.numberOfPeople) > 4 && (
                    <p className='reminder'>Mini contains only 4 persons</p>
                )}
                <p>Hours: {inputValues.hours}</p>
                <p>Event: {inputValues.event}</p>
            </div> */}
            {/* table section */}
            <div className='table-section'>
                <h2 className='slots'>Slots</h2>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>No.of People</th>
                        <th>Time</th>
                        <th>Availability</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>20 november 2023</td>
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                        <td>Available</td>
                        <td>2500</td>
                    </tr>
                    <tr>
                        <td>20 november 2023</td>
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                        <td>Available</td>
                        <td>2500</td>
                    </tr>
                    <tr>
                        <td>20 november 2023</td>
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                        <td>Available</td>
                        <td>2500</td>
                    </tr>
                    <tr>
                        <td>20 november 2023</td>
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                        <td>Available</td>
                        <td>2500</td>
                    </tr>
                    <tr>
                        <td>20 november 2023</td>
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                        <td>Available</td>
                        <td>2500</td>
                    </tr>
                </table>
                <div className='book-now' onClick={()=>{navigate('/userinputs')}}>
                    <img src={Booknow} alt='book-now'/>
                </div>

            </div>
            <div className='mobile-view'>
                 <div className='date-section'>
                    <div className='date-sub-section'>
                        <h1>DATE</h1>
                        <p>20 November 2023</p>
                    </div> 
                    <div className='date-sub-section'>
                         <h1>Availability</h1>  
                         <p>Available</p>  
                    </div>     
                </div>
                <div className='mobile-table'>
                        <table>
                        <tr>
                      
                        <th>No.of People</th>
                        <th>Time</th>
                        
                        <th>Price</th>
                    </tr>
                    <tr>
                     
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                   
                        <td>2500</td>
                    </tr>
                    <tr>
                   
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
             
                        <td>2500</td>
                    </tr>
                    <tr>
                      <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                       
                        <td>2500</td>
                    </tr>
                    <tr>
                      
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                      
                        <td>2500</td>
                    </tr>
                    <tr>
                     
                        <td>2-4 people</td>
                        <td>7:00 pm - 10:00 pm</td>
                       
                        <td>2500</td>
                    </tr>
                        </table>
                        <div className='book-now' onClick={()=>{navigate('/cakemain')}}>
                    <img src={Booknow} alt='book-now'/>
                </div>
                </div>

            </div>
        </div>
    );
};

export default MiniHome;
