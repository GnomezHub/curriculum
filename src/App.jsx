import React from 'react';
import profileImg from './assets/danny300.jpg';
function App() {
  return (
    <>
      {/* <!-- Huvudbehållare för CV:t --> */}
      <div className="max-w-5xl mx-auto my-10 bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* <!-- Vänster kolumn (Profil, Kontakt, Språk) --> */}
        <div className="w-full md:w-1/3 bg-green-900 text-white p-8 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex-shrink-0">
          <div className="mb-10 text-center">
              <img src={profileImg}
              alt="Profilbild"
              className="rounded-full mb-6 border-4 border-lime-500 shadow-lg mx-auto max-w-50"
              
            />
            <h1 className="text-4xl font-bold mb-2 font-heading tracking-wide">
              Danny Gomez
            </h1>
            <p className="text-xl text-lime-300 font-heading tracking-wider">
              Programmerare / Systemutvecklare
            </p>
          </div>

          {/* <!-- Kontaktsektion --> */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-lime-500 text-lime-200 font-heading tracking-wide">
              KONTAKT
            </h2>
            <ul className="text-base space-y-3">
              <li>
                <strong className="font-semibold">Telefon:</strong> (+46) 072
                007 92 65
              </li>
              <li>
                <strong className="font-semibold">E-post:</strong>{" "}
                <a
                  href="mailto:danny.gomez.mail@gmail.com"
                  className="text-lime-300 hover:text-lime-100 hover:underline-custom transition duration-300 ease-in-out"
                >
                  danny.gomez.mail@gmail.com
                </a>
              </li>
              <li>
                <strong className="font-semibold">Adress:</strong> RINGGATAN 5C,
                212 12 MALMÖ
              </li>
              <li>
                <strong className="font-semibold">Github:</strong>{" "}
                <a
                  href="https://github.com/GnomezHub"
                  className="text-lime-300 hover:text-lime-100 hover:underline-custom transition duration-300 ease-in-out"
                >
                  GnomezHub
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Språksektion --> */}
          <div className="mb-0">
            <h2 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-lime-500 text-lime-200 font-heading tracking-wide">
              SPRÅK
            </h2>
            <ul className="list-disc list-inside text-base font-semibold space-y-2">
              <li>Svenska</li>
              <li>Spanska</li>
              <li>Engelska</li>
            </ul>
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
              Mångsidig och erfaren programmerare och systemutvecklare med en
              bred bakgrund inom webbutveckling, interaktionsdesign och
              multimedia. Med flytande kunskaper i svenska, spanska och
              engelska, och en passion för både teknisk utveckling och kreativ
              formgivning.
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
                  Ansvarig för daglig drift och underhåll av Storforsens
                  Naturreservat.
                </li>
                <li>Campingvärd och vaktmästare på Selholmens Camping.</li>
                <li>Djurskötsel på Hålls Lantbruk.</li>
                <li>Flyttstädning av villor i Vidsel.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Tältmontör / Diskare
              </h3>
              <p className="text-lg text-gray-600">
                FESToTÄLT Uthyrningar, Helsingborg | Maj 2019 – Augusti 2019
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Montering och nedmontering av tält vid evenemang.</li>
                <li>Ansvar för disk och rengöring av utrustning.</li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Elevassistent
              </h3>
              <p className="text-lg text-gray-600">
                Innovationsgymnasiet, Lund | November 2018 – Februari 2019
              </p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Stöd och assistans till elever med olika behov.</li>
                <li>Vikarie i diverse gymnasieämnen.</li>
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
                  Utveckling av websystem för kartläggning av åkrar genom
                  drönare.
                </li>
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
                <li>Utveckling och design av webbplatser.</li>
                <li>Kodning och implementering av webblösningar.</li>
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
                <li>Utveckling av webbapplikationer och animering.</li>
                <li>Kreativt arbete med webb och design.</li>
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
                <li>Handledde studenter i multimediaproduktion.</li>
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
                <li>Arbetade med programmering och systemutveckling.</li>
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
                <li>Handledde studenter i speldesign.</li>
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
                <li>Utvecklade webbapplikationer.</li>
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
                <li>Arbetade med animering och grafisk formgivning.</li>
              </ul>
            </div>
            <div className="mb-0">
              <h3 className="text-xl font-semibold font-heading">
                Packare medicinska redskap
              </h3>
              <p className="text-lg text-gray-600">Gambro, Lund | 1996</p>
              <ul className="list-disc list-inside mt-3 text-base space-y-2">
                <li>Ansvarig för packning av medicinska redskap.</li>
              </ul>
            </div>
          </div>

          {/* Utbildningssektion */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold pb-3 border-b-2 border-lime-400 text-green-500 font-heading tracking-wide">
              UTBILDNING
            </h2>
            <div className="mb-8 mt-5">
              <h3 className="text-xl font-semibold font-heading">
                Yrkesmåleri vuxenutbildning
              </h3>
              <p className="text-lg text-gray-600">
                Tau hantverksskola, Malmö | 2010 – 2012
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Interaktionsdesign, Konst, Kultur & Kommunikation
              </h3>
              <p className="text-lg text-gray-600">
                Malmö Högskola, Malmö | 2001 – 2003
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-heading">
                Konst & formgivning, Estetiska programmet
              </h3>
              <p className="text-lg text-gray-600">Lund | 1997 – 2000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
