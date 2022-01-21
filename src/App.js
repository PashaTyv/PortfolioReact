import './App.css';
import Header from './Header/Header.js';
import Content from './Content/Content.js';
import Footer from './Footer/Footer.js';





function App() {
  const workExperiecneList = [
    {
      id: 1,
      title:'Owner of an online store',
      organization: 'Garderob_rivne',
      period: '2017 - Present',
      text: 'The owner of an online store on Instagram where I sell clothes and shoes.'
    },
    { 
      id:2,
      title:'Football coach',
      organization: 'CFC "NADIYA"',
      period: '2020 - 2021',
      text: '(volunteer) Rivne city.'
    },
    { 
      id:3,
      title:'Football coach',
      organization: 'CFC "IBC"',
      period: '09/2021 - Present',
      text: 'Football coach of the IBC team, Irpin city.'
    }
  ];
  
  return (
    <>
    <Header/>
    <main className="page cv-page">
    <Content workExperiecneList = {workExperiecneList}/>
    </main>
    <Footer/>
    
    </>
  );
}

export default App;
