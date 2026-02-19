



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
                        <h3 className="text-2xl font-semibold">An Original Barber</h3>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <div className="container max-x-4xl mx-auto text-center z-10 ">
                            <div className="space-y-6">

                                <img src="src\images\download.jpg" className="mx-auto" />
                                <h3 className="text-2xl font-semibold"> Craftmanship and Class</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>

                                <img src="src\images\download (2).jpg" className="mx-auto" />
                                <h3 className="text-2xl font-semibold">Define Your Edge</h3>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                </p>

                            </div>

                        </div>



                        <div>
                            <a href="#appointment" className="button">
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