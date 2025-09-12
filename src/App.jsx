import React from "react";
import profileImg from "./assets/danny300.jpg";
import aws from "./assets/awslogo.png";
import azure from "./assets/microsoft-certified-azure-fundamentals.png";

function App() {
  return (
    <>
      {/* <!-- Huvudbehållare för CV:t --> */}
      <div className="max-w-5xl mx-auto my-10 bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* <!-- Vänster kolumn (Profil, Kontakt, Språk) --> */}
        <div className="w-full md:w-1/3 bg-gray-700 text-white p-8 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex-shrink-0">
          <div className="mb-14 text-center">
            <img
              src={profileImg}
              alt="Profilbild"
              className="rounded-full mb-6 border-3 border-lime-400 shadow-lg mx-auto"
            />
            <h1 className="text-4xl font-bold mb-2 font-heading tracking-wide">
              Danny Gomez
            </h1>
            <p className="text-xl text-lime-300 font-heading tracking-wider">
              Programmerare / Systemutvecklare
            </p>
          </div>

          {/* <!-- Kontaktsektion --> */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-lime-400 text-lime-200 font-heading tracking-wide">
              KONTAKT
            </h2>
            <ul className="text-base space-y-3">
              <li>
                <strong className="font-semibold">Telefon: </strong>
                <span className="text-teal-200">(+46) 072 007 92 65</span>
              </li>
              <li>
                <strong className="font-semibold">E-post: </strong>
                <a
                  href="mailto:danny.gomez.mail@gmail.com"
                  className="text-lime-300 hover:text-lime-100 hover:underline-custom transition duration-300 ease-in-out"
                >
                  danny.gomez.mail@gmail.com
                </a>
              </li>
              <li>
                <strong className="font-semibold">Adress:</strong>
                <span className="text-lime-300">
                  {" "}
                  Ringgatan 5 C, 212 12 Malmö
                </span>
              </li>

              <li>
                <strong className="font-semibold">Github: </strong>
                <a
                  href="https://github.com/GnomezHub"
                  className="text-lime-300 hover:text-lime-100 hover:underline-custom transition duration-300 ease-in-out"
                >
                  GnomezHub
                </a>
              </li>
              <li>
                <strong className="font-semibold">Portfolio: </strong>
                <a
                  href="https://dannygomez-portfolio.netlify.app/"
                  target="_blank"
                  className="text-lime-300 hover:text-lime-100 hover:underline-custom transition duration-300 ease-in-out"
                >
                  dannygomez-portfolio.netlify.app
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Språksektion --> */}
          <div className="mb-14">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-lime-400 text-lime-200 font-heading tracking-wide">
              SPRÅK
            </h2>
            <ul className="list-disc list-inside text-base font-semibold space-y-2 tracking-wider">
              <li>Svenska</li>
              <li>Spanska</li>
              <li>Engelska</li>
            </ul>
          </div>

          {/* <!-- Utbildningssektion --> */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 pb-3 border-b-2 border-lime-400 text-lime-200 font-heading tracking-wide">
              UTBILDNING
            </h2>
            <div className="mb-8 mt-5">
              <h3 className="text-xl font-semibold font-heading tracking-wide">
                Fullstack-utvecklare/ Programmering AI
              </h3>
              <p className="text-lg text-teal-200 tracking-wider">
                Lexicon, Malmö | 2025 – 2026
              </p>
            </div>
            <div className="mb-8 mt-5">
              <h3 className="text-xl font-semibold font-heading tracking-wide">
                Yrkesmåleri vuxenutbildning
              </h3>
              <p className="text-lg text-teal-200 tracking-wider">
                Tau hantverksskola, Malmö | 2010 – 2012
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading tracking-wide">
                Interaktionsdesign, Konst, Kultur & Kommunikation
              </h3>
              <p className="text-lg text-teal-200 tracking-wider">
                Malmö Högskola, Malmö | 2001 – 2003
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading tracking-wide">
                Konst & formgivning, Estetiska programmet
              </h3>
              <p className="text-lg text-teal-200 tracking-wider">
                Vipeholmskolan, Lund | 1997 – 2000
              </p>
            </div>

            <div className="mt-16 mb-8 flex items-center">
              <img src={aws} alt="AWS Certified" className="h-16 mx-auto" />

              <img
                src={azure}
                alt="Azure AZ-900 Certified"
                className="h-28 mx-auto"
              />
            </div>
          </div>
        </div>

        {/* <!-- Höger kolumn (Profil, Arbetslivserfarenhet, Utbildning) --> */}
        <div className="w-full md:w-2/3 bg-white text-gray-800 p-8 rounded-b-lg md:rounded-r-3xl md:rounded-bl-none flex-grow">
          {/* <!-- Profilsektion --> */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold pb-3 border-b-2 border-lime-400 text-green-500 font-heading tracking-wide">
              PROFIL
            </h2>
            <p className="text-lg leading-relaxed mt-5">
              Hej! Jag, Danny Gomez, är en lösningsorienterad
              fullstack-utvecklare med kreativa drag. Började arbetslivet med
              webbutveckling och multimedia men fortsatte som programmerare.
              <br /> Jag genomför en fullstack-utbildning hos Lexicon, och har
              därifrån fått 60 dagars APL som en avslutande del av
              utbildningen. Min intention är att lära mig hur ni jobbar, då det
              som jag har läst i era platsannonser verkar spännande.
               {/* Och så är Knowit den mest lockande av de företag som jag har kikat på. */}
              Dyker det upp ett behov hos er efter de 60 dagarna, så kommer vi
              att veta då i vad jag blivit expert på av det ni gör.
              <br /> I utbildningen ingår även certifiering i AWS och Azure
              AZ-900 samt AI-programmering, och jag har hängt med i användandet
              av verktyg som github-copilot. Jag bor i centrala Malmö.
            </p>
          </div>

          {/* <!-- Arbetslivserfarenhetsektion --> */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold pb-3 border-b-2 border-lime-400 text-green-500 font-heading tracking-wide">
              ARBETSERFARENHET
            </h2>
            <div className="mb-8 mt-5">
              <h3 className="text-xl font-semibold font-heading">
                Campingvärd / Underhåll av naturreservat
              </h3>
              <p className="text-lg text-gray-600">
                EXPNorrland, Älvsbyn | Juni 2023 – Februari 2024
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Guidade turer på Storforsens
                  Naturreservat.
                </li>
                <li>Campingvärd och vaktmästare på Selholmens Camping.</li>

              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Elevassistent [Webbutveckling Programmering och teknik]
              </h3>
              <p className="text-lg text-gray-600">
                Innovationsgymnasiet, Lund | November 2018 – Februari 2019
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Stöd och assistans till elever med olika behov.</li>
                <li>Vikarie i diverse andra gymnasieämnen.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Programmerare / Systemutvecklare
              </h3>
              <p className="text-lg text-gray-600">
                Vultus AB, Lund | Januari 2018 – April 2018
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Utveckling av ett wordpress plugin för kartläggning av åkrar
                  genom drönare.
                </li>
                <li>PHP programmering.</li>
                <li>Javascript programmering.</li>
                <li>Gränssnittsdesign.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                .Net utvecklare / Programmerare / Databasdesigner
              </h3>
              <p className="text-lg text-gray-600">
                Printship AB, Lund | Augusti 2013 – Oktober 2015
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Drift och utveckling för .Net-baserad tryckeri-lösning.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Programmerare / Webbdesigner
              </h3>
              <p className="text-lg text-gray-600">
                Pixelant AB, Malmö | September 2012 – Mars 2013
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Framtagning av webbplats enligt designskisser från kund.
                  Webbplatserna togs fram i publiceringsverktyget TYPO3 och
                  testades mot de vanligaste webbläsarna.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Webbutvecklare / Animatör
              </h3>
              <p className="text-lg text-gray-600">
                Basilicon AB, Malmö | Juli 2007 – Juni 2010
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Flash animering/programmering</li>
                <li>Bildbehandling/fotoredigering</li>
                <li>Backendprogrammering</li>
                <li>Webbapplikationer</li>
                <li>3D modellering</li>
                <li>Databasdesign</li>
                <li>Gränssnittsdesign </li>
                <li>Spelutveckling</li>
                <li>Webbdesign</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Handledare i multimedia
              </h3>
              <p className="text-lg text-gray-600">
                Academedia Eductus, Malmö | 2006
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Handledning i multimediaprogram som Flash, Photoshop,
                  Illustrator, Dreamweaver och After Effects.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Videokonstnär / Webbdesigner
              </h3>
              <p className="text-lg text-gray-600">Psytopia, USA | 2004</p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Skapade videokonst och designade webbplatser.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Programmerare / Systemutvecklare
              </h3>
              <p className="text-lg text-gray-600">
                TV-Animation, Köpenhamn | 2003
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Programmering av ”Filmverkstaden”, en flashbaserad
                  animationseditor där tittare av Barnkanalen kunde skapa sina
                  egna animationer via SVT:s hemsida, som sedan sändes på tv.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Handledare speldesign
              </h3>
              <p className="text-lg text-gray-600">
                Malmö Högskola, Malmö | 2002 – 2003
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Handledning i spelprogrammering, speldesign samt 3D
                  modellering.
                </li>
                <li>Macromedia Director.</li>
                <li>3D Studio Max.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Utvecklare webbapplikation
              </h3>
              <p className="text-lg text-gray-600">
                Malmö Högskola, Malmö | 2001 – 2003
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Framtagning av flash-applikation för distansföreläsning av
                  globaliseringskurs med kamera. Eleverna gavs möjlighet att
                  ställa frågor genom text som besvarades i tur och ordning av
                  föreläsaren. Livesändningarna spelades även in så att elever i
                  helt avvikande tidszoner kunde ta del av föreläsningarna.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Animatör / Grafisk formgivare
              </h3>
              <p className="text-lg text-gray-600">
                Tripatourium, USA | 2001 – 2003
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>
                  Framtagning av banners, animationer och flash-applikationer.
                </li>
              </ul>
            </div>
            <div className="mb-0">
              <h3 className="text-xl font-semibold font-heading">
                Packare medicinska redskap
              </h3>
              <p className="text-lg text-gray-600">Gambro, Lund | 1996</p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Packning på produktionslinje.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
