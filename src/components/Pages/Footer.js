import React from 'react';

export default function Footer(){

    return (
        <footer>
            <div>
                <div class="row">
                    <div style={{background:'pink', height:'5em'}}class="col-12">
                    <div class="container text-center" style={{padding:'1em'}}>
                        <div class="row align-items-center">
                            <div class="col">
                                <a style={{color:'black', textDecoration:'none', fontSize:'1.3em'}}href='https://github.com/KR1ISTIN'>Github</a>
                            </div>
                            <div class="col">
                                <a style={{color:'black', textDecoration:'none',fontSize:'1.3em'}} href='#'>LinkedIn</a>
                            </div>
                            <div class="col">
                                <a style={{color:'black', textDecoration:'none',fontSize:'1.3em'}}href='#'>Twitter</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
};
