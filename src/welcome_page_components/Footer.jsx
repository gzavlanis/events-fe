import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='facebook-f'/>
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='google'/>
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='instagram'/>
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='linkedin-in'/>
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <MDBIcon fab icon='github'/>
            </MDBBtn>
          </section>
  
          <section>
            <form action= 'submit'>
              <MDBRow className='d-flex justify-content-center'>
                <MDBCol size="auto">
                  <p className='pt-2'>
                    <b>Sign up for our newsletter</b>
                  </p>
                </MDBCol>
                <MDBCol md='5' start>
                  <MDBInput contrast type='email' className='mb-4' />
                </MDBCol>
  
                <MDBCol size="auto">
                  <MDBBtn outline color='light' type='submit' className='mb-4'>
                    Subscribe
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </section>
  
          <section className='mb-4'>
            <p>
              We will be very happy to see you again soon. Our ToDo application is open source, so feel
              free to make your own changes and implementations.
            </p>
            <p>
                At the moment, our application is hosting in Github and this will continue in the whole 
                development session.
            </p>
          </section>
        </MDBContainer>
  
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 &nbsp;&nbsp;
          <a className='text-white' href='https://gzavlanis.github.io'>Georgios Zavlanis</a>
          &nbsp;&nbsp; All rights reserved
        </div>
      </MDBFooter>
    );
  }