import React from 'react';
import './style.css';


function NavTabs({currentPage, handlePageChange}) {
    return (
     <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
      
            <a class="navbar-brand" href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >W E L C O M E
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                
                <li  class="nav-item">
                    <a class="nav-link " aria-current="page" href="#about"
                     onClick={() => handlePageChange('About')}
                     className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >About
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#projects"
                     onClick={() => handlePageChange('Projects')}
                     className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    >Projects
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#resume"
                     onClick={() => handlePageChange('Resume')}
                     className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume
                    </a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#contact"
                     onClick={() => handlePageChange('Contact')}
                     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >Contact
                    </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
     </header>


    )
}
  export default NavTabs;
  