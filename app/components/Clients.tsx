import clientHands from "@/app/assets/clients.jpg"
import Image from "next/image"

const Clients = () => {
    return (
        <div className="flex flex-row gap-8 p-16">
            <div>
                <Image src={clientHands}
                    alt="Sobre a Lince Corporate"
                    className="rounded-lg"
                    width={1800}
                    height={400} />
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-5xl text">Principais parceiros</h3>
                <p className="">Além de possuirmos um time de profissionais capacitados, a empresa conta com parceiros de negócios, tais como: Bravamar, R&D Technologies, Vertical Flight, Omini táxi Aéreo, Costa do Sol, PetroMaterials, Wison, Grupo Cobra, entre outros.
                </p>

                <div className="flex flex-row gap-6">

                    <div>
                        <span>65</span>
                        <p className="text-sm">Nossa empresa tem a satisfação de atender a um número significativo de clientes, com mais de 16 parceiros confiando em nossos serviços e soluções personalizadas.
                        </p>
                    </div>
                    <div>
                        <span>24</span>
                       <p className="text-sm">
                       Anos de experiência no mercado, nossa empresa tem o conhecimento e a expertise necessários para oferecer soluções eficientes e de qualidade para nossos clientes.
                       </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Clients