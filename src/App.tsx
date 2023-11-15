import './App.css'
import { Box, Button } from './style'

import buttonJSON from '../src/assets/data/select.json'

type ButtonProps = {
  date: string
  current: boolean
}

function App() {
 

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Box>
            <h3>Documentos</h3>
            </Box>
            <h1>Inter & CO Securities</h1>
            <div>
              <div> 
                <>
                {
                  buttonJSON.map((item: ButtonProps) => {
                    <Button key={item.date}>
                      {item.date}
                    </Button>
                  })
                }   
                </>                           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
