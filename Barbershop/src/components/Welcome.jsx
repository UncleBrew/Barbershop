

export const Welcome = () => {
    return (
        <section 
            id = "welcome"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
            
            <div className="container max-x-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="animate-fade-in">Welcome To</span>
                        <span className="text-primary animate-fade-in-delay-1">
                            {" "}
                            All Original 
                            </span>
                        <span className="text-gradient animate-fade-in-delay-2">
                            {" "}
                            Barbershop
                            </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-3">
                        Welcome to All Original, where classic craftsmanship meets modern style.
                        We’re more than just a barbershop—we’re a place to relax, reset, and leave looking your best. 
                        From precision haircuts and clean fades to traditional shaves and beard grooming, our skilled barbers take pride in every detail. 
                        Step into a welcoming space built on quality, confidence, and community, and experience grooming done the right way.

                    </p>
 
                </div>

            </div>



        </section>
    );
};