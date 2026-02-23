import { ArrowUp, Phone, Mail, MapPin  } from "lucide-react";

export const Footer = () => {

    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            {" "}

            <div className="bg-card">
                <Phone className="mx-auto hover:text-primary" />
                <a href="tel:9702183951" className="hover:text-primary">970-218-3951</a>
            </div>

            <div className="bg-card">
                <Mail className="mx-auto hover:text-primary" />
                <a href="#" className="hover:text-primary">ibrew919@gmail.com</a>
            </div>

            <div className="bg-card">
                <MapPin className="mx-auto hover:text-primary" />
                <a href="#" className="hover:text-primary">7610 E Caley Ave</a>
            </div>


            <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} All Original Barbershop All rights reserved.  </p>
            <a href="#home" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ArrowUp size={20} />
            </a>
        </footer>

    );
}