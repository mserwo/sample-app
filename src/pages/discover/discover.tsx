import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { Layout } from "../../components/layout";
import { PageLayout } from "../../components/layout/page-layout";
import { PicsLayout } from "../../components/layout/pics-layout";
import { SectionLayout } from "../../components/layout/section-layout";
import { TextLayout } from "../../components/layout/text-layout";
import screen1 from "../../assets/screens/screen_1.png";

export const Discover = () => {
  // const mojaFunkcja = (nazwisko: string) => {
  //   console.log(nazwisko);
  // };
  // const glownaFunkcja = (imie: string, fn: (nazwisko: string) => void) => {
  //   console.log(imie);
  //   fn("serwotka");
  // };
  // const imie = "marcin";
  // glownaFunkcja(imie, mojaFunkcja);

  return (
    <Layout>
      <PageLayout>
        <SectionLayout>
          <TextLayout>
            <div
              style={{
                fontSize: "24px",
                marginBottom: "10px",
              }}
            >
              Inauguracja
            </div>
            <div>
              Inauguracja warszawskiego Dworca Centralnego odbyła się 5 grudnia
              1975 r., lecz prawdziwe wejście smoka nastąpiło dwa dni później. Z
              pociągu wysiadł Leonid Breżniew, pierwszy honorowy gość tego
              obiektu. Najwyżsi dostojnicy PRL oczekujący na peronie ukrywali
              zdumienie zachowaniem przywódcy ZSRR, który łamał partyjny
              protokół, ściskając się i całując, z kim popadnie. Najwyraźniej
              był niedysponowany. Na drugi dzień było jeszcze gorzej. Na
              otwarciu VII Zjazdu PZPR z przerażeniem patrzono, jak zamaszyści
              dyryguje delegatami odśpiewującymi "Międzynarodówkę". Zastanawiano
              się w kuluarach, czy nadużył alkoholu czy środków psychotropowych.
              W każdym razie te ekscesy musiały przyćmić w oczach dygnitarzy
              długo oczekiwaną inaugurację Dworca Centralnego.
            </div>
          </TextLayout>
          <PicsLayout>
            <img src={screen1} alt="sreen_1"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <PicsLayout>
            <img src={screen1} alt="sreen_1"></img>
          </PicsLayout>
          <TextLayout>
            <div>textLayout</div>
          </TextLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div>textLayout</div>
          </TextLayout>
          <PicsLayout>
            <img src={screen1} alt="sreen_1"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div>textLayout</div>
          </TextLayout>
          <PicsLayout>
            <img src={screen1} alt="sreen_1"></img>
          </PicsLayout>
        </SectionLayout>
        <SectionLayout>
          <TextLayout>
            <div>textLayout</div>
          </TextLayout>
          <PicsLayout>
            <img src={screen1} alt="sreen_1"></img>
          </PicsLayout>
        </SectionLayout>
      </PageLayout>
    </Layout>
  );
};
