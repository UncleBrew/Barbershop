



export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-x-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="flex flex-items items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">An <span className="text-primary">Original</span> Barber</h3>
                        <p className="text-muted-foreground font-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="flex flex-col max-x-4xl mx-auto z-10 ">
                            
                            <div className="space-y-6">
                                 <h3 className="text-2xl font-semibold"> Craftmanship and <span className="text-primary">Class</span></h3>


                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <img src="/images/barber-bg2.jpg"  className="w-full md: w-1/2 rounded-lg"/>
                                <p className="font-semibold md:w-1/2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">Define <span className="text-primary">Your</span> Edge</h3>
                            
                            <div className="flex flex-col md:flex-row-reverse items-center gap-8"> 
                                <img src="/images/barber-bg3.jpg" className="w-full md:w-1/2 rounded-lg" />
                                

                

                                <p className="font-semibold md:w-1/2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                </p>

                                </div>

                            </div>

                            </div>

                        </div>



                        <div>
                            <a href="#services" className="button">
                                {" "}
                                Set Up An Appointment
                            </a>
                        </div>
                    </div>


                </div>
            </div>

        </section>

    )
}