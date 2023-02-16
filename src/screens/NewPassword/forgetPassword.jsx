import React from 'react'

export default function ForgetScreen() {
  return (
    <>
     <form action="post" >
        <div className="container-fluid">
          <div className="col-12">
            {/* Payment From */}
            <div className="row border justify-content-center w-100">
              <div className="col-md-5 col-12  align-content-center">
                <div className="col-md-12  ">
                  <div className="row justify-content-center">
                    <div className="col-md-12 text-center mt-5">
                      <h4 className="fw-bold">
                        <small>Enter your account Email</small>
                      </h4>
                    </div>
                    <hr />

                    {/* main form  */}

                    <div className="col-md-10 email_part mt-4">
                      <div className="col mb-3 ">
                        <label htmlFor="l-name-Input">
                          <small>E-mail</small>
                        </label>
                        <input
                          className="form-control form-control-sm rounded-0"
                        //   value={loginValue.email}
                          name="email"
                        //   onChange={onChange}
                          type="email"

                          placeholder="E-mail"
                          aria-label=".form-control-sm example"
                        />

                      </div>
                     

                      {/* <div style={{ display: 'none', color: 'red' }} id='error3'> <small><p>{message}</p>
                      </small> </div> */}


                     

                      
                    


                    </div>
                    {/*  main form */}





                    {/*  bottom buttons  */}
                    <div className="col-md-10 sendEmail_btns">
                      <div className="row pt-3 pb-5">
                        
                        <div className="col text-end">
                          <button
                            type="submit"
                            className="btn btn-dark btn-sm rounded-5"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* bottom buttons  */}
                </div>
              </div>
              {/* payment Form  */}
            </div>
          </div>
        </div>
      </form>
    
    
    </>
  )
}
