import { Scissors, User, Brush } from "lucide-react"


export const Services = () => {

    return (
        <section id="services" className="py-24 px-4 relative">
            <div className="grid grid-cols mx-auto max-x-5xl space-x-6 space-y-6">

                <h1 className="text-3xl md:text-4xl font-bold mb-12"><span className="text-primary">Our</span> Services</h1>

                <a href="#services" className="button">
                    {" "}
                    Book an Appointment Now
                </a>

                <div className="flex flex-start space-x-8 mx-auto">

                    <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <Scissors className="mx-auto"/>
                        <h3 className="font-semibold">Adult Haircut</h3>
                        <p className="font-semibold">$45</p>
                    </div>

                    <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <User className="mx-auto"/>
                        <h3 className="font-semibold">Kids (12 and under) Haircut</h3>
                        <p className="font-semibold">$45</p>
                    </div>

                    <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <Brush className = "mx-auto"/>
                        <h3 className="font-semibold">Edge Up</h3>
                        <p className="font-semibold">$45</p>
                    </div>

                    <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <Scissors className="mx-auto"/>
                        <h3 className="font-semibold">Beard Trim</h3>
                        <p className="font-semibold">$45</p>
                    </div>

                </div>


            </div>
        </section>
    )

}