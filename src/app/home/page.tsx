import { Buttom } from "@/components/buttom";


export default function Home() {
  return (
    <div>
      <section className="py-20 px-8 flex items-center justify-between tablet:px-[8.5rem] bg-gray800 bg-[url('/bg.png')] bg-no-repeat bg-cover">
        <div className="max-w-[40rem] space-y-[2.125rem]">

          <h1 className="text-5xl text-white content-start flex justify-end items-center content font-semibold gap-2 before:bg-brown400 before:w-2 before:h-24 before:mr-3 before:flex">
            Sua Empresa protegida,  crescimento garantido!
          </h1>

          <p className=" text-brown400 text-[1.25rem] font-medium">
            Alavanque seus negócios com nossa expertise jurídica <br/> 
            sob medida.Simplificamos a conformidade legal para <br/>
            que você possa focar no crescimento.
          </p>

          <Buttom variant="PRIMARY" title="Nossos Serviços"/>
        </div>
        <div className="w-[32rem] h-[32rem]">
          <div className="p-3 w-[100px] rounded bg-gradient-to-br from-brown400  via-brown500 via-70% to-brown300 to-100% ">
            <h1>20</h1>
            <span>anos de
            experiência</span>
          </div>
          <img className="object-cover" src="1.png" alt="Imagem de um advogado sorridente" />
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  )
}