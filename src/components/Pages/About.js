import React from 'react';
import Bounce from 'react-reveal/Bounce';



export default function About() {
  return (
    <section style={{background:'#22222B', }}>
        <h1 style={{color:'white', letterSpacing:'.2em', padding:'1em'}}>
            <Bounce right cascade>
            About
            </Bounce>
        </h1>
    <div style={{color:'white'}}class="container text-center">
        <div className='animate-charcter'>Stay Positive, WORK hard, make IT happen</div>
        <div class="row">
            <div style={{paddingRight:'35%', fontSize:'1.5em',}}class="col-sm-5 col-md-6">Who Is Kristin?
            </div>
            <div style={{ padding: '8% 0 3% 0', color:'lightseagreen', fontSize:'2.7em'}}class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">A curiosity-driven Back-End Developer and with love of React</div>
        </div>
        <div class="row">
            <div style={{color:'lightseagreen', letterSpacing:'.2em'}}class="col-sm-6 col-md-5 col-lg-6">S K I L L S: <br></br>
            HTML | CSS3 | Javascript | jQuery | Express.js | Bootstrap | React.js | Node.js| Database Theory | MongoDB | MySQL | Git | Command Line
            </div>
            <div style={{paddingBottom:'3%'}}class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."<br></br><br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "<br></br><br></br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
    </section>
  );
}
