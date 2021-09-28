import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  MainContainer,
  Container,
  BarChartContainer,
  Number,
  BlackLine,
  MakeBar,
  NameContainer
} from "./components/styles";


const __DATA__ = [  // assume this data coming from backend using react hooks
  { name:'James', distance: 13, colors: ["#ffd847", "#e0a106"] },
  { name:'David', distance: 20, colors: ["#ff47ab", "#e0064e"] },
  { name:'Nikos', distance: 16, colors: ["#add9c0", "#1da890"] },
  { name:'Andrew', distance: 30, colors: ["#cbd9ad", "#7ca81d"] },
  { name:'John', distance: 22, colors: ["#d9c1ad", "#714511"] },
];

const total = __DATA__.length;

const labelWidth = (500 / total).toFixed(2); // for x axis data

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barchart Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="javascript:void(0)">Bar Chart Demo</a>
        </h1>

        <p className={styles.description}>
          Persons travlled in 30 days.
        </p>

        <div style={{width:'100%'}}>
       
          <Container>
         
            <MainContainer>
              {__DATA__.map(({distance, colors }, i) => {
                return (
                  <BarChartContainer key={i}>
                    <Number color={colors[1]}>{distance} km</Number>
                    <MakeBar height={distance * 2} colors={colors} />
                  </BarChartContainer>
                );
              })}
            </MainContainer>
            <BlackLine />
            <div style={{width:'500px'}}>
            
              {__DATA__.map(({ name }, index) => {
                  return (
                    <NameContainer key={index} labelWidth={labelWidth}>{name}</NameContainer>
                  );
              })}
          </div>
          
          </Container>
         
        </div>
       
      </main>

    
    </div>
  )
}
