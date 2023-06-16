import React from 'react';
import '../style.css';
import Zoom from 'react-reveal/Zoom';



export default function Projects() {
  return (
    <div style={{background:'#22222B'}} className='projects'>
        <div class="container">
            <p style={{padding:'2%', fontSize:'1.2em', letterSpacing:'.3em', fontWeight:'bold',color:'whitesmoke'}}>Projects</p>
            <p style={{ fontSize:'1.2em', letterSpacing:'.3em', color: 'lightseagreen'}}>
                <Zoom right cascade>
                    A Selection of Stuff I've Built
                </Zoom> 
            </p>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <div style={{ paddingTop:'10%'}}class='container'>
                            <h4 className='projectTitle'>GitFood.Travel</h4>
                            <p className='projectText'>
                            For when you need a quick look up for the top restuarants and hotels in the city, this is your go to app for seconds away from a luxurious meal or hotel. This group project included: 
                            <a href='https://github.com/evohat3'> Nigel Poblete</a> and <a href='https://github.com/kaydubb10'>Kaileon Wallace</a> 
                            </p>
                            <div>
                                <a className='linkProject' href='https://kr1istin.github.io/GIT-FOOD.Travel/'>View project</a>
                                <a  className='linkProject' href='https://github.com/KR1ISTIN/GIT-FOOD.Travel'>View repo</a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img className='gitFoodPic'src='./assets/gitFoodTravel.png'></img>
                    </div>
                </div> 
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <div style={{ paddingTop:'10%'}}class='container'>
                            <h4 className='projectTitle'>Weather Search</h4>
                            <p className='projectText'>
                            For when you need to find out the weather forcast at any destination. Displays current weather and a five day forcast.
                            </p>
                            <div>
                                <a  className='linkProject'href='https://kr1istin.github.io/Weather-Search/'>View project</a>
                                <a  className='linkProject'href='https://github.com/KR1ISTIN/Weather-Search'>View repo</a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img className='gitFoodPic'src='./assets/gitFoodTravel.png'></img>
                    </div>
                </div> 
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <div style={{paddingTop:'10%'}}class='container'>
                            <h4 className='projectTitle'>Password Generator</h4>
                            <p className='projectText'>
                            For when you need a quick a quick tool for generator the most secure password for any site. Simply specifiy the criteria you want it to meet and password will then be generated.
                            </p>
                            <div>
                                <a  className='linkProject'href='https://kr1istin.github.io/Password-Generator/'>View project</a>
                                <a  className='linkProject'href='https://github.com/KR1ISTIN/Password-Generator'>View repo</a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img className='gitFoodPic'src='./assets/gitFoodTravel.png'></img>
                    </div>
                </div> 
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <div style={{paddingTop:'10%'}}class='container'>
                            <h4 className='projectTitle'>Event Planner</h4>
                            <p className='projectText'>
                            For when you need to get organized, Event Planneer is the way to go, just  add, updated, and delete any task or reminders you may need throughout your day, don't make life harder than it can be.
                            </p>
                            <div>
                                <a  className='linkProject'href='https://kr1istin.github.io/Event-Planner/'>View project</a>
                                <a  className='linkProject'href='https://github.com/KR1ISTIN/Event-Planner'>View repo</a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img className='gitFoodPic'src='./assets/gitFoodTravel.png'></img>
                    </div>
                </div> 
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <div style={{paddingTop:'10%'}}class='container'>
                            <h4 className='projectTitle'>Employee Tracker</h4>
                            <p className='projectText'>
                            Employee Tracker was built for an example on how to use inquirer to gather data and use MYSQL2 to update a database. In addition, I furthered my understanding on how to implement the DRY method approach in coding along wtih creating a database, tables, and seeding the table.
                            </p>
                            <div>
                                <a  className='linkProject'href='https://drive.google.com/file/d/1FRFSvo0fj1orrfQNWA6Da8pnkuh8sndE/view'>View project</a>
                                <a  className='linkProject'href='https://github.com/KR1ISTIN/Employee-Tracker'>View repo</a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img className='gitFoodPic'src='./assets/gitFoodTravel.png'></img>
                    </div>
                </div> 
            </div>
            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-5 col-md-6">
                        <div style={{paddingTop:'10%'}}class='container'>
                            <h4 className='projectTitle'>Meal Mappr</h4>
                            <p className='projectText'>
                            Meal Mappr is a meal planning website where you can view a calendar and create your very own meal plan from scratch.
                            This was a group  project that included: 
                             <a href='https://github.com/Rolyat512'> Taylor Aldridge</a> and <a href='https://github.com/Omar4589'>Omar Zumaya</a> 
                            </p>
                            <div>
                                <a  className='linkProject'href='https://mealmappr.herokuapp.com/'>View project</a>
                                <a  className='linkProject'href='https://github.com/Rolyat512/MealMappr'>View repo</a>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <img className='gitFoodPic'src='./assets/gitFoodTravel.png'></img>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}
