import React from 'react';
import Roll from 'react-reveal/Roll';

const styles = {
    img: {
        borderRadius: '50%',
        width: '90%',       
        height: '82%',
        border: '2px solid lightseagreen',
        
    },
    hello: {
        background:'#22222B',
    },
    welcome: {
        fontSize: '2em',
        letterSpacing: '.2em',
        color:'lightseagreen'
    }
}

export default function Home() {

  return (
    <div style={{background:'#22222B', height:'100vh'}}>
        <div class="container text-center">
            <div  class="row justify-content-start">
                <div style={styles.welcome} class="col-4">
                    <Roll left cascade>
                        Welcome
                    </Roll>
                </div>
            </div>
            <div style={styles.hello} class="row justify-content-start">
                <div style={{paddingTop:'5%'}} class="col-4 offset-md-2">
                    <h5 style={{color:'lightseagreen',fontSize:'2em', lineHeight:'1.3em'}}>
                        H E L L O, 
                    </h5>
                    <h2 style={{color:'white',lineHeight:'2em'}}>
                        I'm Kristin De Salme 
                    </h2>
                    <h5 style={{color:'lightseagreen',lineHeight:'1.8em'}}>
                      |  Full Stack Web Developer |
                    </h5>
                    <p style={{color:'white',lineHeight:'2em'}}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod
                    </p>
                </div>
                <div class="col-4" style={{padding: '10% 0 0 10%', background:'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1'}}>
                    <img src='photo.png' alt='picture' style={styles.img}></img>
                </div>
            </div>
            
        </div>
    </div>
  );
}
