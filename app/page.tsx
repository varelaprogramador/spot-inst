"use client"
import Image from "next/image";
import { Open_Sans, Outfit } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import fotoFeedback from "./assets/anonima.jpg";
import triangulosEsq from "./assets/triangulos.svg";
import imageForm from "./assets/image 3.png";
import { Headset, CloudUpload, CloudCog, MessagesSquare, Blocks, Mail, BadgeX, CircleCheck } from "lucide-react";
import { motion } from 'framer-motion';
import gif from "./assets/formVideo-arrast.gif";

const openSans = Open_Sans({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });


export default function Home() {

  useEffect(() => {
    const selector = document.getElementById("select");
    const iframeForm = document.getElementById("formIframe");


    if (selector && iframeForm) {
      selector.addEventListener("change", function () {
        iframeForm.setAttribute(
          "src",
          selector.value
        );
      });
    }
  }, []);


  return (
    <main className={`flex min-w-screen min-h-screen bg-white flex-col items-center ${openSans.className} overflow-x-hidden`}>
      <header className={`w-[900px] h-[80px] flex items-center justify-end text-black max-md:w-[300px] max-lg:w-[700px] `}>
        <nav className="flex gap-4 text-sm items-center font-semibold">
          <a className="font-bold">Preços</a>
          <a className="uppercase border-2 rounded-md border-[#89A4E1] text-[#89A4E1] p-2">Entrar</a>
          <a className="bg-[#1A5FFF] p-2 rounded-md uppercase text-white max-md:text-center">Adquirir o spotform</a>
        </nav>
      </header>
      <section className="flex flex-col w-[780px] min-h-1 text-black justify-center text-center mt-[125px] gap-8 max-md:w-[300px]">
        <h1 className="bg-clip-text text-transparent text-4xl font-bold bg-gradient-to-r from-[#6F7199] via-[#6421DA] to-[#443471]">
          Crie Formulários personalizados de alta conversão
        </h1>
        <p className="text-gray-400 text-sm">
          Diga adeus aos formulários tediosos e ineficientes! Com nosso criador de formulários, você pode criar formulários rápidos, fáceis e profissionais que realmente convertem.
        </p>
        <Link href={'#'}>
          <button className="w-[200px] p-2 bg-[#1A5FFF] text-[13px] rounded-md text-white">
            Criar Formulários <br />de alta conversão
          </button>
        </Link>
        <Image
          className="absolute top-[280px] w-[200px] left-3 max-lg:w-[150px] max-lg:top-[380px] max-xl:w-[200px] max-md:top-[600px] max-md:w-[100px]"
          src={triangulosEsq}
          alt="triangulos"
        />
      </section>
      <section className="flex flex-col w-[780px] justify-center items-center min-h-screen text-black relative max-md:w-full">
        <div className="relative w-[750px] h-[500px] flex items-center justify-center max-md:w-[400px] max-sm:w-full">
          {/* Video */}
          <Image
            src={gif}
            alt="gif formulário intuitivo"
            className="rounded-md shadow-lg z-10 w-[100%] "
            style={{ objectFit: 'cover' }}
          ></Image>
          {/* Background Yellow Circle */}
          <div className="absolute bg-yellow-300 rounded-full blur-[150px] opacity-1 top-[-50px] left-[-100px] w-[400px] h-[400px] z-0  max-md:hidden"></div>
          {/* Background Blue Circle */}
          <div className="absolute bg-blue-700 rounded-full blur-[150px] opacity-1 bottom-[-50px] right-[-100px] w-[400px] h-[400px] z-0 max-lg:mr-[80px] max-md:hidden"></div>
        </div>
        <Image

          className="relative z-0 self-end mr-[-200px] w-[200px] rotate-180 max-md:mr-[30px]  max-lg:w-[150px] max-lg:mr-[1%] max-lg:mt-[-70px] max-xl:w-[200px]  max-md:w-[100px]"
          src={triangulosEsq}
          alt="triangulos"
        />
      </section>
      <section className="flex flex-col w-[780px] min-h-screen text-black justify-center text-center mt-[125px] gap-32 max-md:w-full">
        {/*1 elemento*/}
        <div className="flex flex-row w-full gap-10 items-center justify-center max-md:flex-wrap">
          <div className="relative w-[60%] h-[300px] flex items-center justify-center max-md:w-full max-md:p-2">
            {/* Video */}
            <Image
              src={gif}
              alt="gif formulário intuitivo"

              className="rounded-md shadow-lg z-10 w-[100%] "
              style={{ objectFit: 'cover' }}
            ></Image>


            {/* Background Yellow  */}
            <div className="absolute bg-gradient-to-t  from-[#1E0A6D] to-[#4675A0] rounded-md  opacity-1 top-[-30px] left-[-30px] w-[200px] h-[200px] z-0 max-md:hidden"></div>
            {/* Background Blue  */}
            <div className="absolute bg-gradient-to-t  from-[#1E0A6D] to-[#4675A0] rounded-md  opacity-1 bottom-[-30px] right-[-30px] w-[200px] h-[200px] z-0 max-md:hidden"></div>
          </div>
          <div className="w-[60%] p-4 text-left flex flex-col gap-8 max-md:w-full">
            <h1 className="text-2xl font-bold">Crie formulários no modelo arrastar e soltar</h1>
            <p className="text-sm">Com o nosso criador de formulários, você pode criar formulários rápidos, fáceis e profissionais em apenas alguns cliques!<br />
              Basta:</p>
            <ul className="list-decimal pl-4">
              <li className="text-sm text-gray-500">Arrastar e soltar os elementos que você precisa no seu formulário.</li>
              <li className="text-sm text-gray-500">Personalizar os campos com suas próprias perguntas e opções.</li>
              <li className="text-sm text-gray-500">Publicar seu formulário e começar a coletar dados instantaneamente.</li>
            </ul>
            <a href="#" className="text-sm text-[#7EA6FF]">Tentar agora</a>
          </div>
        </div>
        {/*2 elemento*/}
        <div className="flex flex-row  w-full gap-10 justify-center items-center max-md:flex-wrap ">
          <div className="w-[65%] p-4 text-left flex flex-col gap-8 max-md:order-2 max-md:w-full">
            <h1 className="text-2xl font-bold">Chega de perder seus formulários no meio da bagunça!</h1>
            <p className="text-sm">Com a Spotform seus formulários vão estar organizados de forma eficiente e encontre-os facilmente quando precisar.</p>
            <ul className="list-decimal p-4">
              Você já passou por isso?
              <li className="text-sm text-gray-500">Perder um formulário importante no meio de uma pilha de papéis?</li>
              <li className="text-sm text-gray-500">Gastar horas procurando um formulário digital em pastas desorganizadas?</li>
              <li className="text-sm text-gray-500">Sentir frustração por não conseguir encontrar as informações que precisa?</li>
            </ul>
            <a href="#" className="text-sm text-[#7EA6FF]">Tentar agora</a>
          </div>
          <div className="relative w-[50%] h-[300px] flex items-center justify-center max-md:w-full max-md:p-2 max-md:order-1">
            {/* Video */}
            <Image
              src={imageForm}
              alt="Form"
              className="rounded-md shadow-lg z-10 w-full "
              style={{ objectFit: 'cover' }}
            />
            {/* Background Yellow  */}
            <div className="absolute bg-gradient-to-t  from-[#FC9A07] to-[#C34814] rounded-md  opacity-1 top-[-30px] left-[-30px] w-[200px] h-[200px] z-0 max-md:hidden"></div>
            {/* Background Blue  */}
            <div className="absolute bg-gradient-to-t  from-[#FC9A07] to-[#C34814] rounded-md  opacity-1 bottom-[-30px] right-[-30px] w-[200px] h-[200px] z-0 max-md:hidden"></div>
          </div>
        </div>
      </section>
      <section className="flex flex-col  min-h-screen text-black justify-center text-center items-center mt-[50px] gap-8">
        <div className=" flex flex-col  justify-center items-center text-center ">
          <h2 className={`${outfit.className} font-extrabold text-4xl`}>
            Tá em dúvida ainda se o Spotform é para você ?
          </h2>
          <p className="mt-6 text-gray-500 font-medium text-sm">
            Veja agora formulários criados com o Spotform e teste você mesmo
          </p>
        </div>
        <div>
          <p className="mt-6 text-gray-500 font-medium text-sm">Selecione o modelo de formulário de seu interesse:</p>
          <select id="select" className="bg-[#F4F4F4] w-[300px] text-center p-2 rounded-md outline-none text-gray-700 border-[1px] border-gray-400">
            <option value="https://www.spotform.com.br/form/clwco99y10001pjvewkjkjdia">Modelo de Consultório</option>
            <option value="https://www.spotform.com.br/form/clyfxaycy0002tokzsamlw91t">Modelo 1</option>
            <option value="2">Modelo 2</option>
          </select>
        </div>
        <div className="w-[600px] h-[530px] p-2 max-md:w-full ">
          <iframe
            src="https://www.spotform.com.br/form/clwco99y10001pjvewkjkjdia"
            id="formIframe"
            className="w-full h-full border rounded-md"

          />
        </div>
      </section>
      <section className="flex flex-col  min-h-screen text-black justify-center text-center items-center  gap-8">
        <h2 className={`${outfit.className} font-extrabold text-4xl`}>
          Tá em dúvida ainda se o Spotform é para você ?
        </h2>
        <div className=" grid grid-cols-3 mt-6 gap-4  max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-7 max-sm:p-3">
          <div className=" flex flex-col  items-center  bg-white border-[1px] h-44 w-80 max-sm:w-full  rounded-md p-1">

            <div className="relative flex justify-center items-center rounded-md border mt-[-20px] bg-black p-2" >
              <Headset className="w-[30px] h-[30px] text-white"></Headset>
            </div>
            <h3 className=" font-semibold">
              Suporte 24/7
            </h3>
            <p className=" text-sm mt-4 text-gray-500">A equipe de suporte á qualificada no uso
              da ferramenta, com conhecimento
              técnico para solucionar problemas
              complexos.</p>

          </div>
          <div className=" flex flex-col  items-center  bg-white border-[1px] h-44 w-80 max-sm:w-full  rounded-md
          p-2">

            <div className="relative flex justify-center items-center rounded-md border mt-[-25px] bg-black p-2" >
              <CloudUpload className="w-[30px] h-[30px] text-white"></CloudUpload>
            </div>
            <h3 className=" font-semibold">
              Atualizações semanais
            </h3>
            <p className=" text-sm mt-4 text-gray-500">A equipe de suporte á qualificada no uso
              O SpotForm vive incrementando novas
              funcionalidades de acordo que seus
              clientes precisam.</p>


          </div>
          <div className=" flex flex-col  items-center  bg-white border-[1px] h-44 w-80 max-sm:w-full  rounded-md
          p-2">

            <div className="relative flex justify-center items-center rounded-md border mt-[-25px] bg-black p-2" >
              <MessagesSquare className="w-[30px] h-[30px] text-white"></MessagesSquare>
            </div>
            <h3 className=" font-semibold">
              Spotflix mastermind online
            </h3>
            <p className=" text-sm mt-4 text-gray-500">A equipe de suporte á qualificada no uso
              Uma plataforma criada por nossa equipe da Spotform para
              auxiliar no seu crescimento!!</p>


          </div>



        </div>



      </section>
      <section className="flex flex-col  min-h-screen text-black justify-center text-center items-center  gap-8">
        <h2 className={`${outfit.className} font-extrabold text-4xl max-w-[800px]`}>
          Veja oque o pessoal anda comentando sobre o Spotform
        </h2>

        <div className=" grid grid-cols-3 mt-6 gap-8  max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-7 max-sm:p-3">

          <div className=" flex flex-col  items-center  bg-white border-[1px] min-h-44 gap-2 w-96 rounded-md p-4 max-sm:w-full">


            <div className="w-full flex gap-4 items-center">
              <Image
                src={fotoFeedback}
                alt="pessoa-anonima"
                className="w-[40px] h-[40px] rounded-3xl"
              ></Image>

              <div className=" text-left" >
                <h2 className="font-semibold">Fulano da Silva</h2>
                <p className="text-sm text-gray-500">Growth Strategist @ Socialhackrs Media</p>
              </div>
              <Mail className="w-[25px] justify-self-end self-center"></Mail>

            </div>
            <p className="text-left text-sm text-gray-800">
              I upgraded my typeforms to typebots and saw a
              conversion rate increase from 14% to 43% on my
              marketing campaigns. I noticed the improvement on
              day one. That was a game-changer.
            </p>

          </div>

          <div className=" flex flex-col  items-center  bg-white border-[1px] min-h-44 gap-2 w-96 rounded-md p-4 max-sm:w-full">


            <div className="w-full flex gap-4 items-center">
              <Image
                src={fotoFeedback}
                alt="pessoa-anonima"
                className="w-[40px] h-[40px] rounded-3xl"
              ></Image>

              <div className=" text-left" >
                <h2 className="font-semibold">Fulano da Silva</h2>
                <p className="text-sm text-gray-500">Growth Strategist @ Socialhackrs Media</p>
              </div>
              <Mail className="w-[25px] justify-self-end self-center"></Mail>

            </div>
            <p className="text-left text-sm text-gray-800">
              I upgraded my typeforms to typebots and saw a
              conversion rate increase from 14% to 43% on my
              marketing campaigns. I noticed the improvement on
              day one. That was a game-changer.
            </p>

          </div>

          <div className=" flex flex-col  items-center  bg-white border-[1px] min-h-44 gap-2 w-96 rounded-md p-4 max-sm:w-full">


            <div className="w-full flex gap-4 items-center">
              <Image
                src={fotoFeedback}
                alt="pessoa-anonima"
                className="w-[40px] h-[40px] rounded-3xl"
              ></Image>

              <div className=" text-left" >
                <h2 className="font-semibold">Fulano da Silva</h2>
                <p className="text-sm text-gray-500">Growth Strategist @ Socialhackrs Media</p>
              </div>
              <Mail className="w-[25px] justify-self-end self-center"></Mail>

            </div>
            <p className="text-left text-sm text-gray-800">
              I upgraded my typeforms to typebots and saw a
              conversion rate increase from 14% to 43% on my
              marketing campaigns. I noticed the improvement on
              day one. That was a game-changer.
            </p>

          </div>


        </div>



      </section>
      <section className="flex flex-col px-4  min-h-screen  justify-center text-center items-center  gap-8">
        <div className="max-w-[800px]">
          <h2 className={`${outfit.className} font-extrabold text-4xl text-black`}>
            Veja a diferença do Spotform para ferramentas americanas
          </h2>
          <p className="text-lg text-gray-500">Pare de pagar ferramentas caras
            e começe a utilizar o spotform a melhor ferramenta de formulários com o melhor custo beneficio do mercado</p>
        </div>


        <div className="mx-auto mt-20 flex max-w-screen-lg flex-col  items-center justify-center">

          <div className="my-8 flex flex-col items-center justify-center gap-8 md:flex-row md:items-stretch">
            <div className="w-full max-w-[18.75rem] rounded-lg border-[0.0938rem] bg-black p-4">
              <h3 className="text-center text-[2rem] font-semibold uppercase leading-tight text-green-500">
                SpotForm
              </h3>

              <ul className="mt-4 space-y-1 text-white">
                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Crie formulários infinitos
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Disponibilidade de vitalício
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Atendimento personalizado
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Criador de landing page
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Traqueamento individual
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Personalize as cores e estilo
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Integração com a make
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Exporte em Excel
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Mais acessível do mercado
                </li>
              </ul>
            </div>

            <p className="self-center text-[2rem] font-semibold leading-tight text-black">
              VS
            </p>

            <div className="w-full max-w-[18.75rem] rounded-lg border-[0.0938rem] border-rose-500 p-4">
              <h3 className="text-center text-[2rem] font-semibold uppercase leading-tight text-rose-500">
                Ferramenta <br /> Americana
              </h3>

              <ul className="mt-4 space-y-1 text-black">
                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Não existe vitalício
                </li>

                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Limite de uso ou pague +
                </li>

                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Integrações engessadas
                </li>

                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Suporte inacessível
                </li>

                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Custos 5x mais! Pois pagamos em dólar
                </li>

                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Poucas atualizações
                </li>

                <li className="flex items-center gap-1">
                  <BadgeX className="size-5 text-rose-500" />
                  Erros de traqueamento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col justify-around items-center text-center h-[400px] text-white w-full bg-gradient-to-r to-[#F40F0F] from-[#1C4CC7] ">
        <div className="max-w-[800px] ">
          <h2 className={`${outfit.className} font-extrabold text-4xl`}>
            Chega de pagar um absurdo em Ferramentas americanas
          </h2>
          <p>#sejateamspotform</p>
        </div>
        <button className="p-5 bg-transparent border rounded-md">ADQUIRIR AGORA</button>

        <p>revolucione o mercado conosco</p>
      </section>
      <section className="px-4 pb-20" id="subscription">
        <div className="mx-auto mt-10 flex w-full  max-lg:flex-col  items-center justify-center pt-10">
          <div className="p-4">
            <h2 className={`${outfit.className} text-left text-[2rem] font-semibold leading-tight text-black`}>
              Escolha um plano que faça{' '}
              <strong className="text-transparent bg-clip-text bg-gradient-to-l to-[#1881E2] from-[#1D0D7C]">sentido</strong> para você
            </h2>
            <p className="text-sm text-gray-500">
              Assine  já e receba tudo que você deseja 5X mais barato do que o preço do mercado
            </p>
          </div>
          <div className="flex gap-9 w-[90%] justify-center items-center max-md:flex-col">
            <motion.div
              className="flex w-full max-w-[21.875rem] flex-col items-center justify-center rounded-lg border-[0.0938rem] border-[#0E2282] p-4"
              initial={{
                opacity: 0,
                translateY: 200,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className="-translate-y-8 rounded-full bg-gradient-to-l to-[#1881E2] from-[#1D0D7C] px-8 py-1">
                <h3 className="font-semibold uppercase text-white">Padrão</h3>
              </div>

              <ul className="space-y-1 text-transparent bg-clip-text bg-gradient-to-l to-[#1881E2] from-[#1D0D7C]">
                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Crie formulários infinitos
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Disponibilidade de vitalício
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Atendimento personalizado
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Criador de landing page
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Traqueamento individual
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Personalize as cores e estilo
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Integração com a make
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Exporte em Excel
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Mais acessível do mercado
                </li>
              </ul>



              <div>
                <p className="text-[2rem] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-l to-[#1881E2] from-[#1D0D7C]">
                  Por apenas:
                </p>
                <p className="text-center font-semibold text-[#18E234] ">
                  <span className="text-[2rem]  ">39,90</span>/mês
                </p>
              </div>

              <motion.button
                className="mt-6 w-full rounded-sm text-white  bg-gradient-to-l to-[#1881E2] from-[#1D0D7C] px-6 py-2 text-[0.9375rem] font-semibold uppercase"
                onClick={() => {
                  window.open('https://pay.kiwify.com.br/cn1CQQ6', '_blank')
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                Adquira agora
              </motion.button>
            </motion.div>
            <motion.div
              className="flex w-full max-w-[21.875rem] flex-col items-center justify-center rounded-lg border-[0.0938rem] border-[#0E2282] p-4"
              initial={{
                opacity: 0,
                translateY: 200,
              }}
              animate={{
                opacity: 1,
                translateY: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <div className="-translate-y-8 rounded-full bg-gradient-to-l to-[#1881E2] from-[#1D0D7C] px-8 py-1">
                <h3 className="font-semibold text-white uppercase">ANUAL</h3>
              </div>

              <ul className="space-y-1 text-transparent bg-clip-text bg-gradient-to-l to-[#1881E2] from-[#1D0D7C]">
                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Crie formulários infinitos
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Disponibilidade de vitalício
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Atendimento personalizado
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Criador de landing page
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Traqueamento individual
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Personalize as cores e estilo
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Integração com a make
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Exporte em Excel
                </li>

                <li className="flex items-center gap-1">
                  <CircleCheck className="size-5 fill-green-500 text-black" />
                  Mais acessível do mercado
                </li>
              </ul>



              <div>
                <p className="text-[2rem] font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-l to-[#1881E2] from-[#1D0D7C]">
                  Por apenas:
                </p>
                <p className="text-center font-semibold text-[#18E234] ">
                  <span className="text-[2rem]  ">R$ 297 </span> á vista
                </p>
              </div>

              <motion.button
                className="mt-6 w-full rounded-sm  text-white bg-gradient-to-l to-[#1881E2] from-[#1D0D7C] px-6 py-2 text-[0.9375rem] font-semibold uppercase"
                onClick={() => {
                  window.open('https://pay.kiwify.com.br/cn1CQQ6', '_blank')
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                Adquira agora
              </motion.button>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
