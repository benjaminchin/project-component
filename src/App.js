import logo from './logo.svg';
import Project from './Project.js'

function App() {
  return (
  <>
    <div className="row">
      <Project
        project="seveneightsix"
        info="
        A web application that helps developers build eco-concious websites. This project won HackViolet2023's Best Eco-Friendly Hack!
        
        "
        tags={['Python', 'Flask', 'Jinja2', 'HTML', 'CSS']}
        link="https://github.com/benjaminchin"
      />

      <Project
        project="Venmo Sheets"
        info="
        Python script that automatically adds incoming Venmo transactions to a running list on Google Sheets.
        
        "
        tags={['Python', 'venmo-api', 'Google Cloud']}
        link="https://github.com/benjaminchin"
      />

      <Project
        project="Venmo Sheets"
        info="
        Python script that automatically adds incoming Venmo transactions to a running list on Google Sheets.
        
        "
        tags={['Python', 'venmo-api', 'Google Cloud']}
        link="https://github.com/benjaminchin"
      />

    </div>
  </>
  );
}

export default App;
